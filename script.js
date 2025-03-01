const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    function showTestimonial(i) {
        testimonials.forEach((t, idx) => {
            t.classList.remove("active");
            if (idx === i) t.classList.add("active");
        });
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    }

    function prevTestimonial() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial(index);
    }

    prevBtn.addEventListener("click", prevTestimonial);
    nextBtn.addEventListener("click", nextTestimonial);

    setInterval(nextTestimonial, 3000); // Auto-scroll la fiecare 3 secunde
});

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");

    function showNextTestimonial() {
        testimonials[index].classList.remove("active");
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add("active");
    }

    setInterval(showNextTestimonial, 3000); // Schimbă la fiecare 3 secunde
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item h3");

    faqItems.forEach(item => {
        item.addEventListener("click", function () {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === "none" ? "block" : "none";
        });
    });
});

 // Dark mode toggle script
 const darkModeToggle = document.getElementById('darkModeToggle');
 darkModeToggle.addEventListener('click', function() {
     document.body.classList.toggle('dark-mode');
     darkModeToggle.classList.toggle('dark-mode');
     darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Dezactivează Dark Mode' : 'Activează Dark Mode';
 });