class LinkedList {
	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	append(node){
		if (!this.head){
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
		}
	}

	prepend(node){
		if (!this.head){
			this.head = node
			this.tail = node
		} else {
			const oldHead = this.head
			this.head = node
			this.head.next = oldHead
		}
	}

	pop(){
	}

	traverse(callback){

	}

	shift(){
	}


	isEmpty(){
	}
}

module.exports = LinkedList