import { docCad } from './doctor-signup-step-1-service.js'

export class DoctorSignupController {
    constructor() {
        this.newUser = null;
        this.setData();
    }

    setData() {
        document.getElementById('nextStep').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('alerta');
            const option = document.querySelector("input[name='option']:checked").value;
            const specialty = document.getElementById('specialty').value;
            const userName = document.getElementById('name').value;
            const userSurname = document.getElementById('surname').value;
            
            this.newUser = new docCad();
            localStorage.setItem('novo usuário', JSON.stringify({ option, specialty, userName, userSurname }));

            this.login(option, specialty, userName, userSurname);
        });
    }

    login(option, specialty, userName, userSurname) {
        this.newUser.authenticate(option, specialty, userName, userSurname).then(message => {
            document.getElementById('messageBox').innerText = message;
            console.log(message);
            // Redirecionar para a próxima página após login bem-sucedido
            window.location.href = "doctor-signup-step-2.html"; 
        }).catch(err => {
            document.getElementById('messageBox').innerText = 'Login failed';
            console.error(err);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DoctorSignupController();
});
