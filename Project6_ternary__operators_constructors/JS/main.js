function checkAge() {   // Ternary Operator Example, this function checks if the user is old enouhg to vote.
    var age = document.getElementById("age").value;
    var result = (age >= 18) ? "You are old enough to vote." : "You are not old enough to vote.";
    document.getElementById("Age_Result").innerHTML = result;
}

function Vehicle(Make, Model, Year, Color) {  //Constructor Function Example. Uses "this" and "new" keywords.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); 
function displayVehicle() {  //Displays the constructor object/ results inside an HTML element. 
    document.getElementById("Vehicle").innerHTML =
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
    " manufactured in " + Emily.Vehicle_Year;
}
var startingNumber = 0;   //Nested Function Example. Increases the counter by 1 each time the button is clicked.
function countFunction() { 
        function increaseNumber(){
            startingNumber++;
        }
        increaseNumber();
        document.getElementById("Counter").innerHTML = startingNumber;
}