class SearchDoctorService {
    async fetchDoctorsData() {
        try {
            const response = await fetch('assets/databases/doctors.json');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to fetch doctors data:', error);
            return [];
        }
    }
}
export default SearchDoctorService;