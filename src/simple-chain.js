const CustomError = require("../extensions/custom-error");

const chainMaker = {
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
      throw new Error;
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

module.exports = chainMaker;
