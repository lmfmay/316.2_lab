let response = prompt(`Which planet in our solar system has the most moons?`);
response = response.toLowerCase;
if (response) {
    if (response == 'saturn'){
        alert(`That is correct!`);
    } else {alert(`That is incorrect!`)};
    
}


// let response = prompt(`What is your name?`);
// let namenode = document.getElementById(`name`);
// let heading = document.getElementsByTagName(`h1`);
// //confirm allows us to gather a true/false response from users using a popup
// if (response) { //if there is a response
//     let age = confirm(`${response} are you over the age of 18?`);
//     if (age) {
//         namenode.textContent = response;
//     } else {
//         heading[0].textContent = `Warning you are a child, out otta here!`
//         //alert(`WARNING: You are a child, get otta here!`) //This works too, but page still loads after clicking ok
//     }
// }
