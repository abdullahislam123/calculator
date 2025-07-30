const display = document.querySelector('input[name="display"]');

function insert(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        insert(key);
    } else if (key === 'Enter') {
        event.preventDefault();  // Prevent form submission
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
