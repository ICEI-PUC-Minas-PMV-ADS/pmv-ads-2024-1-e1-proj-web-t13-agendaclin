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
}

export { ScheduleConsultStep1Service };
