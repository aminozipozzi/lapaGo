/* ==========================================
   ЛАПАГО — JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {

    burger.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        const lines =
            burger.querySelectorAll("span");

        if (mobileMenu.classList.contains("active")) {

            lines[0].style.transform =
                "rotate(45deg) translate(5px, 5px)";

            lines[1].style.opacity = "0";

            lines[2].style.transform =
                "rotate(-45deg) translate(5px, -5px)";

        } else {

            lines[0].style.transform = "";

            lines[1].style.opacity = "";

            lines[2].style.transform = "";

        }

    });

}


/* ==========================================
   CLOSE MOBILE MENU
========================================== */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        const lines =
            burger.querySelectorAll("span");

        lines[0].style.transform = "";
        lines[1].style.opacity = "";
        lines[2].style.transform = "";

    });

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .step, .advantage, .price-card, .review-card, .contact"
    );


animatedElements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    observer.observe(element);

});


/* ==========================================
   HEADER ON SCROLL
========================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(23, 63, 50, 0.10)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

const anchors =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchors.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (event) {

            const id =
                this.getAttribute("href");

            if (!id || id === "#") {
                return;
            }

            const target =
                document.querySelector(id);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons =
    document.querySelectorAll(
        ".button, .price-button"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement("span");

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.position =
                "absolute";

            ripple.style.borderRadius =
                "50%";

            ripple.style.background =
                "rgba(255,255,255,0.25)";

            ripple.style.transform =
                "scale(0)";

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            ripple.style.pointerEvents =
                "none";

            ripple.style.animation =
                "ripple 0.6s linear";

            this.style.position =
                "relative";

            this.style.overflow =
                "hidden";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});


/* ==========================================
   RIPPLE STYLE
========================================== */

const rippleStyle =
    document.createElement("style");

rippleStyle.innerHTML = `

@keyframes ripple {

    to {
        transform: scale(3);
        opacity: 0;
    }

}

`;

document.head.appendChild(rippleStyle);


/* ==========================================
   IMAGE FALLBACK
========================================== */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.style.background =
                "#173f32";

            image.style.objectFit =
                "contain";

            image.alt =
                image.alt ||
                "Изображение ЛапаGO";

        }
    );

});


/* ==========================================
   CURRENT YEAR
========================================== */

const footerText =
    document.querySelector(".footer p");

if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} ЛапаGO. Забота о питомцах в Алматы.`;

}