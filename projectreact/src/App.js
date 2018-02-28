import React  from 'react';
import './App.css';
import Animal from './Animal';

//keeping track of your customers
//each time someone walks on the door, the generator will count

function* evens() {
  let count = 0;
  while(true){
    count += 2; //endless loop
    let reset = yield count;
    if (reset){ //if reset is true
      count = 0;
    }
  }
}
//whatever we pass as a parameter to next()
//can modify the internal state and behavior of the generator

//set the yield count to a reset variable
//the reset looks for what is passed to the generator and checks for it in a yield statement
let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
