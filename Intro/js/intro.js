// funcion de primer orden
function sum (a,b) {return a + b};
let res = sum(1,2);
console.log(res);

const fSum = sum
res = fSum(5,6);
console.log(res);

// funcion de orden superior
const operation = (fn, a, b) => {
    console.log("Se hace algo")
    console.log(fn(a, b));
}

operation(sum, 10,20);

// arrow function
let fA = () => 
    {console.log("Algo");}
fA();

operation((a,b) => a*b, 5,5);
operation((a,b) => {
    const c = a + b
    return c*2
}, 1,2);

// foreach
const names = ["Edgar", "Cesar", "Jorge"];
names.forEach((name)=>{console.log(name)});
names.forEach((name)=>{console.log(name.toUpperCase())});
console.log(names);
names.sort();
console.log(names);

// map
const uppernames = names.map((name)=>name.toUpperCase()); 
console.log(uppernames);
console.log(names);

// reduce
const numbers = [1,2,3,4,5,6,7,8,9,10];
const total = numbers.reduce((ac, number)=>ac + number,1)
console.log(total)


// Programacin orienta a objetos
// Clase
class Drink{
    constructor(name){
        this.name = name;
    }
    info(){
        return "La bebida es: "+this.name;
    }
}

const drink = new Drink("Agua")
console.log(drink.info());

// funcional
function Drink2(name){
    this.name = name;
    this.info = function(){
        return "La bebida es: " + this.name; 
    }
}

const drink2 = new Drink2("Agua");
console.log(drink2.info())

// herencia
class Beer extends Drink{
    constructor(name, alcohol){
        super(name);
        this.alcohol = alcohol;
    }
    info(){
        return super.info() + " " + this.alcohol;
    }
}

const beer = new Beer("erdinger",8.5);
console.log(beer.info());