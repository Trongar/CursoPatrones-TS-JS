interface Component{
    getDetail():string;
}

class ProductComponent implements Component{
    protected name: string;

    constructor(name:string){
        this.name = name;
    }
    public getDetail(): string {
        return `${this.name}`;
    }
}
abstract class ProductDecorator implements Component{
    protected component: Component;

    constructor(component:Component){
        this.component = component;
    }
    public getDetail():string { return this.component.getDetail(); }
}
// decorator1
class CommercialInfoProductDecorator extends ProductDecorator implements Component{
    private tradename: string;
    private brand: string;
    constructor(component:Component, tradename:string, brand:string){
        super(component);
        this.tradename = tradename;
        this.brand = brand
    }
    public getDetail():string { 
        return `${this.tradename} ${this.brand} ${super.getDetail()}`;}
}
// decorator2
class StoreProductDecorator extends ProductDecorator implements Component{
    private price:string;
    constructor(component:Component, price:string){
        super(component);
        this.price = price;
    }
    public getDetail(){
        return `${super.getDetail()} $${this.price}`;
    }
}
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());
const commercialInfoProductDecorator =
    new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProductDecorator.getDetail())
const storeProductDecorator = 
    new StoreProductDecorator(commercialInfoProductDecorator, "1.6");
console.log(storeProductDecorator.getDetail());