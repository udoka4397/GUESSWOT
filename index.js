'use strict'
const greetingEl = document.getElementsByClassName('greeting')[0];
const startbtnEl = document.getElementsByClassName('firstsectbtn')[0];
const firstsectEl = document.getElementsByClassName('firstpg')[0];
const secondsectEl = document.getElementsByClassName('secondpg')[0];
let wotEl = document.getElementsByClassName('wot')[0];
let scoreEl = document.getElementsByClassName('score')[0];
let optionEl = document.getElementsByClassName('option')[0];
let guessimgEl = document.getElementsByClassName('secondsectimg1')[0];
let boximgEl = document.getElementsByClassName('secondsectimg')[0];
let boximgEls = document.getElementsByClassName('secondsectimg')[1];
let currentscoreEl = document.getElementsByClassName('currentscore')[0];
let newEl = document.getElementsByClassName('new')[0];
let guessbtnEl = document.getElementsByClassName('guess')[0];
let msgcrtEl = document.getElementsByClassName('msg')[0];
let msgwrgEl = document.getElementsByClassName('msg1')[0];
let optionbookEl = document.getElementsByClassName('optionbook')[0];
let optionclothEl = document.getElementsByClassName('optioncloth')[0];
let optioniphoneEl = document.getElementsByClassName('optioniphone')[0];
let optionshoesEl = document.getElementsByClassName('optionshoes')[0];
let optionemptyEl = document.getElementsByClassName('optionempty')[0];
let myoptions = ['books', 'cloth', 'iphone', 'shoes', 'empty',]
let btnmsgEl = document.getElementsByClassName('btnmsg1')[0];
let okEl = document.getElementsByClassName('ok')[0];
let noGuessEl = document.getElementsByClassName('currentguessno')[0];

firstsectEl.classList.remove('hidden');
secondsectEl.classList.add('hidden');
btnmsgEl.classList.add('hidden');


function start() {
    let myname = prompt('What is your name?');
    if (myname == null) {
        greetingEl.textContent = 'Hi Buddy!';
        
    } else {
        greetingEl.textContent = `Hi ${myname}!`;

    }
    
}
start();




startbtnEl.addEventListener('click', function () {
    firstsectEl.style.display = 'none';
    btnmsgEl.classList.add('hidden');
    secondsectEl.classList.remove('hidden');

})

window.addEventListener('load', function () {
    scoreEl.classList.add('hidden');
    optionEl.classList.add('hidden');
    guessimgEl.classList.add('hidden');
    newEl.classList.add('hidden');
    msgcrtEl.classList.add('hidden');
    msgwrgEl.classList.add('hidden');
btnmsgEl.classList.add('hidden');

    firstsectEl.classList.remove('hidden');
    secondsectEl.classList.add('hidden');
});


guessbtnEl.addEventListener('click', function () {
    optionEl.classList.remove('hidden');

    newEl.classList.remove('hidden');
});
function firssec() {
    firstsectEl.classList.add('hidden');
    secondsectEl.classList.add('hidden');
};

optionbookEl.addEventListener('click', function () {
    noGuessEl.textContent = Number(noGuessEl.textContent) + 1;
    function myGuessbook() {
        let randomguess = myoptions[Math.trunc(Math.random() * myoptions.length)];
        guessimgEl.src = `./images/${randomguess}.png`;
        guessimgEl.classList.remove('hidden');
        wotEl.classList.add('hidden');
        
        if (randomguess == optionbookEl.textContent) {
            msgcrtEl.classList.remove('hidden');
            msgwrgEl.classList.add('hidden');
            scoreEl.classList.remove('hidden');
            firssec();
            msgcrtEl.textContent = `Wow! It is ${randomguess}. You are correct👏`;
            currentscoreEl.textContent = Number(currentscoreEl.textContent) + 1;
        } else {
            msgcrtEl.classList.add('hidden');
            msgwrgEl.classList.remove('hidden');
            firssec();
            msgwrgEl.textContent = `Oops! It is ${randomguess}. You are wrong😫`;

        }
    }
    myGuessbook();
    btnmsgEl.classList.remove('hidden');


});
optionclothEl.addEventListener('click', function () {
    noGuessEl.textContent = Number(noGuessEl.textContent) + 1;
    function myGuesscloth() {
        let randomguess = myoptions[Math.trunc(Math.random() * myoptions.length)];
        guessimgEl.src = `./images/${randomguess}.png`;
        guessimgEl.classList.remove('hidden');
        wotEl.classList.add('hidden');
        
        if (randomguess == optionclothEl.textContent) {
            msgcrtEl.classList.remove('hidden');
            msgwrgEl.classList.add('hidden');
            scoreEl.classList.remove('hidden');
            firssec();
            msgcrtEl.textContent = `Wow! It is ${randomguess}. You are correct👏`;
            currentscoreEl.textContent = Number(currentscoreEl.textContent) + 1;
        } else {
            msgcrtEl.classList.add('hidden');
            msgwrgEl.classList.remove('hidden');
            firssec();
            msgwrgEl.textContent = `Oops! It is ${randomguess}. You are wrong😫`;
        }
    }
    myGuesscloth();
    btnmsgEl.classList.remove('hidden');
    
});
optioniphoneEl.addEventListener('click', function () {
    noGuessEl.textContent = Number(noGuessEl.textContent) + 1;
    function myGuessiphone() {
        let randomguess = myoptions[Math.trunc(Math.random() * myoptions.length)];
        guessimgEl.src = `./images/${randomguess}.png`;
        guessimgEl.classList.remove('hidden');
        wotEl.classList.add('hidden');
        if (randomguess == optioniphoneEl.textContent) {
            msgcrtEl.classList.remove('hidden');
            msgwrgEl.classList.add('hidden');
            scoreEl.classList.remove('hidden');
            firssec();
            msgcrtEl.textContent = `Wow! It is ${randomguess}. You are correct👏`;
            currentscoreEl.textContent = Number(currentscoreEl.textContent) + 1;
        } else {
            msgcrtEl.classList.add('hidden');
            msgwrgEl.classList.remove('hidden');
            firssec();
            msgwrgEl.textContent = `Oops! It is ${randomguess}. You are wrong😫`;
        }
    }
    myGuessiphone();
    btnmsgEl.classList.remove('hidden');
    
});
optionshoesEl.addEventListener('click', function () {
    noGuessEl.textContent = Number(noGuessEl.textContent) + 1;
    function myGuessshoes() {
        let randomguess = myoptions[Math.trunc(Math.random() * myoptions.length)];
        guessimgEl.src = `./images/${randomguess}.png`;
        guessimgEl.classList.remove('hidden');
        wotEl.classList.add('hidden');
        if (randomguess == optionshoesEl.textContent) {
            msgcrtEl.classList.remove('hidden');
            msgwrgEl.classList.add('hidden');
            scoreEl.classList.remove('hidden');
            firssec();
            msgcrtEl.textContent = `Wow! It is ${randomguess}. You are correct👏`;
            currentscoreEl.textContent = Number(currentscoreEl.textContent) + 1;
        } else {
            msgcrtEl.classList.add('hidden');
            msgwrgEl.classList.remove('hidden');
            firssec();
            msgwrgEl.textContent = `Oops! It is ${randomguess}. You are wrong😫`;
        }
    }
    myGuessshoes();
    btnmsgEl.classList.remove('hidden');
    
});

optionemptyEl.addEventListener('click', function () {
    noGuessEl.textContent = Number(noGuessEl.textContent) + 1;
    function myGuessempty() {
        let randomguess = myoptions[Math.trunc(Math.random() * myoptions.length)];
        guessimgEl.src = `./images/${randomguess}.png`;
        guessimgEl.classList.remove('hidden');
        wotEl.classList.add('hidden');
        if (randomguess == optionemptyEl.textContent) {
            msgcrtEl.classList.remove('hidden');
            msgwrgEl.classList.add('hidden');
            scoreEl.classList.remove('hidden');
            firssec();
            msgcrtEl.textContent = `Wow! It is ${randomguess}. You are correct👏`;
            currentscoreEl.textContent = Number(currentscoreEl.textContent) + 1;
        } else {
            msgcrtEl.classList.add('hidden');
            msgwrgEl.classList.remove('hidden');
            firssec();
            msgwrgEl.textContent = `Oops! It is ${randomguess}. You are wrong😫`;
        }
    }
    myGuessempty();
    btnmsgEl.classList.remove('hidden');
    
});

newEl.addEventListener('click', function () {
    secondsectEl.classList.add('hidden');
    firstsectEl.classList.remove('hidden');
    location.reload();
})


okEl.addEventListener('click', function () {
    firstsectEl.classList.add('hidden');
    secondsectEl.classList.remove('hidden');
    btnmsgEl.classList.add('hidden');
    optionEl.classList.add('hidden');
    guessimgEl.classList.add('hidden');
    msgcrtEl.classList.add('hidden');
    msgwrgEl.classList.add('hidden');
    boximgEl.src = `./images/closebox.png`;
    wotEl.classList.remove('hidden');
    wotEl.textContent = 'Here is another box, what do you think is inside it?'
})
