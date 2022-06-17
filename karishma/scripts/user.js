class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        // this.contact = contact;
        this.password = password;
    }
}

let signup = (form) => {

    let name = form.name.value;
    let email = form.email.value;
    // let contact = form.contact.value;
    let password = form.password.value;

    let user = new User(name, email, password);
    
    window.location.href = 'login.html';

    return user;
}

let login = (form, user) => {

    let email = form.email.value;
    let password = form.password.value;

    if (user.email === email && user.password === password) {

        alert('You are Logged in Successfully!');

        let loggedIn = true;

        localStorage.setItem('loggedIn', loggedIn);
        // window.location.href = 'index.html';

    } else {
        alert('Incorrect Credentials!');
    }
}

export { signup, login };