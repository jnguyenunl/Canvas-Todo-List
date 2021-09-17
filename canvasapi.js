
// import fetch from "node-fetch";

let API = '6507~2qsTHW8vO9ANDZlWDuYXMgZD79PTbmxpCZJ8HtyAb0txjBaNRoYNyd1okenr4uDn';
let course = '/v1/courses';
let canvas = 'https://canvas.unl.edu/';
// let url = canvas.concat(API,course);
// let url = 'https://canvas.unl.edu/6507~2qsTHW8vO9ANDZlWDuYXMgZD79PTbmxpCZJ8HtyAb0txjBaNRoYNyd1okenr4uDn/v1/courses';


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

