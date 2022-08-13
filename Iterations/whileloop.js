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
// var start=10, end=20;
// while (start<=end){
//     console.log(`------------${start} "\Table \" ------------`)
//     i=1
//     while(i<=10){
//         console.log(`${start} x ${i} = ${start*i}`)
//         i++
//     }
//     start++;
// }


// let a = 'Fly me to the moon'
// console.log(a.toLowerCase().split(' '));
// ini = words.map(a)
// console.log(ini)
    //----------------------------

// function getInitials(sentence) {
//     var words = sentence.toLowerCase().split(' ');
//     var initials = words.map(function(word) {
//     return word.charAt(0);
//     });
//     return initials.join('');
//     }
//     var result = getInitials('Fly me to the moon');
//     console.log(result)
    //------------------------------\

//     let text = "5";
// let padded = text.padStart(4,"x");
// console.log(padded);

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(4,"0");
// console.log(padded);

// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char);


// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char);

// let text = "HELLO WORLD";
// let char = text[4];
// console.log(char);

// var itemsForSale = [
//     { name: 'cheese', price: 3 },
//     { name: 'tv', price: 300 },
//     { name: 'socks', price: 2 },
//     { name: 'soft toy', price: 7 },
//     { name: 'fridge', price: 120 }
//     ];
//     function formatPrice(item) {
//     item.price = '£' + item.price + '.00';
//     return item;
//     }
//     var formattedItemsForSale = itemsForSale.map(formatPrice);
//     var result = formattedItemsForSale[1].price;
//     console.log(result);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  ;
// console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(fruits);


// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);
// console.log(fruits);

// function containsCarbon(compound) {
//     if (compound.indexOf('C') !== -1) {
//     return 'yes';
//     }
//     return 'no';
//     }
//     var result = containsCarbon('CO2');
// console.log(result);
    
// var you = {
//     happy: true,
//     knowsIt: false
//     };
//     function shouldClapHands(person) {
//     if (!(person.happy && person.knowsIt)) {
//     return false;
//     }
//     return true;
//     }
//     var result = shouldClapHands(you);

//     console.log(result);

//     function processStr(str) {
//         return str
//         .split('')
//         .sort()
//         .join('');
//         }
//         var result = processStr('made');
//         console.log(result);

//         var MAX_LENGTH = 5;
// function checkStr(value) {
// return value && value.length <= MAX_LENGTH;
// }
// var result = checkStr('pineapple');
// console.log(result);

// var vowels = ['a', 'e', 'i', 'o', 'u'];
// function countVowels(inputString) {
// var count = 0;
// for (var i = 0; i < inputString.length; i += 1) {
// var character = inputString.charAt(i);
// if (vowels.indexOf(character) !== -1) {
// count += 1;
// }
// }
// return count;
// }
// var result = countVowels('boolean');
// console.log(result);

// console.log(vowels.indexOf('o'));