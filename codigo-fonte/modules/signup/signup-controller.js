import { SignupService } from './signup-service.js';
import { googleLogin, emailSignUp } from '/js/shared/auth.js';

export class SignupController {
    constructor() {
        this.loginService = new SignupService();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Definir os listeners para botões específicos de login (Google e Apple)
        document.getElementById('googleLoginButton').addEventListener('click', googleLogin);
        document.getElementById('appleLoginButton').addEventListener('click', googleLogin);



        // Definir o listener para o formulário de login por email
        document.getElementById('emailSignupForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            try {
                const signup = await emailSignUp(email, password);
                console.log('Usuário cadastrado:', signup);
                $('#successModal').modal('show');
                document.getElementById('closeModalButton').addEventListener('click', function() {
                    window.location.href = '/#/search-doctor';
                });

                document.getElementById('closeModalicon').addEventListener('click', function() {
                    window.location.href = '/#/search-doctor';
                });

            } catch (error) {
                console.error('Erro ao fazer cadastro:', error.message);
            }

        });
    }
}