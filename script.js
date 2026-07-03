// ================================
// Tongda Qiao Group Ltd
// script.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // Header on scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.background = "rgba(11,31,58,.97)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.18)";

        } else {

            header.style.background = "rgba(11,31,58,.90)";
            header.style.boxShadow = "none";

        }

    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    // Fade in sections

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("fade-section");

        observer.observe(section);

    });

});
