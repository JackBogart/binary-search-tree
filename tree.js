import Node from './node.js';

export default class Tree {
  constructor(array) {
    console.log(array);
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    array = array
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) => a - b);

    return this.#buildTreeRecursively(array, 0, array.length - 1);
  }

  #buildTreeRecursively(array, start, end) {
    if (start > end) return null;

    const mid = Math.ceil((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.#buildTreeRecursively(array, start, mid - 1);
    node.right = this.#buildTreeRecursively(array, mid + 1, end);

    return node;
  }

  #insertRecursively(value, node) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.#insertRecursively(value, node.left);
    } else if (value > node.value) {
      node.right = this.#insertRecursively(value, node.right);
    }

    return node;
  }

  insert(value) {
    this.root = this.#insertRecursively(value, this.root);
  }

  #getMinimumNode(node) {
    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }

  #deleteItemRecursively(value, node) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.#deleteItemRecursively(value, node.left);
    } else if (value > node.value) {
      node.right = this.#deleteItemRecursively(value, node.right);
    } else {
      // Node to delete found
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      const newNode = this.#getMinimumNode(node.right);
      node.value = newNode.value;
      node.right = this.#deleteItemRecursively(newNode.value, node.right);
    }
    return node;
  }

  deleteItem(value) {
    this.root = this.#deleteItemRecursively(value, this.root);
  }

  #findRecursively(value, node) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      return this.#findRecursively(value, node.left);
    } else if (value > node.value) {
      return this.#findRecursively(value, node.right);
    }
    return node;
  }

  find(value) {
    return this.#findRecursively(value, this.root);
  }

  levelOrder(callback) {
    if (this.root === null) return;
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required');
    }

    const queue = [this.root];

    while (queue.length !== 0) {
      const node = queue.shift();

      callback(node);

      if (node.left !== null) {
        queue.push(node.left);
      }

      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  #inOrderRecursively(callback, node) {
    if (node === null) {
      return;
    }

    this.#inOrderRecursively(callback, node.left);
    callback(node);
    this.#inOrderRecursively(callback, node.right);
  }

  inOrder(callback) {
    if (this.root === null) return;
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required');
    }

    this.#inOrderRecursively(callback, this.root);
  }

  #preOrderRecursively(callback, node) {
    if (node === null) {
      return;
    }

    callback(node);
    this.#preOrderRecursively(callback, node.left);
    this.#preOrderRecursively(callback, node.right);
  }

  preOrder(callback) {
    if (this.root === null) return;
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required');
    }

    this.#preOrderRecursively(callback, this.root);
  }

  #postOrderRecursively(callback, node) {
    if (node === null) {
      return;
    }

    this.#postOrderRecursively(callback, node.left);
    this.#postOrderRecursively(callback, node.right);
    callback(node);
  }

  postOrder(callback) {
    if (this.root === null) return;
    if (typeof callback !== 'function') {
      throw new Error('A callback function is required');
    }

    this.#postOrderRecursively(callback, this.root);
  }

  height(node) {
    if (node === null) return -1;

    const left = this.height(node.left);
    const right = this.height(node.right);

    return Math.max(left, right) + 1;
  }

  #depthRecursively(targetNode, currentNode, depth) {
    if (currentNode === null) return -1;
    else if (targetNode.value < currentNode.value) {
      return this.#depthRecursively(targetNode, currentNode.left, depth + 1);
    } else if (targetNode.value > currentNode.value) {
      return this.#depthRecursively(targetNode, currentNode.right, depth + 1);
    }

    return depth;
  }

  depth(node) {
    if (node === null) return -1;

    return this.#depthRecursively(node, this.root, 0);
  }

  #isBalancedRecursively(node) {
    if (node === null) {
      return 0;
    }

    const left = this.#isBalancedRecursively(node.left);
    if (left === -1) {
      return -1;
    }

    const right = this.#isBalancedRecursively(node.right);
    if (right === -1) {
      return -1;
    }

    if (Math.abs(left - right) > 1) return -1;

    return Math.max(left, right) + 1;
  }

  isBalanced() {
    return this.#isBalancedRecursively(this.root) !== -1;
  }

  rebalance() {
    const array = [];

    function fillArray(node) {
      array.push(node.value);
    }

    this.inOrder(fillArray);
    this.root = this.buildTree(array);
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}
