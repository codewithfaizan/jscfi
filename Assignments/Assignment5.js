// *
// * *
// * * *
// * * * *
// * * * * *

// a = ''
// var i,j;
// for(let i=1;i<=5;i++){
//             a = a + ' *'
//     console.log(a)
// }

//----------------------------------

// * * * * *
// * * * *
// * * * 
// * *
// *

// a = ''
// for(i=4;i>=0;i--){
//   a = ''
//   for(j=i;j>=1;j--){
//     a= a+' *'
//   }console.log(a);
// }

//---------------------------------

//     *
//    ***
//   *****
//  *******
// *********

// n = 5
// s = ''
// for (i = 1; i <= n; i++){
//     for (j = i; j <= n; j++){
//         s+=' '
//     }for (j = 1; j <= i; j++){
//         s+='*'
//     } for (j = 1; j < i; j++){
//         s+='*'
//     }
//      s += '\n'
// }    console.log(s)

//-----------------------------------

// *********
//  ******* 
//   *****  
//    ***   
//     *

// n = 8
// a = ''
// for (let i = n; i >= 1; i--){
//     a =''
//     for (let j = i; j <= 7; j++){
//         a = a + ' '
//     }for (let k = 1; k<= i; k++){
//         a =  a+' *'
//     }
//      console.log(a)
// }

//-----------------------------------

// 1
// 11
// 111
// 1111
// 11111

// d = ''
// for(i=1;i<=5;i++){
//     d = d + '1'
//     console.log(d);
// }

//----------------------------------

// 1
// 12
// 123 
// 1234
// 12345
// 123456
// 1234567
// 12345678

// d = ''
// for(i=1;i<=8;i++){
//     d = d + i
//     console.log(d);
// }

// -------------------------------

// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1

// for(i=2;i<=10;i++){
//   console.log(`${i} ${11-i}`);
// }


//---------------------------------------

// 1
// 22
// 333
// 4444
// 55555

// for(i=1;i<=5;i++){
//   a=''
//   for(j=i;j>=1;j--){
//     a = a+i+''
//   }console.log(a);
// }


//---------------------------------------

// 54321
// 4321
// 321
// 21
// 1
// a = ''
// for(i=5;i>=1;i--){
//   a = ''
//   for(j=i;j>=1;j--){
//     a= a+i
//   }
//   console.log(a);
// }


//--------------------------------------

// 1
// 2 3
// 4 5 6 
// 7 8 9 10
// 11 12 13 14 15

// count = 1
// for(i=5;i>=1;i--){
//   a = ''
//   for(j=i;j<=5;j++){
//     a = a+count+" "
//     count++
//   }console.log(a);
// }

//-----------------------------------

// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15

// count = 1
// for(i=1;i<=5;i++){
//   a =''
//   for(j=i;j<=5;j++){
//     a = a +count+'  '
//     count++
//   }console.log(a);
// }
 
//--------------------------------------

// 1
// 2 4
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100

// for(let i=1;i<=10;i++){
//     temp = ''
//     for(let j =1;j<=i;j++ )
//     {
//         temp = temp + (i*j) + " "
//     }
//     console.log(temp);
// }

//-----------------------------

// A
// AB
// ABC
// ABCD
// ABCDE

// d = ''
// a = 'ABCDE'
// for(i=0;i<=4;i++){
//     d = d + a[i]
//     console.log(d);
// }

//------------------------------------------
//     A
//    ABC
//   ABCDE

//  a = ''
// for(i=1;i<=3;i++){
//   for (j = 0; j < 3- i; j++) 
//   {
//     a= a+ ' '
//   }
//   for (j = 0; j < (2 * i - 1); j++)
//   {
//     a+=String.fromCharCode(j + 65)
//   }
//     a+='\n'
//   }
//   console.log(a)
//------------------------------------------
// A 
// A A 
// A A A 
// A A A A 
// A A A A A

// d = ''
// for(i=1;i<=5;i++){
//     d = d + ' A'
//     console.log(d);
// }

//---------------------------------------=----------------End of Patterns------------------=----------------------------------



// Find the cube root of a number ?
// Write a  program that will accept the base and height of a triangle and compute the area?
// Write a  program to compute the distance between the points (x1, y1) and (x2, y2)?
// Write a  program to calculate body mass index?
// Write a  program to filter the positive numbers from a list?
// Write a  program to test whether a passed letter is a vowel or not?

//-------------------cube root of a number----------------
// function cube(n){

//   return n**(1/3)
// }
// console.log(cube(9));


// ---------------------program that will accept the base and height of a triangle and compute the area------------------

// function par(b,h){
// if(b>=1 && h>=1) 
//   area = (b*h)/2
//   console.log(area);
//   return area; 
// }
// par(4,5)

//------------------------program to compute the distance between the points (x1, y1) and (x2, y2)--------------


// let a = [6,3] // a = [x1,x2]
// let b = [6,3] // b = [y1,y2]

// function distance (d)
// {

//   d = ((a[1]-a[0])**2+(b[1]-b[0])**2)**(1/2)
//   return `distance : ${d}`;
// }

// console.log(distance());

//-------------------Theory-----------
// x1=1; x2 =3;
// y1 = 6; y2 = 3
// distance = ((x2-x1)**2 + (y2-y1)**2)**(1/2)
// distance = ((a[1]-a[0])**2+(b[1]-b[0])**2)**(1/2)


//----------------------------Write a  program to calculate body mass index?--------------------------
// let w = 65;
// let h = 1.6;

// function bmi(w,h){
//   bmiformula = w/(h)**2
//   return `bmi : ${bmiformula}`;
// }
// console.log(bmi(65,1.5));
// console.log("weight in kgs ; height in mts");


//-------------------------program to filter the positive numbers from a list-------------------------
// let a = [3,4,-1,4,0,-1,6,-4,-6]
// b = a.sort()
// function filterOut(){
// while (i=0,i<=(b.length)){
//     if(b[i]>0)
//   } i++
//   return b[i]
// }
// console.log(filterOut())   // notworking



// let array = [3,4,-1,4,0,-1,6,-4,-6];
// filterOut=''
// for(i=0;i<=array.length;i++){
//     if(array[i]>0){
//     filterOut=filterOut+array[i] + ' '
//     }
// } console.log(filterOut)

//------------------program to test whether a passed letter is a vowel or not------------------
// a = ['a','e','i','o','u']
// b = ['A','E','I','O','U']
// function vowel(par) 
// {
//     for (i=0;i<=a.length;i++)
//     {
//         if(par == a[i] || par == b[i]) 
//         return ('It is a vowel');
//     } 
//     return ("Not a vowel")
//  }
// console.log(vowel('E'));

