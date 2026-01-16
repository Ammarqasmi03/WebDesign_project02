const celInput = document.getElementById('cel');
const fahInput = document.getElementById('fah');
const tempSelect = document.getElementById('temp');
const tempSelect1 = document.getElementById('temp1');

function convertTemperature() {
    const inputValue = parseFloat(celInput.value);
    const fromUnit = tempSelect.value;
    const toUnit = tempSelect1.value;

    let result;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenhit') {
            result = (inputValue * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            result = inputValue + 273.15;
        } else {
            result = inputValue;
        }
    } else if (fromUnit === 'Fahrenhit') {
        if (toUnit === 'Celsius') {
            result = (inputValue - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            result = (inputValue - 32) * 5/9 + 273.15;
        } else {
            result = inputValue;
        }
    } else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
            result = inputValue - 273.15;
        } else if (toUnit === 'Fahrenhit') {
            result = (inputValue - 273.15) * 9/5 + 32;
        } else {
            result = inputValue;
        }
    }

    fahInput.value = result.toFixed(2);
}

celInput.addEventListener('input', convertTemperature);
tempSelect.addEventListener('change', convertTemperature);
tempSelect1.addEventListener('change', convertTemperature);