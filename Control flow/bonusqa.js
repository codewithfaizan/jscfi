// largest of three numbers

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
// } else if(a != b != c){
//     console.log(`no one is equal waste fellos`)
// }

//  a  b   c
//  2  9  14 
//  14 > 9
//  14 > 2
//  9 > 2


// Program to get largest of three number
//-----------testing------------
// var a = 2, b = 2, c = 2;
// if ((a>b) && (a>c)){ //
//     console.log(`${a} is greater`)
// } else if ((b>a) && (b>c)){
//     console.log(`${b} is greater`)
// }
// else {
//     console.log(`${c} is greater`)
// }

var a = 1, b = -5, c = -7;
if ((a>b) && (a>c)){ 
    console.log(`${a} is greater`)
} else if ((b>a) && (b>c)){
    console.log(`${b} is greater`)
}
else {
    console.log(`${c} is greater`)
}