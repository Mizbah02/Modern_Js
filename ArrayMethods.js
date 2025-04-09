


// arr.find( function(currentValue , currentIndex , arr) , this ) 
//arr.findIndex()
//arr.filter()
//arr.slice()
//arr.splice()
//arr.concat()
//arr.push()
//arr.map()
//arr.reduce()
//copyWithin(target , start , end )

class my{
    constructor(name , age){
        this.name = name ;
        this.age = age;
    }

    test()
    {
        console.log("Mizbah");
    }

    showNAme()
    {
        let arr =[1,2,3];
        /*arr.find(function(){
            this.test();
        } , this);
        */

        // using arrow function 
        
        arr.find( () => {
            this.test();
        } );

    }
}

let s = new my("Mizbah", 20);
s.showNAme();

//map()
let numbers = [1,2,3,4,5];
let res = numbers.map( (num)=>{
    return 2*num ;
});

console.log(res);


//reduce()
let sum = numbers.reduce((pV, cV) =>
{
   return pV+cV;
} , 0);

console.log(sum);
