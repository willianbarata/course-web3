import Block from './block';
import Validation from './validation';
export default class Blockchain {
    blocks: Block[];
    nextIndex: number = 0;

    constructor(){
        this.blocks = [new Block(this.nextIndex, "", "Genesis block")];
        this.nextIndex++;
    }

    getLastBlock(): Block {
        return this.blocks[this.blocks.length - 1]
    }

    addBlock(block: Block) : Validation {
        const lastBlock = this.getLastBlock()
        const validation = block.isValid(lastBlock.hash, lastBlock.index)
        if(!validation.success) return new Validation(false, `Invalid block: ${validation.message}`);
        this.blocks.push(block);
        this.nextIndex++;
        return new Validation();
    }

    isValid() : Validation {
        for(let i=this.blocks.length - 1; i > 0; i--){
            const currentBlock = this.blocks[i];
            const previusBlock = this.blocks[i - 1];
            const validation = currentBlock.isValid(previusBlock.hash, previusBlock.index)
            if(!validation.success) return new Validation(false, `Invalid block #${currentBlock.index} + ${validation.message}`)
        }
        return new Validation(); 
    }
}