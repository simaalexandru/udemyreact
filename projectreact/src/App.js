import React  from 'react';
import './App.css';

class Animal{
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  hello(){
    console.log(`Hi, I'm ${this.name} from the animal kingdom`);
  }
}

class Lion extends Animal {
  constructor(name, height, color){
    super(name, height) ; //call parents constructor using super
    this.color = color;
  }
}

let son = new Lion("Simba",  2 , "golden");
console.log(son);

export default 'App';
