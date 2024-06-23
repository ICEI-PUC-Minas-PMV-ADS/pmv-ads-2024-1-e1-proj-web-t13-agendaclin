import { LoginService } from './login-service.js';
import {googleLogin, emailLogin} from '/js/shared/auth.js';

export class LoginController {
    constructor() {
        this.loginService = new LoginService();
        console.log('LoginController instanciado');
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Definir os listeners para botões específicos de login (Google e Apple)
        document.getElementById('googleLoginButton').addEventListener('click', googleLogin);
        document.getElementById('appleLoginButton').addEventListener('click', googleLogin);
        document.getElementById("forgot-password").addEventListener('click', function() {
            $('#forgotPasswordModal').modal('show');
        });

        // Definir o listener para o formulário de login por email
        document.getElementById('emailLoginForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            emailLogin(email, password);
        });
    }
}



