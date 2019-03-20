const data = [1,2,3,4,5,6,7,8,9,10,11,12]

// O(n)
function iterate(array){
  array.forEach(el => { console.log("hello")})

  return array
}


// O(n^2)
function nestedIterate(array){
  array.forEach(x => {
    array.forEach(y => {console.log("hello")})
  })
}


// O(n^3)
function nestedIterateTriple(array){
  array.forEach(x => {
    array.forEach(y => {
      array.forEach(z => console.log("hello"))
    })
  })
}

// O(n)
function recursiveEach(array, callback){
  callback(array[0])
  if (array.length !== 0)
    recursiveEach(array.slice(1), callback)
}


recursiveEach(data, console.log)


