"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodbye = exports.sayHello = void 0;
/* This line of code is exporting the `sayHello` and `sayGoodbye` functions from the `hello-world`
module. It allows other modules to import and use these functions. */
var hello_world_1 = require("./hello-world");
Object.defineProperty(exports, "sayHello", { enumerable: true, get: function () { return hello_world_1.sayHello; } });
Object.defineProperty(exports, "sayGoodbye", { enumerable: true, get: function () { return hello_world_1.sayGoodbye; } });
