// TODO: this file! :)


// Add an event listener that takes the number from the form form at the top and moves it to the Number bank
const addNumberButton = document.querySelector(`button`);

addNumberButton.addEventListener(`click`, (event) => {

  

  const userInput = document.querySelectorAll(`number`);
//get the number to equal a number instead of a string? gives me a node
  const sortedNumbers = document.querySelector(`numberBank`);
  event.preventDefault();
  console.log (userInput);
  console.log (sortedNumbers);
})

//const userInput = document.querySelector(`input`);


// Once I get that Number bank able to take numbers, work on the two buttons


// Make a event listener that take the sort 1 button when it is clicked and sorts it in either Odd or Even


// Make an second event listener that take the sort all button and sorta them based on whether theyre even or odd
// I can use a if/else form to accomplish this, by seeing if the number is divisible by 2 and send it to the Evens box
// elseif -> sort it into the odds box 