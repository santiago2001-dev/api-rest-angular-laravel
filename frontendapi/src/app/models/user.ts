export class user {
    name : string 
    email : string 
    password : string 
    city : string 
    address : string 
    birthdate : string
    constructor(name : string,  email : string,password : string,  city : string ,address : string , birthdate : string ){
        this.name = name
        this.email = email
        this.password = password
        this.city = city
        this.address = address
        this.birthdate = birthdate
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