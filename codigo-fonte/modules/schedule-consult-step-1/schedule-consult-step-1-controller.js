import { ScheduleConsultStep1Service } from './schedule-consult-step-1-service.js';

export class ScheduleConsultStep1Controller {
    constructor() {
        this.homeService = new ScheduleConsultStep1Service();
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