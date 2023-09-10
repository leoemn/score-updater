let team1 = 0;
let team2 = 0;
let gameOver = false;

document.querySelector("#add1").onclick = function() {
    if (!gameOver) {
        team1++;
        document.getElementById("score1").innerHTML = team1;
        if (team1 > 10) {
            alert("Team1 won!");
            document.getElementById("congrats").innerHTML = "Congratulation to team RED"
            gameOver = true;
        }
    }
};

document.querySelector("#add2").onclick = function() {
    if (!gameOver) {
        team2++;
        document.getElementById("score2").innerHTML = team2;
        if (team2 > 10) {
            alert("Team2 won!");
            document.getElementById("congrats").innerHTML = "Congratulation to team YELLOW"
            gameOver = true;
        }
    }
};

