class SingletonTS{
    private static instance: SingletonTS;
    public random: number;
    private constructor(){
        this.random = Math.random(); 
    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singletonTS = SingletonTS.getInstance();
const singletonTS2 = SingletonTS.getInstance();
console.log(singletonTS.random);
console.log(singletonTS2.random);
singletonTS.random = 7;
console.log(singletonTS.random);
console.log(singletonTS2.random);