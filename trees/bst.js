class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            var searchTree = function(node) {
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                }
    
                if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right);
                    }
                }
            };

            return searchTree(node);
        }
    }

    preorderTraversal() {
        let result = [];
        var node = this.root;
        console.log(`preorder traversal root is ${node.data}`);
        if(node === null ) {
            console.log("tree is empty");
            return;
        } else {
            console.log("root found, tree has atleast one node");

            var traverseTree = function(node) {
                var leftSubtree = function(node) {
                    if(node === null) {
                        console.log("end of left subtree");
                        return;
                    } else {
                        console.log(`current node in left subtree is ${node.data}`);
                        traverseTree(node.left)
                    }
                };
        
                var rightSubtree = function(node) {
                    if(node === null) {
                        console.log("end of right subtree");
                        return;
                    } else {
                        console.log(`current node in right subtree is ${node.data}`);
                        traverseTree(node.right);
                    }
                };
        
                leftSubtree(node.left);
                rightSubtree(node.right);
            };

            traverseTree(node);
        }

    }
}

var myTree = new BST();
myTree.insert(20);
myTree.insert(40);
myTree.insert(30);
myTree.insert(45);
console.log(JSON.stringify(myTree));

myTree.preorderTraversal();
