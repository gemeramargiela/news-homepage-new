
let toggleButton = document.getElementsByClassName("toggle-button")[0];
let navLinks = document.querySelector('.nav-link')

toggleButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});