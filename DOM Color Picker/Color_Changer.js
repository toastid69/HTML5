//VARIABLES
//THIS GRABS THE ID OF THE FIRST MODAL AND SETS IT EQUAL TO ODAL
var modal = document.getElementById("modal");
//THIS GRABS THE BUTTON WITH ID "CHANGE"
//THIS ALLOWS US TO CALL A FUNCTION WITH THE CLICK LATER
var changeBtn = document.getElementById("change");
//THIS GRABS THE PREVIEW
var preview = document.getElementById("preview");

//FUNCTIONS

//FUNCTION TO SET PREVIEW BOXES

//THIS SETS THE PREVIEW BOX COLOR IN THE MODAL TO CURRENTLY SELECTED COLOR
function Preview() {
    //THIS GETS THE CURRENTLY SELECTED COLOR'S VALUE AND SETS IT EQUAL TO COLOR
	color = document.querySelector('input[name="colors"]:checked').value;
    //LOG WHAT COLOR
    console.log("The color is " + color);
    //CHANGE PREVIEW COLOR
    preview.style.background = color;
}

//FUNCTION TO CHANGE COLOR

//CHANGE THE COLOR
function changeColor() {
    //LOG WHAT THE COLOR WAS CHANGED TO
    console.log("The color is: " + color);
    //CHANGE THE BACKGROUND COLOR
    document.body.style.background = color;
}

//FUNCTION TO OPEN MODAL

//OPEN COLOR CHANGING MODAL
changeBtn.onclick = function() {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

//FUNCTION TO CLOSE MODAL

//WHEN THE USER CLICKS ON THE CLOSE BUTTON IN MODAL IT CLOSES IT
function Close() {
    //CLOSE MODAL
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    //RESET PREVIEW
    preview.style.background = "#1a1a1a";
    //UNSELECT ANY CURRENTLY SELECTED COLOR
    document.querySelector('input[name="colors]:checked').checked = false;
}

//CLOSE MODAL ON WINDOW CLICK
window.onclick = function(event) {
    if (event.target == modal) {
        //CLOSE MODAL
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        //RESET PREVIEW
        preview.style.background = "#1a1a1a";
        //UNSELECT ANY CURRENTLY SELECTED COLOR
        document.querySelector('input[name="colors]:checked').checked = false;
    }
}