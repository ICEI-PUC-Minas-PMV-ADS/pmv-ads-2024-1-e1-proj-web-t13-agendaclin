/*
//adquirindo os dados do que foi inserido nos campos input

const option = document.querySelector("input[name = 'option']:checked");
const specialty = document.getElementById('specialty');
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');

//criando a classe que vai instanciar um objeto com os dados passados 
 export class user {
    opcaoRadio = document.querySelector("input[name = 'option']:checked").value;
    especialidade = document.getElementById('specialty').innerHTML;
    nome = document.getElementById('name').innerHTML;
    sobrenome = document.getElementById('surname').innerHTML;
    constructor (){
        this.opcaoRadio = opcaoRadio.value;
        this.especialidade = especialidade.innerHTML;
        this.nome = nome.innerHTML;
        this.sobrenome = sobrenome.innerHTML;
    }

}
*/
export class docCad {
    authenticate(option, specialty, userName, userSurname) {
        // Simular autenticação
        return new Promise((resolve, reject) => {
            if (option === "Médico / especialista" || option === "Clínica" && specialty === "111", userName === "222", userSurname === "333") {
                resolve("Login successful!");
            } else {
                reject("Invalid credentials");
            }
        });
    }
}

