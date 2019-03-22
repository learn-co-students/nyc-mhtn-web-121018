# Data Structures

## SWBATs

- Distinguish between a data type and a data structure
- Identify different data structures
- Identify which data structures are good for which tasks
- Write a basic implementation of a few data structures

## Outline

### Data Types vs Data Structures

*Data Type* - Used to classify your data (e.g. integers, strings, booleans)
*Data Structure* - Used to organize and relate data (e.g. arrays, hashes)

*Thought experiment:*

Consider the following diagram:

[Tree of Life](https://www.shapeoflife.org/sites/default/files/global/tree-of-life-sm.png)

Describe the types in this diagram. Describe the data structure in this diagram.


*Question:* 
Consider this:

```rb
class Dog
	attr_accessor :name, :age

	def initialize(name, age)
		@name = name
		@age = age
	end
end
```
Is this a data structure or a data type?



### Data Structure Categories


*Lists* - Linear data that is stored contiguously and has an order (e.g. arrays, linked lists)
* Uses:
	1. Storing data of the same type
	2. Storing data in a specific order
	3. Operations that require knowledge of size
	4. Modeling things that have an order

*Maps* - Data is stored non-contiguously and is unordered (e.g. Ruby hashes/JS objects)
* Uses:
	1. Need access to specific data points
	2. Multiple pieces of data about one thing
	3. Storing different types

*Graphs* - Non-linear data that is stored in nodes, each containing a value as well as a collection of nodes that are considered "neighbors." (e.g. trees, undirected graphs)
* Uses:
	1. Modeling relationships between similar things that need to know about other similar things

Data structures are often used to model the relationships between things in real life. Consider what data structure would be ideal for modeling the following situations.

1. Fast food restaurants
2. Theme Park Directory
3. Streets
4. Ancestry
5. Order history
6. Word definitions

#### Lists

*Arrays* - 
*Linked Lists* - List of nodes in which each node knows about its immediate neighbor
*Stacks* - Last In First Out (LIFO) 
*Queues* - First In First Out (FIFO)

#### Maps

*Hash Maps*

#### Graphs

*Graphs*
*Trees*
*Binary Search Trees*