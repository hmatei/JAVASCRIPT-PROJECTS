function addition_Function() {  //This function performs addition and displays the result in an HTML element with the ID "Math".
    var addition = 3 + 7;
    document.getElementById("Math").innerHTML = "3 + 7 = " + addition;
}
function subtraction_Function() { //This function performs subtraction and displays the result in an HTML element with the ID "Subtraction".
    var subtraction = 10 - 5;
    document.getElementById("Subtraction").innerHTML = "10 - 5 = " + subtraction;
}
function multiplication_Function() {  //This function performs multiplication and displays the result in an HTML element with the ID "Multiplication".
    var simple_Math = 4 * 6;
    document.getElementById("Multiplication").innerHTML = "4 * 6 = " + simple_Math;
}
function division_Function() {  //This function performs division and displays the result in an HTML element with the ID "Division".
    var simple_Math = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + simple_Math;
}
function more_Math() {  //This function performs multiple mathematical operations.
    var simple_Math = (1 + 4) * 10 / 2 - 5;
    document.getElementById("MoreMath").innerHTML = "1 plus 4, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
function modulus_Operator() {  //This function demonstrates the modulus operator, which returns the remainder of a division operation.
    var simple_Math = 31 % 7;
    document.getElementById("Modulus").innerHTML = "When you divide 31 by 7 you have a remainder of: " + simple_Math;
}
function negation_Operator() {  //This function demonstrates the negation operator, which changes the sign of a number to its opposite or negative value.
    var x = 25;
    document.getElementById("Negation").innerHTML = -x;
}
function increment_Operator() {  //This function demonstrates the increment operator.
    var x = 15;
    x++;
    document.getElementById("Increment").innerHTML = x;
}
function decrement_Operator() {  //This function demonstrates the decrement operator.
    var x = 15;
    x--;
    document.getElementById("Decrement").innerHTML = x;
}
function random_Number() {  //This function generates a random number between 0 and 100 and displays in the browser.
    document.getElementById("Random").innerHTML = "Your random number is: " + Math.random()*100;
}
function math_Object() { //This function demonstrates the Math object and the round method, which rounds a number to the nearest integer.
    var answer = Math.round(8.6);
    document.getElementById("MathObject").innerHTML = "The rounded value of 8.6 is: " + answer;
}