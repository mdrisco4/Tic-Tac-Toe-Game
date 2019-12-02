var delay
function clearBoard() {
    delay = setInterval(resetBoard, 1200);
    }
function resetBoard() {
    document.querySelectorAll(".square")[0].style.background = "white"
    document.querySelectorAll(".square")[1].style.background = "white"
    document.querySelectorAll(".square")[2].style.background = "white"
    document.querySelectorAll(".square")[3].style.background = "white"
    document.querySelectorAll(".square")[4].style.background = "white"
    document.querySelectorAll(".square")[5].style.background = "white"
    document.querySelectorAll(".square")[6].style.background = "white"
    document.querySelectorAll(".square")[7].style.background = "white"
    document.querySelectorAll(".square")[8].style.background = "white"
}
document.querySelector(".resetButton").addEventListener('click', function(){
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
})
let clickCount = 1
function makeGrid() {
    for (i = 1; i < 10; i++) {
        const createDiv = document.createElement('div');
        createDiv.className = "square"
        document.querySelector('.grid-container').appendChild(createDiv);
        createDiv.addEventListener('click', function(evt) {
            if (clickCount % 2 == 1 && evt.target.style.background !== "blue" && evt.target.style.background !== "red") {
                clickCount++;
                evt.target.style.background = "blue";
                let squareCheck = document.querySelectorAll(".square")
                function gameCheckOne() {
                    if (squareCheck[0].style.background == "blue" && squareCheck[1].style.background == "blue" && squareCheck[2].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[3].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[5].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[6].style.background == "blue" && squareCheck[7].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[0].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[2].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[6].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[0].style.background == "blue" && squareCheck[3].style.background == "blue" && squareCheck[6].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[1].style.background == "blue" && squarCheck[4].style.background == "blue" && squareCheck[7].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else if (squareCheck[2].style.background == "blue" && squareCheck[5].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                    } else {
                        document.querySelector("h2").innerHTML = "Player Two (RED)"
                        document.querySelector("h2").style.color = "red"
                    }
                }
                gameCheckOne()
            } else if (clickCount % 2 == 0 && evt.target.style.background !== "blue" && evt.target.style.background !== "red") {
                clickCount++;
                evt.target.style.background = "red";
                let squareCheck = document.querySelectorAll(".square")
                function gameCheckTwo() {
                    if (squareCheck[0].style.background == "red" && squareCheck[1].style.background == "red" && squareCheck[2].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[3].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[5].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[6].style.background == "red" && squareCheck[7].style.background == "red" && squareCheck[8].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[0].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[8].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[2].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[6].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[0].style.background == "red" && squareCheck[3].style.background == "red" && squareCheck[6].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[1].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[7].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else if (squareCheck[2].style.background == "red" && squareCheck[5].style.background == "red" && squareCheck[8].style.background == "red") {
                        clearBoard()
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                    } else {
                        document.querySelector("h2").innerHTML = "Player One (BLUE)"
                        document.querySelector("h2").style.color = "blue"
                    }
                }
                gameCheckTwo()
            }
        }
    )}
}
makeGrid()