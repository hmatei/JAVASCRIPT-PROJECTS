//*This function demonstrates while loop.
function while_Function() {
    let countdown = 5;
    let text = "";
    while (countdown > 0) {
        text += countdown + "... ";
        countdown--;
    }
    document.getElementById("While_Loop").innerHTML = 
    "Vacation starts in: " + text + "Let's go!";
}

//*This function demonstrates a for loop.
function for_Function() {
    let countries = [
        "England",
        "Japan",
        "Italy",
        "Canda",
        "Australia"
    ];

    let result = "";
    for (let i = 0; i < countries.length; i++) {
        result += countries[i] + "<br>";
    }
    document.getElementById("For_Loop").innerHTML =
    "Places on my travel list:<br>" + result;
}

//*This function demonstrates an array.
function array_Function() {
    let beaches = [];

    beaches[0] = "Maui";
    beaches[1] = "Bahamas";
    beaches[2] = "Bora Bora";
    beaches[3] = "Maldives";
    document.getElementById("Array").innerHTML =
    "My dream beach destination is " + beaches[1] + ".";
}

//Object created using the "let" keyword.
let trip = {
    country: "England",
    city: "London",
    days: 8,
    hotel: "Donwtown London Hotel",

    description: function () {
        return "I plan to spend " + this.days +
        " days in " + this.city +
        ", " + this.country +
        " while staying at the " + this.hotel + ".";
    }
};

//Display the object method.
function object_Function() {
    document.getElementById("Object").innerHTML =
    trip.description();
} 