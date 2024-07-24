let row1 = [0, 0, 0];
let row2 = [0, 0, 0];
let row3 = [0, 0, 0];
let col1 = [0, 0, 0];
let col2 = [0, 0, 0];
let col3 = [0, 0, 0];
let diag1 = [0, 0 ,0];
let diag2 = [0, 0, 0];


const player1 = new Player("", "O", "blue");
const player2 = new Player("", "X", "red");
let turn = 0;
let count = 9;

function Player(name, play, color){
    this.name = name;
    this.play = play;
    this.color = color;
    let score = 0;
    const getScore = () => score;
    const addPoint = () => score++;
    return {name, play, color, getScore, addPoint};
}
const menu = document.getElementById("startMenu");
const start = document.getElementById("btnStart");
const score = document.getElementById("score");
start.addEventListener("click", function(){
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    if(name1 != "" && name2 != ""){
        document.getElementById("p-name1").textContent = name1;
        document.getElementById("p-name2").textContent = name2;
        player1.name = name1;
        player2.name = name2;
        menu.style.display = "none";
        score.style.display = "grid";
    }
});



const dial = document.getElementById("dial");
const display = document.getElementById("display");
let flag = false;


const buttons = document.querySelectorAll(".button");
const restart = document.getElementById("rematch");
restart.addEventListener("click", function(){
    flag = false;
    count = 9;
    restartGame();
    buttons.forEach(button => {
        button.textContent = "";
        dial.style.display = "none";
        display.textContent = "The winner is ";
    })
});

let panel = document.getElementById("panel");
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if(button.textContent == ""){
            let currentPlayer = getPlayer();  
            getCoordenates(value, currentPlayer.play);
            button.textContent = currentPlayer.play;
            button.style.color = currentPlayer.color;
            turn++;
            let win = checkRows();
            if(flag){
                turn = 0;
                currentPlayer.addPoint();
                let txt1 = document.getElementById("p-score1");
                let txt2 = document.getElementById("p-score2"); 
                txt1.textContent = player1.getScore();
                txt2.textContent = player2.getScore();
                display.textContent = currentPlayer.name + " wins!";
                dial.style.display = "flex";
            }
            count--;
            if(count == 0 && !flag){
                display.textContent = "it's a tie";
                dial.style.display = "flex";
            }

        }
    });
  });

function getPlayer(){
    if(turn % 2 == 0){
        return player1;
    }
    else{
        return player2;
    }
}

function getCoordenates(num, player){
    let mark = player;
    switch(num){
        case "1":
            row1[0] = mark;
            col1[0] = mark;
            diag1[0] = mark;
            break;
        case "2":
            row1[1] = mark;
            col2[0] = mark;
            break;
        case "3":
            row1[2] = mark;
            col3[0] = mark;
            diag2[2] = mark;
            break;
        case "4":
            row2[0] = mark;
            col1[1] = mark;
            break;
        case "5":
            row2[1] = mark;
            col2[1] = mark;
            diag1[1] = mark;
            diag2[1] = mark;
            break;
        case "6":
            row2[2] = mark;
            col3[1] = mark;
            break;
        case "7":
            row3[0] = mark;
            col1[2] = mark;
            diag2[0] = mark;
            break;
        case "8":
            row3[1] = mark;
            col2[2] = mark;
            break;
        case "9":
            row3[2] = mark;
            col3[2] = mark;
            diag1[2] = mark;
            break;
    }
}

function checkRows(){
    let winner = "";
    let same = row1.every(elem => elem === row1[0] && elem != 0);
        if(same){
            winner = row1[0];
            flag = true;
        }
    
    same = row2.every(elem => elem === row2[0] && elem != 0);
    if(same){
        winner = row2[0];
        flag = true;
    }
    same = row3.every(elem => elem === row3[0] && elem != 0);
    if(same){
        winner = row3[0];
        flag = true;
    }
    same = col1.every(elem => elem === col1[0] && elem != 0);
    if(same){
        winner = col1[0];
        flag = true;
    }
    same = col2.every(elem => elem === col2[0] && elem != 0);
    if(same){
        winner = col2[0];
        flag = true;
    }
    same = col3.every(elem => elem === col3[0] && elem != 0);
    if(same){
        winner = col3[0];
        flag = true;
    }
    same = diag1.every(elem => elem === diag1[0] && elem != 0);
    if(same){
        winner = diag1[0];
        flag = true;
    }
    same = diag2.every(elem => elem === diag2[0] && elem != 0);
    if(same){
        winner = diag2[0];
        flag = true;
    }
    return winner;
}

function restartGame(){
    row1 = [0, 0, 0];
    row2 = [0, 0, 0];
    row3 = [0, 0, 0];
    col1 = [0, 0, 0];
    col2 = [0, 0, 0];
    col3 = [0, 0, 0];
    diag1 = [0, 0 ,0];
    diag2 = [0, 0, 0];
}