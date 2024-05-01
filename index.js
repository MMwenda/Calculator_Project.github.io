const display = document.getElementById("display");
const deleteButton = document.getElementById('delete');

function appendtoDisplay(input){     /*appendtoDisplay function takes an |input| parameter which represents the content needed to be displayed*/
  display.value += input;            /*input value added to existing value*/
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{    //used to handle errors
  display.value = eval(display.value);  //eval() computes the math in display.value
    }
    catch(error){ //upon detection of an error when running function calculate display "Error"
        display.value = "Error";
    }
}

//appendtoDisplay('00')  --to automatically display 00 when reloading page


deleteButton.addEventListener('click',     //when clicked run the delete function
function () {
    //  const display = document.getElementById('display'); 
           display.value = display.value.slice(0, -1); 
}
);

/* The slice() method extracts a section of a string and returns a new string without modifying the original one. In this case, slice(0, -1) extracts all characters from index 0 to the second-to-last character of the string.*/