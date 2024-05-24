import SearchDoctorService from "./search-doctor-service.js";


export class SearchDoctorController {
    constructor() {
        this.setupEventListeners();
        this.getAllDoctorsFromDatabase();
    }

    setupEventListeners() {
            const calendarEl = document.getElementById('calendar');
            const calendar = new FullCalendar.Calendar(calendarEl, {
                locale: 'pt-br',                 // Idioma
                initialView: 'timeGridWeek',     // Visão semanal com grade de tempo
                slotDuration: '00:30:00',        // Intervalos de 30 minutos
                slotLabelInterval: '00:30:00',   // Rótulos a cada 30 minutos
                slotLabelFormat: {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false               // Formato 24h
                },
                allDaySlot: false,               // Desativa a área de Todo o Dia
                nowIndicator: true,              // Indicador do horário atual
                height: 'auto',                  // Altura automática
                headerToolbar: {
                    left: '',
                    center: '',
                    right: ''
                },
                hiddenDays: [0, 6],
                dayHeaderFormat: {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'numeric',
                    omitCommas: true,
                },
                expandRows: true,
                slotMinTime: '8:00:00',
                slotMaxTime: '17:30:00'
            });
            calendar.render();
    }
 async getAllDoctorsFromDatabase() {
        try {
            const searchDoctorService = new SearchDoctorService();
            const doctorsData = await searchDoctorService.fetchDoctorsData();
            console.log(doctorsData);
            this.renderDoctors(doctorsData);
        } catch (error) {
            console.error('Failed to fetch doctors data:', error);
            return [];
        }
    }
    renderDoctors(doctors) {
        const container = document.getElementById('doctor-container'); // Assumindo que você tem um contêiner para os cards de perfil de médicos
        container.innerHTML = ''; // Limpa o conteúdo existente

        doctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.classList.add('row', 'profile-card');

            const stars = Array(Math.round(doctor.rating)).fill('<img src="../../assets/icon/estrela-azul.png" alt="Star" class="feedback-star">').join('');

            doctorCard.innerHTML = `
            <div class="col-5 pt-5" style="border-right:  1.5px solid #0367A5;">
                <div class="doctor-info">
                    <div style="width: 30%"><img src="${doctor.profile_pic_url}" alt="${doctor.name}" class="img-fluid doctor-img-avatar"></div>
                    <div style="width: 70%">
                        <span class="doctor-info ps-2">
                            <strong>${doctor.name}</strong>
                        </span>
                        <span class="doctor-info ps-2">
                            <strong>${doctor.specialty}</strong>
                        </span>
                        <div class="doctor-feedback">
                            <span>${stars}</span>
                        </div>
                    </div>
                </div>
                <div class="location-icon-position mt-5">
                    <div style="width: 10%">
                        <img src="../../assets/icon/local.png" alt="" class="doctor-info-icone">
                    </div>
                    <div style="width: 90%" class="doctor-address">
                        <span>Endereço <br> ${doctor.street}, <br> ${doctor.neighborhood}, ${doctor.city}, <br> CEP ${doctor.zip_code}, Brasil</span>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <div id='calendar'></div>
            </div>
        `;

            container.appendChild(doctorCard);
        });
    }
}


new SearchDoctorController();
