// let squareCheck = document.querySelectorAll(".square")
// function gameCheckOne() {
//     if (squareCheck[0].style.background == "blue" && squareCheck[1].style.background == "blue" && squareCheck[2].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[3].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[5].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[6].style.background == "blue" && squareCheck[7].style.background == "blue" && squareCheck[8].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[0].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[8].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[2].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[6].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[0].style.background == "blue" && squareCheck[3].style.background == "blue" && squareCheck[6].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[1].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[7].style.background == "blue") {
//         alert("Player One Wins!")
//     } else if (squareCheck[2].style.background == "blue" && squareCheck[5].style.background == "blue" && squareCheck[8].style.background == "blue") {
//         alert("Player One Wins!")
//     } else {
//         alert("Player Two's Turn!")
//     }
// }
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
                let squareCheck = document.querySelectorAll(".square")
                console.log(squareCheck[0].style.background)
                function gameCheckOne() {
                    if (squareCheck[0].style.background == "blue" && squareCheck[1].style.background == "blue" && squareCheck[2].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[3].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[5].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[6].style.background == "blue" && squareCheck[7].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[0].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[2].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[6].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[0].style.background == "blue" && squareCheck[3].style.background == "blue" && squareCheck[6].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[1].style.background == "blue" && squareCheck[4].style.background == "blue" && squareCheck[7].style.background == "blue") {
                        alert("Player One Wins!")
                    } else if (squareCheck[2].style.background == "blue" && squareCheck[5].style.background == "blue" && squareCheck[8].style.background == "blue") {
                        alert("Player One Wins!")
                    } else {
                        alert("Player Two's Turn!")
                    }
                }
                gameCheckOne()
            } else if (clickCount % 2 == 0 && evt.target.style.background !== "blue" && evt.target.style.background !== "red") {
                clickCount++;
                evt.target.style.background = "red";
                console.log(clickCount)
                let squareCheck = document.querySelectorAll(".square")
                function gameCheckTwo() {
                    if (squareCheck[0].style.background == "red" && squareCheck[1].style.background == "red" && squareCheck[2].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[3].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[5].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[6].style.background == "red" && squareCheck[7].style.background == "red" && squareCheck[8].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[0].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[8].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[2].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[6].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[0].style.background == "red" && squareCheck[3].style.background == "red" && squareCheck[6].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[1].style.background == "red" && squareCheck[4].style.background == "red" && squareCheck[7].style.background == "red") {
                        alert("Player One Wins!")
                    } else if (squareCheck[2].style.background == "red" && squareCheck[5].style.background == "red" && squareCheck[8].style.background == "red") {
                        alert("Player Two Wins!")
                    } else {
                        alert("Player One's Turn!")
                    }
                }
                gameCheckTwo()
            }
        }
    )}
}
makeGrid()
console.log(document.querySelectorAll(".square")[1].style.background)
