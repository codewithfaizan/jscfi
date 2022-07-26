//Q1.---------------------------------- --Accept only interger , make a number always positive though given negative----------------------

// var a = Math.abs(7); //using function 
// console.log(a);

// var a = 5;
// a*=(-1); //not working
// console.log(a)

// without function 
//if the given number is -ve then a*=(-1) else print as it is.
// var a = -7;
// if(a<0){
// a*=(-1)  
// console.log(a)
// }else {
//     console.log(`${a}`)
// }

//Q.2 -----------------------A shop will give discount of 10% only if you purchase more than 1000 rupees.--------------------------------
// let items = 13 ;
// total = items*100;
// if (total > 1000){
//     console.log("Your bill is :",total*0.9)
// }else{
//     console.log(`${total}`)
// }

//Q3. ----------------------------------------------------------triangle is scalene/isoscelene/equilateral-----------------------------------
// check if it's a triangle == sides=3-
// isocelne : a =b , a = c
// scalene : a != b != c
// equilateral : a = b = c
//------------------------final test---------------------
// let a, b, c;
// a = 1;
// b = 4;
// c = 4;
// if ((a==b)&&(a==c)){
//    console.log("Equilateral triangle");
// } else if((a==b)|| (b==c)){
//     console.log("scalene");
// }else{
//     console.log("isoscelene");
// }

//-------------------check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?----------
//if it is a triangle or not 
//i) if lengths are given
// let a,b,c,d,e;
// a=2,b=2,c=2;
// sides = [a,b,c]
// count = sides.length;
// if(count==3)
//    {
//     if ((a==b)&&(a==c)){
//    console.log("Equilateral triangle");
//         } else if((a==b)|| (b==c)){
//     console.log("isosceles");
//     }else{
//     console.log("scalene");
//     } 
// }  
// else{
//     console.log("Not a triangle");
// }

//ii)taking coordinates 
// let x1=4,x2=8,x3=8;
// let y1=7,y2=10,y3=10;
// a=(((x2-x1)^2)-((y2-y1)^2))^1/2
// b=(((x3-x2)^2)-((y3-y2)^2))^1/2
// c=(((x3-x1)^2)-((y3-y1)^2))^1/2
// console.log(a,b,c);
// sides = [a,b,c]
// count = sides.length;
// if(count==3)
//    {
//     if ((a==b)&&(a==c)){
//    console.log("Equilateral triangle");
//         } else if((a==b)||(b==c)|| (a==c)){
//     console.log("isosceles");
//     }else{
//     console.log("scalene");
//     } 
// }  
// else{
//     console.log("Not a triangle");
// }


//Q4.Build Mini calculator having functionalities - *, /, +, - , %, squareroot, exponentiation, floor, ceil
// let a,b;
// prompt(console.log("Enter a:"));

// a+=b; console.log()


input = aaaaabbbbccaa
a=a.length;
console.log("a"+a.count)