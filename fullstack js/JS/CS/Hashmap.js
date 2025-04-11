function Hashmap(){
    this.values = Array(16);
    this.keys = Array(16);
    this.len = 0

    this.hash = (key) => {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i))%17;
        }
     
        return hashCode;
    }

    this.set = (k, v) => {
        const hash = this.hash(k)
        if(this.values[hash] == undefined){
            this.values[hash] = []
            this.keys[hash] =  []
        }
        this.keys[hash].push(k)
        this.values[hash].push(v)
        this.len++;
    }

    this.get = (k) => {
        const tempK = this.keys[this.hash(k)]
        const tempV = this.values[this.hash(k)]
        if(tempK != undefined){
            for (let i = 0; i < tempK.length; i++) {
                if(tempK[i] == k)return tempV[i]
            }
        }
    }
    
    this.length = () => { return this.len }


    this.has = (k) => {
        const tempK = this.keys[this.hash(k)]
        if(tempK != undefined){
            for (let i = 0; i < tempK.length; i++) {
                if(tempK[i] == k)return true
            }
        }
        return false
    }

    this.key = () => {
        let a = []
        for (const k in this.keys) {
            if(this.keys[k] != undefined){
                a = a.concat(this.keys[k])
            }
        }

        return (a.length > 0) ? a : null
    }

    this.value = () => {
        let a = []
        for (const v in this.values) {
            if(this.values[v] != undefined){
                a = a.concat(this.values[v])
            }
        }

        return (a.length > 0) ? a : null
    }

    this.clear = () => {
        this.values = Array(16)
        this.keys = Array(16)
        this.len = 0
    }

    this.entrie = (entri) => {
        entri.forEach(element => {
            if(element.length == 2){
                this.set(element[0], element[1])
            }
        });
    }

    this.remove = (k) => {
        const index = this.hash(k)
        if(this.keys[index] == undefined) return false
        if(this.keys[index].length <= 1){
            if(this.keys[index][0] == k){
                this.values.splice(index, 1)
                this.keys.splice(index, 1)
                this.len += -1;
                return true
            }
        }

        for (let i = 0; i < this.keys[index].length; i++) {
            if(this.keys[index][i] == k){
                this.values[i].splice(index, 1)
                this.keys[i].splice(index, 1)
                this.len += -1;
                return true
            }
        }

        return false
    }
}


const hashmap = new Hashmap();

hashmap.set("name", "Alice");
console.log(hashmap.get("name")); // Expected: Alice

console.log(hashmap.has("age"));   // Expected: false
console.log(hashmap.has("name")); // Expected: true

hashmap.set("age", 30);
console.log(hashmap.length()); // Expected: 2

console.log(hashmap.key()); // Expected: ['name', 'age']

console.log(hashmap.value()); // Expected: ['Alice', 30]

console.log(hashmap.remove("name")); // Expected: true
console.log(hashmap.get("name")); // Expected: undefined

console.log(hashmap.remove("age")); // Expected: true
console.log(hashmap.remove("age")); // Expected: false

hashmap.clear();
console.log(hashmap.length()); // Expected: 0
console.log(hashmap.get("name")); // Expected: undefined

const entries = [["name", "Alice"], ["age", 30], ["city", "New York"]];
hashmap.entrie(entries);
console.log(hashmap.get("name")); // Expected: Alice
console.log(hashmap.get("age"));   // Expected: 30
console.log(hashmap.get("city")); // Expected: New York

console.log(hashmap.length()); // Expected: 3
