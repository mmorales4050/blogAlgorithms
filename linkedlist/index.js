// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    var counter = 0
    var check = this.head
    while(check) {
      check = check.next
      counter ++
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    var node = this.head
    var prevNode = this.head
    while(node) {
      prevNode = node
      node = node.next
    }
    return prevNode
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if(this.head){
      this.head = this.head.next
    }
  }

  removeLast() {
    if(this.head) {
      if(this.head.next) {
        var node = this.head.next
        var prevNode = this.head
        while(node) {
          node = node.next
          if(node === null) {
            prevNode.next = null
          }
          prevNode = prevNode.next
        }
      } else {
        this.head = null
      }
    }
  }

  insertLast(data) {
    if(this.getLast()){
      this.getLast().next = new Node(data)
    }else {
      this.insertFirst(data)
    }
  }

  getAt(index) {
    var node = this.head
    var counter = 0
    while(counter !== index) {
      if(!node) {
        return null
      }
      node = node.next
      counter ++
    }
    return node
  }

  removeAt(index) {
    if(this.getAt(index)){
      if(this.getAt(index - 1) && this.getAt(index + 1)) {
        this.getAt(index - 1).next = this.getAt(index + 1)
      } else if (this.getAt(index - 1)){
        this.getAt(index - 1).next = null
      } else if (this.getAt(index + 1)){
        this.head = this.getAt(index + 1)
      }
    }
  }

  insertAt(data, index) {
    if(index <= 0 && this.size() === 0) {
      this.head = new Node(data)
    }else if(index <= 0) {
      this.head = new Node(data , this.head)
    }else if(!this.getAt(index) || this.size() === this.index + 1) {
      this.getLast().next = new Node(data)
    }else {
      this.getAt(index - 1).next = new Node(data, this.getAt(index))
    }
  }

  forEach(fn) {
    var node = this.head
    var index = 0

    while(node) {
      fn(node, index)
      index++
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while(node) {
      yield node
      node = node.next
    }
  }
}
