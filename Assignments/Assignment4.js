// Assignment Questions given on 27th July to be submitted on 30th july


// Confirm whether given number is a 3 digit number?

// Confirm whether given number is an 'N' digit number?

//  student > 75%
// if he has more than 75, allow to exam
// if he doesnt has ask for permission, if yes allow him, if not dont allow him

// Find whether a given number is a prime number or not?


// -----------------------------Confirm whether given number is a 3 digit number?
var a = 111;
a = '' + a
if(a.length == 3){
    console.log(`${a} is a 3 digit number`)
}else {
    console.log("Not a 3 digit number")
}


// ----------------------------Confirm whether given number is an 'N' digit number?

var a = 22222;
a = '' + a 

var digits = 5;
l = a.length

if(digits == a.length){
    console.log(`It is a ${digits} digit number`)
}
else{
    console.log(`Not a ${digits} digit number`)
}



//------------------------------------------if he has more than 75, allow to exam
// ---if he doesn't has ask for permission, if yes allow him, if not don't allow him
let attendence = 70;
var isAllowed = false;
if (attendence > 75){
    console.log("You can write the exam")
} else {
    console.log("Ask permssion to write Principal")
        if (isAllowed){
            console.log("You can write the exam")
        } else
        { console.log("You're not allowed to write the exam")}
}




//--------------------------------------- Find whether a given number is a prime number or not?
num = 15 ;
let found = false;
if(num<=0){
    console.log(`${num} is not a prime number`)
} else if (num == 1)
{console.log(`${num} is neither prime nor composite`)}
    else { 
         for(i=2;i<num;i++){
                if(num % i === 0){
                    console.log(`${num} is not a prime`)
                    found = true;
                    break;
                } 
        }
    }
    if (found == false) {
        console.log('Is a prime number')
    }

    // i1 = 2<5 ; false ; 5 is prime
    // i2 = 3<5 ; false ; 5 is prime
    // i3 = 4<5 ; false ; 5 is prime
