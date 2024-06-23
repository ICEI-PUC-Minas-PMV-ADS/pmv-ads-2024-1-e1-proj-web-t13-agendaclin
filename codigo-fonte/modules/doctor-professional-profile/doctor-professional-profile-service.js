class DoctorProfessionalProfileService {
    async fetchData(email) {
        try {
            const response = await fetch(`assets/databases/doctors.json`);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            const doctor = data.find(doctor => doctor.email === email);
            return doctor ? doctor : null;
        } catch (error) {
            console.error('Failed to fetch doctors data:', error);
            return null;
        }
    }
}
export default DoctorProfessionalProfileService;