//  understanding map():  map is an array method where every element in the array runs a function

let array=[1,2,3,4,5]
// newarr = array.map((double =     num         =>      {return num*2}))
                // function name = parameter function {code/statement(logic)}
// console.log(newarr)


// example ------------------------------------------------------
let vals = [4,8,1,2,9] //  we took an array with some values in it 
function double(x){ // we wrote a function that will iterate over every element inside the array 
    return x*2
}               //we did not give the call back 
let newarray = vals.map(double)
//  the map is a method that creates a new array so here were taking a new variable 
        //  called newarray that will store the callback values for each elements of the original array 
// console.log(newarray);
// ---------------------------------------------------------------------------



// example----------------------------------
let values = [1,1,1,1]
values = values.map((n => n*2))
// console.log(values)
// ------------------------------------------

// example-----------------------------------
let number = [1,2,3,4]
let index;
const doublly = number.map(
    function multiple(value){

        return value*charCodeAt()});

console.log(doublly)