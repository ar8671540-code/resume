let runs = 0;
let wickets = 0;
let balls = 0;

function addRun(run) {
    runs += run;
    balls++;
    updateScore();
}

function addWicket() {
    wickets++;
    balls++;
    updateScore();
}

function reduceWicket() {
    if (wickets > 0 && balls > 0) {
        wickets--;
        balls--;
        updateScore();
    }
}

function updateScore() {
    let overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("runs").innerText = runs;
    document.getElementById("wickets").innerText = wickets;
    document.getElementById("overs").innerText = overs;
}

function resetMatch() {
    runs = 0;
    wickets = 0;
    balls = 0;
    updateScore();
}
