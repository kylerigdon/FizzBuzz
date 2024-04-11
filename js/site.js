
// collect the user inputs
// AKA the Entry Point
function getValues() {
  // get the input element for fizzNumber and grab its value
  let fizzNumber = document.getElementById('fizzNumber').value;

  // do the same thing for buzzNumber
  let buzzNumber = document.getElementById('buzzNumber').value;

  // get the input for stopNumber
  let stopNumber = document.getElementById('stopNumber').value;

  fizzNumber = Number(fizzNumber);
  buzzNumber = Number(buzzNumber);
  stopNumber = Number(stopNumber);

  if (isNaN(fizzNumber) || isNaN(buzzNumber) || isNaN(stopNumber) || fizzNumber < 1 || fizzNumber > stopNumber || buzzNumber > stopNumber || stopNumber > 100) {
    // display an error message
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: 'Please enter a valid number for FizzBuzz to use.',
      backdrop: false
    });
  } else {
    let generatedFizzBuzz = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber);
    displayFizzBuzz(generatedFizzBuzz);
  }
}

function generateFizzBuzz(fizz, buzz, end) {
  let numbers = [];
  let fizzBuzz = [];

  for (let i = 1; i <= end; i++) {
       numbers.push(i);
  }

  for (let index = 0; index < numbers.length; index += 1) {

    let number = numbers[index];
    
    if (number % fizz == 0 && number % buzz == 0) {
      // replace number with FizzBuzz
      number = 'FizzBuzz';
      fizzBuzz.push(number);
    } else if (number % fizz == 0){
      // replace number with Fizz
      number = 'Fizz';
      fizzBuzz.push(number);
    } else if(number % buzz == 0) {
      number = 'Buzz';
      fizzBuzz.push(number);
    } else {
      fizzBuzz.push(number);
    }

  }
  

  return fizzBuzz;
}

// display those numbers in my results table
function displayFizzBuzz(fizzBuzzArray) {

  let tableHtml = '';

  for (let index = 0; index < fizzBuzzArray.length; index += 1) {
    
    let number = fizzBuzzArray[index];

    let className = '';
    if (number == 'FizzBuzz') {
      // replace number with FizzBuzz
      className = 'table-danger'
    } else if (number == 'Fizz'){
      // replace number with Fizz
      className = 'table-secondary'
    } else if(number == 'Buzz') {
      className = 'table-dark'
    }

    tableHtml += `<tr><td class="text-center ${className}">${number}</td></tr>`;
  }

  let tbody = document.getElementById('results');
  tbody.innerHTML = tableHtml;
}