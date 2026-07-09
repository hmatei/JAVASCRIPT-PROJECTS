function displayMessage() {    //Defines a function and named it displayMessage
    var message = "Welcome to my Javascript function project!"; //Creates a variable called message and assigns it a string value
    message += "Thanks for clicking the button!"; //Uses the += operator to add more text to the message variable
    document.getElementById("Message").innerHTML = message; //Displays the completed message variable with the message text id.
}