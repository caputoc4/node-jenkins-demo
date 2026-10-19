const assert = require("node:assert/strict");
const { greet } = require("./index");

assert.equal(greet(), "Hello, Jenkins!");
assert.equal(greet("GitHub"), "Hello, GitHub!");
console.log("All tests passed.");
