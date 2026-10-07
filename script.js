/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = themeToggle.querySelector("i");


const savedTheme = localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light");

    const lightMode =
        document.body.classList.contains("light");


    if (lightMode) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");


    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu when navigation link is clicked */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const emailSubject =
        encodeURIComponent(
            subject || "Portfolio Contact"
        );


    const emailBody =
        encodeURIComponent(

            "Name: " + name +
            "\n\n" +

            "Email: " + email +
            "\n\n" +

            "Message:\n" +
            message

        );


    const mailto =
        "mailto:vijaykumar20050126@gmail.com" +
        "?subject=" +
        emailSubject +
        "&body=" +
        emailBody;


    window.location.href = mailto;

});



/* =====================================================
   CERTIFICATE MODAL
===================================================== */

const modal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");


const certificateButtons =
    document.querySelectorAll(".view-certificate");


certificateButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const image =
            button.getAttribute("data-image");


        modalImage.src = image;

        modal.classList.add("active");

    });

});


closeModal.addEventListener("click", function () {

    modal.classList.remove("active");

    modalImage.src = "";

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("active");

        modalImage.src = "";

    }

});


/* Escape key closes modal */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

        modalImage.src = "";

    }

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, " +
        ".project-card, " +
        ".skill-card, " +
        ".experience-card, " +
        ".certificate-card, " +
        ".activity-card, " +
        ".hobby-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.08
        }

    );


revealElements.forEach(function (element) {

    observer.observe(element);

});
// =========================
// SKETCHES VIEW MORE
// =========================

const viewMoreButton = document.getElementById("viewMoreSketches");
const sketchGallery = document.querySelector("#sketches .gallery");

if (viewMoreButton && sketchGallery) {

    viewMoreButton.addEventListener("click", function () {

        sketchGallery.classList.add("show-all");

        viewMoreButton.style.display = "none";

    });

}