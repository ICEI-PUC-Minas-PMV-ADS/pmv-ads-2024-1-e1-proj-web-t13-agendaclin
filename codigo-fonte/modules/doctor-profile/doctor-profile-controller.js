import { DoctorProfileService } from './doctor-profile-service.js';

export class DoctorProfileController {
    doctors = [];
    cities = [];
    specialties = [];
    constructor() {
        this.doctorProfileService = new DoctorProfileService();
        this.getAllData();
        this.setupSearchButton();
        this.loadSegment();
        this.loadDoctorData();
    }
    async getAllData() {
        try {
            this.doctors = await this.doctorProfileService.fetchData('doctors');
            this.cities = await this.doctorProfileService.fetchData('cities');
            this.specialties = await this.doctorProfileService.fetchData('specialties');

            this.renderSelectOptions('cities', this.cities, 'Filtre sua cidade');
            this.renderSelectOptions('specialties', this.specialties, 'Especialidade, doença ou nome');
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }
    renderSelectOptions(selectId, options, defaultValue) {
        const selectElement = document.getElementById(selectId);
        selectElement.innerHTML = '';

        const defaultOption = document.createElement('option');
        defaultOption.selected = true;
        defaultOption.disabled = true;
        defaultOption.textContent = defaultValue;
        selectElement.appendChild(defaultOption);

        this.doctorProfileService.sortObjectsByField(options, 'name').forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.name;
            optionElement.textContent = option.name;
            selectElement.appendChild(optionElement);
        });
    }
    setupSearchButton() {
        const searchButton = document.querySelector('#searchButton');
        searchButton.addEventListener('click', () => this.handleSearch());
    }
    handleSearch() {
        const specialtyInput = document.querySelector('#specialties').value;
        const cityInput = document.querySelector('#cities').value;
        //console.log('Search:', specialtyInput, cityInput);
        const filteredDoctors = this.doctors.filter(doctor => {
            const matchesSpecialty = specialtyInput === 'Especialidade, doença ou nome' || doctor.specialty === specialtyInput;
            const matchesCity = cityInput === 'Filtre sua cidade' || doctor.city === cityInput;
            return matchesSpecialty && matchesCity;
        });

        localStorage.setItem('filteredDoctors', JSON.stringify(filteredDoctors));
        window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/search-doctor';
        //console.log('Filtered Doctors:', filteredDoctors);
    }

    setupCalendar(calendarId) {
        const calendarEl = document.getElementById(calendarId);
        const calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'pt-br',
            initialView: 'timeGridWeek',
            slotDuration: '00:45:00',
            slotLabelInterval: '00:45:00',
            slotLabelFormat: {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            },
            allDaySlot: false,
            nowIndicator: true,
            height: 'auto',
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
            slotMaxTime: '18:00:00',
            dateClick: this.handleDateClick.bind(this) ,
            events: this.loadEvents(calendarId),
            eventDidMount: function(info) {
                info.el.style.fontSize = '16px';
                info.el.style.lineHeight = '1.2';

                // const deleteButton = document.createElement('button');
                // deleteButton.innerHTML = 'Delete';
                // deleteButton.classList.add('delete-event-btn');
                // deleteButton.addEventListener('click', function() {
                //     info.event.remove(); // Remove o evento do calendário
                //     const events = JSON.parse(localStorage.getItem('events')) || [];
                //     const updatedEvents = events.filter(e => e.id !== info.event.id);
                //     localStorage.setItem('events', JSON.stringify(updatedEvents)); // Atualiza o localStorage
                // });
                // info.el.appendChild(deleteButton);
            }
        });
        calendar.render();
        const timeGridSlots = calendarEl.querySelectorAll('.fc-timegrid-slot');
        timeGridSlots.forEach(slot => {
            slot.style.height = '25px';
        });


    }
    loadDoctorData() {
        const doctor = JSON.parse(localStorage.getItem('currentDoctor'));
        const container = document.getElementById('page-container');
        container.innerHTML = ''; // Limpa o conteúdo existente
        const doctorCard = document.createElement('div');
        doctorCard.id = doctor.id;
        doctorCard.classList.add('row');
        const calendarId = `calendar-${doctor.id}`;
        let stars ;
        if (this.roundDownToNearestHalf(doctor.rating) === 5) {
            stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/5 estrelas.svg"' +
                ' alt="Star"' +
                ' class="feedback-star">'
        }
        if (this.roundDownToNearestHalf(doctor.rating) === 4.5) {
            stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/4,5%20estrelas.svg"' +
                ' alt="Star"' +
                ' class="feedback-star">'
        }
        if (this.roundDownToNearestHalf(doctor.rating) === 4) {
            stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/4%20estrelas.svg"' +
                ' alt="Star"' +
                ' class="feedback-star">'
        }
        if (this.roundDownToNearestHalf(doctor.rating) === 3.5) {
            stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/3,5%20estrelas.svg"' +
                ' alt="Star"' +
                ' class="feedback-star">'
        }
        if (this.roundDownToNearestHalf(doctor.rating) === 3) {
            stars = '<img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/3%20estrelas.svg"' +
                ' alt="Star"' +
                ' class="feedback-star">'
        }
        //console.log('stars',  this.roundDownToNearestHalf(doctor.rating))
        // console.log(stars, stars)

        doctorCard.innerHTML = `
                  <div class="col-8 offset-2 mt-5 d-flex justify-content-center card">
            <div class="profile">
                <img src="${doctor.profile_pic_url}" alt="Dra. Sofia Martinez Rivera"
                     class="profile-img">
                <div style="font-size: 18px">
                    <h3 style="color: #0367A5;">${doctor.name}</h3>
                    <p class="escritas">Ginecologista</p>
                    <p class="escritas">Número de Registro :</p>
                    <div class="estrelas">
                       <span>${stars}</span>
                    </div>
                </div>
            </div>
            <div id="${calendarId}"></div>
        </div>
        <div class="col-8 offset-2 mt-5 d-flex justify-content-center card">
            <div class="clinic-info">
                <h3 class="titulo"><strong>Consultório</strong></h3>
                <br>
                <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/local.png" style="height: 15px; width: 15px;">
                <span class="escritas">Endereços <br> ${doctor.street}, <br> ${doctor.neighborhood}, ${doctor.city}, <br> CEP ${doctor.zip_code}, Brasil</span>
                <p class="escritas">Rua das Acácias, 157, Apartamento 402, Bairro<br>
                    Jardim Primavera, Cidade das Flores, Estado do Sol,<br>
                    CEP 55235-000, Brasil</p>
                
                <br>
                
                <select id="convenioSelect" required>
                    <option value="Selecione" selected disabled>ver convênio aceito</option>
                    <option value="Particular">Particular</option>
                    <option value="Amil">Amil</option>
                    <option value="Bradesco">Bradesco</option>
                    <option value="Hapvida">Hapvida</option>
                    <option value="NotreDame">Porto Seguro</option>
                </select>
                
                <br><br><br>
                
                <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/telefone.png" style="height: 15px; width: 15px;">
                <span class="escritas">Número de Telefone</span>
                <p class="escritas">(xx) 9985-6723</p>
                <br>
            </div>
        </div>
        <div class="col-8 offset-2  p-0 pt-5">
            <div class="card">
                <div class="clinic-info">
                    <h3 class="titulo"><strong>experiência</strong></h3>
                    <h4><p class="escritas">sobre mim:</p></h4>
                    <p class="escritas">Sou a Dra. Ana Beatriz Ferreira, uma médica ginecologista
                        apaixonada pela saúde<br>
                        feminina e comprometida em oferecer um atendimento de qualidade e humanizado
                        às <br>
                        minhas pacientes. Com uma abordagem empática e atenciosa, acredito na
                        importância <br>
                        de criar um ambiente de confiança e respeito mútuo. Minha missão é empoderar
                        <br>
                        mulheres através do conhecimento sobre seu próprio corpo, promovendo
                        saúde,<br>
                        prevenção e bem-estar.</p>
                    <h4><p class="escritas">experiência em:</p></h4>
                    <p class="escritas">Com mais de 10 anos de experiência na área de ginecologia e
                        obstetrícia, tenho uma <br>
                        ampla experiência em:</p>
                    <p>
                        <li class="escritas">Saúde reprodutiva;</li>
                        <li class="escritas">Planejamento familiar;</li>
                        <li class="escritas">Tratamento de distúrbios menstruais;</li>
                        <li class="escritas">Prevenção e tratamento de DSTs</li>
                        <li class="escritas">Acompanhamento de gestação de baixo e alto risco;</li>
                        <li class="escritas">Realização de exames preventivos e procedimentos
                            ginecológicos, como colposcopia e biópsia
                        </li>
                    </p>
                    <p class="escritas">Tenho também uma vasta experiência em lidar com condições
                        como endometriose, <br>
                        síndrome dos ovários policísticos (SOP), miomas uterinos, e menopausa,
                        oferecendo <br>
                        tratamentos atualizados e personalizados para cada caso.</p>
                    <h4 class="escritas">Doenças Tratadas</h4>
                    <p>
                        <li class="escritas">Distúrbios menstruais;</li>
                        <li class="escritas">Endometriose;</li>
                        <li class="escritas">Síndrome dos Ovários Policísticos (SOP);</li>
                        <li class="escritas">Infecções do trato urinário e DSTs;</li>
                        <li class="escritas">Miomas uterinos;</li>
                        <li class="escritas">Prolapso genital;</li>
                        <li class="escritas">Menopausa e distúrbios hormonais;</li>
                        <li class="escritas">Câncer de mama, ovário, e colo do útero.</li>
                    </p>
                    
                    <br>
                    
                    <h4><p class="escritas">Formação</p></h4>
                    <p>
                        <li class="escritas">Graduação em Medicina pela Universidade Federal do Rio
                            de Janeiro (UFRJ);
                        </li>
                        <li class="escritas">Residência em Ginecologia e Obstetrícia pelo Hospital
                            Federal dos Servidores do Estado (HFSE);
                        </li>
                        <li class="escritas">Mestrado em Saúde da Mulher pela Universidade de São
                            Paulo (USP);
                        </li>
                        <li class="escritas">Diversos cursos de atualização e especializações,
                            incluindo laparoscopia ginecológica,ultrassonografia <br>
                            em, ginecologia e obstetrícia,e manejo da menopausa.
                        </li>
                    </p>
                    
                    <br><br>
                
                </div>
            </div>
        </div>
        <div class="col-8 offset-2  p-0 pt-5">
            <h4 class="titulo"><strong>Opiniões de pacientes</strong></h4>
        </div>
        <div class="col-8 offset-2  p-0 ">
            <img class="classificacao-geral" src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/5%20estrelas.svg" alt="">
        </div>
        <div class="col-8 offset-2 p-0  pt-3 ">
            <p class="escritas">Classificação Geral</p>
        </div>
        <div class="col-8 offset-2 p-0  pt-3 ">
            <h4 class="titulo"><strong>Ordernar por</strong></h4>
        </div>
        <div class="col-8 offset-2 p-0  pt-3 ">
            <div class="segment">
                <button class="segment-button active" data-value="option1">Mais recentes</button>
                <button class="segment-button" data-value="option2">Maior avaliação</button>
                <button class="segment-button" data-value="option3">Menor avaliação</button>
            </div>
        </div>
        <div class="col-8 offset-2 p-0  pt-5 ">
            <div class="card">
                <div class="profile">
                    <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/icone_1.png" class="perfil">
                    <div>
                        <h3><span style="color: #0367A5;">Maria Eduarda Lima</span></h3>
                        <div class="estrelas">
                            <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/5%20estrelas.svg" alt="">
                        </div>
                        <p class="escritas">A Dra.Ana Beatriz é Incrível!Sempreme senti muito
                            nervosa em
                            consultas
                            ginecológicas, mas elame fez sentir segura e acolhida. Explicou tudo
                            claramente e
                            tirou
                            todas as minhas dúvidas. Sinto-me muito mais informada e empoderada
                            sobre minha
                            saúde.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-8 offset-2 p-0  pt-5 ">
            <div class="card">
                <div class="profile">
                    <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/icone_2.png" class="perfil">
                    <div>
                        <h3><span style="color: #0367A5;">Carolina Soares</span></h3>
                        <div class="estrelas">
                            <img src="../../pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/icon/5%20estrelas.svg" alt="">
                        </div>
                        <p class="escritas">Depois de anos lutando com endometriose e consultando
                            vários
                            especialistas,
                            finalmente encontrei alívio com a Dra.Ana Beatriz. Ela é extremamente
                            conhecedora
                            e
                            atualizada sobre os tratamentos mais recentes. Sua abordagem cuidadosa
                            mudou minha
                            vida!
                        </p>
                    </div>
                </div>
            </div>
        
        </div>
            `;
        container.appendChild(doctorCard);
        this.setupCalendar(calendarId); // Inicializa o calendário para o médico atual
        // doctorCard.addEventListener('click', () => this.handleCardClick(doctor));
    }
    handleDateClick(info) {
        const calendarEl = info.view.calendar;
        const calendarId = calendarEl.el.id; // Obtém o ID do calendário
        //console.log('calendarId', calendarId);

        // Iniciar a consulta
        const eventData = {
            id:new Date().getTime(),
            start: info.date,
            allDay: info.allDay,
            calendarId: calendarId,
            name: 'Consulta com Dr. Fulano',
        };
        this.startConsultation(eventData);
    }
    loadEvents(calendarId) {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        // console.log('events', events)
        if ( events.filter(element => element !== null).length === 0) return [];
        return events.filter(event => event.calendarId === calendarId);
    }
    startConsultation(eventData) {
        //console.log('eventData', eventData)
        localStorage.setItem('currentEvent', JSON.stringify(eventData));
        window.location.href = '/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/#/schedule-consult-step-1';
    }
    loadSegment() {
        const segmentButtons = document.querySelectorAll('.segment-button');
        segmentButtons.forEach(button => {
            button.addEventListener('click', function () {
                //console.log('click')
                segmentButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    roundDownToNearestHalf(num) {
        return Math.floor(num * 2) / 2;
    }
}
new DoctorProfileController();
// export class DoctorProfileController {
//     constructor() {
//         this.setupEventsListeners();
//     }
//     setupEventsListeners() {
//         const hora = document.getElementById("hora")
//
//         hora.addEventListener("click", function()
//             {
//                 window.location.href = "../schedule-consult-step-1/schedule-consult-step-1.html"
//             }
//         )
//         const segmentButtons = document.querySelectorAll('.segment-button');
//         segmentButtons.forEach(button => {
//             button.addEventListener('click', function () {
//                 console.log('click')
//                 segmentButtons.forEach(btn => btn.classList.remove('active'));
//                 this.classList.add('active');
//             });
//         });
//     }
// }
