import { CancelConsultService } from './cancel-consult-service.js';

export class CancelConsultController {
    constructor() {
        this.homeService = new CancelConsultService();
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