

let arr = [1,2,3,4];
let newArr =[...arr, 5 ,6,7];

let arr1 = [...arr];         //copy of arr , no reference involved .

/*
   let arr1 = arr;
   arr.push(10);          // it will also impact arr1
   console.log(arr1) 
*/

console.log(newArr);

//we  can also use spread operator for object .
//also do a study on rest operator .
