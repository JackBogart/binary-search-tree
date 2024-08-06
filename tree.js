import Node from './node.js';

export default class Tree {
  constructor(array) {
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

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.#buildTreeRecursively(array, start, mid - 1);
    node.right = this.#buildTreeRecursively(array, mid + 1, end);

    return node;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.root = this.#insertRecursively(value, this.root);
    }
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

  deleteItem(value) {
    this.root = this.#deleteItemRecursively(value, this.root);
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

      const newNode = getMinimumNode(node.right);
      node.value = newNode.value;
      node.right = this.#deleteItemRecursively(newNode.value, node.right);
    }
    return node;
  }

  prettyPrint(node, prefix = '', isLeft = true) {
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

function getMinimumNode(node) {
  while (node.left !== null) {
    node = node.left;
  }

  return node;
}
