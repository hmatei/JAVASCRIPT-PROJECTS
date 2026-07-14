var X = 10;  //Global variable 

function Add_numbers_1() {   //Using global variable X
    console.log(20 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}

function Local_variable_example() {   //This function contains a local variable, which can only be used inside this function.
    var Y = 15;
    console.log(30 + Y);
}

//This function is an example of using a local variable outside its local function which will result in an error.
function Error_example() {   
    console.log(Y + 60);
}

//These function calls display results in the html browser.
Add_numbers_1();
Add_numbers_2();
Local_variable_example();
Error_example();

//This funtion will use an if statement and the getHours() method.
function get_Date() { 
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML =
        "How are you today?";
    }
}

//This function uses an if statement and an else statement.
function Age_Function() {
    var Age = document.getElementById("Age").value;    //Gets the value entered into the age input.
    var Vote;

    if (Age >=18) {    //Checks to see whether the user is at least 18 years old.
        Vote = "You are old enouhg to vote!";
    }

    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;   //Displays results
}

//This function determines whether it is morning, afternnoon or evening.
function Time_function() {
    var Time = new Date().getHours();  //Gets the current hour from the users computer.
    var Reply;
    if (Time < 12 == Time>= 0) {   //Checks if the current time is in the morning.
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {  //Checks if the current time is in the afternoon.
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";  //Runs when its evening.
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //Display the results in HTML.
}