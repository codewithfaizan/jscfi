// map ForEach
var numbers = [1,2,3,4,5] 
// the task is we have to double the elements in the array and store it in a new array/or upadte thr original a
var newAwithforEach = new Array;
numbers.forEach(function(value,index,array){
    // console.log(value,index,array);
    newAwithforEach.push(value * 2)
})

// console.log("newA:",newAwithforEach);


// the difference between map and for each is that
// map returns a new array 
// forEach doesn't return a new value/array

var newAwithmap = numbers.map(function(value,index,array){
    return value*2
})
// console.log(`newAwithmap:`,newAwithmap);

// map Vs filter Vs reduce Vs 

var arr = [1,2,3,4,5]

let mapResult= arr.map((x=>x+2))
console.log(mapResult);


