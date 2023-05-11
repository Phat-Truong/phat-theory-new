document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('#nav');
  
    menuButton.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
    });
  
    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && event.target !== menuButton) {
        nav.classList.remove('nav-open');
      }
    });
  });
  
  
  