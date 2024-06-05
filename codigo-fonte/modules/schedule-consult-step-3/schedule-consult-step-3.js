const btnReschedule = document.getElementById("buttonReschedule");
const btnCancel = document.getElementById("buttonCancel");

function rescheduleConsulta () {
    window.location.href = "../reschedule-consult/reschedule-consult.html";
}

function cancelarConsulta () {
        localStorage.clear();
        window.location.href = "../cancel-consult/cancel-consult.html";
    }

btnReschedule.addEventListener("click", rescheduleConsulta);
btnCancel.addEventListener("click", cancelarConsulta);