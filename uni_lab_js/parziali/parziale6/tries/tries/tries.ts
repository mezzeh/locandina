
class Node {
  isTerminal: boolean = false;
  children: Map<string, Node> = new Map<string, Node>()
}

class Trie {
  root: Node;
  n :number
  constructor() {
    this.root = new Node()
    this.n = 0 // per il peso?
  }

  insert(word: string) {
    let current :Node= this.root
    // iterate through all the characters of word
    for (let c of word) {
        if (!current.children.has(c))
            current.children.set(c, new Node())
            current = current.children.get(c)! // L'operatore "!" asserisce che "node.children.get(c)" (di tipo TrieNode | undefined) non è undefined, permettendone l'assegnazione a "node" (di tipo TrieNode)
    }
    if (!current.isTerminal) {
        current.isTerminal = true
        this.n++
    }
  }
    lookup(key: string): boolean {
        let node: Node = this.root
        for (let c of key) {
            if (!node.children.has(c))
                return false
            node = node.children.get(c)!
        }
        return node.isTerminal
    }
  }
}
