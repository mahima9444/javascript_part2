const Descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(Descriptor);
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const tanu = {
    name: 'tanu',
    age:15,

    
    chai: function(){
        console.log("chai nhi bni");
    }
 }  

//  console.log(Object.getOwnPropertyDescriptor(tanu, "name"));

 const Define = Object.defineProperty(tanu, "name",{
    writable: false, 
    enumerable: false
 })

 console.log(Object.getOwnPropertyDescriptor(tanu, "name"));
 
for (let [key, value] of Object.entries(tanu)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}