const DEFAULT_SIZE = 4;
const DEFAULT_COLOUR = "black";

let currentSize = DEFAULT_SIZE;
let currentColour = DEFAULT_COLOUR;

const container = document.querySelector("#grid-container");
const slider = document.querySelector(".slider");
const sliderDisplay = document.querySelector("#slider-value");

function updateSliderValue(value) {
    sliderDisplay.innerHTML = `${value} x ${value}`;
}

function initialiseGrid(size) {
    for (i=0; i < size * size; i++) {
        const newDiv = document.createElement("div");

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
            setTimeout(() => {
                newDiv.style.backgroundColor = "white";
            }, 500);
        });

        newDiv.classList.add("grid-div");
        container.appendChild(newDiv);
    }
}

function initialiseElements() {
    initialiseGrid(DEFAULT_SIZE);
    updateSliderValue(DEFAULT_SIZE);
    slider.oninput = () => {
        currentSize = slider.value;
        updateSliderValue(currentSize);
    }
}

initialiseElements();