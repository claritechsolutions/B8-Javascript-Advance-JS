let screen = document.getElementById('currentValue');
let prev = document.getElementById('previousValue');
buttons = document.querySelectorAll('button');
let calc = '';
prev.value = 0;
screen.value = 0;

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == '÷') {
            buttonText = '/';
            calc += buttonText;
            screen.value = calc;
        }
        else if (buttonText == 'x') {
            buttonText = '*';
            calc += buttonText;
            screen.value = calc;
        }
        else if (buttonText == 'C') {
            calc = "";
            screen.value = calc;
        }
        else if (buttonText == 'DEL') {
            calc = screen.value.substr(0, screen.value.length - 1);
            screen.value = calc;
        }
        else if (buttonText == 'AC') {
            calc = "";
            screen.value = calc;
            prev.value = calc;
        }
        else if (buttonText == '=') {

            calc = eval(calc);
            if (calc == undefined) {
                calc = 0;
            }
            screen.value = calc;
            prev.value = calc;
        }
        else if (buttonText == 'Ans') {
            calc += prev.value;
            if (calc == 0) {
                screen.value = 'Ans';
            } else {
                screen.value += 'Ans';
            }
        }
        else {
            calc += buttonText;
            screen.value = calc;
        }

    })
}


