const test = require("node:test");
const assert = require("node:assert/strict");


const server = require("../server");


test("deve responder com status 200 e JSON", async (t) => {
    await new Promise((resolve) => {
        server.listen(0, resolve);
    });


    t.after(() => new Promise((resolve, reject) => {
        server.close((error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    }));


    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}`);
    const data = await response.json();


    assert.equal(response.status, 200);
    assert.equal(data.status, "online");
    assert.equal(
        data.message,
        "Nova versão publicada!"
    );
});
