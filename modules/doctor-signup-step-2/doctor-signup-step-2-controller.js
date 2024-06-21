import { DoctorSignupStep2Service } from './doctor-signup-step-2-service.js';

export class DoctorSignupStep2Controller {
    constructor() {
        this.homeService = new DoctorSignupStep2Service();
        this.setData();
    }

    setData() {
        document.getElementById('signUp').addEventListener('submit', (e) => {
            e.preventDefault();
            const city = document.getElementById("city").value;
            const dde = document.getElementById('DDE').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById("password").value;
            
            const userData = { city, dde, phone, email, password };
            localStorage.setItem('userDetails', JSON.stringify(userData));

            this.login(city, dde, phone, email, password);
        });
    }

    login(city, dde, phone, email, password) {
        this.homeService.authenticate(city, dde, phone, email, password).then(message => {
            document.getElementById('messageBox').innerText = message;
            console.log(message);
            // Redirecionar para a próxima página após login bem-sucedido
            window.location.href = "/home.html"; 
        }).catch(err => {
            document.getElementById('messageBox').innerText = 'Login failed';
            console.error(err);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DoctorSignupStep2Controller();
});
