let value = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(function (key) {
    key.addEventListener('click', (e) => {
        let btn = e.currentTarget.innerText;
        if (btn == 'Decrease')
            count--;
        else if (btn == 'Increase') 
            count++;
        else if (btn == 'Reset')
            count = 0;
        if (count > 0)
            value.style.color = "green";
        else if (count < 0)
            value.style.color = "red";
        else
            value.style.color = "black";
        value.innerText = count;
    })
})
