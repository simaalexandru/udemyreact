import React  from 'react';
import './App.css';
import Animal from './Animal';

//keeping track of your customers
//each time someone walks on the door, the generator will count

function* countMaker() {
  let count = 0;
  while(count < 3){
    yield count += 1;
  }
}

let countGen = countMaker();
console.log(countGen.next().value); //1
console.log(countGen.next().value); //2
console.log(countGen.next().value); //3
console.log(countGen.next().value); //undefined
