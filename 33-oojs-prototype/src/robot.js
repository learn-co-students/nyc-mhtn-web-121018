// object literals

robot1 = { name: "c3po", weight: "100lbs", specialty: "being annoying" }
robot2 = { name: "Jeff Adrien", weight: "200lbs", specialty: "basketball" }
robot3 = { name: "Terminator", weight: "200lbs", specialty: "hasta la vista, i'm awesome 👍" }

// redundant, boring, hashketball, spelling errors

// factory function
function robotFactory(name, weight, specialty) {
  // const robot = { name: name, weight: weight, specialty: specialty }
  const robot = {
    name,
    weight,
    specialty
   } // es5
  return robot
}

function recharging() {
  console.log(`${this.name} is recharging its batteries`)
}

robot4 = robotFactory("r2d2", "500lbs", "asdjkfhasjdf")
// robot4.recharge_batteries = recharging

robot5 = robotFactory("iron giant", "99999999", "friendly")
robot5.recharge_batteries = recharging
robot6 = robotFactory("wall-e", "50", "garbage collecting")
robot6.recharge_batteries = recharging

// whats nice and different from classical inheritance

// robot5.__proto__.whatever = "this"

// Object.create
const robotTemplate = {
  name: null,
  weight: null,
  specialty: null,
  rechargeBatteries: function() {
    console.log(`${this.name} is recharging its batteries`)
  }
}

robot7 = Object.create(robotTemplate)
robot7.name = 'sparko'
robot7.weight = '1000',
robot7.specialty = 'making sparks'

robot7.rechargeBatteries // looks at the prototype

robot7.__proto__ === 'robotTemplate' // not "Object"

robot8 = Object.create(robotTemplate)

robot7.rechargeBatteries === robot8.rechargeBatteries

// .class == .class

function robotFactory(name, weight, specialty) {
  // const robot = { name: name, weight: weight, specialty: specialty }
  const robot = {
    name,
    weight,
    specialty
   } // es5
  return robot
}

// constructor function = normally cased with a Cap
// no return // it's going to return undefined if you use it as a regular function
// not making an object in here
// we're using this
function RobotFactory(name, weight, specialty) {
  // `this` in the context of a constructor function will be the newly created object {}
  this.name = name
  this.weight = weight
  this.specialty = specialty
}

RobotFactory.prototype.rechargeBatteries = function() {
  console.log(`${this.name} is recharging its batteries`)
}

// rb1 = { name: "c3po", weight: "100lbs", specialty: "being annoying" }
// you don't want to ever mutate your state {}
// rb1.name = "new name"
// rb2 = Object.create(rb1)

// feels like monkey patching,

// constructor ==> initialize

robot9 = RobotFactory("johnny 5", 100, "he's alive!") //. undefined
robot10 = new RobotFactory("robo", 1000, "time traveller") // Chrono Trigger

// class syntax
function RobotClosure() {
  let privateThing = 0;
  return class Robot {
    // very specifically named
    constructor(name, weight, specialty) {
      this.name = name
      this.weight = weight
      this.specialty = specialty
    }

    rechargeBatteries() {
      console.log(`${this.name} is recharging its batteries`)
    }

    static classMethod() {
      console.log("im a class method")
    }
  }
}








const NewRobotClass = RobotClosure()


const Robot = (() => {
  let totalRobotsMade = 1

  return class Robot {
    constructor(name, weight, specialty) {
      this.name = name
      this.weight = weight
      this.specialty = specialty
    }

    rechargeBatteries() {
      console.log(`${this.name} is recharging its batteries`)
    }
  }
})()

robot11 = new NewRobotClass("johnny 6", 100, "he's alive!")
robot11.rechargeBatteries()

robot12 = new NewRobotClass("johnny 7", 100, "he's alive!")

robot11.rechargeBatteries === robot12.rechargeBatteries
