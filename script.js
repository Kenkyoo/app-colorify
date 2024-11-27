const input = document.getElementById("input");
const inputColor = document.getElementById("inputColor");
const colorName = document.getElementById("colorName");
const card = document.getElementById("card");
const body = document.body;

//Set a random color on background body

window.addEventListener("DOMContentLoaded", () => {
    randomColor();
})

//Change background color

input.addEventListener("input", () => {
    const inputValue = input.value;
    const inputFormat = inputValue.toLowerCase();
    body.style.backgroundColor = inputFormat;
    colorName.textContent = inputValue;
    colorName.style.color = inputValue;
});

inputColor.addEventListener("change", () => {
    const inputColorValue = inputColor.value;
    body.style.backgroundColor = inputColorValue;
    colorName.textContent = inputColorValue;
    colorName.style.color = inputColorValue;
});

//Check if a valid color

const btnCheck = document.getElementById("btnCheck");

btnCheck.addEventListener("click", () => {
    const inputValue = input.value;
    const inputFormat = inputValue.toLowerCase();

    if (colorTest(inputFormat)) {
        alert("No es un color válido. Pruebe a ingresar un color válido como: 'blue', 'red', '#333', etc.");
    } else {
        alert("El color parece ser válido y la aplicación debería funcionar correctamente");
    }    
})

//Array colors

// Check if value color is hexadecimal
    const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;

// Check if color id RGB (rgb(x, x, x))
    const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;

// Array some colors names
    const colorNames = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua'];

//Test colors

function colorTest(value) {

    if (hexRegex.test(value) || rgbRegex.test(value) || colorNames.includes(value)) {
        return false;
    } else {
        return true;
    }
}

//Set a random color

function randomColor() {
    const randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];
    body.style.backgroundColor = randomColorName;
    colorName.textContent = randomColorName;
    colorName.style.color = randomColorName;
}

//Save favorites colors

const btnSaveColor = document.getElementById("btnSaveColor");
let savedColors = JSON.parse(localStorage.getItem("colors")) || [];

btnSaveColor.addEventListener("click", () => {
    const inputColorValue = inputColor.value;
    savedColors.push(inputColorValue);
    localStorage.setItem("colors", JSON.stringify(savedColors));
    displaySavedColors();
});


//Function to display saved colors

const colorsList = document.getElementById("colorsList");

function displaySavedColors() {
    colorsList.innerHTML = "";
    
    savedColors.forEach(color => {
        const colorItem = document.createElement("li");
        colorItem.classList.add("list-group-item", "rounded-5", "text-light");
        colorItem.style.backgroundColor = color;
        colorItem.textContent = color;
        colorsList.appendChild(colorItem);
    });    
}

displaySavedColors();

//Set favorite color like background

colorsItems = colorsList.querySelectorAll("li");

colorsItems.forEach(item => {
    item.addEventListener("click", () => {
        itemColor = item.textContent;
        body.style.backgroundColor = itemColor;
        colorName.textContent = itemColor;
        colorName.style.color = itemColor;
    })
});

//Remove all colors 

const btnClearColors = document.getElementById("btnClearColors");

btnClearColors.addEventListener("click", () => {
    localStorage.removeItem("colors");
    savedColors = [];
    displaySavedColors();
})