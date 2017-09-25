const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail= null;
    }

    append(data) {
        const node = new Node(data);

        if(this.length){
            this._tail.next = node;
            node.previous = this._tail;
            this._tail = node;
        } else {
            this._tail = node;
            this._head = node;
        }
        this.length++;
        return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
        var currentIndex = 0;
        var currentNode;

        if(!currentNode) {
            currentNode = this._head;
            currentIndex++;
        }

        while(currentIndex<=index){
            currentNode = currentNode.next;
            currentIndex++;
        }

        return currentNode.data;
    }

    insertAt(index, data) {
        var currentIndex = 0;
        var currentNode;
        var newNode = new Node(data);

        if(!currentNode) {
            currentNode=this._head;
            currentIndex++;
        }

        while(currentIndex <= index){
            currentNode = currentNode.next;
            currentNode.previous.next = newNode;
            newNode.previous = currentNode.previous;
            currentNode.previous = newNode;
            newNode.next = currentNode;
            currentIndex++;
        }

        return this;
    }

    isEmpty() {return !this.length; }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
        return this;
    }

    deleteAt(index) {
        var currentIndex = 0;
        var currentNode,prevElem,nextElem;

        if((this.length === 1)||(!this.length)) return this;

        if(!currentNode) {
            currentNode = this._head;
            currentIndex++;
        }

        while(currentIndex <= index){
            currentNode = currentNode.next;
            currentIndex++;
        }

        prevElem = currentNode.previous;
        nextElem = currentNode.next;
        prevElem.next = nextElem;
        nextElem.previous = prevElem;
        this.length--;

        return this;
    }

    reverse() {
        var currentNode = this._tail;
        this._head = currentNode;

        for(var i = 0;i < this.length;i++){
            var next = currentNode.next;
            currentNode.next = currentNode.previous;
            currentNode.previous = next;
            if(currentNode.next){
                currentNode = currentNode.next;
                continue;
            }
        }

        this._tail = currentNode;

        return this;

    }

    indexOf(data) {
        var i = 0;
        var currentNode;

        if(!currentNode) {
            currentNode = this._head;
            if(currentNode.data === data){
                return i;
            }
            i++;
        }
        for(i; i < this.length; i++){
            currentNode = currentNode.next;
            if(currentNode.data === data){
                return i;
            }
        }

        return -1;
    }
}

(function(){
    var newNode = new LinkedList();
    function func() {
      newNode.reverse().append(4).insertAt(0, 3).clear().deleteAt(0);
    }
    func();
})

module.exports = LinkedList;
