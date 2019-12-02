let clickCount = 1
function makeGrid() {
    for (i = 1; i < 10; i++) {
        const createDiv = document.createElement('div');
        createDiv.className = "square"
        document.querySelector('.grid-container').appendChild(createDiv);
        createDiv.addEventListener('click', function(evt) {
            // let clickCount = 1
            if (clickCount % 2 == 1 && evt.target.style.background !== "blue" && evt.target.style.background !== "red") {
                clickCount++;
                evt.target.style.background = "blue";
                console.log(clickCount)
            } else if (clickCount % 2 == 0 && evt.target.style.background !== "blue" && evt.target.style.background !== "red") {
                clickCount++;
                evt.target.style.background = "red";
                console.log(clickCount)
            }
        }
    )}
}
makeGrid()
console.log(document.querySelectorAll(".square"))
