function salvarDados() {
    const convenio = document.getElementById("convenioSelect").value;
    const primeiraConsultaElement = document.querySelector('input[name="primeiraConsulta"]:checked');

    const primeiraConsulta = primeiraConsultaElement ? primeiraConsultaElement.value : '';

    localStorage.setItem('convenio', convenio);
    localStorage.setItem('primeiraConsulta', primeiraConsulta);
}

export { salvarDados };

class ScheduleConsultStep1Service {
    async getEventData() {
        const data = localStorage.getItem('currentEvent');
        console.log("Dados do evento recuperados do localStorage:", data);
        return data ? JSON.parse(data) : null;
    }

    async fetchDoctorsData() {
        const response = await fetch('../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin//pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/databasesdoctors.json');
        const doctors = await response.json();
        return doctors;
    }

    async getDoctorById(id) {
        const doctors = await this.fetchDoctorsData();
        return doctors.find(doctor => doctor.id === id);
    }

    salvarDadosEvento(eventData) {
        localStorage.setItem('currentEvent', JSON.stringify(eventData));
        console.log("Dados do evento salvos no localStorage:", eventData);
    }
}

export { ScheduleConsultStep1Service };
