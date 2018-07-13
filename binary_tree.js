class Node {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    addRootNode(val) {
        return new Node(val);
    }

    addLeftNode(node, val) {
        const newNode = new Node(val);
        node.left = newNode;

        return newNode;
    }

    addRightNode(node, val) {
        const newNode = new Node(val);
        node.right = newNode;

        return newNode;
    }

    inorderTraverse(root) {
        if (root === null) {
            return;
        }

        this.inorderTraverse(root.left);
        console.log(root.val);
        this.inorderTraverse(root.right);
    }

    preorderTraversal(root) {
        if (root === null) {
            return;
        }

        console.log(root.val);
        this.preorderTraversal(root.left);
        this.inorderTraverse(root.right);
    }

    postorderTraversal(root) {
        if (root === null) {
            return;
        }

        this.preorderTraversal(root.left);
        this.inorderTraverse(root.right);
        console.log(root.val);
    }
}

const binaryTree = new BinaryTree();
const root = binaryTree.addRootNode(1);

const leftNode = binaryTree.addLeftNode(root, 2);
const rightNode = binaryTree.addRightNode(root, 3);

binaryTree.addLeftNode(leftNode, 4);
binaryTree.addRightNode(leftNode, 5);

binaryTree.inorderTraverse(root);