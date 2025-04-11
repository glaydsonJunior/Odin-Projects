function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

function Tree() {
    this.root = null;

    this.insert = function(value) {
        if (this.root == null) {
            this.root = new Node(value);
            return true;
        }

        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = new Node(value);
                    return true;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right == null) {
                    currentNode.right = new Node(value);
                    return true;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    };

    this.buildTree = function(ar) {
        for (let i = 0; i < ar.length; i++) {
            this.insert(ar[i]);
        }
        return this.root;
    };

    this.find = function(v) {
        let temp = this.root;
        while (temp !== null) {
            if (temp.value === v) {
                return temp.value;
            }
            if (temp.value < v) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
        return null;
    };

    this.removeFromNode = (temp, v) => {
        if (temp.right != null && temp.right.value == v) {
            if (temp.right.right == null && temp.right.left == null) {
                temp.right = null;
            } else if (temp.right.right == null && temp.right.left != null) {
                temp.right = temp.right.left;
            } else if (temp.right.right != null && temp.right.left == null) {
                temp.right = temp.right.right;
            } else {
                if (temp.value < temp.right.right.value) {
                    const leftTemp = temp.right.left;
                    temp.right = temp.right.right;
                    temp.right.left = leftTemp;
                } else if (temp.value <= temp.right.left) {
                    const rightTemp = temp.right.right;
                    temp.right = temp.right.left;
                    temp.right.right = rightTemp;
                }
            }
            return true;
        }
        if (temp.left != null && temp.left.value == v) {
            if (temp.left.right == null && temp.left.left == null) {
                temp.left = null;
            } else if (temp.left.right == null && temp.left.left != null) {
                temp.left = temp.left.left;
            } else if (temp.left.right != null && temp.left.left == null) {
                temp.left = temp.left.right;
            } else {
                if (temp.value < temp.left.right.value) {
                    const leftTemp = temp.left.left;
                    temp.left = temp.left.right;
                    temp.left.left = leftTemp;
                } else if (temp.value <= temp.right.left) {
                    const rightTemp = temp.left.right;
                    temp.left = temp.left.left;
                    temp.left.right = rightTemp;
                }
            }
            return true;
        }
        return false;
    };

    this.remove = function(v) {
        let temp = this.root;
        while ((temp.right != null || temp.left != null)) {
            if (this.removeFromNode(temp, v)) break;
            if (temp.value > v) temp = temp.left;
            if (temp.value < v) temp = temp.right;
        }
        return temp;
    };

    this.dfs = (n) => {
        if (n == null) return;
        console.log(n.value);
        this.dfs(n.left);
        this.dfs(n.right);
    };

    this.depth = function(node) {
        if (node === null) return -1;
        return 1 + Math.max(this.depth(node.left), this.depth(node.right));
    };

    this.width = function() {
        if (this.root === null) return 0;
        let maxWidth = 0;
        let queue = [this.root];

        while (queue.length > 0) {
            let levelWidth = queue.length;
            maxWidth = Math.max(maxWidth, levelWidth);

            for (let i = 0; i < levelWidth; i++) {
                let currentNode = queue.shift();
                if (currentNode.left) queue.push(currentNode.left);
                if (currentNode.right) queue.push(currentNode.right);
            }
        }
        return maxWidth;
    };

    this.bfs = function() {
        if (this.root === null) return;
        let queue = [this.root];
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    };

    this.inOrder = function(callback, node = this.root) {
        if (node === null) return;
        this.inOrder(callback, node.left);
        callback(node);
        this.inOrder(callback, node.right);
    };

    this.preOrder = function(callback, node = this.root) {
        if (node === null) return;
        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
    };

    this.postOrder = function(callback, node = this.root) {
        if (node === null) return;
        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);
        callback(node);
    };

    this.isBalanced = function(node = this.root) {
        if (node === null) return true;

        let leftDepth = this.depth(node.left);
        let rightDepth = this.depth(node.right);

        if (Math.abs(leftDepth - rightDepth) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    };

    this.rebalance = function() {
        let values = [];
        this.inOrder(node => values.push(node.value));
        this.root = this.buildTree(values);
    };
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}

let a = new Tree();
a.buildTree([10, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
a.remove(9);
a.remove(9);
a.remove(67);
prettyPrint(a.root);

console.log("Tree Depth:", a.depth(a.root));
console.log("Tree Width:", a.width());
console.log("Level Order Traversal (BFS):");
a.bfs();

console.log("In-Order Traversal:");
a.inOrder(node => console.log(node.value));

console.log("Pre-Order Traversal:");
a.preOrder(node => console.log(node.value));

console.log("Post-Order Traversal:");
a.postOrder(node => console.log(node.value));

console.log("Is Tree Balanced?", a.isBalanced());
a.rebalance();
console.log("Tree after Rebalancing:");
prettyPrint(a.root);
