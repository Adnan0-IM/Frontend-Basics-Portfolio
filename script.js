// Scroll animation for sections
const sections = document.querySelectorAll('.section');

const checkScroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.75) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// Initial styles for sections
sections.forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.5s ease-out';
});

// Add scroll event listener
window.addEventListener('scroll', checkScroll);
checkScroll(); // Check initial state

// TODO 1: Create a function to toggle dark/light theme
const toggleThemeButton = document.getElementById('theme-toggle');
const root = document.documentElement;
const toggleTheme = () => {
  // Your code here
  const isDarkTheme = root.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');

  // Apply saved theme on page load
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      root.classList.add('dark-theme');
    }
  });
}
toggleThemeButton.addEventListener('click', toggleTheme);

// TODO 2: Create a function to validate the contact form
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const subject_error = document.getElementById('subject_error');
const message_error = document.getElementById('message_error');

const email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const handlesubmit = (event) => {
  event.preventDefault();
  if (name.value === '') {
    name_error.innerText = 'name is required*';
  } else {
    if (name.value.length < 5) {
      name_error.innerText = 'name must be 6 character long';
    } else {
      name_error.innerText = '';
    }
  }

  if (email.value === '') {
    email_error.innerText = 'email is required*';
  } else {
    if (!email.value.match(email_check)) {
      email_error.innerText = 'Please enter a valid email.';
    } else {
      email_error.innerText = '';
    }
  }

  if (subject.value === '') {
    subject_error.innerText = 'subject is required*';
  } else {
    subject_error.innerText = '';
  }

  if (message.value === '') {
    message_error.innerHTML = 'message is required*';
  } else {
    message_error.innerHTML = '';
  }
};
form.addEventListener('submit', handlesubmit);



// TODO 3: Create a typing effect for the header
const text = 'Front-End Developer && Blockchain Professional';
let index = 0;
const speed = 150;

const element = document.getElementById('typingElement');

const typing = () => {
  if (index < text.length) {
    element.innerHTML += text[index];
    index++;

    setTimeout(typing, speed);
  }
};

typing();



// Bonus : Create a mobile nav menu

const hambrger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('navMenu');
const navLinks = mobileMenu.querySelectorAll('a');
const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
};
hambrger.addEventListener('click', toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});
