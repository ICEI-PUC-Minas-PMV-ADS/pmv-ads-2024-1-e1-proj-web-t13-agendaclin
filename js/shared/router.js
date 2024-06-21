const basePath = '/meu-app';

export const Router = {
    routes: {
        '/':  { path: 'modules/home/home.html', protected: false, title: 'AgendaClin' },
        '/home':  { path: 'modules/home/home.html', protected: false, title: 'AgendaClin' },
        '/login': { path: 'modules/login/login.html', protected: false, title: 'Login | AgendaClin' },
        '/signup':  { path: 'modules/signup/signup.html', protected: false, title: 'Cadastrar | AgendaClin' },
        '/cancel-consult': { path: 'modules/cancel-consult/cancel-consult.html', protected: false, title: 'Cancelar Consulta | AgendaClin' },
        '/doctor-consult-dashboard':  { path: 'modules/doctor-consult-dashboard/doctor-consult-dashboard.html', protected: false, title: 'Consultas Agendadas | AgendaClin' },
        '/doctor-login': 'modules/doctor-login/doctor-login.html',
        '/doctor-patient-document': 'modules/doctor-patient-document/doctor-patient-document.html',
        '/doctor-patient-list': 'modules/doctor-patient-list/doctor-patient-list.html',
        '/doctor-professional-profile': 'modules/doctor-professional-profile/doctor-professional-profile.html',
        '/doctor-profile': 'modules/doctor-profile/doctor-profile.html',
        '/doctor-signup-step-1': 'modules/doctor-signup-step-1/doctor-signup-step-1.html',
        '/doctor-signup-step-2': 'modules/doctor-signup-step-2/doctor-signup-step-2.html',
        '/reschedule-consult': 'modules/reschedule-consult/reschedule-consult.html',
        '/schedule-consult-step-1': 'modules/schedule-consult-step-1/schedule-consult-step-1.html',
        '/schedule-consult-step-2': 'modules/schedule-consult-step-2/schedule-consult-step-2.html',
        '/schedule-consult-step-3': 'modules/schedule-consult-step-3/schedule-consult-step-3.html',
        '/search-doctor':  { path: 'modules/search-doctor/search-doctor.html' , protected: true, title: 'Buscar Médico | AgendaClin' },
    },
    cssLinks: {
        '/': 'modules/home/home.css',
        '/home': 'modules/home/home.css',
        '/login': 'modules/login/login.css',
        '/signup': 'modules/signup/signup.css',
        '/cancel-consult': 'modules/cancel-consult/cancel-consult.css',
        '/doctor-consult-dashboard': 'modules/doctor-consult-dashboard/doctor-consult-dashboard.css',
        '/doctor-login': 'modules/doctor-login/doctor-login.css',
        '/doctor-patient-document': 'modules/doctor-patient-document/doctor-patient-document.css',
        '/doctor-patient-list': 'modules/doctor-patient-list/doctor-patient-list.css',
        '/doctor-professional-profile': 'modules/doctor-professional-profile/doctor-professional-profile.css',
        '/doctor-profile': 'modules/doctor-profile/doctor-profile.css',
        '/doctor-signup-step-1': 'modules/doctor-signup-step-1/doctor-signup-step-1.css',
        '/doctor-signup-step-2': 'modules/doctor-signup-step-2/doctor-signup-step-2.css',
        '/reschedule-consult': 'modules/reschedule-consult/reschedule-consult.css',
        '/schedule-consult-step-1': 'modules/schedule-consult-step-1/schedule-consult-step-1.css',
        '/schedule-consult-step-2': 'modules/schedule-consult-step-2/schedule-consult-step-2.css',
        '/schedule-consult-step-3': 'modules/schedule-consult-step-3/schedule-consult-step-3.css',
        '/search-doctor': 'modules/search-doctor/search-doctor.css',
    },
    init() {
        window.addEventListener('hashchange', this.resolve.bind(this));
        this.resolve();
    },
    resolve() {
        const path = location.hash.slice(1) || '/';
        const routeInfo = this.routes[path];

        const route = routeInfo.hasOwnProperty('protected') ? routeInfo.path : routeInfo;
        const isProtected = routeInfo.hasOwnProperty('protected') && routeInfo.protected;

        if (route) {
            if (isProtected && !isAuthenticated()) {
                document.getElementById('app').innerHTML = 'Acesso Negado. Faça login para continuar.';
                window.location.hash = '#/login'; // Redirecionar para login
            } else {
                this.updateCSS(path)
                this.updateTitle(routeInfo.title);
                fetch(`${basePath}/${route}`)
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('app').innerHTML = html;
                        this.loadModule(path);
                    });
            }
        } else {
            document.getElementById('app').innerHTML = '404 Page Not Found';
        }
    },
    updateTitle(title) {
        document.title = title || 'AgendaClin Example';
    },
    updateCSS(path) {
        const head = document.getElementsByTagName('head')[0];
        const existingLink = head.querySelector('link[data-dynamic="true"]');
        const newHref = this.cssLinks[path];

        if (existingLink) {
            if (newHref) {
                existingLink.href = `${basePath}/${newHref}`;
            } else {
                existingLink.parentNode.removeChild(existingLink);
            }
        } else if (newHref) {
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = `${basePath}/${newHref}`;
            link.setAttribute('data-dynamic', 'true');
            head.appendChild(link);
        }
    },
    loadModule(path) {
        switch (path) {
            case '/':
                import(`${basePath}/modules/home/home-controller.js`)
                    .then(module => {
                        const HomeController = module.HomeController;
                        new HomeController();
                    });
                break;
            case '/login':
                import(`${basePath}/modules/login/login-controller.js`)
                    .then(module => {
                        const LoginController = module.LoginController;
                        new LoginController();
                    });
                break;
            case '/signup':
                import(`${basePath}/modules/signup/signup-controller.js`)
                    .then(module => {
                        const SignupController = module.SignupController;
                        new SignupController();
                    });
                break;
            case '/cancel-consult':
                import(`${basePath}/modules/cancel-consult/cancel-consult-controller.js`)
                    .then(module => {
                        const CancelConsultController = module.CancelConsultController;
                        new CancelConsultController();
                    });
                break;
            case '/doctor-consult-dashboard':
                import(`${basePath}/modules/doctor-consult-dashboard/doctor-consult-dashboard-controller.js`)
                    .then(module => {
                        const DoctorConsultDashboardController = module.DoctorConsultDashboardController;
                        new DoctorConsultDashboardController();
                    });
                break;
            case '/doctor-login':
                import(`${basePath}/modules/doctor-login/doctor-login-controller.js`)
                    .then(module => {
                        const DoctorLoginController = module.DoctorLoginController;
                        new DoctorLoginController();
                    });
                break;
            case '/doctor-patient-document':
                import(`${basePath}/modules/doctor-patient-document/doctor-patient-document-controller.js`)
                    .then(module => {
                        const DoctorPatientDocumentController = module.DoctorPatientDocumentController;
                        new DoctorPatientDocumentController();
                    });
                break;
            case '/doctor-patient-list':
                import(`${basePath}/modules/doctor-patient-list/doctor-patient-list-controller.js`)
                    .then(module => {
                        const DoctorPatientListController = module.DoctorPatientListController;
                        new DoctorPatientListController();
                    });
                break;
            case '/doctor-professional-profile':
                import(`${basePath}/modules/doctor-professional-profile/doctor-professional-profile-controller.js`)
                    .then(module => {
                        const DoctorProfessionalProfileController = module.DoctorProfessionalProfileController;
                        new DoctorProfessionalProfileController();
                    });
                break;
            case '/doctor-profile':
                import(`${basePath}/modules/doctor-profile/doctor-profile-controller.js`)
                    .then(module => {
                        const DoctorProfileController = module.DoctorProfileController;
                        new DoctorProfileController();
                    });
                break;
            case '/doctor-signup-step-1':
                import(`${basePath}/modules/doctor-signup-step-1/doctor-signup-step-1-controller.js`)
                    .then(module => {
                        const DoctorSignupStep1Controller = module.DoctorSignupStep1Controller;
                        new DoctorSignupStep1Controller();
                    });
                break;
            case '/doctor-signup-step-2':
                import(`${basePath}/modules/doctor-signup-step-2/doctor-signup-step-2-controller.js`)
                    .then(module => {
                        const DoctorSignupStep2Controller = module.DoctorSignupStep2Controller;
                        new DoctorSignupStep2Controller();
                    });
                break;
            case '/reschedule-consult':
                import(`${basePath}/modules/reschedule-consult/reschedule-consult-controller.js`)
                    .then(module => {
                        const RescheduleConsultController = module.RescheduleConsultController;
                        new RescheduleConsultController();
                    });
                break;
            case '/schedule-consult-step-1':
                import(`${basePath}/modules/schedule-consult-step-1/schedule-consult-step-1-controller.js`)
                    .then(module => {
                        const ScheduleConsultStep1Controller = module.ScheduleConsultStep1Controller;
                        new ScheduleConsultStep1Controller();
                    });
                break;
            case '/schedule-consult-step-2':
                import(`${basePath}/modules/schedule-consult-step-2/schedule-consult-step-2-controller.js`)
                    .then(module => {
                        const ScheduleConsultStep2Controller = module.ScheduleConsultStep2Controller;
                        new ScheduleConsultStep2Controller();
                    });
                break;
            case '/schedule-consult-step-3':
                import(`${basePath}/modules/schedule-consult-step-3/schedule-consult-step-3-controller.js`)
                    .then(module => {
                        const ScheduleConsultStep3Controller = module.ScheduleConsultStep3Controller;
                        new ScheduleConsultStep3Controller();
                    });
                break;
            case '/search-doctor':
                import(`${basePath}/modules/search-doctor/search-doctor-controller.js`)
                    .then(module => {
                        const SearchDoctorController = module.SearchDoctorController;
                        new SearchDoctorController();
                    });
                break;

        }
    }
};
function isAuthenticated() {
    return localStorage.getItem('userToken') !== null;
}
