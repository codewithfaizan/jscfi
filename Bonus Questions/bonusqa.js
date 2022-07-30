// --------------------------------largest of three numbers---------------------------------
// -------------cases--------------
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

// case 3 8 1
// if ( a == b == c) {
//     console.log(`${a},${b},${c} are equal`)
// }

//  a  b   c
//  2  9  14 
//  14 > 9
//  14 > 2
//  9 > 2

// ---------------------------Program to get largest of three number----------------------------

// -----------testing------------
// var a = 2, b = 2, c = 2;
// if ((a>b) && (a>c)){ //
//     console.log(`${a} is greater`)
// } else if ((b>a) && (b>c)){
//     console.log(`${b} is greater`)
// }
// else {
//     console.log(`${c} is greater`)
// }


// -------------------------------------------------final------------------------------------------
// var a = 5, b = 8 , c = 1;
// if ((a>b) && (a>c)){ 
//     console.log(`${a} is greater`)
// } else if ((b>a) && (b>c)){
//     console.log(`${b} is greater`)
// }
// else {
//     console.log(`${c} is greater`)
// }

// ---------------------------------- multiplication table given from any number to any number--------
// ----------------------------------------test1--------------------------
// i = 1;
// count = 1;
// a = [2,3,4,5];
// while(i<=10){
//     if(a[0]%2 == 0){
//         console.log(`${a[0]}x${count}:${i*2}`);
//         count++;
//     }i++;
// }  // thiscode is printing only 2 table//-----------


// --------------------test2------------taking without array
// i = 1;
// count = 1;
// while(i<=20){
//     if(i%2 == 0){
//         console.log(`2x${count}:${i}`);
//         count++;
//           while(i<=30){
//              if(i%3 == 0){
//                console.log(`3x${count}:${i}`);
//                 count++;
//     }i++;
// } 
//     }

//     -----------------using nested while for printing 2 to 5 table-----------
//     i=2;
//     j=1;
//     while(i<=5){
//         console.log(`---------${i} Table----`)
//         j = 1;
//         while(j<=10){ 
//             console.log(`${i}x${j}:${i*j}`);
//             j++    
//         }i++
//     }