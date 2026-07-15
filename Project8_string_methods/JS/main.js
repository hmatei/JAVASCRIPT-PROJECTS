//This function connects multiple stings into one complete sentence.
function full_Sentence() {
    var part_1 = "I enjoy ";
    var part_2 = "learning ";
    var part_3 = "JavaScript ";
    var part_4 = "every day ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//This function extracts the word "JavaScript" from a longer sentence.
function slice_Method() {
    var Sentence = "Learning Javascript every day helps me become a better programmer.";
    var Section = Sentence.slice(9, 19);
    document.getElementById("Slice").innerHTML= Section;
}


//This function chnages lowercase text into uppercase.
function upper_Method() {
    var text = "javascript is a learning experience!";
    var result = text.toUpperCase();
    document.getElementById("Uppercase").innerHTML = result;
}

//This function fins the starting position of the word "JavaScript."
function search_Method() {
    var text = "I enjoy learning Javascript at the Tech Academy.";
    var position = text.search("JavaScript");
    document.getElementById("Search").innerHTML =
    "The word 'JavaScript' starts at position: " + position;
}

//This function converts a number into a string.
function string_Method() {
    var X = 777;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//This function formats a number to a specific length of (8).
function precision_Method() {
    var X = 6548.249215836
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

//This function rounds a number to a two decimal places.
function fixed_Method() {
    var X = 75.31344
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

//This function returns the primitive value of a number.
function value_Method() {
    var X = 300;
    document.getElementById("Value").innerHTML = X.valueOf();
}