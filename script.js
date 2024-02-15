// function play(){
//      const homeScreen = document.getElementById('home');
//      homeScreen.classList.add('hidden');

//      const playNow = document.getElementById('play-now');
//      playNow.classList.remove('hidden')
// }

function play(){
    addHidden('home');
    removeHidden('play-now');
    continueGame();
}

// random number genarate-----------
function continueGame(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomnumber = Math.random()*25;
    const index = Math.round(randomnumber);
    const alphabet = alphabets[index];  

    const currentText = document.getElementById('displays');
    currentText.innerText = alphabet;

    backgroundColor(alphabet)
}

//---------key press handler ----------
 function keyPress (event){
    const playerPress = event.key; 
    console.log(playerPress);
    if(playerPress === 'Escape'){
        lifeTimeOver();
    }
    const currentText = document.getElementById('displays');
    const currentAlphabet = currentText.innerText.toLowerCase();
    // console.log(playerPress,currentAlphabet);

    if(playerPress === currentAlphabet){ 
        //-----get score--------
        const currentScore = getElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValue('current-score', updatedScore)
        // const currentScore = document.getElementById('current-score');
        // const currentScoreText = currentScore.innerText;
        // const score = parseInt(currentScoreText);
        // const newScore = score + 1;
        // currentScore.innerText = newScore;
         
        removeBackground (currentAlphabet);
        continueGame();
    } else{ 
        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValue('current-life',updatedLife);


        if(updatedLife === 0){
            lifeTimeOver();
        }

        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife;
    }
 }
 document.addEventListener('keyup', keyPress)


function getElementValueById(elementId){
    const getElementId = document.getElementById(elementId);
    const elementText = getElementId.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementValue (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function backgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
} 
function removeBackground (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function addHidden (elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}
function removeHidden (elementId){
    const playNow = document.getElementById(elementId);
    playNow.classList.remove('hidden');
}

function lifeTimeOver (){
    addHidden('play-now');
    removeHidden('final-score');
    
    //set game over score
    const lastScore = document.getElementById('current-score'); 
    setTextElementValue('last-score', lastScore.innerText);
}
function playAgain(){
    addHidden('final-score');
    removeHidden('play-now');
    setTextElementValue('current-life',6);
    setTextElementValue('current-score',0);
}