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
    const endereço = document.getElementById("endereço").Value;
    const numero = document.getElementById("numero").Value;
    const sobreMim = document.getElementById("sobreMim").Value;
    const experiencia = document.getElementById("experiencia").Value;
    const formaçao = document.getElementById("formaçao").Value;


    localStorage.setItem("endereço" , endereço)
    localStorage.setItem("numero" , numero)
    localStorage.setItem("sobreMim" , sobreMim)
    localStorage.setItem("experiencia" , experiencia)
    localStorage.setItem("formaçao" , formaçao)
 }
//verifica se os dados estao preenchidos
 function verificarInput()
 {
    const endereço = document.getElementById("endereço")
    const numero = document.getElementById("numero")
    const sobreMim = document.getElementById("sobreMim")
    const experiencia = document.getElementById("experiencia")
    const formaçao = document.getElementById("formaçao")

    if(endereço === "" || numero === "" || sobreMim === "" || experiencia === "" || formaçao === "" ) 
        {
            alert("por favor, certifique-se se está preenchido corretamente.");
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