// let num = ()=>{
//     console.log(10000);
// }

// //Single line inside function 
// let num1 = () => console.log(10000);

// //return in single line
// let num2 = () => 10;

// //with Parameter
// let num3 = (n)=>{
//     console.log(n);
// }

// //with single Parameter
 let num4 = n =>{
     console.log(n);
 }

var obj ={
    name :"Mizbah",
    siblings :["Samim" , "Yeasmin" , "Zia" , "TAsmin"],
    printSiblings:function () {
        this.siblings.forEach((a) =>
            console.log(`${a} is elder of ${this.name}`));
    },//here , we cannot use regular function ,bcz this inside a regular function does not automatically refer to the object (obj).
};


 num();
// num1();
// console.log(num2());
// num3(100);

obj.printSiblings();

