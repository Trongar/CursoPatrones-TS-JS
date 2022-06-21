interface Strategy{
    login(user:string, password:string):boolean;
}
class LoginContext{
    private strategy: Strategy;
    constructor(strategy:Strategy){
        this.setStrategy(strategy)
    }
    setStrategy(strategy:Strategy){
        this.strategy = strategy;
    }

    login = (user:string, password:string):boolean => 
        this.strategy.login(user, password);
}
class LoginDBStrategy implements Strategy {
    login = (user:string, password:string):boolean => {
        console.log("nos dirigimos a la base de datos");
        return (user === 'admin' && password === 'entrar')
    };
}
class LoginServiceStrategy implements Strategy {
    login = (user:string, password:string):boolean => {
        console.log("nos dirigimos a un servicio de autentificación");
        return (user === 'admin' && password === 'entrar')
    };
}
class LoginGoogleStrategy implements Strategy {
    login = (user:string, password:string):boolean => {
        console.log("nos dirigimos a un servicio de Google para autentificación");
        return (user === 'admin' && password === 'entrar')
    };
}
const auth = new LoginContext(new LoginDBStrategy());
const res = auth.login('admin', 'entrar');
auth.setStrategy(new LoginServiceStrategy());
auth.login('admin', 'entrar');
auth.setStrategy(new LoginGoogleStrategy());
auth.login('admin', 'entrar');
