import { docCad } from './doctor-signup-step-1-service.js'

export class DoctorSignupStep1Controller {
    constructor() {
        this.newUser = new docCad();
        this.setData();
    }

    setData() {
        document.getElementById('nextStep').addEventListener('click', (e) => {
            e.preventDefault();
            const option = document.querySelector("input[name='option']:checked").value;
            const specialty = document.getElementById('specialty').value;
            const userName = document.getElementById('name').value;
            const userSurname = document.getElementById('surname').value;
            localStorage.setItem('novoMedico', JSON.stringify({ option, specialty, name: `${userName} ${userSurname}`  }));
            // this.login(option, specialty, userName, userSurname);
            window.location.href = "/#/doctor-signup-step-2";
        });
    }

    // login(option, specialty, userName, userSurname) {
    //     this.newUser.authenticate(option, specialty, userName, userSurname).then(message => {
    //         document.getElementById('messageBox').innerText = message;
    //         console.log(message);
    //         // Redirecionar para a próxima página após login bem-sucedido
    //
    //     }).catch(err => {
    //         document.getElementById('messageBox').innerText = 'Login failed';
    //         console.error(err);
    //     });
    // }
}
