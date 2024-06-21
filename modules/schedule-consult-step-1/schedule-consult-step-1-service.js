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
        return data ? JSON.parse(data) : null;
    }

    async fetchDoctorsData() {
        const response = await fetch('../../assets/databases/doctors.json');
        const doctors = await response.json();
        return doctors;
    }

    async getDoctorById(id) {
        const doctors = await this.fetchDoctorsData();
        return doctors.find(doctor => doctor.id === id);
    }
}


export { ScheduleConsultStep1Service };