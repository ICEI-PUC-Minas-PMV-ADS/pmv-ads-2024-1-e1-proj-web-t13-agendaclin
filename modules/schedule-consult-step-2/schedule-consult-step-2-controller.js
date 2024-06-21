import { ScheduleConsultStep2Service } from './schedule-consult-step-2-service.js';

export class ScheduleConsultStep2Controller {
    constructor() {
        this.homeService = new ScheduleConsultStep2Service();
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