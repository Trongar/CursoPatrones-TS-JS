class ProductComponent{
    constructor(name){
        this.name = name;
    }
    getDetail = () => this.name;
}

class ProductDecorator{
    constructor(productComponent){
        this.productComponent = productComponent;
    }
    getDetail() {return `${this.productComponent.getDetail()}`;}
}

class CommercialInfoProductDecorator extends ProductDecorator{
    constructor(productComponent, tradename, brand){
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
        console.log(super.getDetail())
    }
    getDetail = () => `${this.tradename} ${this.brand} ${super.getDetail()}`;
}
class StoreProductDecorator extends ProductDecorator{
    constructor(productComponent, price){
        super(productComponent);
        this.price = price;
    }
    getDetail = () => `${super.getDetail()} $${this.price}`;
}
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent,'London Porter', 'Fuller\'s');
console.log(commercialInfoProduct.getDetail());

const storeProductDecorator = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProductDecorator.getDetail());

const product = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(product.getDetail())