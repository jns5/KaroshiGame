socket.on('sendClient', function(data) {
    console.log(data);
    socket.emit('recievedClient', {my: 'data'});
});
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
    
    for(let i=0; i<8; i++) {
//        if(i<scores.length){
            let name = document.createElement("div");
            let score = document.createElement("div");
            name.classList.add("name");
            score.classList.add("score");
            name.innerText = scores[i].name;
            score.innerText = scores[i].score;

            let scoreRow = document.createElement("div");
            scoreRow.classList.add("row");
            scoreRow.appendChild(name);
            scoreRow.appendChild(score);
            leaderboard.appendChild(scoreRow);

//        }
        
    }
}

setInterval(updateLeaderBoard, 40);