/*
    Traverse the binary search tree bfs and return an array of node values
                 20
                /  \
              10   30
             /    /  \ 
            5    25  35   
          /  \
        3     15

       [20,10,30,5,3,15]
  */

var bst = {
  val: 20,
  left: {
    val: 10,
    left: {
      val: 5,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 15,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 30,
    left: {
        val: 25,
        left: null,
        right: null
    },
    right: {
        val: 35,
        left: null,
        right: null
    }
  }
};


function depthOfBST(node) {
    if(!node) return 0;
    var queue = [], 
        result = [], 
        currentLevelCount = 0, 
        nextLevelCount = 0;

    queue.push(node);
    currentLevelCount++;

    while(queue.length) {
        var current = queue.shift();
        result.push(current.val);
        if(current.left) queue.push(current.left);
        nextLevelCount++;
        if(current.right) queue.push(current.right);
        nextLevelCount++;
    }

    return result;
}

console.log(depthOfBST(bst));
