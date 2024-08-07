import Tree from './tree.js';

const test = new Tree([1, 2, 3, 4, 5, 6, 7, 75]);
console.log(test.isBalanced());
// const test = new Tree([]);

test.prettyPrint(test.root);

// test.insert(5);
test.insert(-1);
test.insert(-2);
test.insert(-3);
console.log(test.isBalanced());

// test.deleteItem(2);
test.prettyPrint(test.root);
function specialLog(node) {
  process.stdout.write(`${node.value} `);
}
test.prettyPrint(test.find(1));
test.levelOrder(specialLog);
console.log('\n');
test.inOrder(specialLog);
console.log('\n');
test.preOrder(specialLog);
console.log('\n');
test.postOrder(specialLog);
console.log('\n');

const testingNode = 75;
console.log(test.height(test.find(testingNode)));
console.log(test.depth(test.find(testingNode)));

test.rebalance();
test.prettyPrint(test.root);
