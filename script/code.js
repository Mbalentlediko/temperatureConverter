const inputTemp = document.getElementById('input-temp');
const inputUnit = document.getElementById('input-unit');
const outputTemp = document.getElementById('output-temp');
const outputUnit = document.getElementById('output-unit');
const convertBtn = document.getElementById('convert-btn');

function convertTemperature() {
  const inputValue = parseFloat(inputTemp.value);
  const inputUnitValue = inputUnit.value;
  const outputUnitValue = outputUnit.value;

  let result;
  if (inputUnitValue === 'celsius') {
    if (outputUnitValue === 'celsius') {
      result = inputValue;
    } else if (outputUnitValue === 'fahrenheit') {
      result = (inputValue * 9/5) + 32;
    } else {
      result = inputValue + 273.15;
    }
  } else if (inputUnitValue === 'fahrenheit') {
    if (outputUnitValue === 'celsius') {
      result = (inputValue - 32) * 5/9;
    } else if (outputUnitValue === 'fahrenheit') {
      result = inputValue;
    } else {
      result = (inputValue - 32) * 5/9 + 273.15;
    }
  } else {
    if (outputUnitValue === 'celsius') {
      result = inputValue - 273.15;
    } else if (outputUnitValue === 'fahrenheit') {
      result = (inputValue - 273.15) * 9/5 + 32;
    } else {
      result = inputValue;
    }
  }

  outputTemp.value = result.toFixed(2);
}

convertBtn.addEventListener('click', convertTemperature);