class MinStack {

    constructor() {
        this.mainStack = [];
        this.minStack = [];
    }

    insert(val) {
        this.mainStack.push(val);

        const length = this.minStack.length - 1;
        if (this.minStack.length === 0 || this.minStack[length] >= val) {
            this.minStack.push(val);
        }
    }

    remove() {
        const value = this.mainStack.pop();

        const length = this.minStack.length - 1;
        if (value === this.minStack[length]) {
            this.minStack.pop();
        }
    }

    getMin() {
        const length = this.minStack.length - 1;

        if (length >= 0) {
            return this.minStack[length];
        }
    }
}

const minStack = new MinStack();
minStack.insert(3);
minStack.insert(5);
minStack.insert(2);
minStack.insert(6);

console.log(minStack.getMin());
