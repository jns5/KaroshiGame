
//list of objects containing name and score of all players.
scores = [];

setInterval(function(){
    socket.emit('sendNewScore', playerScore);
}, 50);

socket.on('updateScores', (data) => {
    scores = data;
});



function updateLeaderBoard() {
    let leaderboard = document.getElementById("board");
    leaderboard.innerHTML = "";

    scores.sort(function(a, b){ return b.score - a.score });
    
    for(let i=0; i<scores.length; i++) {
//        if(i<scores.length){
            let name = document.createElement("div");
            // let score = document.createElement("div");
            name.classList.add("name");
            // score.classList.add("score");
            name.innerText = (i+1) +"_ " + scores[i].name + " : " + scores[i].score;
            // score.innerText = scores[i].score;

            let scoreRow = document.createElement("div");
            scoreRow.classList.add("row");
            scoreRow.appendChild(name);
            // scoreRow.appendChild(score);
            leaderboard.appendChild(scoreRow);

//        }
        
    }
}

// function is invoked every 50 ms
setInterval(updateLeaderBoard, 50);