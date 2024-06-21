import { docCad } from './doctor-signup-step-1-service.js'

export class DoctorSignupController {
    constructor() {
        this.newUser = new docCad();
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

            localStorage.setItem('novo usuário', JSON.stringify({ option, specialty, userName, userSurname }));

            this.login(option, specialty, userName, userSurname);
            
        });
    }

    login(option, specialty, userName, userSurname) {
        try {
            this.newUser.authenticate(option, specialty, userName, userSurname);
            console.log("usuário criado com sucesso");
            // Redirecionar para a próxima página após login bem-sucedido
            window.location.href = "/#/doctor-signup-step-2.html"; 
        } catch(err) {
            console.error(err);
            alert("não foi possível criar o usuário");
        }      
       
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DoctorSignupController();
});
