# Big O Notation

## SWBATs

- Define the purpose of Big O notation
- Distinguish between time and space complexity
- Identify the complexity of common algorithms

## Outline

### What is Big O?

Big O is a measure of the computational efficiency of an algorithm. It is measured in 2 ways:

*Time Complexity* - How many operations are performed?

*Space Complexity* - How much space is used?

Programmers aren't usually concerned with how well an algorithm can perform as much as they are concerned with how badly it can perform, i.e. the worst-case scenario. 

Consider the `find` method. If the target is at the beginning, great! It runs once. However, if the target is at the end, it runs n number of times, n being the length of the array. We would consider the time complexity of this algorithm to be O(n). 

*Note:* When people talk about Big O, they can really mean one of 2 things: worst-case scenario or average-case scenario. For the most part, most people are talking about worse-case scenario when they talk about Big O, so we will stick with that

### Measuring Big O

Big O notation looks like the following:

O(x)

in which x is the value denoting the efficiency.

Here are some typical values:

*Constant Complexity O(1)* - The best complexity. The operation time/space is constant and does not increase or decrease based on input (e.g. most basic operations, accessing a value in a hash)


*Linear Complexity O(n)* - Operation time/space increases at a 1:1 rate as input gets larger. (e.g. mapping/filtering over an array)

*Exponential Complexity O(n^x)* - Operation time/space increases exponentially with input size (e.g. nested iterations)

*Logarithmic Complexity O(log(n))* - Operation time/space increases logarithmically (more efficient than linear). (e.g. traversing a binary tree)

We don't care about multipliers/divisors. An algorithm that performs at O(n/2) or O(3n) is still considered to be O(n).

### Practice problems

For each problem, think about both time and space complexity. See if you can optimize both.

1. Given a string, return the most common letter in the string.

2. Given an array of integers, find all pairs of numbers that add up to a sum x and returns them as an array. (Duplicates allowed)

3. Given an array, sorts that array (can return a new array or modify original)

