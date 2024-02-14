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


function backgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function addHidden (elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}
function removeHidden (elementId){
    const playNow = document.getElementById(elementId);
    playNow.classList.remove('hidden');
}