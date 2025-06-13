let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let historyPanel = document.getElementById("history");

// Load history from localStorage on page load
window.onload = function () {
    loadHistory();
};

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

        // Create and store the history entry
        const entry = `${expression} = ${result}`;
        addHistoryItem(entry);
        saveHistoryToLocalStorage(entry);

    } catch {
        display.value = 'Error';
    }
}

function toggleHistory() {
    historyPanel.style.display = (historyPanel.style.display === "none") ? "block" : "none";
}

function addHistoryItem(text) {
    let item = document.createElement("li");
    item.textContent = text;
    historyList.prepend(item);
}

function saveHistoryToLocalStorage(entry) {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    history.unshift(entry); // Add new entry at the top
    localStorage.setItem("calcHistory", JSON.stringify(history));
}

function loadHistory() {
    let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
    historyList.innerHTML = ''; // Clear existing history
    history.forEach(item => addHistoryItem(item));
}
