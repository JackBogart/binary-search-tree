import Tree from './tree.js';

const test = new Tree([5, 3, 2, 7, 8, 7, 75, 32, 7, 1, 0]);
// const test = new Tree([1, 2, 3]);

test.prettyPrint(test.root);

// test.insert(5);
// test.insert(5);

test.deleteItem(2);
test.prettyPrint(test.root);
