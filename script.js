const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
     wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
     wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
     wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
     wrapper.classList.remove('active-popup');
});

document.addEventListener('DOMContentLoaded', function() {
     const loginForm = document.getElementById('loginForm');
     
     loginForm.addEventListener('submit', function(event) {
         event.preventDefault();
         
         window.location.href = 'yeni_sayfa.html';
     });
 });