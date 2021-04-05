let preValue = "";
let newValue = "";
let resultValue = "";
let mathOperator = "";
let tempValue = "";
let decimalClicked = false;

// Validation Function ?

// Number imput function
function numberButton(num) {
    if(resultValue) {
        newValue = num;
        resultValue = "";
    } else {
        // Prevent multiple decimals
        if(num === '.'){
            if(decimalClicked != true){
                newValue += num;
                decimalClicked = true;
            }
        } else {
            newValue += num;
        }
    }
    document.getElementById("entry").value = newValue;
}

// Operator function
function operatorButton(operator) {
    if(!resultValue) {
        preValue = newValue;
    } else {
        preValue = resultValue;
    }
    newValue = "";
    decimalClicked = false;
    mathOperator = operator;
    resultValue = "";

    document.getElementById("entry").value = preValue;
}

// Equal button function
function equalButton() {
    decimalClicked = false;
    // Parse my values to float!
    preValue = parseFloat(preValue);
    newValue = parseFloat(newValue);

    switch(mathOperator) {
        case "+":
            resultValue = preValue + newValue;
            break;
        case "-":
            resultValue = preValue - newValue;
            break;
        case "*":
            resultValue = preValue * newValue;
            break;
        case "/":
            // Check for division by zero
            if(preValue === 0 || newValue === 0){
                alert("Sorry can't!");
                break;
            } else {
                resultValue = preValue / newValue;
                break;
            }
        default:
            resultValue = newValue;
    }
 
    preValue = resultValue;
 
    document.getElementById("entry").value = resultValue;
}
 
// Clear last entry 
function clearEntryBut() {
    tempValue = document.getElementById("entry").value;
    preValue = "";
    newValue = tempValue;
    resultValue = "";
    mathOperator = "";
    document.getElementById("entry").value = newValue;
}

// Clear all entry
function clearButton() {
    preValue = "";
    newValue = "";
    resultValue = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}
 