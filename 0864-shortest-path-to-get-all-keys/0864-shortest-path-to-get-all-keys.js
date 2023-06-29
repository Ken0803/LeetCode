/**
 * @param {string[]} grid
 * @return {number}
 */

class PQueue {
    constructor() {
        this.heap = [];
    }
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index).value > this.heap[index].value) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index).value < this.leftChild(index).value) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].value < this.heap[smallerChildIndex].value) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}
var shortestPathAllKeys = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let qu = new PQueue(), vis = [], dx = [0,1,0,-1], dy = [1,0,-1,0], rState = 0;
    for(let i = 0 ; i < n ; i ++)for(let j = 0 ; j < m ; j ++){
        if(grid[i][j] === '@'){
            qu.add({
                p: (i*m+j)*100,
                value: 0
            });
        }
        if(grid[i][j] >= 'A' && grid[i][j] <= 'F'){
            rState += (1<<(grid[i].charCodeAt(j)-65));
        }
    }
    console.log(rState);
    while(1){
        let v = qu.remove();
        if(v === null) return -1;
        if(vis[v.p]) continue ;
        vis[v.p] = 1;
        let state = v.p%100, x = Math.floor(Math.floor(v.p/100)/m), y = Math.floor(v.p/100)%m;
        if(state === rState) return v.value;
        for(let i = 0 ; i < 4 ; i ++){
            let wx = x + dx[i], wy = y+dy[i];
            if(wx<0||wy<0||wx>=n||wy>=m||grid[wx][wy] === '#') continue ;
            if(grid[wx][wy] >= 'A' && grid[wx][wy] <= 'F' && (!((1<<(grid[wx].charCodeAt(wy)-65)) & state)))
                continue;
            let wState = state;
            if(grid[wx][wy] >= 'a' && grid[wx][wy] <= 'f'){
                wState = (1<<(grid[wx].charCodeAt(wy)-97)) | state;
            }
            qu.add({
                p:(wx*m+wy)*100+wState,
                value: v.value+1
            })
        }
    }
};