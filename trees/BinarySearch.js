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
        this.result = [];
    }

    add(val) {
        if(!this.root) {
            this.root = new Node(val);
        } else {
            var currentNode = this.root;    
            // Initialize root to a variable called current
            while(currentNode) {
                var node = new Node(val);
                if(val < currentNode.data) {
                    if(!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                }

                if(val > currentNode.data) {
                    if(!currentNode.right) {
                        currentNode.right = new Node(val);
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    inorderTraversal() {
        console.log("Inorder traversal");
        console.log("--------------------------------------");
        var currentNode = this.root;
        // var result = this.result;
        var stack = [];

        if(!currentNode) {
            console.log("Could not find any nodes nodes to perform inorder traversal");
            return;
        } else {
            while(currentNode) {
                //stack.push(currentNode.data);
                if(currentNode.left) {
                    currentNode.parent = currentNode;
                    currentNode = currentNode.left;
                    console.log(currentNode);
                    // stack.push(currentNode.data);
                } else {
                    console.log(currentNode);
                    break;
                    // if(currentNode.right) {
                    //     // result.push(currentNode.data);
                    //     currentNode = currentNode.right;
                    //     console.log(currentNode.data);
                    //     stack.push(currentNode.data);
                    //     break;
                    // }
                }
            }
        }

        //console.log(stack);

        // console.log("result left nodes are " + result);
    }
}

var bst = new BST();
bst.add(20);
bst.add(10);
bst.add(15);
bst.add(5);
bst.add(30);
bst.add(25);
/*
         20
        /  \
      10    30
     / \    / 
    5  15 25
*/
bst.inorderTraversal();