function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
}

BST.prototype.insert = function(node) {
    if(this.root === null) {
        this.root = node;
        return;
    } else {
        var currentNode = this.root;

        while(currentNode) {
            if(currentNode.left) 
        }
    }
}


var node = new Node(25, null, null);
var tree = new BST();
tree.insert(node);
console.log(tree);