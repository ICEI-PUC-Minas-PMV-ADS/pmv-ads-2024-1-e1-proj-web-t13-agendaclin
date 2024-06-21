document.addEventListener('DOMContentLoaded', () => {
  const addPatientButton = document.getElementById('addPatientButton');
  const patientForm = document.getElementById('patientForm');
  const newPatientForm = document.getElementById('newPatientForm');
  const patientList = document.getElementById('patientList');

  addPatientButton.addEventListener('click', () => {
      console.log('Botão "Adicionar pacientes" clicado');
      patientForm.style.display = patientForm.style.display === 'none' ? 'block' : 'none';
  });

  newPatientForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('Formulário submetido');

      const nome = document.getElementById('nome').value;
      const sobrenome = document.getElementById('sobrenome').value;
      const telefone = document.getElementById('telefone').value;
      const email = document.getElementById('email').value;

      const patientDiv = document.createElement('div');
      patientDiv.className = 'patient';
      patientDiv.innerHTML = `
          <div><p>${nome} ${sobrenome}</p></div>
          <div><p>${telefone}</p></div>
          <div><p>Hoje</p></div>
          <div><p>${email}</p></div>
      `;

      patientList.appendChild(patientDiv);

      // Limpar formulário
      newPatientForm.reset();

      // Esconder formulário
      patientForm.style.display = 'none';
  });
});
