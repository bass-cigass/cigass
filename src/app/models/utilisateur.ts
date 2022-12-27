export class Utilisateur {

    id !: number;
    nom !: string;
    prenom !: string;
    email !: string;
    tel !: string;
    isLogin !: number;
    isActive !: number;
    isVerified !: number;
    password !: string;
    roles !: string;
    
    constructor(
        id ?:any,
        nom ?:any,
        prenom ?:any,
        email ?:any,
        tel ?:any,
        isActive ?:any,
        isVerified ?:any,
        isLogin ?:any,
        password ?:any,
        roles ?:any
    ){

        this.email= email;
        this.id= id;
        this.nom= nom;
        this.prenom= prenom;
        this.roles= roles;
        this.tel= tel;
        this.isVerified =isVerified;
        this.isActive = isActive;
        this.isLogin = isLogin;
        this.password = password;
    
    }

    
}
