'use strict';

let isInvalid = false;

let username = document.getElementById("username");

let password = document.getElementById("password");

let mybutton = document.getElementById("mybutton");

isInvalid = false;

let counter = 0;

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
    counter++;
    if (isInvalid === true) {
        magic();
    }
});

function magic() {
    mybutton.style.position = 'absolute';
        mybutton.style.width= `10%`;
        mybutton.style.transitionDuration = `2s`;
        mybutton.style.display = 'none';

        console.log(counter);
    
        setTimeout(() => {
            mybutton.style.left = `${getRandomInt(0, 720)}`;
            mybutton.style.top = `${getRandomInt(0, 720)}`;
            mybutton.style.display = 'inline';

            for(let count = 1; count < counter; count++) {
                const button = document.createElement("button");

                button.innerHTML =' Login';

                button.type = "submit";

                button.style.position = 'absolute';
                button.style.width= `10%`;
                button.style.transitionDuration = `2s`;

                button.style.left = `${getRandomInt(0, 720)}`;
                button.style.top = `${getRandomInt(0, 720)}`;

                button.addEventListener('click', function(event) {
                    counter++;
                    if (isInvalid === true) {
                        magic();
                    }
                });
    
                document.body.appendChild(button);
            }

        }, 500)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
