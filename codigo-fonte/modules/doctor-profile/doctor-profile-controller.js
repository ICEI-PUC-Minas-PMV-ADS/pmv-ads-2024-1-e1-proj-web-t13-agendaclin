export class DoctorProfileController {
    constructor() {
        this.setupEventsListeners();
    }
    setupEventsListeners() {
        const hora = document.getElementById("hora")

        hora.addEventListener("click", function()
            {
                window.location.href = "../schedule-consult-step-1/schedule-consult-step-1.html"
            }
        )
        const segmentButtons = document.querySelectorAll('.segment-button');
        segmentButtons.forEach(button => {
            button.addEventListener('click', function () {
                console.log('click')
                segmentButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}