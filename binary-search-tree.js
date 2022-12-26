// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor(root = null) {
      // Your code here
      this.root = root;
    }
  
    insert(val, currentNode=this.root) {
      // Your code here
      let newNode = new TreeNode(val);
      if(currentNode){
      if(val > currentNode.val){
        if(currentNode.right == null){
          currentNode.right = newNode;
        }
        else{
        this.insert(val,currentNode.right);
        }
      }
      if(val < currentNode.val){
        if(currentNode.left == null){
          currentNode.left = newNode;
        }
        else{
        this.insert(val,currentNode.left);
      }
    }
    }
    else{
      this.root  = newNode;
    }
  }
  
  
    search(val) {
      // Your code here
      let currentNode = this.root;
      while(currentNode !== null){
        if(val < currentNode.val){
          currentNode = currentNode.left;
        }
       else if(val > currentNode.val){
          currentNode = currentNode.right;
        }
       else if(currentNode.val == val){
          return true;
        }
      }
      return false;
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if(currentNode == null){
        return;
      }
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
     
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if(currentNode == null){
        return;
      }
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if(currentNode == null){
        return;
      }
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      let currentNode = this.root;
      let stack = [];
      stack.push(currentNode);
      while(stack.length > 0){
        let value = stack.shift();
        console.log(value.val);
        if(value.left){
        stack.push(value.left);
        }
        if(value.right){
        stack.push(value.right);
      }
    }
      return;
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      let currentNode = this.root;
      let stack = [];
      stack.push(currentNode);
      while(stack.length > 0){
        let value = stack.pop();
        console.log(value.val);
        if(value.left){
        stack.push(value.left);
        }
        if(value.right){
        stack.push(value.right);
      }
    }
  }
  }
  
  module.exports = { BinarySearchTree, TreeNode };