class Node {

    constructor() {
        this.map = {};
    }
}

class Trie {

    constructor() {
        this.root = new Node();
    }

    insertNode(word) {
        const length = word.length;
        let currentNode = this.root;

        for (let i = 0; i < length; i++) {
            const ch = word[i];

            if (currentNode && !currentNode.map[ch]) {
                const newNode = new Node();
                currentNode.map[ch] = newNode;
                currentNode = newNode;
            } else {
                currentNode = currentNode.map[ch];
            }
        }
    }

    isWordAvailable(word) {
        const length = word.length;
        let currentNode = this.root;

        for (let i = 0; i < length; i++) {
            const ch = word[i];

            if (currentNode && currentNode.map[ch]) {
                currentNode = currentNode.map[ch];
            } else {
                return false;
            }
        }

        return true;
    }
}

const trie = new Trie();
trie.insertNode('hel');
trie.insertNode('hl');

console.log(trie.isWordAvailable('hey'));
console.log(JSON.stringify(trie.root));