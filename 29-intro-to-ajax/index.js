// nothing


function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}
//
// 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
//
// 'https://dog.ceo/api/breeds/image/random'
// 'https://dog.ceo/api/breeds/image/random/4'

console.log('Starting the sleep function')
sleep(10)
console.log('Wow that sleep function took forever to run. 1 Star 🌟')

document.getElementById('click-button').addEventListener('click', console.log)

// how do we make requests in JS?

// Asynch Javascript AND XML
console.log("VERY OBVIOUSLY BEFORE THE FETCH")
fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', { method: "GET"})
  .then(function(data) {
    return data.json()
  })
  .then(function(gabby) {
    console.log(gabby)
  })


console.log("VERY OBVIOUSLY AFTER THE FETCH")








































//
// fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes', { method: "GET"} )
//   .then(function(response){
//     return response.json()
//   })
//   .then(function(ronQuote){
//
//     const quotesContainer = document.querySelector('#quotes')
//     quotesContainer.innerHTML += `
//       <p> ${ronQuote}</p>
//     `
//
//   })

// console.log(' this is DEFINITELY AFTER THE FETCH')






//
//
//
// const pokemonURL = "http://localhost:3000"
// fetch(pokemonURL, {
//   method: "POST",
//   headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-www-form-urlencoded",
//         },
//   body: JSON.stringify({
//           "height": 10,
//           "weight": 130,
//           "id": 2,
//           "name": "ivysaur",
//           "abilities": ["overgrow", "chlorophyll"],
//           "moves": [],
//           "stats": [
//             {
//               "value": 80,
//               "name": "special-defense"
//             },
//             {
//               "value": 80,
//               "name": "special-attack"
//             },
//             {
//               "value": 63,
//               "name": "defense"
//             },
//             {
//               "value": 62,
//               "name": "attack"
//             },
//             {
//               "value": 60,
//               "name": "speed"
//             },
//             {
//               "value": 60,
//               "name": "hp"
//             }
//           ],
//           "types": ["grass", "poison"],
//           "sprites": {
//             "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//             "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//           }
//         })
//       })
//   .then(r = > r.json())
//   .then(// logic)
