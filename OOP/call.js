function setUsername(username, age) {
    // complex DB calls
    this.username = username 
    this.age = age
    console.log("called");
} 

function newUser(city) {
    this.city = city
}

function createUser(username, age, email, password, city ){
    setUsername.call(this, username, age)
    newUser.call(this, city)
    // setUsername.call(this, age)

    this.email   = email
    this.password = password
}

const tanu = new createUser("tanu", "14", "tanu@fb.com", "9444", "surat")
console.log(tanu);