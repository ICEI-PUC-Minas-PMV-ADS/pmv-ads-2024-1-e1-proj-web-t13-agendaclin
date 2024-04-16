import { DoctorSignupStep2Service } from './doctor-signup-step-2-service.js';

export class DoctorSignupStep2Controller {
    constructor() {
        this.homeService = new DoctorSignupStep2Service();
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