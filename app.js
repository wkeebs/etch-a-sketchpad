// Default Values
const DEFAULT_SIZE = 4;
const DEFAULT_COLOUR = "black";

// Variable Values
let currentSize = DEFAULT_SIZE;
let currentColour = DEFAULT_COLOUR;

// UI Elements
const container = document.querySelector("#grid-container");
const slider = document.querySelector(".slider");
const sliderDisplay = document.querySelector("#slider-value");

// Functions
function updateSliderValue(value) {
  sliderDisplay.innerHTML = `${value} x ${value}`;
}

function changeGridColumns(columns) {
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function initialiseGrid(size) {
  for (i = 0; i < size * size; i++) {
    changeGridColumns(size);
    const newDiv = document.createElement("div");

    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "black";
    });

    newDiv.classList.add("grid-div");
    container.appendChild(newDiv);
  }
}

function initialisePage() {
  initialiseGrid(DEFAULT_SIZE);
  updateSliderValue(DEFAULT_SIZE);
  slider.oninput = () => {
    currentSize = slider.value;
    updateSliderValue(currentSize);
    changeSize();
  };
}

function changeSize() {
  container.innerHTML = "";
  initialiseGrid(currentSize);
}

// Initialise Page
window.onload = () => {
  initialisePage();
};
