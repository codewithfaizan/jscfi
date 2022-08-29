import readlineSync from "readline-sync"
function decoding(){
let inputString=readlineSync.question(`Enter the string you want to decode:`)
console.log(input);

while(!inputString){
    // bydefault if there's no empty string the value is false
     inputString = readlineSync.question(`Input cannot be Empty, Type again:`);
}
// console.log(input);
const base64regeX = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/

while(!inputString||(!(base64regeX.test(inputString)))){
    console.log(base64regeX.test(inputString));
    inputString = readlineSync.question(`Invalid Input, Please Try again:`)
}
console.log(inputString);
let splitString = inputString.split("");
console.log(splitString);


}
// decoding()

export default decoding;