import { salvarDados } from './schedule-consult-step-1-service.js';
import { ScheduleConsultStep1Service } from './schedule-consult-step-1-service.js';

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

        const eventData = {
            selectedDoctorId: 1,
            appointmentDate: '2024-06-20',
            appointmentTime: '15:00',
            timezone: 'GMT-3'
        };

        const service = new ScheduleConsultStep1Service();
        service.salvarDadosEvento(eventData);

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
        console.log('Event Data:', eventData);
        if (eventData) {
            const doctor = await this.service.getDoctorById(eventData.selectedDoctorId);
            console.log('Doctor Data:', doctor);
            if (doctor) {
                this.updateView(doctor, eventData);
                this.saveDoctorDataToLocalStorage(doctor, eventData);
            }
        } else {
            console.error('No event data found in localStorage');
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

    saveDoctorDataToLocalStorage(doctor, eventData) {
        localStorage.setItem('medicoImagem', doctor.profile_pic_url);
        localStorage.setItem('medicoNome', doctor.name);
        localStorage.setItem('medicoEspecialidade', doctor.specialty);
        localStorage.setItem('consultaHorario', `${eventData.appointmentDate}, ${eventData.appointmentTime} <br> ${eventData.timezone}`);
        localStorage.setItem('consultaLocal', `${doctor.street}, ${doctor.neighborhood}, ${doctor.city}, ${doctor.zip_code}`);

        console.log("Dados do médico salvos no localStorage:", {
            medicoImagem: doctor.profile_pic_url,
            medicoNome: doctor.name,
            medicoEspecialidade: doctor.specialty,
            consultaHorario: `${eventData.appointmentDate}, ${eventData.appointmentTime} <br> ${eventData.timezone}`,
            consultaLocal: `${doctor.street}, ${doctor.neighborhood}, ${doctor.city}, ${doctor.zip_code}`
        });
    }
}

export { validarFormulario, handleButtonClick, ScheduleConsultStep1Controller };
