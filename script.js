// JavaScript for Quiz Functionality
function startQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
        <p>Question 1: What is your biggest manifestation goal?</p>
        <input type="text" id="answer1">
        <button onclick="submitQuiz()">Submit Quiz</button>
    `;
}

function submitQuiz() {
    alert('Thank you for taking the quiz! Get ready to manifest your dreams!');
    document.getElementById('quiz').innerHTML = '';
}

// JavaScript for Tab Functionality
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// JavaScript for Floating Progress Tracker
function updateProgress(percentage) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percentage + '%';
    progressBar.innerText = percentage + '% Completed';
}

// JavaScript for Carousel Functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 3000);
showTestimonial(currentTestimonial);
