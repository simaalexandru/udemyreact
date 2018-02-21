import React  from 'react';
import './App.css';
import Animal from './Animal';


class Lion extends Animal {
  constructor(name, height, color){
    super(name, height) ; //call parents constructor using super
    this.color = color;
  }

  hello(){
    console.log(`Hi, I'm ${this.name} from Pride Rock`)
  }
}

let son = new Lion("Simba",  2 , "golden");
son.hello();

export default 'App';
