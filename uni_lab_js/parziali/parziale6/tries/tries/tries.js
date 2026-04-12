class Node {
    value;
    isEndOfWord;
    children;
    constructor(value) {
        this.value = value;
        this.isEndOfWord = false; // false by default, a green node means this flag is true
        this.children = {}; // children are stored as Map, where key is the letter and value is a TrieNode for that letter
    }
}
class Trie {
    root;
    constructor() {
        this.root = new Node(null);
    }
    insert(word) {
        let current = this.root;
        // iterate through all the characters of word
        for (let character of word) {
            // if node doesn't have the current character as child, insert it
            if (current.children[character] === undefined) {
                current.children[character] = new Node(character);
            }
            // move down, to insert next character
            current = current.children[character];
        }
        // mark the last inserted character as end of the word
        current.isEndOfWord = true;
    }
}
export {};
//# sourceMappingURL=tries.js.map