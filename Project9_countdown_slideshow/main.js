//Starts on the first slide
let slideIndex = 1;

//Display the first slide
showSlides(slideIndex);

//Next or Previous button
function changeSlides(number) {
    slideIndex += number;
    showSlides(slideIndex);
}

//Select a picture using the dots
function currentSlide(number) {
    slideIndex = number;
    showSlides(slideIndex);
}

//Displays the selected slide
function showSlides(number) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //Return to the first slide after the third slide
    if (number > slides.length) {
        slideIndex = 1;
    }

    //Go to the third slide when moving backward from the first slide
    if (number < 1) {
        slideIndex = slides.length;
    }

    //Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display =  "none";
    }

    //Remove the active class from all dots 
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //Show the selected slide
    slides[slideIndex - 1].style.display = "block";

    //Highlight the selected dot
    dots[slideIndex - 1].className += " active";
}

//Creates a countdown using the number entered by the user
function countdown() {
    let seconds = document.getElementById("seconds").value;

    //Updates the timer every second
    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;

        let time = setTimeout(tick, 1000);

        //Stops the countdown when it reaches 0
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
  tick();
}