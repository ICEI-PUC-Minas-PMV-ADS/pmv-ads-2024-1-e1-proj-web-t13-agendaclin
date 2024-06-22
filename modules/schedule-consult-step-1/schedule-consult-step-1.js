import { handleButtonClick, ScheduleConsultStep1Controller } from './schedule-consult-step-1-controller.js';

document.addEventListener('DOMContentLoaded', () => {
    new ScheduleConsultStep1Controller();
    const buttonContinuar = document.getElementById("buttonContinuar");
    if (buttonContinuar) {
        buttonContinuar.addEventListener("click", handleButtonClick);
        console.log("Button 'Continuar' event listener added");
    } else {
        console.error("Button 'Continuar' not found");
    }
});