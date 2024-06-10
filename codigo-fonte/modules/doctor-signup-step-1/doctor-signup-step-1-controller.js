import { docCad } from './doctor-signup-step-1-service.js'

export class DoctorSignupController {
    constructor() {
        this.newUser = new docCad();
        this.setData();
    }

    setData() {
        document.addEventListener('submit', (e)=> {
            e.preventDefault();
            alert('.')
            this.login();
            localStorage.setItem('novo usuário', JSON.stringify(this.newUser));
            
        })
    }

    login() {
        const option = document.querySelector("input[name = 'option']:checked").value;
        const specialty = document.getElementById('specialty').value;
        const userName = document.getElementById('name').value;
        const userSurname = document.getElementById('surname').value;

        this.newUser.authenticate(option, specialty, userName, userSurname).then(message => {
            document.getElementById('messageBox').innerText = message;
            console.error(message);
        }).catch(err => {
            document.getElementById('messageBox').innerText = 'Login failed';
            console.error(err);
        });
    }

} 


