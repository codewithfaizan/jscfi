// Assignment Questions given on 26th July 
// /Q1.---------------------------------- --Accept only interger , make a number always positive though given negative----------------------

// var a = Math.abs(-7); //using function 
// console.log(a);

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
// let items = 15 ;
// total = items*100;
// if (total > 1000){
//     console.log(`Your bill is : ${total*0.9}`)
// }else{
//     console.log(`${total}`)
// }

//Q3. ----------------------------------------------------------triangle is scalene/isoscelene/equilateral-----------------------------------
// check if it's a triangle == sides=3----------
// isocelne : a =b , a = c
// scalene : a != b != c
// equilateral : a = b = c

//-------------------check if its a triangle first and then Check whether a triangle is a scalene/isosceles/equilateral triangle?----------
//if it is a triangle or not 
// i) if lengths are given
// let a,b,c,d;
// a=15,b=15,c=35; 
// if (a + b <= c || a + c <= b || b + c <= a) // Triangle Inequality theorem
//    { console.log("It is a triangle")
//     if ((a==b)&&(b==c)){
//    console.log("Equilateral triangle");
//     }else if((a==b)||(b==c)||(c==a)){
//             console.log("Isosceles") }
//     else{
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
//      console.log(a,b,c);
//     if (a + b <= c || a + c <= b || b + c <= a)
//    { console.log("It is a Triangle")
//     if ((a==b)&&(a==c))
//     {
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

// var a = 9.5, b = 2.8; op = 'ceil'
// if(op=='+'){
//     result= a+b
    // console.log(result)
// }else if(op=='-'){
//     result = a-b
    // console.log(result)
// }else if(op=='*'){
//     result = a*b
    // console.log(result)
// }else if(op=='/'){
//     result=a/b
    // console.log(result)
// }else if(op=='%'){
//     result = a%b
    // console.log(result)
// } else if(op == 'sqrtroot'){
//     result = a**2
    // console.log(result)
// }else if(op == 'exp'){
//     result = a**b
    // console.log(result)
// } else if(op == 'floor'){
//     result = [Math.floor(a), Math.floor(b)]
    // console.log(result)
// }else if(op == 'ceil'){
//     result = [Math.ceil(a),Math.ceil(b)]
    // console.log(result)
// }
// console.log(result)

//Q5.---------------roots of quadratic equations---------
// let a,b,c, root1,root2;
// a= 7;
// b= 4;
// c= 2;
// d = b*b-4*(a*c);
//     root1 = (-b + (d)**1/2) / (2 * a);
//     root2 = (-b - (d)**1/2) / (2 * a);
//     console.log(`Root1 : ${root1} , Root2 : ${root2}`);
//     console.log(`d calculated is ${d}`)
// if (d > 0) {
//     console.log(`${d} > 0, so Roots are real and different`);
// }
// else if (d < 0){
//     console.log(`${d}< 0, so Roots are Complex`)
// } else if (d == 0){
        // console.log(`${d}==0, Roots are Equal`)
// }