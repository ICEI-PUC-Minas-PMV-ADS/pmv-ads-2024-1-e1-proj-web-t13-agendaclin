export class ScheduleConsultStep2Service {
    salvarDados(dados) {
        localStorage.setItem('nome', dados.nome);
        localStorage.setItem('sobrenome', dados.sobrenome);
        localStorage.setItem('numero', dados.numero);
        localStorage.setItem('informacoesAdicionais', dados.informacoesAdicionais);
    }

    validarFormulario(dados) {
        const numeroRegex = /^\(\d{2}\)\d{9}$/;

        if (dados.nome === "" || dados.sobrenome === "" || !numeroRegex.test(dados.numero)) {
            alert("Por favor, preencha todos os campos obrigatórios corretamente.");
            return false;
        }
        return true;
    }

    formatarNumero(numero) {
        const value = numero.replace(/\D/g, '');
        let formattedValue = "";

        if (value.length > 0) {
            formattedValue = "(" + value.substring(0, 2);
        }
        if (value.length > 2) {
            formattedValue += ")" + value.substring(2, 11);
        }
        if (value.length > 11) {
            formattedValue = formattedValue.substring(0, 14);
        }

        return formattedValue;
    }

    getDadosMedico() {
        return {
            imagem: localStorage.getItem('medicoImagem'),
            nome: localStorage.getItem('medicoNome'),
            especialidade: localStorage.getItem('medicoEspecialidade'),
            horario: localStorage.getItem('consultaHorario'),
            local: localStorage.getItem('consultaLocal')
        };
    }
}