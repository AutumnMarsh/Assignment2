// Assignment 2 Part 2 - Autumn Marsh

// PART 1 ---------------------------
// step 1
/*
var number = prompt("Enter a number", "...");
    console.log(Math.abs(number));
 

// step 2
var number = prompt("Enter a decimal number", "7.345");
    console.log(Math.ceil(number));

// step 3
var number = prompt("Enter a decimal number", "7.345");
    console.log(Math.floor(number));


// step 4 
var text = prompt("Enter 5 numbers separated by decimals");
var numbers = text.split(",");
var myMin = Math.min.apply(Math, numbers);
var myMax = Math.max.apply(Math, numbers);
//console.log(myMin);
//console.log(myMax);
    console.log("mathMin is: " + myMin + " and mathMax is: " + myMax);



// step 5
var aNumber = Number(prompt("Enter a number"));
    //console.log("Your number is the square root of " + aNumber * aNumber);
// alternatively
var sqRoot = Math.sqrt(aNumber);
//console.log(sqRoot);
console.log("Your number is the square root of " + sqRoot + ".");



// PART 2 ---------------------------
// step 6
var today = new Date();
    console.log(today.getDate());


// step 7 Still stuck. Directions: Get month, get # of days in that month
var m = new Date();
var thisMonth = m.getMonth()+1;
    console.log(thisMonth);

for (i = 1; i <= 31; i++) {
    console.log(thisMonth);
}
  

// step 8
var monthName = [];
monthName[0] = "January";
monthName[1] = "February";
monthName[2] = "March";
monthName[3] = "April";
monthName[4] = "May";
monthName[5] = "June";
monthName[6] = "July";
monthName[7] = "August";
monthName[8] = "September";
monthName[9] = "October";
monthName[10] = "November";
monthName[11] = "December";
var m = new Date();
var thisMonth = (m.getMonth());
    //console.log(thisMonth);
    console.log(monthName[thisMonth]);
  

// step 9
var d = new Date();
var d = (d.getDay());

    if (d == 0 || d == 6) {
        console.log("It's the weekend");
    } else {
            console.log("It's a weekday");
    }


// step 10 
var yesterday = new Date();
var yesterday = yesterday.getDay()-1;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(days[yesterday]);

 
// step 11
var today = new Date();
var today = today.getDay();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var todayName = (days[today]);
    console.log(todayName.slice(0, 1));


// PART 3 ---------------------------
// step 12
var firstInt, secondInt;
firstInt = prompt("Enter an integer");
secondInt = prompt("Enter a second integer");
    console.log(Math.max(firstInt, secondInt));


// step 13 *NEED HELP
var students  = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
var score = [80, 77, 88, 95, 68];
var grade;

    for (var i=0; i <= score.length; i++) {
        switch(true) {
            case [i] < 60:
                grade = "F";
                break;
            case [i] < 70:
                grade = "D";
                break;
            case [i] < 80:
                grade = "C";
                break;
            case [i] < 90:
                grade = "B";
                break;
            case [i] < 100:
                grade = "A";
                break;
            default:
                grade = "None";
        }
    }

    console.log(students[i] + " " + grade);


// step 14
var i;
for (i=1; i<=15; i++) {
    if(i%2!=0) {
        console.log(i + " is odd");
    } else {
        console.log(i + " is even");
    }
}

/*



// step 15 FizzBuzz done two ways:
var i;
for (i=1; i<=100; i++) {
    if (i%15===0) {
        console.log(i + " FizzBuzz");
    } else if 
        (i%3===0) {
        console.log(i + " Fizz");
    } else if
        (i%5===0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}


var i;
for (i=1; i<=100; i++) {
    switch(true) {
        case i%3===0 && i%5===0:
            console.log(i + " FizzBuzz");
            break;
        case i%3===0:
            console.log(i + " Fizz");
            break;
        case i%5===0:
            console.log(i + " Buzz");
            break;
        default:
            console.log(i);
            break;
    }
}


// Part 4 --------------------------------
// step 1
var ready = confirm("Are you ready to play?");

    if (ready == true) {
        alert("Awesome, our hero is waiting!");
    } else {
        alert("Too bad, we're going to play anyway because our hero desperately needs your help!");
    }


// step 2
var intro = alert("You are in a dark, dingy and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall...");


// step 3
var direction = prompt("Which direction would you like to head?", "Choose forward, left or right");

   switch(true) {
       case (direction=="[/forward/i]"):
            alert("You walk about 100 yards and safely make your way out of the cave");
            break;
       case (direction=="[/left/i]"):
            alert("Your thirst has gotten the better of you. You trip on a rock, hit your head and fall into a pool of water and drown.");
            break;
       case (direction=="[/right/i]"):
           alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
           break;
       default:
           alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for the lifeless lowlifes for not choosing the correct option...nice try.");
   }



// step 5
var rate = prompt("Please rate the game on a scale of 1 to 10", "10");

    if (rate >= 6) {
        alert("Thank you, we will continue to make improvements to the game!");
    } else {
        alert("Whatever, you weren't very good at this game, anyway!");
    }

 // step 6
var rate = prompt("Please rate the game on a scale of 1 to 10", "10");
    
    if (rate != (1||2||3||4||5||6||7||8||9||10)) {
        rate = 10;
        //alert(rate);
    };

    if (rate >= 6 && rate <=10) {
        alert("Thank you, we will continue to make improvements to the game!");
    } else {
        alert("Whatever, you weren't very good at this game, anyway!");
    };


// PART 5
// step 1
var coinFlip = Math.random();
// step 2
var choice = prompt("Choose Heads or Tails");
console.log(choice);
// step 3, 4, 5, 6, 7 
    
    if (coinFlip <= .49) {
        var heads = "Heads";
    } else {
        var tails = "Tails";
    };
console.log(coinFlip);

    if (heads == "Heads" && choice == "Heads" ) {
            alert("The flip was heads and you chose heads...you win!");
    } else if 
        (heads == "Heads" && choice == "Tails") {
            alert("The flip was heads and you chose tails...you lose!");
    } else if 
        (tails == "Tails" && choice == "Heads") {
            alert("The flip was tails but you chose heads...you lose!");
    } else if 
        (tails == "Tails" && choice == "Tails") {
            alert("The flip was tails and you chose tails...you win!");
    }
    
*/

// step 8
var coinFlip = (Math.floor(Math.random() * 2) == 0);
    console.log(coinFlip); // true 1, false 0
var choice = prompt("Choose Heads or Tails"); // heads, tails

var heads = "Heads";
var tails = "Tails";

var heads = new Boolean("true");
var tails = new Boolean("false");

    if (heads) {
        console.log("Heads worked");
    } else  if (tails) {
        console.log("Tails worked");
    }

   







    





















