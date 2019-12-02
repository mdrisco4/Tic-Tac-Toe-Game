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
                // console.log(clickCount)
                let squareCheck = document.querySelectorAll(".square")
                // console.log(squareCheck[0].style.background)
                function gameCheckOne() {
                    if (squareCheck[0].style.background == "blue" && squareCheck[1].style.background == "blue" && squareCheck[2].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[3].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[5].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[6].style.background == "blue" && squareCheck[7].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[0].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[2].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[6].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[0].style.background == "blue" && squareCheck[3].style.background == "blue" && squareCheck[6].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[1].style.background == "blue" && squarCheck[4].style.background == "blue" && squareCheck[7].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else if (squareCheck[2].style.background == "blue" && squareCheck[5].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER ONE WINS!!"
                        document.querySelector("h2").style.color = "blue"
                        // makeGrid()
                    } else {
                        document.querySelector("h2").innerHTML = "Player Two (RED)"
                        document.querySelector("h2").style.color = "red"
                        // alert("Player Two's Turn!")
                    }
                }
                gameCheckOne()
            } else if (clickCount % 2 == 0 && evt.target.style.background !== "blue" && evt.target.style.background !== "red") {
                clickCount++;
                evt.target.style.background = "red";
                // console.log(clickCount)
                let squareCheck = document.querySelectorAll(".square")
                function gameCheckTwo() {
                    if (squareCheck[0].style.background == "red" && squareCheck[1].style.background == "red" && squareCheck[2].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[3].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[5].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[6].style.background == "red" && squareCheck[7].style.background == "red" && squareCheck[8].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[0].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[8].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[2].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[6].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[0].style.background == "red" && squareCheck[3].style.background == "red" && squareCheck[6].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[1].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[7].style.background == "red") {
                        // alert("Player One Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else if (squareCheck[2].style.background == "red" && squareCheck[5].style.background == "red" && squareCheck[8].style.background == "red") {
                        // alert("Player Two Wins!")
                        document.querySelectorAll(".square")[0].style.background = "white"
                        document.querySelectorAll(".square")[1].style.background = "white"
                        document.querySelectorAll(".square")[2].style.background = "white"
                        document.querySelectorAll(".square")[3].style.background = "white"
                        document.querySelectorAll(".square")[4].style.background = "white"
                        document.querySelectorAll(".square")[5].style.background = "white"
                        document.querySelectorAll(".square")[6].style.background = "white"
                        document.querySelectorAll(".square")[7].style.background = "white"
                        document.querySelectorAll(".square")[8].style.background = "white"
                        document.querySelector("h2").innerHTML = "PLAYER TWO WINS!!"
                        document.querySelector("h2").style.color = "red"
                        // makeGrid()
                    } else {
                        document.querySelector("h2").innerHTML = "Player One (BLUE)"
                        document.querySelector("h2").style.color = "blue"
                        // alert("Player One's Turn!")
                    }
                }
                gameCheckTwo()
            }
        }
    )}
}
makeGrid()
// console.log(document.querySelectorAll(".square")[1].style.background)


function winner() {
    setInterval(() => {
        
    }, interval);
}
interval = setInterval(resetBoard, 3000);