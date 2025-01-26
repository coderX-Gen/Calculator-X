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
    display.value = Math.pow(parseFloat(display.value), 2);
}

/*Evaluate the expression  in the display*/
function calculate() {
    try {
        //use eval to evaluate the expression entered by user
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}