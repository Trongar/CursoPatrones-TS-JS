class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(data) {
        this.observers.forEach(e => {
            e.refresh(data);
        });
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }
    refresh(data) {
        this.fn(data);
    }
}

const s = new Subject();
const o1 = new Observer(d => {
    console.log("hola soy el observer 1")
});
const o2 = new Observer(d => {
    console.log(d)
});
const o3 = new Observer(d => {
    console.log(d.split("").reverse().join(""));
});
s.subscribe(o1);
s.subscribe(o2);
s.subscribe(o3);

change = () => {
    s.notify("hola");
}
change();