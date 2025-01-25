//For navbar toggle functionality
const toggle = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.navbar ul');

toggle.addEventListener('click', () => {
  menu.style.maxHeight = menu.style.maxHeight === '0px' || menu.style.maxHeight === '' ? '300px' : '0px';
});

// Scroll to Top Functionality
document.getElementById("scroll-top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Scroll to Bottom Functionality
  document.getElementById("scroll-bottom").addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
  
  document.querySelectorAll('.circle').forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    circle.style.setProperty('--progress', progress + '%');
  });