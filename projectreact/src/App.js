import React  from 'react';
import './App.css';
import Animal from './Animal';


class Calculator{
  static multiply(a,b){
    return a*b;
  }

  static add(a,b){
    return a+b;
  }
}

let a = Calculator.add(5, 7); //calculator - not an object holding data
                                             // but name that holds methods
console.log(a);

export default 'App';
