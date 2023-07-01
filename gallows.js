let word;
let nr = document.getElementById("nr");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let span1 = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];

nr.setAttribute("value", 7);

function generateWord() {
    word = document.getElementById("theWord").value;
    let container = document.getElementById("textBoxes");

    for (let i = 0; i < word.length; ++i) {
        let newTextBox = document.createElement("input");
        newTextBox.setAttribute("class", "dynamicInput");
        newTextBox.setAttribute("id", "textBox");
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
        modal1.style.display = "block";
    }
    if (ok == 0) {
        --nr.value;
    } 
    if (alive == word.length) {
        modal2.style.display = "block";
    }
}

span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
