import React  from 'react';
import './App.css';
import Animal from './Animal';

let call = () => {
  let secret = 'ES6 rocks!';
  let reveal = () => {
    console.log(secret);
  }
  reveal();
}

call();

//accesing the secret variable using the reveal method
//call reveal within the closure
//call the method (call) to acces secret through reveal()
export default 'App';
