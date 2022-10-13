/*

// async&& await function//
function s(b){
    return new Promise((res,rej)=>{
setTimeout(()=>{
    res()
    console.log(b)
},2000)
   
    })
    
}
function a(){
    return new Promise((res,rej)=>{
        res()
        console.log("jk")
    })
}
async function sum(){
    try{
       
        await s(10)
        await a();
    }
    catch{console.log("error");}
    
   
}
sum()

//spread&&rest//
// spread 

let y={namer:"simeon",age:22};
// console.log({y.namer});
// let {namer}=y;
// console.log({namer});

let n=JSON.parse(JSON.stringify(y.namer))
console.log(n);


// arrow function//
let products=[
    {mobile:"oppo",price:18000},
    {mobile:"vivo",price:18000},
    {mobile:"samsung",price:18000}
]
let result=products.find((order)=>{
return order.mobile==="samsung"
})
console.log(result);

// normal function//
let product=[
    {mobile:"oppo",price:18000},
    {mobile:"vivo",price:18000},
    {mobile:"samsung",price:18000}
]
let results=product.find(function(order){
return order.mobile==="vivo"
})
console.log(results);

// Template Literals//

const names="aruljk";
const ages=25
console.log(`names ${ages}`)


// destructuring//
let app=[1,2,3,4,5,6,7,8,9]
let [m,j,b,v,c,x,z] =app;
console.log(m,j,b,v,c,x,z);


let app1={
    bike:"ktm",
    price:250000,
}
let {bike,price}=app1;
console.log(bike,price);
*/

import { a } from "./main2.js";
console.log(a);


class per{
    name;
    year;

    constructor(name,year){
this.name=name;
this.year=year;
    }
}
const ps=new per("arul",1997)
console.log(ps);

let l=prompt("enter the number")
for(i=0;i<l;i++){
    if(i%2){
  console.log(i);
    }
// console.log("odd number")
}


