  /*
    Traverse the binary search tree bfs and return an array of node values
                 20
                /   \
              10     30
              /
            5
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
      left: null,
      right: null
    }
  };


  function bfs(node) {
    var queue = [],
        result = [];
    
    var max_value = Number.MIN_VALUE;

    if(node === null) return queue;
    queue.push(node);
    while(queue.length !== 0) {
      var currentNode = queue.shift();
      result.push(currentNode.val);
      if(currentNode.val > max_value) {
        max_value = currentNode.val;
      }
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    
    console.log(max_value);
    console.log(result);
  }

  bfs(bst);