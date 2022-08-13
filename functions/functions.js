// practise 
// ASCII to character
// String.fromCharCode(68) //this is a method that returns a string created from 
// the specified sequence of UTf-16 codes
// console.log(String.fromCharCode(68,67,66,65));
// console.log(String.fromCharCode(70,65,73,90,65,78));


// let a ="FAIZAN"
// am = a.charCodeAt(2) // this method returns the unicode of the character
// // at a specified index position in a string
// console.log(am);

//function ----------------------

// A function is a block of code made to perform a particular task. It is executed only when it is invoked or called
// function name(parameter){   // defined with the function keyword followed by the name followed by parantheses()
    //statement 
// }
// name(args)

// function mult(a,b){
//     console.log(a*b)
//     return;
//     console.log(a+b); // code to be executed
// }
// mult(2,4)

// let x = myfunction(10,10)

// function myfunction(a,b){
//     console.log(a/b);
//     return;
    // console.log(a*b);
// }
// console.log(myfunction(10,10)); // 1

// myfunction(10,10)

// function is declared once, define code once and the code is used many times and with different arguments

// function toCelsius(fahrenheit) {
//     console.log(5/9)*(fahrenheit-32)
// }
// toCelsius()

//function can be used a variable value 

// function add(a,b){
//     console.log(a+b)
// }
// add(1,11)


//  even-----------------------
// function even(a)
// {
//     for (i=1;i<=a;i++)
//     {
//     if ((i%2)==0)
//         {
//         console.log(i,'is even')
//         }
//     }
// }
// even(8);
// i

//odd--------------------------
// function odd(num){
//     for(i=1;i<=num;i++){
//         if(i%2!=0){
//             console.log(i,'is odd');
//         }
//     }
// }

// odd(10)

//multiple of 2 ------------------
// function mult(num)
// {
//     for(let i=1;i<=10;i++){
    // return
//         console.log(`3x${i}:${i*3}`)
//     }
// }
// mult(2)

//------------------------------------------------
//multiple t from 2 to 5---------
// function  mult(num1,num2){
//     for(i =2;i<=5;i++){
//         console.log(`--------${i} Table ------`);
//         for(j=1;j<=10;j++){
//             console.log(`${i}x${j}:${i*j}`);
//         }
//     }

// }
// mult(2,5)
//-------------------------------------------------

// function even(a)
// {
//     for (i=1;i<=a;i++)
//     {
//     if ((i%2)==0)
//         {
//        console.log(i,'is even'); 
//         }
//     }   
// }
// even(15)
//------------------------------------------------------

// let n1 = 2;
// let n2 = 2;
// function sum (n1, n2){
//     add = n1 + n2
//     return add;
// }
// result = sum(n1,n2)

// // console.log(sum(3,3))
// console.log(result);

// / Function without parameters
// function add(){
//     console.log(2+3)
// }
// // console.log(add())

// add()

//date-----------------------

// const d = new Date()
// console.log(d);
// const e = new Date(2018, 11, 24, 10, 33,);
// console.log(e);

// const f = new Date(99, 11, 24);
// console.log(f);

// const g = new Date(22, 11, 24);
// console.log(g);

// const d = new Date("2017-01-01");
// console.log(d);

// const e = new Date("2001-09-23")
// console.log(e);

// const f = new Date("2015-03-25T12:00:00Z");
// console.log(f);

// const g = new Date("Mar 25 2015");
// console.log(g);


// const d = new Date();
// ;


// const d = new Date();

// console.log(d.getMonth());

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// console.log(d);
// let month = months[d.getMonth()];
// console.log(months);

// const d  = new Date();
// let month = months[d.getMonth()];
// console.log(month);

// const d = new Date();

// console.log(d.getDate());