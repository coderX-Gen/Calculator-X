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
// Calculate the result, including modulo
function calculate() {
    try {
        
        let expression = display.value.replace(/(\d+)%(\d+)/g, (match, num1, num2) => `(${num1} % ${num2})`);
        display.value = eval(expression); // Evaluate the expression
    } catch (error) {
        display.value = 'Error';
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



