// do an async task 
// DB calls, cryptography, network 

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Async task is compelete");
         resolve()
    }, 1000);
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        // resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 is resolve");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "tanu", email: "tanu@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username: "mahima", email: "abc@gmail.com"})
        }
        else {
            reject('ERROR')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function() {
    console.log("The promise is either resolve or rejected");
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({username: "JavaScript", email: "abc@gmail.com"})
        }
        else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})



/* await */
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }
     catch (error) 
     {
        console.log(error);
    }
}

consumePromiseFive()

// fetch 

async function getAlluser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

getAlluser()

console.log("fetch using then and catch");

fetch('https://api.github.com/users/mahima9444')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) 
// .finally()