//export class DoctorProfessionalProfileService {
   // getData() {
    //    return Promise.resolve(['Item 1', 'Item 2', 'Item 3']);
  //  }
//}
 const pesquisa = document.getElementById("pesquisa")
//pesquisa
 function.pesquisar()
{
    const doença = document.getElementById("doença").value;
    const filtro = document.getElementById("filtro").value;

    localStorage.setItem("doença" , doença)
    localStorage.setItem("filtro" , filtro)
}

pesquisa.addEventListener("click", function()
{
    if (pesquisar())
        {
            window.location.href = "../schedule-consult-step-2/schedule-consult-step-2.html"
        }
});

const logo = document.getElementById("logo")

function.retornar()
{
    logo.addEventListener("click", function())
    
}