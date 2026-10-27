
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
        //Utgår från att formuläret är korrekt ifyllt
        let isValid = true;

        //Hämtar platsen där återkopplingen visas
        const formFeedback = document.querySelector("#form-feedback");


       // Hämtar namnfältet och platsen för felmeddelandet
       const name = document.querySelector("#name");
       const nameError = document.querySelector("#name-error");

       //Rensar tidigare felmeddelande
       nameError.textContent = "";

       //Kontrollerar om besökaren har skrivit sitt namn
       if (name.value.trim() === "") {
        nameError.textContent = "Ange ditt namn.";
        isValid = false;
       }

       // Hämtar e-postfältet och platsen för felmeddelandet
       const email = document.querySelector("#email");
       const emailError = document.querySelector("#email-error");

       //Rensar tidigare felmeddelande
       emailError.textContent = "";

       //Kontrollerar att e-postadressen är ifylld
       if (email.value.trim() === "") {
        emailError.textContent = "Ange din e-postadress.";
        isValid = false;
       }
       // Kontrollerar att e-postadressen har rätt format
       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
       emailError.textContent = "Ange en giltig e-postadress.";
       isValid = false;
       }

       // Hämtar behandlingsfältet och platsen för felmeddelandet
       const service = document.querySelector("#service");
       const serviceError = document.querySelector("#service-error");

       // Rensar tidigare felmeddelande
       serviceError.textContent = "";

      // Kontrollerar att en behandling har valts
      if (service.value === "") {
      serviceError.textContent = "Välj en behandling.";
      isValid = false;
      }

      // Hämtar meddelandefältet och platsen för felmeddelandet
      const message = document.querySelector("#message");
      const messageError = document.querySelector("#message-error");

      // Rensar tidigare felmeddelande
      messageError.textContent = "";

     // Kontrollerar att besökaren har skrivit ett meddelande
     if (message.value.trim() === "") {
     messageError.textContent = "Skriv ett meddelande.";
     isValid = false;
    }

    // Visar återkoppling efter att alla fält har kontrollerats
    if (isValid) {
        formFeedback.textContent ="Formuläret är korrekt ifyllt";
    } else {
        formFeedback.textContent ="Kontrollera fälten ovan."
    }

    });
}