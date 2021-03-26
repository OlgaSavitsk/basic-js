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
      this.chain.push('(' + value + ')~~');
    }
      return this;
  },
  removeLink(position) {
    if(position > this.chain.length || position !== 'number'){
      this.chain = [];
      throw new CustomError('Not implemented');;
    }else {
    this.chain.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain;
    this.chain = [];
    return chain;
   }
};

module.exports = chainMaker;
