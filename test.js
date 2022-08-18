// function multiply(opr1,opr2){
//     let result = opr2;
//     console.log(opr1,opr2);
//     while(opr1>1){
//         opr1 = Math.floor(opr1/2)
//         opr2 = opr2*2
//         // console.log(opr1,opr2);
//     if(opr1%2!=0){
//         result += opr2
//         console.log(opr1,opr2);
//     }
//     else {
//         console.log(opr1,opr2,"*");} 
    
// }
// return result
//     }

// output = multiply(13,11)
// console.log('------');
// console.log(' ',output);


var arr = new Array (5,17,13,9)
const prepend = (num) => {
num = num.toString()
for(i=0;i<num.length;i++){
if(num[i].length>1){ 
} else {
    num = num[i].padStart(2,"0")
}
}return num
 }
console.log(prepend(arr));

// let a = "1"
// a=a.toString()
// a = a.padStart(3,"0")
// console.log(a);