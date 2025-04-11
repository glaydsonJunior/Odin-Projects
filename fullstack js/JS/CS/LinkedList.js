function Node(value) {
    this.value = value;
    this.nextNode = null;
  }
  
  function LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  LinkedList.prototype.append = function(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  };
  
  LinkedList.prototype.prepend = function(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  };
  
  LinkedList.prototype.size = function() {
    return this.size;
  };
  
  LinkedList.prototype.head = function() {
    return this.head;
  };
  
  LinkedList.prototype.tail = function() {
    return this.tail;
  };
  
  LinkedList.prototype.at = function(index) {
    if (index < 0 || index >= this.size) return null;
  
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  };
  
  LinkedList.prototype.pop = function() {
    if (this.size === 0) return;
  
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.nextNode !== this.tail) {
        current = current.nextNode;
      }
      current.nextNode = null;
      this.tail = current;
    }
    this.size--;
  };
  
  LinkedList.prototype.contains = function(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  };
  
  LinkedList.prototype.find = function(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  };
  
  LinkedList.prototype.toString = function() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  };
  
  LinkedList.prototype.insertAt = function(value, index) {
    if (index < 0 || index > this.size) return;
  
    const newNode = new Node(value);
  
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      let current = this.head;
      let previous;
      let i = 0;
  
      while (i < index) {
        previous = current;
        current = current.nextNode;
        i++;
      }
  
      previous.nextNode = newNode;
      newNode.nextNode = current;
      this.size++;
    }
  };
  
  LinkedList.prototype.removeAt = function(index) {
    if (index < 0 || index >= this.size) return;
  
    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let current = this.head;
      let previous;
      let i = 0;
  
      while (i < index) {
        previous = current;
        current = current.nextNode;
        i++;
      }
  
      previous.nextNode = current.nextNode;
      if (index === this.size - 1) {
        this.tail = previous;
      }
    }
    this.size--;
  };
  
  const list = new LinkedList();
  
  list.append(10);
  list.append(20);
  list.append(30);
  list.prepend(5);
  
  console.log(list.toString());
  console.log(list.size);
  console.log(list.contains(20));
  console.log(list.find(30));
  console.log(list.at(1));
  
  list.removeAt(2);
  console.log(list.toString());
  
  list.insertAt(25, 2);
  console.log(list.toString());
  
  list.pop();
  console.log(list.toString());
  