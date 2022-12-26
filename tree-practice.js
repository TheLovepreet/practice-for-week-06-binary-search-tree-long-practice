const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if(rootNode.left == null){
    return rootNode.val;
  }
  return findMinBST(rootNode.left);
  }


function findMaxBST (rootNode) {
  // Your code here
  if(rootNode.right == null){
    return rootNode.val;
  }
  return findMaxBST(rootNode.right);
}
function findMinBT (rootNode) {
  // Your code here
  if (rootNode == null) return Infinity;
 
  var res = rootNode.val;
  var lres = findMinBT(rootNode.left);
  var rres = findMinBT(rootNode.right);

  if (lres < res) res = lres;
  if (rres < res) res = rres;
  return res;
}

function findMaxBT (rootNode) {
  // Your code here
  if(rootNode == null){
    return -Infinity;
  }
  let res = rootNode.val;
  let leftres = findMaxBT(rootNode.left);
  let rightres = findMaxBT(rootNode.right);

  if(leftres > res) res = leftres;
  if(rightres > res) res = rightres;

  return res;
}

function getHeight (rootNode) {
  // Your code here
  if(rootNode == null){
    return -1;
  }
  let left  = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);

  if(left  > right){
    return left+1;
  }
  else{
    return right + 1;
  }
  
}

function balancedTree (rootNode) {
  // Your code here
  if(rootNode == null){
    return true;
  }
  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);
  if(Math.abs(left - right) <= 1 && balancedTree(rootNode.left) == true && balancedTree(rootNode.right) == true){
    return true;
  }
  return false;

}

function countNodes (rootNode) {
  // Your code here
  if(rootNode == null){
    return 0;
  }
  let left = countNodes(rootNode.left);
  let right = countNodes(rootNode.right);

  return 1  + left + right;
}

function getParentNode (rootNode, target,parentNode) {
  // Your code here
  if(rootNode == undefined){
    return undefined;
  }
  if(rootNode.val == target){
    if(parentNode == undefined){
      return null;
    }
    return parentNode;
  }
  return getParentNode(rootNode.left,target,rootNode) || getParentNode(rootNode.right,target,rootNode);
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  if(rootNode == null){
    return null;
  }
  if(target <= rootNode.val){
    return inOrderPredecessor(rootNode.left,target);
  }
  else{
    const res = inOrderPredecessor(rootNode.right,target);
    if(res){
      return res;
    }
    else{
      return rootNode.val;
    }
  }
}
function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  if(rootNode == null){
    return rootNode;
  }
  if(target < rootNode.val){
    rootNode.left = deleteNodeBST(rootNode.left,target);
  }
  else if(target > rootNode.val){
    rootNode.right = deleteNodeBST(rootNode.right,target);
  }
  else{
    if(rootNode.left == null){
      return rootNode.right;
    }
    else if(rootNode.right == null){
      return rootNode.left;
    }
    rootNode.val = minimumVal(rootNode.right);
    rootNode.right = deleteNodeBST(rootNode.right,rootNode.val);
  }
    return rootNode;
 
  
  function minimumVal(currentNode){
    let minimum = currentNode.val;
    while(currentNode.left !== null){
      minimum = currentNode.left.val;
      currentNode = currentNode.left;
    }
    return minimum;
  }
  }
  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child



module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}