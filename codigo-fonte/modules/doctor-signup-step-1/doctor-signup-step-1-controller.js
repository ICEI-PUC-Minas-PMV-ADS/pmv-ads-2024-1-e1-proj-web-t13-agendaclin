import { DoctorSignupStep1Service } from './doctor-signup-step-1-service.js';

export class DoctorSignupStep1Controller {
    constructor() {
        this.homeService = new DoctorSignupStep1Service();
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