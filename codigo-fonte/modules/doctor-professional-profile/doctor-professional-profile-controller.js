import {DoctorProfessionalProfileService} from './doctor-professional-profile-service.js';

export class DoctorProfessionalProfileController {
    constructor() {

        this.loadSegment();
        this.loadEvents();
        this.doctorProfessionalProfileService = new DoctorProfessionalProfileService();
    }

    loadSegment() {
        const segmentButtons = document.querySelectorAll('.segment-button');
        segmentButtons.forEach(button => {
            button.addEventListener('click', function () {
                console.log('click')
                segmentButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    salvarDados() {
        const endereço = document.getElementById("endereço").value;
        const numero = document.getElementById("numero").value;
        const sobreMim = document.getElementById("sobreMim").value;
        const experiencia = document.getElementById("experiencia").value;
        const formaçao = document.getElementById("formaçao").value;


        localStorage.setItem("endereço", endereço)
        localStorage.setItem("numero", numero)
        localStorage.setItem("sobreMim", sobreMim)
        localStorage.setItem("experiencia", experiencia)
        localStorage.setItem("formaçao", formaçao)

        document.write.value
    }

//verifica se os dados estao preenchidos
    verificarInput() {
        const endereço = document.getElementById("endereço").value;
        const numero = document.getElementById("numero").value;
        const sobreMim = document.getElementById("sobreMim").value;
        const experiencia = document.getElementById("experiencia").value;
        const formaçao = document.getElementById("formaçao").value;

        if (endereço === "" || numero === "" || sobreMim === "" || experiencia === "" || formaçao === "") {
            alert("por favor, certifique se está preenchido corretamente.");
            return false;
        }
        return true;
    }
    loadEvents() {
        const salvar = document.getElementById("salvar")
//salva os dados

//evento click no botao, para ele ir para a proxima tela
        salvar.addEventListener("click", function () {
            if (this.verificarInput()) {
                this.salvarDados();
                window.location.href = "../schedule-consult-step-2/schedule-consult-step-2.html"
            }
        });
        const icone = document.getElementById("icone")
        icone.addEventListener("click", function () {
            window.location.href = "../doctor-consult-dashboard/doctor-consult-dashboard.html"
        })
    }
}