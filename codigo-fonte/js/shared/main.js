import { Router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    Router.init();
    const calendarEl = document.getElementById('calendar');
    console.log('calendarEl', calendarEl)
});