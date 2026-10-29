
const display = document.getElementById("display");
const expression = document.getElementById("expression");
const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");

let current = "0";
let previous = "";
let justCalculated = false;

function render() {
    display.textContent = current;
    expression.textContent = previous || "Ready to calculate";
}

function calculate(input) {
    // Only allow numbers, arithmetic operators, decimal points and spaces.
    if (!/^[0-9+\-*/%.()\s]+$/.test(input)) {
        throw new Error("Invalid expression");
    }

    // Handle percentage as a fraction.
    input = input.replace(/(\d+\.?\d*)%/g, "($1/100)");

    // Evaluate the validated arithmetic expression.
    const answer = Function('"use strict"; return (' + input + ')')();

    if (typeof answer !== "number" || !Number.isFinite(answer)) {
        throw new Error("Invalid calculation");
    }

    return Number(answer.toPrecision(12)).toString();
}

function updateLiveResult() {
    try {
        if (/^[0-9+\-*/%.()\s]+$/.test(current) &&
            /[0-9)]$/.test(current)) {
            result.textContent = "= " + calculate(current);
        } else {
            result.textContent = "";
        }
    } catch {
        result.textContent = "";
    }
}

function addValue(value) {
    if (justCalculated) {
        if (/[0-9.]/.test(value)) {
            current = "0";
        }
        previous = "";
        justCalculated = false;
    }

    if (current === "0" && /[0-9]/.test(value) &&
        value.length === 1 && !previous) {
        current = value;
    } else {
        current += value;
    }

    render();
    updateLiveResult();
}

function clearAll() {
    current = "0";
    previous = "";
    result.textContent = "Result appears here";
    justCalculated = false;
    render();
}

function deleteLast() {
    if (justCalculated) {
        clearAll();
        return;
    }

    current = current.length > 1 ? current.slice(0, -1) : "0";
    render();
    updateLiveResult();
}

function toggleSign() {
    if (justCalculated) {
        previous = "";
        justCalculated = false;
    }

    if (current === "0") return;

    if (current.startsWith("-")) {
        current = current.slice(1);
    } else {
        current = "-" + current;
    }

    render();
    updateLiveResult();
}

function showAnswer() {
    try {
        const answer = calculate(current);
        previous = current + " =";
        current = answer;
        justCalculated = true;
        render();
        result.textContent = "Calculation complete";
    } catch {
        result.textContent = "Cannot calculate this expression";
    }
}

buttons.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === "clear") clearAll();
    else if (action === "delete") deleteLast();
    else if (action === "sign") toggleSign();
    else if (action === "equals") showAnswer();
    else if (value) addValue(value);
});

document.addEventListener("keydown", (event) => {
    if (/^[0-9.]$/.test(event.key)) {
        addValue(event.key);
    } else if (["+", "-", "*", "/", "%", "(", ")"].includes(event.key)) {
        addValue(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        showAnswer();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape" || event.key === "Delete") {
        clearAll();
    }
});

render();
