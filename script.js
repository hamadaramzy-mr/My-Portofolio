 const godowna=document.getElementById("godown");
    const targetselection=document.querySelector(".section-padding");
    godowna.addEventListener("click",(e) =>{e.preventDefault();
        targetselection.scrollIntoView({behavior:"smooth"});
    });
     const godownp=document.getElementById("godowns");
    const targetselect=document.querySelector(".projects-grid");
    godownp.addEventListener("click",(e) =>{e.preventDefault();
        targetselect.scrollIntoView({behavior:"smooth"});
    });
   const godownc=document.getElementById("godownc");
    const targetselect1=document.querySelector(".contact-header-row");
    godownc.addEventListener("click",(e) =>{e.preventDefault();
        targetselect1.scrollIntoView({behavior:"smooth"});
    });


    document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
    const contactForm = document.getElementById('contactForm');
    const successAlert = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        const name = document.getElementById('userName');
        const email = document.getElementById('userEmail');
        const message = document.getElementById('userMessage');
        function validateField(input, condition) {
            const group = input.parentElement;
            if (condition) {
                group.classList.remove('invalid');
            } else {
                group.classList.add('invalid');
                isFormValid = false;
            }
        }
        validateField(name, name.value.trim() !== '');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(email, emailRegex.test(email.value.trim()));
        validateField(message, message.value.trim() !== '');
        if (isFormValid) {
            successAlert.classList.remove('d-none');
            contactForm.reset(); 
            setTimeout(() => {
                successAlert.classList.add('d-none');
            }, 4000);
        }
    });
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});