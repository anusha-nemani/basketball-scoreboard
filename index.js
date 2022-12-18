let home = 0
let guest = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function homeEl1(){
    home += 1
    homeEl.textContent = home 
}

function homeEl2(){
    home += 2
    homeEl.textContent = home 
}

function homeEl3(){
    home += 3
    homeEl.textContent = home 
}

function guestEl1(){
    guest += 1
    guestEl.textContent = guest 
}

function guestEl2(){
    guest += 2
    guestEl.textContent = guest 
}

function guestEl3(){
    guest += 3
    guestEl.textContent = guest 
}

function reset() {
    home = 0
    guest = 0
    homeEl.textContent = home
    guestEl.textContent = guest
}