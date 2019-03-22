class Queue {
	constructor(){
		this.data = []
	}

	add(value){
		this.data.push(value)
	}

	remove(){
		return this.data.shift()
	}
}

module.exports = Queue