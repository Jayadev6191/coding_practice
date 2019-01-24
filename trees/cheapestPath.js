/*
Sales Path
The car manufacturer Honda holds their distribution system 
in the form of a tree (not necessarily binary). 
The root is the company itself, and every node in the tree represents 
a car distributor that receives cars from the parent node and ships them 
to its children nodes. The leaf nodes are car dealerships that sell cars 
direct to consumers. In addition, every node holds an integer that is the 
cost of shipping a car to it.

Take for example the tree below:

                    0
                 /  \  \
                5   3    6
               /   / |  / \
              4   2  0 1  5
                 /  /  
                1  10
                 \
                  1
*/

function getCheapestCost(rootNode) {
    // your code goes here
    var min_cost = Number.MAX_VALUE;
    var path_sum = 0
    
    function calculateCheapestPath(node, path_sum) {
      // console.log("node.cost is " + node.cost);
      path_sum+= node.cost;
      if(node.children.length) {
        for(var i = 0; i < node.children.length; i++) {
          calculateCheapestPath(node.children[i], path_sum);
        }
      } else {
        // console.log("end of path sum is:  " + path_sum + " and min_cost is " + min_cost);
        if(path_sum < min_cost) {
          min_cost = path_sum;
        }
      }
    }
    
    calculateCheapestPath(rootNode, path_sum);
    
    return min_cost;
  }
  
  /******************************************
   * Use the helper code below to implement *
   * and test your function above           *
   ******************************************/ 
  
  // Constructor to create a new Node
  function Node(cost) {
    this.cost = cost;
    this.children = [];
  }
  
  var root = new Node(0);
  var dis1 = new Node(5);
  var dis2 = new Node(3);
  var dis3 = new Node(6);
  var dea1 = new Node(4);
  var dea2 = new Node(2);
  var dea3 = new Node(0);
  var dea4 = new Node(1);
  var dea5 = new Node(5);
  
  var dea6 = new Node(1);
  var dea7 = new Node(10);
  var dea8 = new Node(1);
  
  dis1.children = [dea1];
  dis2.children = [dea2, dea3];
  dis3.children = [dea4, dea5];
  
  dea2.children = [dea6];
  dea3.children = [dea7];
  dea6.children = [dea8];
  
  root.children = [dis1, dis2, dis3];
  console.log(getCheapestCost(root));
  
