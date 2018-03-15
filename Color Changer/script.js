//Variables//
//This grabs the id of the first modal and sets it equal to modal
var modal = document.getElementById("modal");
//This grabs the button with the id "change"
//This allows us to call a function with a click later
var changeBtn = document.getElementById("change");
//This grabs the preview
var preview = document.getElementById("preview");

//Functions//

//Function to set Preview Boxes//

//This sets the Preview Box color in the modal to the currently selected color
function Preview() {
	//This gets the currently selected color's value and sets it equal to color
	color = document.querySelector('input[name="colors"]:checked').value;
	//Log what color
	console.log("The color is " + color);
	//Change preview color
	preview.style.background = color;
}

//Function to change Color//

//Change the Color
function changeColor() {
	//Log what the color was changed to
	console.log("The color is: " + color);
	//Change the background color
  document.body.style.background = color;
}

//Function to open modal//

//Open color changing modal
changeBtn.onclick = function() {
	modal.style.display = "grid";
}

//Function to close modal//

//When the user clicks on the close button in modal it closes it
function Close() {
	//Close modal
	modal.style.display = "none";
	//Reset Preview
	preview.style.background = "#1a1a1a";
	//Unselect any currently selected color
	document.querySelector('input[name="colors"]:checked').checked = false;
}

//Close modal on window click
window.onclick = function(event) {
  if (event.target == modal) {
    //Close modal
    modal.style.display = "none";
    //Reset Preview
    preview.style.background = "#1a1a1a";
    //Unselect any currently selected color
    document.querySelector('input[name="colors"]:checked').checked = false;
  }
}