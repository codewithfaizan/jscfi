// Initialization (Start value)
// while (Condition till it terminates-false){
        //  task/ Statement
// }

//------------program to print 1-10----------
// i=1  
// while(i<=10){              
//     console.log(i)
//     i++;
//     // i = i+1
//     // i+=1
// }


//iteration-1 : i = 1; 1<=10; 1 ; (2)
//iteration-2 : i = 2; 2<=0;  2 ; (3)
//iteration-3 : i = 3; 3<=10; 3 ; (4)
//iteration-4 : i = 4; 4<=10; 4 ; (5)
//iteration-5 : i = 5; 5<=10; 5 ; (6)
//iteration-6 : i = 6; 6<=10; 6 ; (7)
//iteration-7 : i = 7; 7<=10; 7 ; (8)
//iteration-8 : i = 8; 8<=10; 8 ; (9)
//iteration-9 : i = 9; 9<=10; 9 ; (10)


//-------------------program to print 10-1-------------------
// i=10                     
// while(i>=1){
//     console.log(i);
//     i--;
    // i = i+1
    // i-=1
// }

//-------program to print even number starting from 50 - 100
//  i = 50;
//  count = 0;
//  while(i<=100){
//     console.log(i);
//     i=i+2;
//     count++
//  }console.log(count)

//---------program to print odd number starting from 50-100
// i = 51;
// while(i<=100){
//     console.log(i)
//     i=i+2
// }

//----------------------even number using logic --------------
 
// i=50
// while(i<=100){
//     if((i%2)==0){
//     console.log(i);}
//     i++;
// } 
// console.log(i+2)
// i=i+2
// console.log(i)

 
//----------------------------multiples of 7-----------------
// i = 1
// while(i<=200){
//     if((i%7)==0){
//     console.log(i)}
//     i++;
// }

//--------to print 2 table using while loop
// i = 1;
// count = 1;
// while(i<=20){
//     if((i%2)==0){
//     console.log(`2x${count}=${i}`);
//     count++;
//     } 
//     i++;
// }

// same logic without declaring count
// i = 1;
// count = 0;/
// while(i<=20){
//     if((i%2)==0){
//     console.log(`2x${i}=${i*1}`);
    // count++;
//     } 
//     i++;
// }

// 3 table
// i = 1;
// count = 1;
// while(i<=30){
//     if((i%3)==0){
//     console.log(`3x${count}=${i}`);
//     count++;
//     } 
//     i++;
// }

// 4 table 
// i = 1;
// count = 1;
// while(i<=40){
//     if((i%4)==0){
//     console.log(`4x${count}=${i}`);
//     count++;
//     } 
//     i++;
// }

// 5 table
// i = 1;
// count = 1;
// while(i<=50){
//     if((i%5)==0){
//     console.log(`5x${count}=${i}`);
//     count++;
//     } 
//     i++;
// }

// bonus question test 
// i = 1;
// count = 1;
// a = [2,3,4,5];
// while(i<=10){
//     if(a[0]%2 == 0){
//         console.log(`${a[0]}x${count}:${i*2}`);
//         count++;
//     }i++;
// } 
// while(i<=10){
//     if(a[1]%2 == 0){
//         console.log(`${a[1]}x${count}:${i*3}`);
//         count++;
//     }i++;
// } 

//program to print the characters in a line
// a = 'Code';
// i = 0;
// while(i<=(a.length-1)){
//     console.log(`${a[i]}`);
//     i++;
// } 


// even char of the string 
// a = 'CodeForIndia'
// a = 'Code';
// i = 0;
// while(i<=(a.length)){
//     if(
//         (i%2 == 0))
//     console.log(`${a[i]}`);
//     i++;
// } 


//objects
// a ={1:'a',2:'b',3:'c',4:'d'};
// l = Object.keys(a);
// t = Object.values(a);
// console.log(l);
// console.log(t)
// console.log(l.length)
// i = 0;
// while(i<l.length){
//     console.log(`${l[i]} : ${t[i]}`);
//     i++;
// }

// while(l)

//
// i =10
// while(i>=1){
//     console.log(i);
//     i--;
// }





// -------table to print from 10 to 20-------
var start=10, end=20;
while (start<=end){
    console.log(`------------${start} "\Table \" ------------`)
    i=1
    while(i<=10){
        console.log(`${start} x ${i} = ${start*i}`)
        i++
    }
    start++;
}
