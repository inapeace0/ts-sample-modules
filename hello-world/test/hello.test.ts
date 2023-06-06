import {test, expect} from "@jest/globals";

import {sayHello, sayGoodbye} from '../src/index';

test("test to say hello", () => {
    expect(sayHello()).toBe('Hi');
});

test("test to say goodbye", () => {
    expect(sayGoodbye()).toBe('Goodbye');
});