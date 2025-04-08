function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null
}

function Tree(){
    this.root = null

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
    }
    

    this.buildTree = function(ar){ 
        for (let i = 0; i < ar.length; i++) {
            this.insert(ar[i])
        }
        return this.root
    }


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
    }
    
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

    let a = new Tree()
    a.buildTree([10, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
    console.log(a.find(67))
