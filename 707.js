// Design a linked list

class DoublyListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


//implementation for doublelinkedlist

class DoublyLinkedList {
    constructor() {
        //inicializamos 2 nodos dummy para poder solventar casos extremos a la hora de anadir y a la hora de remover nodos

        this.head = new DoublyListNode(-1); 
        this.tail = new DoublyListNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insertFront(val) {
        const newNode = new DoublyListNode(val);

        //insertamos el nuevo nodo justo en medio de nuestros 2 nodos dummy

        newNode.prev = this.head;
        newNode.next = this.head.next;

        //ahora estamos en el nodo dummy 2
        this.head.next.prev = newNode;
        this.head.next = newNode;
    }

    insertEnd(val) {
        const newNode = new DoublyListNode(val);

        //insertamos el nuevo nodo despues del segundo dummyNode, o el this.tail, o this head, siempre sabemos cual es el actual

        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    removeFront() {
        //we remove the first node after dummy node if exists

        this.head.next.next.prev = this.head;
        this.head.next = this.head.next.next;
    }

    removeEnd(){
        this.tail.prev.prev.next = this.tail;
        this.tail.prev = this.tail.prev.prev;
    }

    print(){
        let curr = this.head.next;
        let s = "";
        while (curr != this.tail) {
            s+= curr.val + "=>";
            curr = curr.next;
        }

        console.log(s);
    }
}