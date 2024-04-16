export class SearchDoctorService {
    authenticate(email, password) {
        // Simular autenticação
        return new Promise((resolve, reject) => {
            if (email === "user@example.com" && password === "password") {
                resolve("Login successful!");
            } else {
                reject("Invalid credentials");
            }
        });
    }
}