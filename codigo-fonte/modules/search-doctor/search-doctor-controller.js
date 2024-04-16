import { SearchDoctorService } from './search-doctor-service.js';

export class SearchDoctorController {
    constructor() {
        this.loginService = new SearchDoctorService();
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