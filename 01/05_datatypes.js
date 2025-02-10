// primative data types 
// 7 types : string,boolean,number ,null ,undefined,symbol,BigInt

const id = 1 ;
let name = "shubham ";
let score = 33.3;
let temp = null;
let partner; 

// Reference (Non primative datatypes)
// Array ,objects ,Functions

//Array 
const heros =['samosa','raga','saktiman'];
console.log(heros)

// objects 

let myobj = {
    name : "shivam"
}
//functions 
const myfunction = function(){
    console.log('helloo');
}



//memory types
//Stack (primitive),Heap (non primitive) 



let myname = "shubham"

let anothername =myname
anothername= "shub"

console.log(myname);
console.log(anothername);