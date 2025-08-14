import {describe, expect, test} from '@jest/globals'
import Block from '../src/lib/block'

describe("Block tests", () => {

    test('Should be valid', () => {
        const block = new Block(1, "abc");
        const valid = block.isValid();
        expect(valid).toEqual(true);
        //expect(valid).toBeTruthy();
    })

    test('Should NOT be valid (hash)', () => {
        const block = new Block(1, "");
        const valid = block.isValid();
        expect(valid).toBeFalsy();
        //expect(valid).toBeTruthy();
    })

    test('Should NOT be valid (hash)', () => {
        const block = new Block(-1, "abc");
        const valid = block.isValid();
        expect(valid).toBeFalsy();
        //expect(valid).toBeTruthy();
    })
})

