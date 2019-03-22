class Stack {
	constructor(){
		this.data = []
	}

	add(value){
		this.data.push(value)
	}

	remove(){
		return this.data.pop()
	}
}

module.exports = Stack