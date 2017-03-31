/**
 * Create a Class Trie
 * that can work with a trie data structure
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */

class Trie {
  constructor(){
    this.root = {};
  }
  add(word){
    if(typeof word !== 'string'){
      throw new TypeError();
    }
    let currNode = this.root;
    for (let i=0; i<word.length; i++) {
      if(currNode[word[i]] === undefined){
        currNode[word[i]] = {};
        currNode = currNode[word[i]];
      }else{
        currNode = currNode[word[i]]; 
      }
    }
    currNode.leaf = true;  
  }
  exists(word){
    if(typeof word !== 'string'){
      throw new TypeError();
    }
    let currNode = this.root;
    for (let i=0; i<word.length; i++) {
      if(currNode[word[i]] === undefined){
        return false;
      }else{
        currNode = currNode[word[i]];
      }  
    }
    if (currNode.leaf === true){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Trie;