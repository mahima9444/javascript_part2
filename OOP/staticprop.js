class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`${this.username} is logged in`)
    }
    static createId(){
        return `123`
    }
}
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
const mahima = new User("mahima")
console.log(mahima.createId())









