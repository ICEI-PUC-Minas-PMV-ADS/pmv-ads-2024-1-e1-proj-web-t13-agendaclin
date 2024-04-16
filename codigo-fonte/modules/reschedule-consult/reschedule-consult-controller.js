import { RescheduleConsultService } from './reschedule-consult-service.js';

export class RescheduleConsultController {
    constructor() {
        this.homeService = new RescheduleConsultService();
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