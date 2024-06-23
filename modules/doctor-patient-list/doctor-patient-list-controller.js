import { DoctorPatientListService } from './doctor-patient-list-service.js';

export class DoctorPatientListController {
    constructor() {
        this.loadData();
    }
    loadData() {
        const doctorId = 1;
        const allEvents = JSON.parse(localStorage.getItem('allSchedules'));
        const doctorSchedules = allEvents.filter(event => event.doctor.id === doctorId);
        console.log('doctorSchedules:', doctorSchedules);
        const container = document.getElementById('container-table');

        // Inicializar a tabela com cabeçalho
        let tableHTML = `<table class="table w-100">
                        <thead>
                        <tr>
                            <th scope="col">Nome e Sobrenome</th>
                            <th scope="col">Número de Telefone</th>
                            <th scope="col">E-mail</th>
                        </tr>
                        </thead>
                        <tbody>`;

        // Adicionar linhas dinamicamente
        doctorSchedules.forEach(schedule => {
            tableHTML += `<tr>
                        <td>${schedule.username}</td>
                        <td>${schedule['step-2'].numeroTelefone}</td>
                        <td>${schedule.email}</td>
                      </tr>`;
        });

        // Fechar a tabela
        tableHTML += `</tbody></table>`;

        // Inserir a tabela no container
        container.innerHTML = tableHTML;
    }
}