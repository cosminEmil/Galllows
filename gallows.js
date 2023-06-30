let word;
let nr = document.getElementById("nr");
nr.setAttribute("value", 7);

function generateWord() {
    word = document.getElementById("theWord").value;
    let container = document.getElementById("textBoxes");

    for (let i = 0; i < word.length; ++i) {
        let newTextBox = document.createElement("input");
        newTextBox.setAttribute("class", "dynamicInput");
        newTextBox.setAttribute("id", "textBox");
        newTextBox.maxLength = 1; 
        newTextBox.style.width = '20px';
        newTextBox.style.borderTop = 'none';
        newTextBox.style.borderLeft = 'none';
        newTextBox.style.borderRight = 'none';
        container.appendChild(newTextBox);
        newTextBox.setAttribute("value", word[i]); 
        newTextBox.style.color = 'transparent';
    }  
}

let dead = 0, alive = 0;

function checkChar() {
    let inputs = document.getElementsByClassName("dynamicInput");
    let letter = document.getElementById("letter").value;
    let ok = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == letter) {
            inputs[i].style.color = 'black';
            ++alive;
            ++ok;
        }
    }
    if (nr.value == 0) {
        document.write("you're dead");
    }
    if (ok == 0) {
        --nr.value;
    } 
    if (alive == word.length) {
        document.write("you're alive");
    }
}

