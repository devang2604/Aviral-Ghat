hamburger = document.querySelector('.hamburger');
hamburger.onClick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
}