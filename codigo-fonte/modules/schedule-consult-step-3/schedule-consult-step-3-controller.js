import { ScheduleConsultStep3Service } from './schedule-consult-step-3-service.js';

export class ScheduleConsultStep3Controller {
    constructor() {
        this.homeService = new ScheduleConsultStep3Service();
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