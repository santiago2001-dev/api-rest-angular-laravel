export class user {
    name : string 
    email : string 
    password : string 
    constructor(name : string,  email : string,password : string ){
        this.name = name
        this.email = email
        this.password = password
    }
}

export class credenciales {
    email : string 
    password : string 
    constructor(  email : string,password : string ){
        this.email = email
        this.password = password
    }
}