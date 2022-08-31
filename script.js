const select = document.querySelector('select');
const html = document.querySelector('html');

select.onchange = function() {
    var choice = select.value;

    switch(choice) {
        case 'black':
            update('black', 'white');
            break;
        case 'white':
            update('white', 'black');
            break;
        case 'purple':
            update('purple', 'white');
            break;
        case 'yellow':
            update('yellow', 'black');
            break;
        case 'green':
            update('green', 'white');
            break
    }
}

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}