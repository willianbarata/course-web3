import {describe, expect, test} from '@jest/globals'
import Block from '../src/lib/block'

describe("Block tests", () => {

    test('Should be valid', () => {
        const block = new Block(1, "abc", "bloco 2");
        const valid = block.isValid();
        expect(valid).toEqual(true);
        //expect(valid).toBeTruthy();
    })

    test('Should NOT be valid (hash)', () => {
        const block = new Block(1, "", "bloco 2");
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should NOT be valid (timestamp)', () => {
        const block = new Block(1, "", "bloco 2");
        block.timestamp = -1;
        const valid = block.isValid()
        expect(valid).toBeFalsy();
    })

    test('Should NOT be valid (hash)', () => {
        const block = new Block(1, "", "bloco 2");
        block.hash = "";
        const valid = block.isValid()
        expect(valid).toBeFalsy();
    })

    test('Should NOT be valid (index)', () => {
        const block = new Block(-1, "abc", "bloco 2");
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })
})

