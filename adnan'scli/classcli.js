import readlineSync from "readline-sync";

import Encoding from "./srcencode.js";
import decoding from "./base64Decoding.js";

function main() {
    console.log("---------------------------")
    console.log("BASE 64 CLI APPLICATION");
    console.log("---------------------------")

    console.log(`Press 0 To Exit  
                \nPress 1 to Encode
                \nPress 2 to Decode\n`);

    let choice = readlineSync.questionInt("Please Select an Option from the Given Menu : ");
    while (!(choice >= 0 && choice <= 2)) {
        choice = readlineSync.questionInt("Invalid Option, Please Try Again : ");
    }
    switch (choice) {
        case 0:
            console.log("Thank you for Using our Application. Bye");
            break;
        case 1:
            console.log("The Encoded String is : ", Encoding());
            break;
        case 2:
            console.log("The Decoded Base 64 String is : ", decoding());
            break;
        default:
            console.log("Invalid Input");
            break;
    }
 let shouldContinue = readlineSync.question("Do you want to Continue ? (Y/n) : ");
    if (shouldContinue == "y" || shouldContinue == "Y" || shouldContinue == "yes") {
        main();
    }
    else {
        console.log("Thank you for Using our Application, Bye!");
    }
}
main();