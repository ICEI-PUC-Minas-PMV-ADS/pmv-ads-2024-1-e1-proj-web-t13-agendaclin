import { DoctorSignupStep2Service } from './doctor-signup-step-2-service.js';
import { emailSignUp } from '/js/shared/auth.js';

export class DoctorSignupStep2Controller {
    constructor() {
        this.homeService = new DoctorSignupStep2Service();
        this.setData();
    }

    setData() {
        document.getElementById('signUp').addEventListener('submit', async (e) => {
            e.preventDefault();
            const city = document.getElementById("city").value;
            const dde = document.getElementById('DDE').value;
            const phone = document.getElementById('phone').value;

            const email = document.getElementById('email').value;
            const password = document.getElementById("password").value;
            try {
                const signup = await emailSignUp(email, password);
                //validando os outros campos
                this.login(city, dde, phone);
                //guardando no localStorage
                const userData = { city, dde, phone, signup};
                localStorage.setItem('userDetails', JSON.stringify(userData));
                // Redirecionar para a próxima página após login bem-sucedido
                document.getElementById('closeModalButton').addEventListener('click', function() {
                    window.location.href = "/#/home.html";
                });

                document.getElementById('closeModalicon').addEventListener('click', function() {
                    window.location.href = '/#/home.html';
                });

            } catch(error){
                console.error('Erro ao fazer cadastro:', error.message);
                alert(`Erro ao criar usuário: ${error.message}`);
            }   
            
        });
    }

    login(city, dde, phone) {
        this.homeService.authenticate(city, dde, phone)
            console.log("login autenticado");
            

    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DoctorSignupStep2Controller();
});
