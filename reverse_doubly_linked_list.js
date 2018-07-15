class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    addNode(node, val) {
        const newNode = new Node(val);
        newNode.prev = node;
        node.next = newNode;

        return newNode;
    }

    travserse(head) {
        let currentNode = head;

        while (currentNode !== null) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    reverse(head) {
        let currentNode = head;
        let newHead = null;

        while (currentNode !== null) {
            const tempNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = tempNode;

            newHead = currentNode;
            currentNode = tempNode;
        }

        return newHead;
    }
}

const head = new Node(1);
const dll = new DoublyLinkedList();
const newNode = dll.addNode(head, 2);
dll.addNode(newNode, 3);
const newHead = dll.reverse(head);
dll.travserse(newHead);
