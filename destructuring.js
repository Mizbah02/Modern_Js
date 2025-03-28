//https://chatgpt.com/share/67e6b40f-b47c-800f-8bed-a662c9394af9


//swapping using 

        let a = 5,b=10;
        [a,b]=[b,a];
        console.log(a);
        console.log(b);



//working with object


    let obj = {
        name :"Mizbah",
        roll : 72,
        id   : 20701072,
        info :{
            road:"10/A",
        },
        
    };

        //simple 
        let {roll , id } = obj ;
        console.log(roll);

        //giving variable name explicitly 
        let {roll:Roll , id:ID } = obj ;
        console.log(ID);

        //nested object
        let { info:{road} }=obj;
        console.log(road);


        //default value
        /*const person = { name: "John" };

        const { name, age = 30 } = person;

        console.log(name); // "John"
        console.log(age);  // 30 (default value)
        */

//working with array

   //skipping value
    var arr=[1,2,3,4,5,6];
    const [,v1,,,v2]=arr;
    console.log(v1,v2);



    //nested array
    var ar1=[1,2,3,[4,5,6],10,11,12];
    var[,,,[,x,y]] = ar1;
    console.log(x,y);


//working with function