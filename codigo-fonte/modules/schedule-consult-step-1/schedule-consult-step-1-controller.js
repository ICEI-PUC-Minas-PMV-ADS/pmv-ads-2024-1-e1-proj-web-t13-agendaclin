import { ScheduleConsultStep1Service } from './schedule-consult-step-1-service.js';

export class ScheduleConsultStep1Controller {
    constructor() {
        this.homeService = new ScheduleConsultStep1Service();
        this.setupEventListeners();
        this.loadData();
    }

    setupEventListeners() {
        // document.getElementById('loadButton').addEventListener('click', () => this.loadData());
    }

    loadData() {
      const data = localStorage.getItem('currentEvent');
        console.log(data);
    }

}