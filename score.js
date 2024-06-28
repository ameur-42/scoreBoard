
let scoreHome = 0
let scoreGuest = 0
function addOne() {
    scoreHome += 1
    document.getElementById("score-home").textContent = scoreHome
}
function addOneGuest() {
    scoreGuest += 1
    document.getElementById("score-guest").textContent = scoreGuest
}
function addTwo() {
    scoreHome += 2
    document.getElementById("score-home").textContent = scoreHome
}
function addTwoGuest() {
    scoreGuest += 2
    document.getElementById("score-guest").textContent = scoreGuest
}
function addThree() {
    scoreHome += 3
    document.getElementById("score-home").textContent = scoreHome
}
function addThreeGuest() {
    scoreGuest += 3
    document.getElementById("score-guest").textContent = scoreGuest
}
function endGame() {
    if (scoreGuest >> scoreHome) {
        document.getElementById("winner").textContent = " the Guest team wins " + scoreGuest + " to " + scoreHome
    }
    else if (scoreHome == scoreGuest) {
        document.getElementById("winner").textContent = " it's a draw " + scoreGuest + " to " + scoreHome
    }
    else {
        document.getElementById("winner").textContent = " the Home team wins " + scoreHome + " to " + scoreGuest
    }
    scoreHome = 0
    scoreGuest = 0
    document.getElementById("score-home").textContent = scoreHome
    document.getElementById("score-guest").textContent = scoreGuest
}