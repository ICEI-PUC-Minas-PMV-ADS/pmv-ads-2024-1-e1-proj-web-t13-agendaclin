import { salvarDados, ScheduleConsultStep1Service } from './schedule-consult-step-1-service.js';

function validarFormulario() {
    const convenio = document.getElementById("convenioSelect").value;

    if (convenio === "Selecione") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    return true;
}

function handleButtonClick() {
    if (validarFormulario()) {
        salvarDados();
        window.location.href = "../schedule-consult-step-2/schedule-consult-step-2.html";
    }
}

class ScheduleConsultStep1Controller {
    constructor() {
        this.service = new ScheduleConsultStep1Service();
        this.loadData();
    }

    async loadData() {
        const eventData = await this.service.getEventData();
        if (eventData) {
            const doctor = await this.service.getDoctorById(eventData.selectedDoctorId);
            if (doctor) {
                this.updateView(doctor, eventData);
            }
        }
    }

    updateView(doctor, eventData) {
        document.getElementById('imagemMedico').src = doctor.profile_pic_url;
        document.getElementById('especialidadeDoMedico').innerText = doctor.specialty;
        document.getElementById('nomeMedico').innerText = doctor.name;
        document.querySelector('#dadosHorario time').innerText = eventData.appointmentTime;
        document.querySelector('#dadosHorario time').dateTime = `${eventData.appointmentDate}T${eventData.appointmentTime}`;
        document.querySelector('#dadosHorario p').firstChild.nodeValue = `${eventData.appointmentDate}, `;
        document.querySelector('#dadosHorario p').lastChild.nodeValue = eventData.timezone;
        document.getElementById('local').innerText = `${doctor.street}, ${doctor.neighborhood}, ${doctor.city}, ${doctor.zip_code}`;
    }
}

export { validarFormulario, handleButtonClick, ScheduleConsultStep1Controller };