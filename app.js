// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//solution:
// var userInput = +prompt("Enter Positive Decimal number");
// var roundVal = Math.round(userInput);
// var floorVal = Math.floor(userInput);
// var ceilVal = Math.ceil(userInput);
// document.write("Round Function : ","<p>",roundVal,"</p>","<br />")
// document.write("Floor Function : ","<p>",floorVal,"</p>","<br />")
// document.write("Ceil Function : ","<p>",ceilVal,"</p>","<br />")


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//solution:
// var userInput = +prompt("Enter Negative Decimal number");
// var roundVal = Math.round(userInput);
// var floorVal = Math.floor(userInput);
// var ceilVal = Math.ceil(userInput);
// document.write("Round Function : ","<small>",roundVal,"</small>","<br />")
// document.write("Floor Function : ","<small>",floorVal,"</small>","<br />")
// document.write("Ceil Function : ","<small>",ceilVal,"</small>","<br />")

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


//solution:
// var input = Number (prompt("Enter a Number"));
// alert(Math.abs(input));


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.

//solution:
// var number = Math.floor(Math.random()*6+1);
// console.log("Dice Number : ",number);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//solution:
// var num = Math.floor(Math.random()*2+1);
// console.log(num);

// var coin ;
// if(num == 1){
//     coin ="Heads";
// }
// else{
//     coin ="Tails";
// }
//     console.log(num+" Coin is : "+coin);

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

//solution:
// var randomNum = Math.floor(Math.random()*100 + 1);
// console.log("Random Number b/w 1 to 100 : ",randomNum);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//solution:
//  var input = prompt("Enter Your Weight ");
//  console.log(input);
//  var weight = parseFloat(input);
//  console.log("Weight = ",weight);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

//solution:
    // var secNum = Math.floor(Math.random()*10+1);
    // console.log(secNum);

    // var inputNum = Number(prompt("Enter number b/w 1 To 10"));
    // if(secNum == inputNum){
    //     alert("Input Number is Equal \nYour Input is : " +inputNum);
    // }

    // else if(inputNum === 0){
    //     inputNum = 0;
    //     alert("Your Input is 0 & Not Match")
    // }

    // else{
    //     alert("Not Equal \n Your Input is : "+ inputNum);
    // }