let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    let navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });