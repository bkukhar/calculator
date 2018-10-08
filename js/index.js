document.querySelectorAll('.digits, .operation')
    .forEach(el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}

document.querySelector('.decimal')
    .addEventListener('click', decimal);

function decimal() {
    const display = document.querySelector('.display');
    display.value += '.';
}

document.querySelector('.equal')
    .addEventListener('click', equal);

function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

document.querySelector('.cleared')
    .addEventListener('click', cleared);

function cleared() {
    const display = document.querySelector('.display');
    display.value = '';
}

document.querySelector('.square')
    .addEventListener('click', square);

function square() {
    const display = document.querySelector('.display');
    display.value *= display.value;
}

document.querySelector('.sqrt')
    .addEventListener('click', sqrt);

function sqrt() {
    const display = document.querySelector('.display');
    display.value = Math.sqrt(display.value);
}

document.querySelector('.percent')
    .addEventListener('click', percent);

function percent() {
    const display = document.querySelector('.display');
    display.value = display.value / 100;
}

document.querySelector('.change-sign')
    .addEventListener('click', changeSign);

function changeSign() {
    const display = document.querySelector('.display');
    display.value = -display.value;
}
