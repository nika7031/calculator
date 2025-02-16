let inputField = document.getElementById("input");
let themeToggle = document.getElementById("theme-toggle");
let body = document.body;

// Load theme from local storage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }
});

function appendValue(value) {
    inputField.value += value;
}

function clearDisplay() {
    inputField.value = "";
}

function deleteLast() {
    inputField.value = inputField.value.slice(0, -1);
}

function calculate() {
    try {
        inputField.value = eval(inputField.value);
    } catch {
        inputField.value = "Error";
    }
}


