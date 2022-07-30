// var a;
// a = 15;
// if (a<0){
//     console.log(`${a} is less than 0`);
// }else if((a>0)&&(a<=5)){
//     console.log(`${a} is in the range 0 - 5`);
// }else if((a>5)&&(a<=15)){
//     console.log(`${a} is the range 5 - 15`);
// } else if((a>15)&&(a<=20)){
//     console.log(`${a} is in the range 15 - 20`);
// } 

//-------------------------------------------------
// var a = 4, b = 5;
// if(a<=b) {
//     if(a == b){
//         console.log("a is equal to b")
//     } else {
//         console.log("a is less than b")
//     }
// }else {
//     console.log("a is greater than b")
// }

//---------------------------------------------
// var a = 0, 
// b = '0';
// if(a<=+b) {
//     if(a == +b){
//         console.log("a is equal to b")
//     } else {
//         console.log("a is less than b")
//     }
// }

// else {
//     console.log("a is greater than b")
// }

//------------------------------------------
// multiple of 3 and five
// var a= 16;
// if(((a%3)==0) || ((a%5)==0)){
//     if (((a%3)==0) && ((a%5)==0)){
//         console.log('fizz buzz')
//     }
//     else if (((a%5)==0)){
//         console.log('buzz')
//     }
//     else{
//         console.log('fizz')
//     }
// }
// else{
//     console.log('not a fizz buzz')
// } 

//-----------------------------------------

// multiple of 3 and multiple of 5 using nested if else // practise
// var a = 40;
// if (((a%3 == 0) || (a%5 == 0))) {
//         if((a%3 == 0) && (a%5 == 0)){
//             console.log("fizz buzz")
//         } else if (a%3 == 0){
//             console.log("fizz")       
//         } else {
//             console.log("buzz")
//         }
// } else {
//     console.log("NOt a fizz buzz")
// }
// -------------------- practise--------------------

// var a='2',b='5'
// if (+a && +b){
//     if (a<=b){
//         if (a<b){
//             console.log('a < b')
//         }
//         else{
//             console.log('==')
//         }
//     }
//     else{
//         console.log('a>b')
//     }
// }
// else{
//     console.log('NAN')
// }

//-----------------

// var a = '800', b = '2k5';
// if (+a && +b ){
//     if (a>=b){
//         if (a>b){
//             console.log("a is greater")
//         } else {
//             console.log("a and b are edqual")
//         }
//     }else{
//         console.log("b is greater than a")
//     }
// }else{
//     console.log("NaN")
// }