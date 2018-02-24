import React  from 'react';
import './App.css';
import Animal from './Animal';

//function factory

const addSufix = (x) => {
  const concat = (y) =>  {
    return y + x;
  }
  return concat;
}

let addNess = addSufix("ness");
//adding ness to addSufix(), takes that parameter, looks at concat method wich is a closure that remember the environment of addSufix and returns it's own argument of x+y
console.log(addNess);

//creating a function factory that
//first takes an argument
//defines the closure
//returns both arguments concatonated
export default 'App';
