const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const button = document.getElementById("button");

function resetGame() {
    location.reload();
    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";
};




// This function generates a random number between two integers
function randomIntFromInterval (min, max) {
    return Math.floor(Math.random()*(max - min +1)+min)
 };
 
function aiChoice() {
    let i = randomIntFromInterval(1,9);
    if (eval("b"+i).value == "") {
        eval("b"+i).value = "0";
    eval("b"+i).disabled = true;
    } else {
        aiChoice();
     
}};

var turn = 1;

function cellOne() {
    b1.value = "X";
    b1.disabled = true;
    aiChoice();
};

function cellTwo() {
    b2.value = "X";
    b2.disabled = true;
    aiChoice();
};

function cellThree() {
    b3.value = "X";
    b3.disabled = true;
    aiChoice();
};

function cellFour() {
    b4.value = "X";
    b4.disabled = true;
    aiChoice();
};

function cellFive() {
    b5.value = "X";
    b5.disabled = true;
    aiChoice();
};

function cellSix() {
    b6.value = "X";
    b6.disabled = true;
    aiChoice();
};

function cellSeven() {
    b7.value = "X";
    b7.disabled = true;
    aiChoice();
};

function cellEight() {
    b8.value = "X";
    b8.disabled = true;
    aiChoice();
};

function cellNine() {
    b9.value = "X";
    b9.disabled = true;
    aiChoice();
};


// function showTurn() {
//     if (turn == 0) {
//         document.getElementById('print')
//         .innerHTML = "Your Turn";
//     } else {
//         document.getElementById('print')
//         .innerHTML = "Computer Turn";
//     }};

function checkStat() {
    if ((b1.value == "X") && (b2.value == "X") && (b3.value == "X")) {
        document.getElementById('print')
        .innerHTML = "You won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('You Won');
    } else if ((b1.value == "X") && (b4.value == "X") && (b7.value == "X")) {
        document.getElementById('print')
        .innerHTML = "You won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('You Won');
    } else if ((b2.value == "X") && (b5.value == "X") && (b8.value == "X")) {
        document.getElementById('print')
        .innerHTML = "You won";
        b1.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b4.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        window.alert('You Won'); 
    } else if ((b4.value == "X") && (b5.value == "X") && (b6.value == "X")) {
        document.getElementById('print')
        .innerHTML = "You won";
        b2.disabled = true;
        b3.disabled = true;
        b1.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('You Won');
    } else if ((b3.value == "X") && (b6.value == "X") && (b9.value == "X")) {
        document.getElementById('print')
        .innerHTML = "You won";
        b2.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        window.alert('You Won');
    } else if ((b7.value == "X") && (b8.value == "X") && (b9.value == "X")) {
        document.getElementById('print')
        .innerHTML = "You won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        window.alert('You Won');
    } else if ((b1.value == "0") && (b2.value == "0") && (b3.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Computer won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Computer Won');
    } else if ((b1.value == "0") && (b4.value == "0") && (b7.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Computer won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Computer Won');
    } else if ((b2.value == "0") && (b5.value == "0") && (b8.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Computer won";
        b1.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b4.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
        window.alert('Computer Won'); 
    } else if ((b4.value == "0") && (b5.value == "0") && (b6.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Computer won";
        b2.disabled = true;
        b3.disabled = true;
        b1.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
        window.alert('Computer Won');
    } else if ((b3.value == "0") && (b6.value == "0") && (b9.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Computer won";
        b2.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b8.disabled = true;
        b7.disabled = true;
        window.alert('Computer Won');
    } else if ((b7.value == "0") && (b8.value == "0") && (b9.value == "0")) {
        document.getElementById('print')
        .innerHTML = "Computer won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b5.disabled = true;
        b1.disabled = true;
        b4.disabled = true;
        window.alert('Computer Won');
    } else if ((b1.value == "X") && (b5.value == "X") && (b9.value == "X")){
        document.getElementById('print')
        .innerHTML = "You won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('You Won');
    } else if ((b3.value == "X") && (b5.value == "X") && (b7.value == "X")){
        document.getElementById('print')
        .innerHTML = "You won";
        b2.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b9.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('You Won');
    } else if ((b1.value == "0") && (b5.value == "0") && (b9.value == "0")){
        document.getElementById('print')
        .innerHTML = "Computer won";
        b2.disabled = true;
        b3.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('Computer Won');
    } else if ((b3.value == "0") && (b5.value == "0") && (b7.value == "0")){
        document.getElementById('print')
        .innerHTML = "Computer won";
        b2.disabled = true;
        b1.disabled = true;
        b6.disabled = true;
        b9.disabled = true;
        b8.disabled = true;
        b4.disabled = true;
        window.alert('Computer Won');
    } else if ((b1.value == "X" || b1.value == "0") && (b2.value == "X" || b2.value == "0")
    && (b3.value == "X" || b3.value == "0") && (b4.value == "X" || b4.value == "0") && (b5.value == "X" || b5.value == "0") 
    && (b6.value == "X" || b6.value == "0") && (b7.value == "X" || b7.value == "0") && (b8.value == "X" || b8.value == "0")
    && (b9.value == "X" || b9.value == "0")) {
        document.getElementById('print')
        .innerHTML = `It's a Tie!`;
        window.alert(`It's a Tie!`);
    }};

