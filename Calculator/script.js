let display = document.querySelector('input');

function clearDisplay() {
    display.value = '';
    localStorage.setItem("value", display.value)
}

function deleteLast() {
    display.value = display.value.slice(0, -1) || '';
    localStorage.setItem("value", display.value)
}

function appendNumber(nums) {
    display.value += nums;
    localStorage.setItem("value", display.value)
}

function appendOperator(operator) {
    display.value += operator;
    localStorage.setItem("value", display.value)
}

function calculateResult() {
    try {
        display.value = eval(display.value);
        localStorage.setItem("value", display.value)
    } catch {
        display.value = "Error";
    }
}

display.value = localStorage.getItem("value")