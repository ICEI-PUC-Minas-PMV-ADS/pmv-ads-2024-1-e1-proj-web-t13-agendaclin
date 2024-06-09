import { DoctorSignupStep2Service } from './doctor-signup-step-2-service.js';

export class DoctorSignupStep2Controller {
    constructor() {
        this.homeService = new DoctorSignupStep2Service();
        this.setData();
    }

    setData() {
        document.addEventListener('submit', (e)=> {
            e.preventDefault();
            this.login();
            localStorage.setItem('novo usuário', JSON.stringify(this.homeService));
            
        })
    }

    login() {
        const city = document.getElementById("city").value;
        const dde = document.getElementById('DDE').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById("password").value;

        this.homeService.authenticate(city, dde, phone, email, password).then(message => {
            document.getElementById('messageBox').innerText = message;
            console.error(message);
        }).catch(err => {
            document.getElementById('messageBox').innerText = 'Login failed';
            console.error(err);
        });
    }

}
