// import { create } from "domain"

const coder ={
    isStudying: false,
    printIntro: function(){
        console.log('my name is ',(this.name) ,'am i studying :',(this.studying))
        console.log(`My name is ${this.name}. Am I  
        studying?: ${this.isStudying}.`) 
    }
}
const me = Object.create(coder);
me.name ="cooper";
me.studying="true";
me.printIntro();