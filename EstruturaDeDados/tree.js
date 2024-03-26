class Tree {
  constructor(root, left, right, key) {
    this.root = root;
    this.left = left;
    this.right = right;
    this.key = key;
  }
}

function insertOnTree(root, value) {
  if (!root) {
    root = value;
  } else if (root) {
    if (root >= value) {
      if (!root.left) {
        root.left.key = value;
      }
    } else if (root <= value) {
      if (!root.right) {
        root.right.key = value;
      }
    }
  }
}

function preOrder(root) {
  if (!root) {
    return `Root = ${root}`;
  } else {
    console.log(`${root.key}, \t`);
    preOrder(root.left);
    preOrder(root.right);
  }
}

function inOrder(root) {
  if (!root) {
    return `Root = ${root}`;
  } else {
    inOrder(root.left);
    console.log(`${root.key}, \t`);
    inOrder(root.right);
  }
}

function postOrder(root) {
  if (!root) {
    return `Root = ${root}`;
  } else {
    postOrder(root.left);
    postOrder(root.right);
    console.log(`${root.key}, \t`);
  }
}

function searchOnTree(root, value) {
  if (!root) {
    return `Value not found`;
  } else {
    if(root == value){
        return `Found`
    }
    if (value >= root) {
      if (root.right) {
        searchOnTree(root.right, value);
      }
    } else if (value <= root) {
      if (root.left) {
        searchOnTree(root.left, value);
      }
    }
  }
}

root = new Tree(3);
root.left = 2;
root.right = 4;

preOrder(root);
