// ---------------------------------Program 
// ecide a given number is positive/negative/zero---------------------------------

// let a;
// a = 'hu';
//  if(a<0){
//     console.log("negative")
// }else if (a>0){
//     console.log("positive")
// }else {
//     console.log("zero")
// }

// 

// -----------------------------number is even or odd program--------------------==
// let a;
// a = 3;                   //even number if the remainder is only 0 when it is divided by 2 else odd
//  if((a%2) == 0){           //use braces that it will reduce the chances of giving output wrong even if it is correct because of the precedence
//     console.log("even")
//  } else {
//         console.log("odd")
//  }


//--------------------------------------------------conditions---------------------


//------------- program to decide which number is greater? // largest of two numbers

// first find all the possibility that the question can take
// be good at the logic + typing + syntax } good programmer

// var a = 10,b = 8;
// if (a>b){
//     console.log(`${a} is greater`)
// }
// else if (a<b){
//     console.log("b is greater")
// } else {
//     console.log("the values are equal")
// }



//---------------------program to check the given number is multiple of 3 and multiple of 5 or both or not---------------------
// multiples of 3 and multiples of 5
// var a= 15;
// if ((a%3) ==0){ //
//     console.log("fizz") // if correct it prints

// } if ((a%5)== 0) {
//     console.log("buzz");  // if correct it prints

// } if (((a%3)!=0) && ((a%5)!=0)) {
//     console.log("not a multiple of 3 and 5") // if correct it will not prints

// }
// if (((a%3) == 0) && ((a%5) == 0)) {
//     console.log("a multiple of 3 and 5"); // if correct it prints
// }

// case :

// var a = 5;
// if ((a%3) ==0){ 
//     console.log("fizz")
// } else if ((a%5)== 0){
//     console.log("buzz");
// } else if (((a%3)!= 0) && ((a%5)!=0)){
//     console.log("not a multiple of 3 and 5")
// }
// else if (((a%3)== 0) && ((a%5)==0)){
//     console.log("a multiple of 3 and 5")
// }


// case:

// a = 23
// if (((a%3)==0) && ((a%5)==0)){
//     console.log('Fizz Buzz')
// }
// else if ((a%5)==0){
//     console.log('Buzz')
// }
// else if (((a%3)==0)){
//     console.log('Fizz')
// }
// else{
//     console.log('Not a fizz buzz')
// } 

//----------------------------------------Example Algorithms-------------------------------
// -----------------------------------largest of three numbers--------------------------------
// let a, b, c;
// a = 3;
// b = 8 ;
// c = 1 ;
// case : 1 2 3
// if (a>b){
//     console.log(`${a} is greater`);

//      } else if (b>c){
//         console.log(`${b} is greater`);
//     } 
// else {
//     console.log(`${c} is greater`);
// }

// case : 3 8 1
// if ((a>b) && (a>c)){
//     console.log(`${a} is greater`);
//     } 
//     else if ((b>a) && (b>c)) {
//         console.log(`${b} is greater`);
//      } 
//      else if ((c>b) && (c>a)) {
//         console.log(`${c} is greater`);
//     }

// case: 3 8 1 
// if ((a>c) && (b>c)){
//     console.log(`${a}, ${b} are greater`);
// } else if ((a>b) && (c>b)){
//     console.log(`${a}, ${c} are greatest`)
// }else if ((c>a) && (b>a)){
//     console.log(`${c},${b}`)
// }

// case 8 3 1
// if ( a == b == c) {
//     console.log(`${a},${b},${c} are equal`)
// } else if(a != b != c){
//     console.log(`no one is equal waste fellos`)
// }

//  a  b   c
//  2  9  14 
//  14 > 9
//  14 > 2
//  9 > 2

//  var a = 5, b = 1, c = 9;
// if ((a>b) && (a>c)){ //
//     console.log(`${a} is greater`)
// } else if ((b>a) && (b>c)){
//     console.log(`${b} is greater`)
// } else {
//     console.log(`${c} is greater`)
// }


// sides = new Array(1,2,3);

//..--------------------scope---------------
// var a = 8
// {
//     console.log(a)
//     {
        // console.log(b)
        // const b = 9
//         console.log(a+"1")
//     }
//     console.log(a+"2")
    // let a =99
// }
// console.log(a+"4")

//---------------------//------given number is a 3 digit number??-----------

// let num = (111);
// console.log(num.length)
// if (a.length == 3)


//----------------------calculatortest------------

var a = 9.5, b = 2.8; op = 'ceil'
if(op=='+'){
    result= a+b
    // console.log(result)
}else if(op=='-'){
    result = a-b
    // console.log(result)
}else if(op=='*'){
    result = a*b
    // console.log(result)
}else if(op=='/'){
    result=a/b
    // console.log(result)
}else if(op=='%'){
    result = a%b
    // console.log(result)
} else if(op == 'sqrtroot'){
    result = a**2
    // console.log(result)
}else if(op == 'exp'){
    result = a**b
    // console.log(result)
} else if(op == 'floor'){
    result = [Math.floor(a), Math.floor(b)]
    // console.log(result)
}else if(op == 'ceil'){
    result = [Math.ceil(a),Math.ceil(b)]
    // console.log(result)
}
console.log(result)