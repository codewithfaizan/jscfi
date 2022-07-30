// a = 12; // define //by default
// a =13; 
// var a = 14; //declare and define 
// a = 10; // redefine
// console.log(a)

// var a;//declare a is variable

// a = 1; // define //not recommended
// a = 2; // redefine // not recomended
// console.log(a, typeof a);

// var = a; //not possible
// console.log(a)

// var a=1, b=2; //separated by commas
// console.log(a,b) 

//Scaler learning 
// var a = 1; // declare and define 

// var a;
// console.log(a);
// console.log(zxc) // throw reference erroe because zxc is not declared
 
// a = 'Whole' //
// console.log(a) 

///----------------------- Variable Hoisting -----------------------

// console.log(x); //output: undefined
// var x = 2;
// console.log(x); //output: 2

// Hoisting only moves the declaration to the top of the scope(either global or function)

//Global scope 
//   {
        // local scope
//   }


// var a=3     // variable is global scoped 
// console.log(a)
// {    
//     var a=4     // varibale is local scoped 
//     console.log(a)
// }

// var a=3;
// console.log(a);
// {    
//     var a=4
//     console.log(a)
//     a = 5; //redefined
// }
// console.log(a)



//--------------------------var and let-------------------

// let x = 1; //doesn't get added to the window object
// var y = 2; //gets added to the window object

// console.log(window.x); // output: undefined
// console.log(window.y);
//



