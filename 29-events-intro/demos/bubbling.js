// bind to html elements
const espresso = document.getElementById("espresso");
const milk = document.getElementById("milk");
const sugar = document.getElementById("sugar");

// generic handler
const clicked = function (event) {

  // event.stopPropagation(); // this stops after the first event resolves
  // but what if you want to do the opposite?
  // how can we handle this?

  // event delagation
  // debugger
  if (event.target.id === "espresso") {
    console.log(`a Clicked ${event.target.id}`); // kinda like self, omg!!!!! please wait for the lecture on event.target
  } else if (event.target.id === "milk") {
    console.log(`b Clicked ${event.target.id}`);
  } else if (event.target.id === "sugar") {
    console.log(`c Clicked ${event.target.id}`);
  } else {
    console.log("default");
  }
};

// event listeners
// espresso.addEventListener("click", clicked); // inner most div
// milk.addEventListener("click", clicked); // this is in the middle
sugar.addEventListener("click", clicked, true); // outer most div

/*
body
  div sugar (any event handler?)
    div milk <-- click (any event handler?)
      div expresso
*/
