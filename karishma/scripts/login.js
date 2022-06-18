// import {navbar,logout} from './navbar.js';

// import navbar from "../components/navbar.js";

// document.getElementById('navbar').innerHTML = navbar();

let user = JSON.parse(localStorage.getItem('user'));

import { login } from './user.js';

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {

   event.preventDefault();

   login(form, user);
   form.reset();
});