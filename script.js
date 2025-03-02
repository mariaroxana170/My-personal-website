document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    console.log(hamburger);
    console.log(navLinks);
    
    hamburger.addEventListener('click', () => {
        console.log("Burger menu clicked");
        navLinks.classList.toggle('show');
    });
});

document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Toate câmpurile sunt obligatorii.');
        return;
    }

    const mailtoLink = `mailto:roxana.sultzer@stud.acs.upb.ro?subject=Formular de contact&body=Nume: ${name}%0DEmail: ${email}%0DMesaj: ${message}`;
    window.location.href = mailtoLink;
});
