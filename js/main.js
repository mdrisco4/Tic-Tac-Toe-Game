function makeGrid() {
    for (i = 1; i < 10; i++) {
        var createDiv = document.createElement('div');
        createDiv.className = "square"
        document.querySelector('.grid-container').appendChild(createDiv);
        createDiv.addEventListener('click', function(evt){
            evt.preventDefault();
            evt.target.style.background = document.querySelector('#color-field').value
        })
    }
}
makeGrid()