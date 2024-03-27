#! /usr/bin/env node


import inquirer from "inquirer"

// // 1) computer will generate a random number.    done

// // 2) User input for guessing number.            done     

// // 3) compare user input with computer generated number and sow result.    done


 const randomNumber = Math.floor(Math.random() * 10 + 1);
 
const answers = await inquirer.prompt([
    
      {
       name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
      },
     ]);
     
    if(answers.userGuessedNumber === randomNumber ) {
        console.log("Congtratulation! you guessing right number.");
    } else {
       console.log("You guessed wrong number");
    }
