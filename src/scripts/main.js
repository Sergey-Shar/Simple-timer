// App

hiddenBtnRed(true)

// Variables

const btnStart = document.querySelector(".timer__btn-start");
const btnStop = document.querySelector(".timer__btn-stop");
const btnReset = document.querySelector(".timer__btn-reset");
const minuts = document.querySelector(".timer__minuts");
const seconds = document.querySelector(".timer__seconds");
const millisec = document.querySelector(".timer__milliseconds");
let min = 0;
let sec = 0;
let millsec = 0;
let counter = null;

// Listener

btnStart.addEventListener("click", startingTimer)
btnStop.addEventListener("click", pauseTimer)
btnReset.addEventListener("click", resetTimer)

// Utils

function renderDefauldTime(min, sec, mill) {
    minuts.innerText = `${min}`
    seconds.innerText = `${sec}`
    millisec.innerText = `${mill}`
}

function btnStartDisabled(value) {
    btnStart.disabled = value
}

function btnStopDisabled(value) {
    btnStop.disabled = value
}

function hiddenBtnGreen(value) {
    document.querySelector(".timer__circle-green").hidden = value
}

function hiddenBtnRed(value) {
    document.querySelector(".timer__circle-red").hidden = value
}

// render

function renderMillSec() {
    millsec++
    if (millsec < 10) {
        millisec.innerText = `0${millsec}`
    } else if (millsec > 9) {
        millisec.innerText = `${millsec}`
    }
    if (millsec > 99) {
        sec++
        clearInterval(counter)
        millsec = 0
        startingTimer()
    }
}

function renderSec() {
    if (sec < 10) {
        seconds.innerText = `0${sec},`
    } else if (sec > 9) {
        seconds.innerText = `${sec},`
    }
    if (sec > 60) {
        min++
        clearInterval(counter)
        sec = 0
        startingTimer()
    }
}

function renderMinuts() {
    if (min < 10) {
        minuts.innerText = `0${min}:`
    } else if (min > 9) {
        minuts.innerText = `${min}:`
    }
}

// Timer function 

function startingTimer() {
    counter = setInterval(() => {
        renderMillSec()
        renderSec()
        renderMinuts()
    }, 10)
    btnStartDisabled(true)
    btnStopDisabled(false)
    hiddenBtnGreen(true)
    hiddenBtnRed(false)

}

function resetTimer() {
    clearInterval(counter)
    sec = 0
    min = 0
    renderDefauldTime("00:", "00,", "00")
    btnStopDisabled(false)
    btnStartDisabled(false)
}

function pauseTimer() {
    clearInterval(counter)
    btnStartDisabled(false)
    btnStopDisabled(true)
    hiddenBtnRed(true)
    hiddenBtnGreen(false)
}
