class SaleContext {
    constructor(strategy){
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    calculate(amount){
        return this.strategy.calculate(amount);
    }
}
class RegularSaleStrategy{
    constructor(tax){
        this.tax = tax;
    }
    calculate(amount){
        return amount + (amount * this.tax)
    }
}
class DiscountStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;
    }
    calculate(amount){
        return amount + (amount * this.tax) - this.discount;
    }
}
class ForeignSaleStrategy{
    calculate(amount){
        return amount * this.getDollarPrice();
    }
    getDollarPrice = () => 20;
}
const regularSale = new RegularSaleStrategy(.16);
const discountSale = new DiscountStrategy(.16, 3);
const foreignSale = new ForeignSaleStrategy();
const sale = new SaleContext(regularSale);
console.log(sale.calculate(10));
sale.setStrategy(discountSale);
console.log(sale.calculate(10));
sale.setStrategy(foreignSale);
console.log(sale.calculate(10));
const data = [
    {
        name: 'Erdinger Pikantus',
        country: 'Alemania'
    },
    {
        name: 'Corona',
        country: 'México'
    },
    {
        name: 'Delirium Tremens',
        country: 'Belgica'
    },
]
class InfoContext{
    constructor(strategy, data, elemnt){
        this.setStrategy(strategy);
        this.data = data;
        this.elemnt = elemnt;
    }
    setStrategy = (strategy) => this.strategy = strategy;
    show(){
        return this.strategy.show(this.data, this.elemnt);
    }
}
class ListStrategy{
    show(data, element){
        return element.values = data.reduce((ac, beer)=>{
            return ac + ', ' + beer.name + ' - ' + beer.country
        }, '');
    }
}
class NamesStrategy{
    show(data, element){
        return element.values = data.reduce((ac, beer)=>{
            return beer.name + ', ' + ac
        }, '');
    }
}
class CountryStrategy{
    show(data, element){
        return element.values = data.reduce((ac, beer)=>{
            return beer.country + ', ' + ac
        }, '');
    }
}

const strategies = [
    new ListStrategy(),
    new NamesStrategy(),
    new CountryStrategy(),
]
let element = {values : ''};
const strategy = strategies[0]
const info = new InfoContext(strategy, data, element);
console.log(info.show())