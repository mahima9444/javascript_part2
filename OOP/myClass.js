// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// } 

// const tanu = new User("mahima", "tanu@fb.com", "123")
// console.log(tanu.encryptPassword());
// console.log(tanu.changeUsername());

// behind  the scene

function User(username, email, password){
  this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encryptPassword = function() {
    return `${this.password}pqr`
}

User.prototype.changeUsername = function() {
     return `${this.username.toUpperCase()}`
}

const abc = new User("abc", "abc@fb.com", "999")
console.log(abc.encryptPassword());
console.log(abc.changeUsername());