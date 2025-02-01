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
    /*function calculate() {
    try{let expression = display.value.replace(/(\d+)%/g,'($1/100)');
        display.value= eval(expression);
    } catch (error) {
        display.value='Error';
    }
    }*/
// Modulo operation function
function modulo() {
    try {
        // Split the input value into two parts based on the operator
        let values = display.value.split('%');
        
        // If there are exactly two parts, perform the modulo operation
        if (values.length === 2) {
            let num1 = parseFloat(values[0]);
            let num2 = parseFloat(values[1]);
            
            // Ensure that the second number isn't zero (to avoid division by zero)
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



