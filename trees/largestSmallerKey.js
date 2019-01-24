/*
            20
           /  \
         10    30
        /     /  \
       5     25  35


       5 interviews

4 - tech
1 - behavioral

48 hrs for feedback

	2 - frontend - javascript , html, css
	2 - data structures and algos
	1 - behavioral
*/

var tree = {
    val: 20,
    left: {
        val: 10,
        left: {
            val: 5,
            left: null,
            right: null
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



console.log(tree);