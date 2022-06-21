class Singleton {
    static getInstance = () => Singleton.instance; 
    constructor(){
        this.random = Math.random();
        if(Singleton.instance){ 
            return Singleton.instance;
        }
        Singleton.instance = this
    }
}

const {random: singleton} = new Singleton();
const {random: singleton2} = new Singleton();
const {random: singleton3} = Singleton.getInstance();
console.log(singleton, singleton2, singleton3);
console.log(singleton === singleton2, singleton2 === singleton3);

class WeekDays{
    daysEs = ['lunes', 'martes', 'miercoles', 'viernes', 'sabado', 'domingo'];
    daysEn = ['mondeay', 'tuesdays', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    constructor(lang){
        this.lang = lang;
        if(WeekDays.instance){
            return WeekDays.instance
        }
        WeekDays.instance = this
    }
    getDays = () =>  this.lang === 'es' ? this.daysEs : this.daysEn;
}

const weekDays = new WeekDays('es');
const weekDays2 = new WeekDays('en');

console.log(weekDays.getDays())
console.log(weekDays2.getDays())