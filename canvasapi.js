
// import fetch from "node-fetch";

<<<<<<< HEAD
import { api } from api.js
//making sure that I have the currect fetch function
=======



>>>>>>> cce6d1066d470bb15bdb612dafc020175f45c985
let url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api}`
// console.log.fetch(url);
async function fetchapi(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
fetchapi(url);

// function fetch(url)
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });

