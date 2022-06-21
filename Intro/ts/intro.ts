console.log("hola desde typescript")

class Drink{
    private name: string;
    constructor(name:string){
        this.name = name;
    }
    info(): string {
        return this.name;
    }
}

const drink = new Drink("agua")

console.log(drink.info());

interface Product{
    price: number;
    getPrice(): string;
}

// herencia

class Beer extends Drink implements Product{
    private alcohol:number;
    price: number;
    constructor(name:string, alcohol:number, price:number){
        super(name)
        this.alcohol = alcohol;
        this.price = price;
    }
    getPrice():string {
        return "$"+this.price;
    }
    info(): string {
        return super.info() +" "+ this.alcohol;
    }
}

const beer = new Beer("edinger", 8.5, 10);
console.log(beer.info());


// imprementacion de interface
class Snack implements Product{
    name:string;
    price: number;
    constructor(name:string, price:number){
        this.name = name; 
        this.price = price;
    }
    getPrice() : string {
        return "el precio: $" + this.price
    }
}
const products: Product[] = [
    new Beer("corona", 4.5, 1),
    new Snack("papas", 0.5),
    new Beer("heineken", 5, 1.2)
]

function getPrices(items: Product[]){
    for(const item of items){
        console.log(item.getPrice());
    }
}

getPrices(products);