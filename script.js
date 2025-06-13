let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let historyPanel = document.getElementById("history");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;

        // Save to history
        let item = document.createElement("li");
        item.textContent = `${expression} = ${result}`;
        historyList.prepend(item);
    } catch {
        display.value = 'Error';
    }
}

function toggleHistory() {
    if (historyPanel.style.display === "none") {
        historyPanel.style.display = "block";
    } else {
        historyPanel.style.display = "none";
    }
}
