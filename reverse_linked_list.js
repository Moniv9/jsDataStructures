class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {

    addNode(node, val) {
        const newNode = new Node(val);
        node.next = newNode;

        return newNode;
    }

    traverse(head) {
        let currentNode = head;

        while (currentNode !== null) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    reverse(head) {
        let currentNode = head;
        let previousNode = null;

        while (currentNode !== null) {
            const tempNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = tempNode;
        }

        return previousNode;
    }
}

const head = new Node(1);
const linkedList = new LinkedList();
const values = [2, 3, 4, 5];
let currentNode = head;

values.map((value) => {
    currentNode = linkedList.addNode(currentNode, value);
});

const newHead = linkedList.reverse(head);
linkedList.traverse(newHead);



