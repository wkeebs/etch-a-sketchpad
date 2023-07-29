const container = document.querySelector("#grid-container");

for (i=0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "black";
    });
    newDiv.classList.add("grid-div");
    container.appendChild(newDiv);
}