// // 1.try this for better understanding

// function helo(){
// console.log("hi1");
// setTimeout(()=>{
//     console.log("hello");
// },9000)
// console.log("hi2");

// console.log("hi2");
// console.log("hi3");
// console.log("hi4");}
// helo();
// helo();
// console.log("hijd3");
// console.log("hi4jdf");


// // 2.callback


// // "I will call back later!"
// // A callback is a function passed as an argument to another function
// // This technique allows a function to call another function
// // -->> A callback function can run after another function has finished <<--

// // When you pass a function as an argument, remember not to use parenthesis.
// // Right: myCalculator(5, 5, myDisplayer);✅
// // Wrong: myCalculator(5, 5, myDisplayer());❌

// // code👇

// function cback(){
//     console.log("hi iam call back function");
// }
// function fun(a,b,cbackfunc)
// {
//     console.log("hi am in function fun...next execution is callbackfunc",a,b,"....");
//     cback();
// }

// fun(1,2,cback);

// // fun(1,2,function cback(){
// //    console.log("hi iam call back function");
// //  })

// // setTimeout(cback,2000);
// // setTimeout(() => {
// //     console.log("hi iam call back function");
// // },2000);


// // 3.with and without callback  (sum is the call back function)

// function calsum(a,b,/*sum*/){
//     setTimeout(()=>{
// console.log(a,"+",b,"=");} ,2000);
// sum(a,b);
// }
// function sum(a,b)
// {
//     console.log(a+b);
// }
// calsum(2,3);



// // 4.promises

// let myprom1 = new Promise( (resolve,reject) => {
//    setTimeout(() => {
//     console.log("iam a promise1");
//     resolve("done");
//    }, 5000); 
// })
// console.log("p1...");
// let myprom2 = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//      console.log("iam a promise2");
//      reject("my bad not successfull");
//     }, 5000); 
//  })
//  console.log("p2...");
// // p1.then().catch()
// myprom1.then( (val) => {console.log('iam promise 1 and iam '+val);}).catch( (err) => { console.log("iam promise 1"+err)})
// myprom2.then( (val) => {console.log('iam promise 2 and iam '+val);}).catch( (err) => { console.log("iam promise 2 "+err)})

// //timer starts and executes parallelly


// //5.promise chaining

// let p1 = new Promise( (resolve,reject) => {
//    setTimeout(() => {
//     console.log("iam a promise1");
//     resolve("done1");
//    }, 3000); 
// })      

// p1.then((val)=>{
//     console.log(val);
//   return new Promise((resolve,reject) => {
//         setTimeout(() => {
//          console.log("iam a promise2");
//          resolve("done2");
//         }, 6000); 
        
//      }
//      ) 
// }).then((value) =>{
//     console.log(value);
// })

// console.log('value outside promise chaining');

// //  https://javascript.info/promise-chaining



// //  6.async and await

// https://javascript.info/async-await


 
