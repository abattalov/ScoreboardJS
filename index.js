let addOneHome = document.getElementById('addOneHome')
let addTwoHome = document.getElementById('addTwoHome')
let addThreeHome = document.getElementById('addThreeHome')
let addOneGuest = document.getElementById('addOneGuest')
let addTwoGuest = document.getElementById('addTwoGuest')
let addThreeGuest = document.getElementById('addThreeGuest')
let homeScore = document.getElementById('homeScore').innerHTML
let guestScore = document.getElementById('guestScore').innerHTML
let newGameButton = document.getElementById('newGameButton')

homeScore = 0
guestScore = 0

addOneHome.addEventListener('click', onePointHome)
addTwoHome.addEventListener('click', TwoPointsHome)
addThreeHome.addEventListener('click', ThreePointsHome)

addOneGuest.addEventListener('click', onePointGuest)
addTwoGuest.addEventListener('click', TwoPointsGuest)
addThreeGuest.addEventListener('click', ThreePointsGuest)

newGameButton.addEventListener('click', resetScores)


function onePointHome(){
    homeScore += 1
    document.getElementById('homeScore').innerHTML = homeScore
}

function TwoPointsHome(){
    homeScore += 2
    document.getElementById('homeScore').innerHTML = homeScore
}

function ThreePointsHome(){
    homeScore += 3
    document.getElementById('homeScore').innerHTML = homeScore
}

function onePointGuest(){
    guestScore += 1
    document.getElementById('guestScore').innerHTML = guestScore
}
function TwoPointsGuest(){
    guestScore += 2
    document.getElementById('guestScore').innerHTML = guestScore
}
function ThreePointsGuest(){
    guestScore += 3
    document.getElementById('guestScore').innerHTML = guestScore
}

function resetScores(){
    guestScore = 0
    homeScore = 0
    document.getElementById('guestScore').innerHTML = 0
    document.getElementById('homeScore').innerHTML = 0
}