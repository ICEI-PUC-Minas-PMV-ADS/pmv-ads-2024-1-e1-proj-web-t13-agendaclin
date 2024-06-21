class SearchDoctorService {
    async fetchData(databaseName) {
        try {
            const response = await fetch(`/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/databases/${databaseName}.json`);
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

    sortObjectsByField(array, field) {
        return array.sort((a, b) => {
            if (a[field] < b[field]) {
                return -1;
            }
            if (a[field] > b[field]) {
                return 1;
            }
            return 0;
        });
    }
}

export default SearchDoctorService;