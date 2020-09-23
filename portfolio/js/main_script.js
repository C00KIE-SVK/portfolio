const navFade = () => {
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navlinks');
const navLinks = document.querySelectorAll('.navlinks li');

hamburger.addEventListener('click', () => {
nav.classList.toggle('navactive');
navLinks.forEach((link,index) => {
  if (link.style.animation){link.style.animation = '';}
  else{  link.style.animation = `navFade 0.5s ease forwards ${index/7+0.4}s`;
  }
  });

      hamburger.classList.toggle('toggle');

});


}
navFade();