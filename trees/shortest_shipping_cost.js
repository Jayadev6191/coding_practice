/* */

function getShortestCost(rootNode) {
    console.log(rootNode.cost);
    if(rootNode.children) {
        dfs(rootNode);
    }
}

function dfs(node) {
    if(node.children) {
        console.log(node.children);
    }
}

function Node(cost) {
    this.cost = cost;
    this.children = [];
}

var a = new Node(0);
var b = new Node(5);
var c = new Node(10);
var d = new Node(15);
var e = new Node(3);

a.children = [b,c,d];
b.children = [e];

getShortestCost(a);

