import { LoginService } from './login-service.js';
import {googleLogin, emailLogin, emailReset} from '/js/shared/auth.js';

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
// Função de reset de senha
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    console.log('email', email);
    emailReset(email)
        .then(() => {
            // Email de redefinição enviado com sucesso
            console.log('Email de redefinição enviado');
            $('#forgotPasswordModal').modal('hide');
            alert('Email de redefinição de senha enviado com sucesso!');
        })
        .catch((error) => {
            // Erro ao enviar email de redefinição
            console.error('Erro ao enviar email de redefinição:', error.message);
        });
});

// Garantir que o LoginController seja instanciado após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    new LoginController();
});


