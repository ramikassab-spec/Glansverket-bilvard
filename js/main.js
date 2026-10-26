
//Hämtar menyknapp och navigation från HTML
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        // Öppnar eller stänger menyn
        const isOpen = siteNav.classList.toggle("is-open");

        // Uppdaterar informationen om menyn är öppen
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

// Hämtar kontaktformuläret från HTML
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    // Körs när besökaren försöker skicka formuläret
    contactForm.addEventListener("submit", (event) => {
        // Hindrar sidan från att laddas om
        event.preventDefault();

       // Hämtar namnfältet och platsen för felmeddelandet
       const name = document.querySelector("#name");
       const nameError = document.querySelector("#name-error");

       //Rensar tidigare felmeddelande
       nameError.textContent = "";

       //Kontrollerar om besökaren har skrivit sitt namn
       if (name.value.trim() === "") {
        nameError.textContent = "Ange ditt namn."
       }

       // Hämtar e-postfältet och platsen för felmeddelandet
       const email = document.querySelector("#email");
       const emailError = document.querySelector("#email-error");

       //Rensar tidigare felmeddelande
       emailError.textContent = "";

       //Kontrollerar att e-postadressen är ifylld
       if (email.value.trim() === "") {
        emailError.textContent = "Ange din e-postadress.";
       }

        
    });
}