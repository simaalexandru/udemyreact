import React  from 'react';
import './App.css';
import Animal from './Animal';

let call = () => {
  let secret = 'ES6 rocks!';
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}

let unveil = call();
unveil();
//the closure still has access to secret variable

//inner function accesing the values in parent scopes
//lexico scoping = javascript and the program keeps track of a location of variable to know how to be accesed

export default 'App';
