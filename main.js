import Tree from './tree.js';

const array = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100));
const randomTree = new Tree(array);
randomTree.prettyPrint();

console.log(randomTree.isBalanced());

function specialLog(node) {
  // eslint-disable-next-line no-undef
  process.stdout.write(`${node.value} `);
}

randomTree.levelOrder(specialLog);
console.log();
randomTree.inOrder(specialLog);
console.log();
randomTree.preOrder(specialLog);
console.log();
randomTree.postOrder(specialLog);
console.log();

const addedNumbers = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 20) + 100,
);
addedNumbers.forEach((value) => {
  randomTree.insert(value);
});
randomTree.prettyPrint();
console.log(randomTree.isBalanced());

randomTree.rebalance();
randomTree.prettyPrint();
console.log(randomTree.isBalanced());

randomTree.levelOrder(specialLog);
console.log();
randomTree.inOrder(specialLog);
console.log();
randomTree.preOrder(specialLog);
console.log();
randomTree.postOrder(specialLog);
console.log();
