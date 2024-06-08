//export class DoctorProfessionalProfileService {
   // getData() {
    //    return Promise.resolve(['Item 1', 'Item 2', 'Item 3']);
  //  }
//}
//botao salvar
 const salvar = document.getElementById("salvar")
 //salva os dados
 function salvarDados()
 {
    const endereço = document.getElementById("endereço").value;
    const numero = document.getElementById("numero").value;
    const sobreMim = document.getElementById("sobreMim").value;
    const experiencia = document.getElementById("experiencia").value;
    const formaçao = document.getElementById("formaçao").value;


    localStorage.setItem("endereço" , endereço)
    localStorage.setItem("numero" , numero)
    localStorage.setItem("sobreMim" , sobreMim)
    localStorage.setItem("experiencia" , experiencia)
    localStorage.setItem("formaçao" , formaçao)

    document.write.value
 }
//verifica se os dados estao preenchidos
 function verificarInput()
 {
    const endereço = document.getElementById("endereço").value;
    const numero = document.getElementById("numero").value;
    const sobreMim = document.getElementById("sobreMim").value;
    const experiencia = document.getElementById("experiencia").value;
    const formaçao = document.getElementById("formaçao").value;

    if(endereço === "" || numero === "" || sobreMim === "" || experiencia === "" || formaçao === "" ) 
        {
            alert("por favor, certifique se está preenchido corretamente.");
            return false;
        }
        return true;
 }
//evento click no botao, para ele ir para a proxima tela
 salvar.addEventListener("click", function()
 {
    if (verificarInput()) 
        {
            salvarDados();

            window.location.href = "../schedule-consult-step-2/schedule-consult-step-2.html"
        }
 });

 const logo = document.getElementById("logo")

 logo.addEventListener("click", function()
{
    window.location.href = "../../index.html"
}
)

const icone = document.getElementById("icone")

icone.addEventListener("click", function()
{
   window.location.href = "../doctor-consult-dashboard/doctor-consult-dashboard.html"
}
)


