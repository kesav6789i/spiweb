// let arr=[1,2,3,4,5,6];
// let sum=0;
// for(let i of arr)
// {
//   sum+=i;
// }
// console.log("avg is",sum/(arr.length));

let t=prompt("enter a ___% off");
let a=[250,645,300,900,50];
for(let i=0;i<a.length;i++)
{
   a[i]-=(t*0.01);
   console.log(a[i]);
}
for(let i of a)
{
    console.log(i);
}
