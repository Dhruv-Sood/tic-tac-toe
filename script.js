console.log("Game Running!!");

// ------MUSIC FILES-------
const bgmusic = new Audio("starterfiles/music.mp3");
const clicksound = new Audio("starterfiles/ting.mp3");
const gameoversound = new Audio("starterfiles/gameover.mp3");
// -----------------------------

let turn = 'X';     //Initial turn
let isGameOver = false;  /*Determins if game is 
                            over or not*/


//-----Function to change the turn---------
const changeTurn = () => {
    if (turn === 'X') {
        return '0';
    }
    else {
        return 'X'
    }
}
// --------------------------


// Function to check for Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach((e) => {
        if (boxtext[e[0]].innerText == boxtext[e[1]].innerText && boxtext[e[1]].innerText == boxtext[e[2]].innerText && boxtext[e[0]].innerText !== '') {
            isGameOver  = true;
            document.querySelector('.turn-info').innerText = boxtext[e[0]].innerText + ' Won';
            document.querySelector('.gif').style.width = "167px"
        }
    })
}
// -------------


// ########----Main Logic----########

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((box) => {
    let boxtext = box.querySelector('.boxtext');

    box.addEventListener('click', () => {
        box.querySelector('.boxtext').innerText = turn;
        turn = changeTurn();
        clicksound.play()
        checkWin();
        
        if (!isGameOver) {
            document.querySelector('.turn-info').
                innerText = "Turn for " + turn;
        }
        
    })
})

const bgMusicButton = document.querySelector('#speaker');
let isMusicPlaying = false;
bgMusicButton.addEventListener('click', ()=>{
        let img = document.querySelector('#speaker');
    if (!isMusicPlaying){
        img.setAttribute('src','starterfiles/speaker-filled-audio-tool.png')
        bgmusic.play()
        isMusicPlaying = true;
    }
    else{
        img.setAttribute('src','starterfiles/mute.png')
        isMusicPlaying = false;
        bgmusic.pause();
    }
})

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click',()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    Array.from(boxtext).forEach((box =>{
        box.innerText = '';
    }))
    let img = document.querySelector('.gif');
    img.style.width = '0px';
    turn = 'X';
    isGameOver = false;
    if (!isGameOver) {
        document.querySelector('.turn-info').
            innerText = "Turn for " + turn;
    }
})