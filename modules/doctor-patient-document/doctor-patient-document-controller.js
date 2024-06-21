import { DoctorPatientDocumentService } from './doctor-patient-document-service.js';

export class DoctorPatientDocumentController {
    constructor() {
        this.homeService = new DoctorPatientDocumentService();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('loadButton').addEventListener('click', () => this.loadData());
    }

    loadData() {
        this.homeService.getData().then(data => {
            const container = document.getElementById('dataContainer');
            container.innerHTML = data.map(item => `<p>${item}</p>`).join('');
        });
    }
}