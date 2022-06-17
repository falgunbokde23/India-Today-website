// import { navbar } from './navbar.js';

// import navbar from '../components/navbar.js';

// document.getElementById('navbar').innerHTML = navbar();

import { signup } from './user.js';

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {

   event.preventDefault();

   let user = signup(form);
   localStorage.setItem('user', JSON.stringify(user));
   form.reset();
   
});