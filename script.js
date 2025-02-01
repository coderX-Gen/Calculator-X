let display = document.getElementById('result');

//Appends the clicked buutons value in display
function append(value) {
    display.value += value;
}

//Clear the calcultor display
function clearDisplay() {
    display.value = '';
}

//Squares the current value in display
function square() {
    try { 
    display.value = Math.pow(parseFloat(display.value), 2);
}   catch (error){
    display.value='Error';
}
}

function calculate() {
    try{let expression = display.value.replace(/(\d+)%/g,'($1/100)');
        display.value= eval(expression);
    } catch (error) {
        display.value='Error';
    }

}
let backspaceInterval;
function startBackspace(){
    backspace(); // Delete the first character immediately

    // Starts continuous deletion
    backspaceinterval=
    setInterval(backspace,100);
}
function stopBackspace() {
    clear Interval(backspaceInterval);// Stops the backspace loop
function backspace(){
    display.value =
    display.value.slice(0,-1);
}

function squareRoot() {
    try{
        display.value = Math.sqrt(parseFloat(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

/*Evaluate the expression  in the display
function calculate() {
    try {
        //use eval to evaluate the expression entered by user
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}*/
