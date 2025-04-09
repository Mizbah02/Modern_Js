// ` `

// function modifier(strings , ...values)
// {
//    let index=0;
//     const m = strings.reduce((prev,cur) => {

//       return prev+cur+(index < values.length ? "Mr." + values[index++] : "") ;
      
//     },"" );

//     return m ;
// }
// var m1="Mizbah";
// var m2="Tarif";

// console.log( modifier`Welcome ${m1} and ${m2}. `);

function modifier(strings, ...values) {
    const m = strings.reduce((prev, cur) => {
        return prev + cur + (values.length ? "Mr." + values.shift() : "");
    }, "");

    return m;
}

var m1 = "Mizbah";
var m2 = "Tarif";

console.log(modifier`Welcome ${m1} and ${m2}.`);
