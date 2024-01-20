hamburger = document.querySelector('.hamburger');
hamburger.onClick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let ghats = document.querySelectorAll('.ghat');
    document.querySelector('.slide').appendChild(ghats[0]);
});

prev.addEventListener('click', function() {
    let ghats = document.querySelectorAll('.ghat');
    document.querySelector('.slide').prepend(ghats[ghats.length - 1]);
});