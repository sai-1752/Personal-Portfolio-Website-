document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const skillBars = document.querySelectorAll('.skill-bar .skill');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formMessage.classList.remove('hidden');
            formMessage.innerText = 'Thank you for your message!';
            form.reset();
        } else {
            formMessage.classList.remove('hidden');
            formMessage.innerText = 'Please fill out all fields.';
        }
    });

    window.addEventListener('scroll', () => {
        skillBars.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (skillTop < windowHeight) {
                skill.style.width = skill.getAttribute('style').split(':')[1];
            }
        });
    });
});
