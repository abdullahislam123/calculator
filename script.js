function insert(value) {
    document.querySelector('input[name="display"]').value += value;
}

function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLast() {
    let current = document.querySelector('input[name="display"]').value;
    document.querySelector('input[name="display"]').value = current.toString().slice(0, -1);
}

function calculate() {
    let expression = document.querySelector('input[name="display"]').value;
    try {
        document.querySelector('input[name="display"]').value = eval(expression);
    } catch {
        document.querySelector('input[name="display"]').value = 'Error';
    }
}
