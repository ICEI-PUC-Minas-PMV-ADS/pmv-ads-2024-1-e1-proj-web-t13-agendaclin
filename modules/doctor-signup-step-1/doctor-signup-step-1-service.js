export class docCad {
    authenticate(option, specialty, userName, userSurname) {
        // Simular autenticação
        return new Promise((resolve, reject) => {
            if ((option === "Médico / especialista" || option === "Clínica") && specialty === "111" && userName === "222" && userSurname === "333") {
                resolve("Login successful!");
            } else {
                reject("Invalid credentials");
            }
        });
    }
}

