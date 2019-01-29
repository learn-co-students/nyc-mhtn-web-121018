
// Deliverables:

// 1. Practice grabbing something from the DOM
document.children[0].children[1].children[0] // <== can get the first div
                                            // but, does it look dank? yes... but ehhh
// get super lost
// super long
// too many chars
// too many children
// one edit... this breaks
// A better way...
document.getElementsByClassName("name")
document.querySelector("#outer-node h1")
document.querySelectorAll("#outer-node div")
// CRUD => READ

// 2. Practice making a new element
// CREATE
document.createElement("BUTTON"); // but this is no where yet...
// para.appendChild(node);

// 3. Practice adding elements to the DOM
// 1. find the element to apped it to
const container = document.querySelector("#container")
// 2. create the element to append + changes
const dankImg = document.createElement("IMG");
dankImg.src = 'https://i.imgur.com/dzbQCj4.png' // UPDATE
// 3. append it to that found element
container.appendChild(dankImg);

// DELETE
// removeChild

// 4. Bringing it all together:
//      Put some dank memes on the page!
dankMemes.forEach(function(memeURL){
  const dankMemeImg = document.createElement("IMG");
  dankMemeImg.src = memeURL
  container.appendChild(dankMemeImg);
})

// find the container
// find the array => dankMemes
// iterate
// for each create the element
// update the src
// append it
