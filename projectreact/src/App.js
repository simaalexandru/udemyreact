import React  from 'react';
import './App.css';
import Animal from './Animal';

//function factory

const product = (x) => {
  return y => {
    return y * x;
  }
}

//creating a new function with our function factorie (mult5)
//that makes the function with one parameter and returns our value multiplied by 5
let mult5 = product(5);
console.log(mult5(3));  //returning y*x
export default 'App';
