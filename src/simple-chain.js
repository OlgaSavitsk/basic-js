import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === 'undefined'){
      this.chain.push('( )');
    } else{
      this.chain.push(String(value));
    }
      return this;
  },
  removeLink(position) {
    if(position >= 0 && position <= this.chain.length - 1 || Number.isInteger(position)){
      this.chain.splice(position-1, 1);
      } else {
        this.chain = [];
        throw new Error (`You can't remove incorrect link!`);
      } 
      return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain.join(' )~~( ');
    chain = '( ' + chain + ' )';
    this.chain = [];
    return chain;
  }
};
