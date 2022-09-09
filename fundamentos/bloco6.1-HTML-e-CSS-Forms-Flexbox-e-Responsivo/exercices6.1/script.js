function handleSubmit(event) {
    event.preventDefault();
};

window.onload = function() {
    let button1 = document.querySelector('#button1');
    button1.addEventListener('click', handleSubmit);
    let button2 = document.querySelector('#button2')
    button2.addEventListener('click', clear)
};

function clear () {
    const formFields = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index in formFields) {
        const userInput = formFields[index];
        userInput.value = '';
        userInput.checked = false;
    }
    textArea.value = '';
}