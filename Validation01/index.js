'use strict';

let isInvalid = false;

let username = document.getElementById("username");

let password = document.getElementById("password");

let  mybutton = document.getElementById("mybutton");

let buttonOrigPosY = window.scrollY + mybutton.getBoundingClientRect().top;

let buttonOrigtPosX = window.scrollX + mybutton.getBoundingClientRect().left;

isInvalid = false;

username.addEventListener('keyup', (event) => {
    if (event.target.value.length < 5) {
        isInvalid = true;
        username.style.border=`1px red solid`;
        magic();
        return;
    }
    username.style.border=`1px #000 solid`;
    isInvalid = false;
});

password.addEventListener('keyup', (event) => {
    if (event.target.value.length < 5) {
        isInvalid = true;
        username.style.border=`1px red solid`;
        magic();
        return;
    }

    username.style.border=`1px #000 solid`;
    isInvalid = false;
});

if (username.value.length === 0 || password.value.length === 0) {
    isInvalid === true;
}

if (username.value.length > 5 || password.value.length > 5) {
    isInvalid === false;
}

if (isInvalid === true) {
    magic();
}

mybutton.addEventListener('click', function(event) {
    if (isInvalid === true) {
        magic();
    }
});

// todo
document.addEventListener('mousemove', function(event) {
    if (isInvalid === false) {
        return;
    }

    // mouse position
    let left = event.offsetX;
    let top = event.offsetY;

    // mybutton.style.position = 'absolute';
    // mybutton.style.width= `10%`;
    // mybutton.style.transitionDuration = `1s`;

    // mybutton.style.left = `${left + 10} + px`;
    // mybutton.style.top = `${top + 10} + px`;
});

function magic() {
    mybutton.style.position = 'absolute';
    mybutton.style.width= `10%`;
    mybutton.style.transitionDuration = `2s`;
    mybutton.style.display = 'none';

    setTimeout(() => {
        mybutton.style.left = `${getRandomInt(0, 720)}`;
        mybutton.style.top = `${getRandomInt(0, 720)}`;
        mybutton.style.display = 'inline';

    }, 500)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
  
