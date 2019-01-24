/* Heaps can be of two types
     - Min Heap
     - Max Heap

     A heap can be represented through a 
     - binary tree
     - Array
 */

function MinHeap() {
    this.store = [];
    this.result = [];
    this.size = 0;

    // left 2 * i + 1
    // right 2 * i + 2
    // parent i - 1 / 2
}

MinHeap.prototype.swap = function(parentIndex, childIndex) {
    var temp = this.store[childIndex];
    this.store[childIndex] = this.store[parentIndex];
    this.store[parentIndex] = temp;
}

MinHeap.prototype.hasParent = function(i) {
    var pi = Math.floor((i-1)/2);
    if(pi < 0) {
        return false;
    }

    return true;
}

MinHeap.prototype.getParentIndex = function(childIndex) {
    var pi = Math.floor((childIndex - 1)/2);
    return pi;
}

MinHeap.prototype.getLeftChildIndex = function(parentIndex) {
    return 2 * parentIndex + 1;
}

MinHeap.prototype.getRightChildIndex = function(parentIndex) {
    return 2 * parentIndex + 2;
}

/* Boolean function - start*/
MinHeap.prototype.hasLeftChild = function(parentIndex) {
    var size = this.store.length;
    return this.getLeftChildIndex(parentIndex) < size; 
}

MinHeap.prototype.hasRightChild = function(parentIndex) {
    var size = this.store.length;
    return this.getRightChildIndex(parentIndex) < size; 
}
/* Boolean function - end*/

MinHeap.prototype.getLeftChild = function(parentIndex) {
    var store = this.store;
    return store[this.getLeftChildIndex(parentIndex)];
}

MinHeap.prototype.getRightChild = function(parentIndex) {
    var store = this.store;
    return store[this.getRightChildIndex(parentIndex)];
}

MinHeap.prototype.heapifyUp = function() {
    // This method always puts the smallest element at the root
    var i = this.store.length - 1;
    var pi = this.getParentIndex(i);
    while(this.getParentIndex(i) >= 0 && this.store[this.getParentIndex(i)] > this.store[i]) {
        this.swap(pi, i)
        // this.swap(new_arr[pi], new_arr[i]);
        i = this.getParentIndex(i);
        pi = this.getParentIndex(i);
    }
}

MinHeap.prototype.heapifyDown = function() {
    var index = 0;
    var store = this.store;
    var leftIndex = this.getLeftChildIndex(index);
    var rightIndex = this.getRightChildIndex(index);

    while(this.hasLeftChild(index)) {
        var smallestChildIndex = this.getLeftChildIndex(index);

        // check to compute the smallest of the two children
        if(store[this.getLeftChildIndex(index)] > store[this.getRightChildIndex(index)]) {
            smallestChildIndex = this.getRightChildIndex(index);
        }

        this.swap(index, smallestChildIndex);
        index = smallestChildIndex;
    }
    
}

MinHeap.prototype.insert = function(val) {
    this.store.push(val);
    if(this.store.length > 0) {
        this.heapifyUp();
    }
}

MinHeap.prototype.pop = function() {
    if(this.store.length === 0) throw new Error('Cannot pop on an empty heap!');
    // swap the last element with the root and pop the last element
    var store = this.store;
    var temp = store[0];
    store[0] = store[store.length - 1];
    store[store.length - 1] = temp;
    this.result.push(store.pop());
    this.heapifyDown();
}

var myHeap = new MinHeap();
myHeap.insert(40);
myHeap.insert(20);
myHeap.insert(30);
myHeap.insert(10);
myHeap.insert(25);
myHeap.insert(15);
myHeap.pop();
console.log(myHeap.store);


//console.log(myHeap.store);
