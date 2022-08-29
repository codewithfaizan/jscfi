//javascript 

// var a = 10;
// console.log(a);

// var a = 2;
// function square(a){
//     console.log(a*2);
// }
// square(2)




// let a = "hello";

// function greet() {
//     let b = "World"
//     console.log(a + b);
// }

// greet();
// console.log(a + b);

// program showing block-scoped concept
// global variable
// let a = 'Hello';
// function greet() {

//     // local variable
//     let b = 'World';
//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }
//     // variable c cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }
// greet();

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  //TypeError: invalid assignment to const `number'
}

console.log(number);