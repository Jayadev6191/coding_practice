var binary_tree = {
    val: 20,
    left: {
        val: -10,
        left: null,
        right: null
    },
    right: {
        val: 30,
        left: null,
        right: null
    }
};

/*
 Example of Invalid BST
 ---------------------
        20
       /  \
    -10   30
      \
      -13
*/


function checkIfBST(root) {
    var max = Number.POSITIVE_INFINITY;
    var min = Number.NEGATIVE_INFINITY;

    console.log(`root | MIN | MAX `);
    function check(root, min, max) {
        if(root === null) return true;
        console.log(`${root.val} | ${min} | ${max}`);
        if(root.val < min || root.val > max) {
            console.log(`not a bst because ${root.val} is not in the right place`);
            return false;
        } 

        return check(root.left, min, root.val) && check(root.right, root.val, max);
    }

    return check(root, min, max);
}


console.log(checkIfBST(binary_tree));