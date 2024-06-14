function appendCharacter(character) {

    const display = document.getElementById('result');
    if (display.value === '0') {
        clearDisplay();
    }
    display.value += character;
}

function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}