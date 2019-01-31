const element = document.getElementById("listen-for-event");
console.log(element)

// (event) => { console.log(event) }
function handleEvent(event) {
  console.log(event)
  // returns something => undefined
  // return () => {} // you probably wont do this in mod 3, closures
}
// first argument, what does it describe? event type
// second argument, function that you want to run when the event occurs
  // addEventListener => higher order function // lexical scoping
                                        // callback
console.log('before adding')
element.addEventListener('mouseenter',  handleEvent)
console.log('after adding')

// ES6-5
element.addEventListener('mouseenter',  (event) => { console.log(event) })

element.addEventListener('mouseenter',  function(event) { console.log(event) })

// there is a slight different in arrow vs anonymous functions,
// you'll probably see it later

// you will need to think about clean JS code
// don't go wild with the extra abtractions

// it scales with bandwidth
  // graceful degredation
  // progressive web apps
  // ------

// functions all the way down... nah, we just call it a HOF

function nonHOF() {
  // does nothing
}
