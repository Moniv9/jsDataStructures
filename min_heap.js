class MinHeap {
    constructor(size) {
        this.heapSize = size;
        this.heap = [];
    }

    getParentIndex(index) {
        return (index - 1) / 2;
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getMinElement() {
        return this.heap[0];
    }

    insertElement(value) {
       
    }

    removeRoot() {

    }

    _heapify() {

    }
}

const minHeap = new MinHeap(10);