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
// Modulo operation function
function modulo() {
    try {
        let values = display.value.split('%');
        if (values.length === 2) {
            let num1 = parseFloat(values[0]);
            let num2 = parseFloat(values[1]);
            if (num2 === 0) {
                display.value = 'Error'; // Error message for division by zero
            } else {
                display.value = num1 % num2; // Modulo operation
            }
        } else {
            display.value = 'Error'; // If the input doesn't contain two numbers and the '%' operator
        }
    } catch (error) {
        display.value = 'Error'; // Handle any other errors
    }
}

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



