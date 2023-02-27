/* Tasks */

/* if (a string with zero), will "alert" be shown? */

if ("0") {
  alert("Hello");
}

/* The name of Javascript */

/* Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’ */

/* If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!” */

// Solution //

let questionOfJs = prompt("What is the “official” name of JavaScript?", "");

if (questionOfJs == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

/* Show the sign */

/* Using if..else, write the code which gets a number via prompt and then shows in alert:

          1, if the value is greater than zero,
         -1, if less than zero,
          0, if equals zero.
          
    In this task we assume that the input is always a number.

    */

// Solution //

let getNumber = +prompt("Type a number", 0);

if (getNumber > 0) {
  alert(1);
} else if (getNumber < 0) {
  alert(-1);
} else {
  alert(0);
}

/* Rewrite 'if' into '?' */

/* Rewrite this if using the conditional operator '?': */

let result = a + b < 4 ? "Below" : "Over";

/* Rewrite "if..else" into '?' */

/* Rewrite if..else using multiple ternary operators '?'.

   For readability, it’s recommended to split the code into multiple lines.
   */

// Solution //

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
