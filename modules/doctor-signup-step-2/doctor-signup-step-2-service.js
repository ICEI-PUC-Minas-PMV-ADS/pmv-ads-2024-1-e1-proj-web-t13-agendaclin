export class DoctorSignupStep2Service {
    authenticate(city, dde, phone) {
        // Simular autenticação
        return new Promise((resolve, reject) => {
            if (city === "belo horizonte" && dde === "+55" && phone === "0000-0000") {
                resolve("Login successful!");
            } else {
                reject("Invalid credentials");
            }
        });
    }
}
