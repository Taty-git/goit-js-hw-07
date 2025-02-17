const textInput = document.querySelector('input#name-input');
const spanOutput = document.querySelector('span#name-output');

textInput.addEventListener('input', function () {
    let name = textInput.value.trim();
    if (name === '') {
        name = 'Anonymous';        
    }
    spanOutput.textContent = name;
});