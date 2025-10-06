//  mobile toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
})

// dark/light theme local storage
const currentTheme = localStorage.getItem("theme") || "light";
const themeToggleBtn = document.getElementById("theme-toggle");

if (currentTheme === "dark") {
  document.documentElement.classList.add("dark");
  themeToggleBtn.classList.replace("ri-moon-line", "ri-sun-line");
} else {
  themeToggleBtn.classList.replace("ri-sun-line", "ri-moon-line");
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.classList.replace("ri-sun-line", "ri-moon-line");
  }
});

// Cart count 

let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
  });
});

// testimonial
document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const totalSlides = slides.length;


  function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }


  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });


  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });


  const autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 8000);

  sliderWrapper.addEventListener('mouseenter', () => clearInterval(autoSlide));
  sliderWrapper.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 8000);
  });
});

// Whatsapp Chat icon 
const chatToggle = document.getElementById('chat-toggle');
  const chatSidebar = document.getElementById('chat-sidebar');
  const chatClose = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatMessage = document.getElementById('chat-message');

  chatToggle.addEventListener('click', () => {
    chatSidebar.classList.toggle('hidden');
  });


  chatClose.addEventListener('click', () => {
    chatSidebar.classList.add('hidden');
  });

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatMessage.value.trim();
    if (message) {
      window.open(`https://wa.me/923001234567?text=${encodeURIComponent(message)}`, '_blank');
      chatMessage.value = '';
    }
  });
