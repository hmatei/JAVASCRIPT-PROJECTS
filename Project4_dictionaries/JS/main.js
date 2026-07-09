function my_Dictionary() {  //This function creates a dictionary (object) and displays one of its keys and its value in the HTML document.
    var Animal = {    //Creates dictionary.
        Species: "Dog",
        Breed: "Shihtzu",
        Color: "White and Black",
        Age: 6,
        Name: "Jessie",
        Sound: "woof woof!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Name + " is a " + Animal.Color + "  "  + Animal.Breed + "."; //Displays the key value pairs in the HTML document.
    delete Animal.Sound; //Deletes the key value pair from the dictionary.
}