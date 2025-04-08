function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null
}

function Tree(){
    this.root = null

    this.add = function(n, value){
        if(this.root == null){
            this.root = new Node(value);
            return true
        }
        if(n.value >= value){
            if(n.left == null){
                n.left = new Node(value)
                return true
            }else{
                this.add(n.left, value)
            }
        }

        if(n.value < value){
            if(n.right == null){
                n.right = new Node(value)
                return true
            }else{
                this.add(n.right, value)
            }
        }

    }


    this.buildTree = function(ar){ 
        for (let i = 0; i < ar.length; i++) {
            this.add(this.root,ar[i])
        }
        return this.root
    }

    this.find = (n=this.root, v) => {
        if(n != null){
            if(n.value == v)return true
            if(n.value < v)return this.find(n.right, v)
            if(n.value > v)return this.find(n.left, v)
        }
        return false
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
    console.log(a.step(a.root, 2))
