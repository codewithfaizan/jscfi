// for loop 
// for (initialization, condition,incr/decr){
    // statement
// }


// -----------------------1-5 using for loop-------------------
// for(i=0;i<=5;i++){
//     console.log(i)
// }

//iteration-1: i=1; i<=5; 1
//iteration-2: i=2; i<=5; 2
//iteration-3: i=3; i<=5; 3
//iteration-4: i=4; i<=5; 
//iteration-5: i=5; i<=5; 1

//----------------------10 to 5 using for loop-----------------

// for (i=10;i>=5;i--){
//     console.log(i)
// }

// iteration-1: i = 10; 10>=1; true; '10'; 10-- = (9)
// iteration-2: i = 9; 9>=1; true; '9'; 10-- = (8)
// iteration-3: i = 8; 8>=1; true; '8'; 9-- = (7)
// iteration-4: i = 7; 7>=1; true; '7'; 8-- = (6)
// iteration-5: i = 6; 6>=1; true; '6'; 7-- = (5)
// iteration-6: i = 5; 5>=1; true; '5'; 5-- = (4)

//--------------------even number between 50 - 100-----------------

// for(i=50;i<=100;i++)
// {
//     if(i%2==0){
//         console.log(i)
//     }
// }

//same prog diff logic 

// for(let i=50;i<=100;i+=2){
//     console.log(i)
// }

//-------------------------WAP to print odd numbers from 1-100-----
// for(i=1;i<=100;i++){
//     if(i%2!=0){
//     console.log(i)
//     }
// }

//------another logic------
// for (let i=1; i<=100;i+=2){
//     console.log(i)
// }

//------------WAP to print multiplication table of 10 -----------
// for(i=1;i<=10;i++)
// {
// console.log(`10x${i}=${10*i}`)
// }

//-----table to print 2 to 5 using nested for loop-------------
// for(i=2;i<=5;i++){
//     console.log(`--------${i} Table------`)
//     for(j=1;j<=10;j++){
//         console.log(`${i}x${j}:${i*j}`)
//     }
// },

// -----------iterate over each characterbof a string using array and string------
//to print string character line by line 
// let a = "faizan";
// for (i = 0 ;i<a.length; i++){
//     console.log(a[i])
// }

// --------'code'--------c**o**d**e----------------
// let a = "code"
// d = ''
// for(i=1;i<a.length;i++) // i = i+"**"
// {   
//     d = d+'**'+ a[i]
    // console.log(`${a[i]}`+d)
// }
// console.log(a[0]+d)


// ----------------1,2,3,4 = '1234'----------------
// d = ''
// for ( i= 1; i <= 5;i++){
//         d = d+i
//     }
//     console.log(d)

//---------------------printing pattern------------
// d = ''
// for(i=1;i<=5;i++){
//     d=d+'*'
//     console.log(d)
// }
// 


//-----------------printing number pattern----------
// d = ''
// for(i=1;i<=5;i++){
//     d=d+i
//     console.log(d)
// 








// --------------------------------------------------------29-07-2001-----------------------------------------------


// --------- 1 -10 and 10 - 1---------------

// for (i=1;i<=10;i++){
//     console.log(i,(11-i)) //       
// }
//--------------------------------------
// for (let i=1;i<=10;i++){        //restricting i value only inside the for block
//     console.log(i, (11-i))

// }                       // i value cannot be used outside the block
//-------------------------------------

// for (let i = 1, j =10; i<=10, j>=1; i++,j--){       // using only for loop without logic
//     console.log(i,j)
// }
// ---------------------------

// yesterday's method
// let d = ''
// for(i=1;i<=8;i++){
//     d=d+i
//     console.log(d)
// }

// for using i and j
// for(let i=1,j=0;i<=8,j=0;i++,j++){
//     d=i+j
//     console.log(d)
// }
//------------------------------------
let d = '0'
for(i=0;i<=5;i++) {
    d=d+1
    console.log(d)
}
//--------------------------------
// d = ' '
// for(i=3;i>=1;i--){
    // d = d+' *'
//         for(let j=i;j>=1;j--){
//             d = d+' *'
//         } console.log(d)
// }
//---------------------------------

// d = ' '
// for(i=5;i>=1;i--){
//     d = ' *'+d
//     for(let j=i;j>=1;j--){
//         d = d+''
//     }console.log(d)
// }


//-------------------------------

// d = ''
// for(let i = 1; i<=5;i++){
//     for(let j=4;j>=i;j--){
//         d = d + '0'
//         {
//             for(let k=1;k<=i;k++) { 
//             d = d + ''
//             }
//         } // adding star in increasing
//     } // adding spaces in each lines in decreasing
//     console.log(d)
// }