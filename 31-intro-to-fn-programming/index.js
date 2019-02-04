const instructors = ['evans', 'dick ward', 'chris', 'charlie', 'steven balasta']

const cappedInstructors = instructors.map( function(name){
  return name.toUpperCase()
} )

console.log(cappedInstructors)

function funFn() {
  console.log('im super fun!')
}

const megaFunFn = function(){
  console.log("%cmegaFun", "color :purple")
}

function notArrow(arg1) {
  console.log(`${arg1} is so powerful`)
}

// ONE ARG no need for ()
// ONE LINE no need for EXPLICIT `return`
const arrowFn = arg1 =>   console.log(`${arg1} has many Cats and no bananas`)

//
// .then(function(data){
//   return data.json()
// })
//
// .then( r => r.json() )


notArrow('Mike Cheng')
arrowFn('Mike')


const myIIFE = (function(){
  const trash = "🗑 rubbish"
  return ' POWERFUL hotdaug'
})()

console.log( myIIFE )



const callbackfn = function(el){
  return el.toUpperCase()
}

myMap(["yaboio", "chef boy arrDee"], callbackfn)

function myMap(array, callback) { //pure function
  const mappedArray = [] //mutations are contained within the function; no OBSERVABLE side effects
  for (let i = 0; i < array.length; i++) {
    const mappedElement = callback(array[i])
    mappedArray.push(mappedElement)
  }
  return mappedArray
}

function impureMap(array, callback) { //has side effects; is impure
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i])
  }
  return array
}


//
// 'PiZZa HuT' -> 'pizza_hut'
const lowerCaseString = (string) => string.toLowerCase()
const subUnderscore = (string) => string.replace(' ', '_')
//
const urlSlug = (string) => subUnderscore(lowerCaseString(string)) //composition

const robotFactory = (() => {
  let totalNumRobotsCreated = 1 //mutations are contained w/in the closure scope
  return function(name, blinkingLights, microprocessor) {
    return {
      id: totalNumRobotsCreated++,
      name: name,
      blinkingLights: blinkingLights,
      microprocessor: microprocessor
    }
  }
})()

const t2000 = robotFactory('terminator', false, 'SUPER FAST')

t2000 //{id: 1, name: "terminator", blinkingLights: false, microprocessor: "SUPER FAST"}
