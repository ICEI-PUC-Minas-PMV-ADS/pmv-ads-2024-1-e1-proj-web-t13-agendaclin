import { googleLogin, emailLogin, emailReset } from "/js/shared/auth.js";

export class DoctorLoginController  {
    constructor() {
        //console.log('LoginController instanciado');
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
            //console.log('email', email);
            //console.log('password', password);
            localStorage.setItem('loggedDoctor', email);
            localStorage.removeItem('novoMedico');
            window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/doctor-professional-profile';
        });
    }
}
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    //console.log('email', email);
    emailReset(email)
        .then(() => {
            // Email de redefinição enviado com sucesso
            //console.log('Email de redefinição enviado');
            $('#forgotPasswordModal').modal('hide');
            alert('Email de redefinição de senha enviado com sucesso!');
        })
        .catch((error) => {
            // Erro ao enviar email de redefinição
            console.error('Erro ao enviar email de redefinição:', error.message);
        });
});
