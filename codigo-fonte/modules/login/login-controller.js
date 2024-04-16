import { LoginService } from './login-service.js';

export class LoginController {
    constructor() {
        this.loginService = new LoginService();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('loginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            this.login();
        });
    }

    login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        this.loginService.authenticate(email, password).then(message => {
            document.getElementById('messageBox').innerText = message;
        }).catch(err => {
            document.getElementById('messageBox').innerText = 'Login failed';
            console.error(err);
        });
    }
}