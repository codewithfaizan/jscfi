//Examples for getting started with javascript
// var is a keyword given to a variable
// var age = 20 
// const firstname = "Mohammed"
// bloodgroup = 'b+'
// const surname = "faizan"
// console.log(age, firstname, surname)
// ----------------------------------------------


//'use strict'
// var a; // declaring a variable i.e they are just declared and not initialised
// a = 10; //initializing variable a means defining it, storing a value in it 
// var a=11; //reinitialising a variable 
// console.log(a) //printing a 
//---------------------------------------


// var a =13;
// console.log(a);
// {
//     var a = 0;
//     console.log(a)
// }
// a = 8;
// a =9;
// console.log((a));
// var a = 18;
// console.log(a)

//--------------------------------
// a = ("23" + 40);
// console.log(a);

// a = Number()
// console.log(a)

// console.log('1'== 1)


//--------------------------------
// a = ''
// for(let i =1;i<=5;i++){
//     a = a + ' *'
//     console.log(a);
// }
//     console.log('------------');
// for(let j = 4;j>=1;j--)
// {
//     a = a + ' *'
//     console.log(a);
// }

//-----------------------------
// a = ''
// for(let i = 1;i<10;i++)
// {
//     a = a + ' *'
// console.log(a)
//     for(j=1;j<10;j++)
//         a = a + '*'
//             console.log(a);
// }
// console.log(a);
//---------------------------------



// j=1;
// while(j<=10){
//     console.log(`---Table of ${j}---`);
// i = 1;
// while(i<=10){
//     console.log(`${j}x${i}:${j*i}`);
//     i++
// }j++
// }
//-----------------------------------

//c**o**d**e**

// let a = 'code';
// d = ''
// for(i=1;i<a.length;i++){
//     d = d+'**'+a[i]
// }
// console.log(a[0]+d);

//-------------------

// let bootcamp = [ 'The', 'Hacking', 'School' ];
// console.log(bootcamp[2]);
// console.log(bootcamp.length);
// bootcamp.length = 2
// console.log(bootcamp);
// console.log(bootcamp[3]);

//---------------------

//Generate N even numbers
// let count = 0;
// let genEven = (num) =>{
//     let i=2;
// while(count < num){
//     console.log(i)
//     i+=2;
//     count++;
//     }
// }
// genEven(10);


// let genOdd = (num) =>{
//     let i=1;
//     let count = 0;
//     while( count < 10){
//         console.log(i)
//         i+=2;
//         count++;
//     }
// }
// genOdd(10);

// Write a program to decide given N is Prime or not.

let isPrime=(num)=>{
    if( num == 0 || num == 1) return false;
    else if( num%2 == 0 ) return false;
    else{
        for(let i=2; i<num; i++){
            if( (num % i) == 0) return false;
        }
    }
    return true
}
console.log(isPrime(17)) 