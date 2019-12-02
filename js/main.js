function makeGrid() {
    for (i = 1; i < 10; i++) {
        var createDiv = document.createElement('div');
        createDiv.className = "square"
        document.querySelector('.grid-container').appendChild(createDiv);
        createDiv.addEventListener('click', function(evt){
            if (evt.target.style.background == "white") {
            // evt.preventDefault();
            evt.target.style.background = "red"
            }
        })
    }
}
makeGrid()

// function makeGrid() {
//     for (i = 1; i < 10; i++) {
//         var createDiv = document.createElement('div');
//         createDiv.className = "square"
//         document.querySelector('.grid-container').appendChild(createDiv);
//         createDiv.addEventListener('click', function(evt){
//             evt.preventDefault();
//             evt.target.style.background = document.querySelector('#color-field').value
//         })
//     }
// }
// makeGrid()

// function makeGrid() {
//     for (i = 1; i < 10; i++) {
//         var createDiv = document.createElement('div');
//         createDiv.className = "square"
//         document.querySelector('.grid-container').appendChild(createDiv);
//         createDiv.addEventListener('click', function(evt){
//             evt.preventDefault();
//             if (evt.target.style.backgroundColor == white || evt.target.style.backgroundColor == red) {
//             evt.target.style.backgroundColor = blue
//             } else {evt.target.style.backgroundColor = red}
//         })
//     }
// }
// makeGrid()
function square1Change () {
    grabSquare1 = document.querySelector("#square1")
    grabSquare1.addEventListener('click', function() {
        if (grabSquare1.style.backgroundColor == "white") {
            grabSquare1.style.backgroundColor = "red"
        }
    })
}
function square2Change () {
    grabSquare2 = document.querySelector("#square2")
    grabSquare2.addEventListener('click', function() {
        if (grabSquare2.style.backgroundColor == white) {
            grabSquare2.style.backgroundColor = red
        }
    })
}
function square3Change () {
    grabSquare3 = document.querySelector("#square3")
    grabSquare3.addEventListener('click', function() {
        if (grabSquare3.style.backgroundColor == white) {
            grabSquare3.style.backgroundColor = red
        }
    })
}
function square4Change () {
    grabSquare4 = document.querySelector("#square4")
    grabSquare4.addEventListener('click', function() {
        if (grabSquare4.style.backgroundColor == white) {
            grabSquare4.style.backgroundColor = red
        }
    })
}
function square5Change () {
    grabSquare5 = document.querySelector("#square5")
    grabSquare5.addEventListener('click', function() {
        if (grabSquare5.style.backgroundColor == white) {
            grabSquare5.style.backgroundColor = red
        }
    })
}
function square6Change () {
    grabSquare6 = document.querySelector("#square6")
    grabSquare6.addEventListener('click', function() {
        if (grabSquare6.style.backgroundColor == white) {
            grabSquare6.style.backgroundColor = red
        }
    })
}
function square7Change () {
    grabSquare7 = document.querySelector("#square7")
    grabSquare7.addEventListener('click', function() {
        if (grabSquare7.style.backgroundColor == white) {
            grabSquare7.style.backgroundColor = red
        }
    })
}
function square8Change () {
    grabSquare8 = document.querySelector("#square8")
    grabSquare8.addEventListener('click', function() {
        if (grabSquare8.style.backgroundColor == white) {
            grabSquare8.style.backgroundColor = red
        }
    })
}
function square9Change () {
    grabSquare9 = document.querySelector("#square9")
    grabSquare9.addEventListener('click', function() {
        if (grabSquare9.style.backgroundColor == white) {
            grabSquare9.style.backgroundColor = red
        }
    })
}