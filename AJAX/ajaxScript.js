function getMsg(){
    //STEP 1: Setup the XML HTTP Request object

    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name to display to user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value once request
    //has been received
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you" + 
     inputVal + " for signing up!";
    }

    //STEP 2: Prepare the type of request and what to
    //request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //STEP 3: Defines the AJAX reponse callback method that
    //establishes whether the response was successful and where
    //the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML =
            ajaxRequest.responseText;
        }
    }

    //STEP 4: Send the request
    ajaxRequest.send();
}

//This function completes the AJAX Challenge of Create an HTML file with a button that, 
// when clicked, uses AJAX to replace a paragraph of text with new content from another HTML file.
function loadContent() {
    //Creates a new XML HTTP Request Object.
    let contentRequest = new XMLHttpRequest();

    //Requests the content.html file
    contentRequest.open('GET', 'content.html', true);

    contentRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
        document.getElementById('ajaxParagraph').innerHTML =
            this.responseText;
        }
    };

    //Sends the request to the server
    contentRequest.send();
}    