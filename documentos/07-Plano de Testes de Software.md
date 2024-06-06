# Plano de Testes de Software
<h1>Plano de Teste do AgendaClin</h1>

<h2>Objetivo</h2>
    <p>Garantir que todas as funcionalidades das páginas perfil profissional médico, Página perfil médico estejam funcionando corretamente e de acordo com os requisitos especificados.</p>

<h2>Escopo</h2>
    <p>Testar as páginas:</p>
    <ul>
        <li>Página perfil profissional médico</li>
        <li>Página perfil médico</li>
    </ul>

<h2>Ferramentas de Teste</h2>
    <ul>
        <li>Navegadores: Chrome, Firefox, Edge</li>
        <li>Ferramentas de depuração do navegador (DevTools)</li>
        <li>Firebase Console</li>
        <li>Fullcalendar</li>
    </ul>
<h1>perfil profissional médico</h1>
<table>
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos Associados</th>
    <th>Objetivo do Teste</th>
    <th>Passos</th>
    <th>Critérios de Êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-01: preencher os dados necessário</td>
    <td>RF-001: O site deve permitir ao usuário registar dados do seu perfil</td>
    <td>Verificar se tudo foi salvo corretamente.</td>
    <td>
      1. Acessar a página do perfil profissional médico.<br>
      2. preencher os dados necessário.<br>
      3. Clicar em "salvar".
    </td>
    <td>Os dados do usuário deverá aparecer na tela</td>
    <td>vinicius</td>
  </tr>
  <tr>
    <td>CT-02: Verificar o ícone calendário</td>
    <td>RF-002: O site deve permitir ao usuário clicar no ícone</td>
    <td>Verificar se ao clicar no ícone está funcionando corretamente.</td>
    <td>
      1. Acessar a página do perfil profissional médico.<br>
      2. Clicar no "ícone calendário".<br>
      3. direcionar para a página de consultas agendadas.
    </td>
    <td>O usuário deve ser direcionado para a página de consultas agendadas.</td>
    <td>vinicius</td>
  </tr>
  <tr>
    <td>CT-03: Verificar os horarios da tabela</td>
    <td>RF-003: O site deve permitir ao usuário clicar em um dos horarios da tabela.</td>
    <td>Verificar se ao Acessar a página do está funcionando corretamente.</td>
    <td>
      1. Acessar a página do perfil profissional médico.<br>
      2.  Clicar em algum "horario da tabela"<br>
    </td>
    <td>O usuário deve ser direcionado para a página de marcar consulta.</td>
    <td>vinicius</td>
  </tr>
  <tr>
    <td>CT-06: Verificar link do logo para home</td>
    <td>RF-006: O site deve permitir ao usuário retornar à página inicial ao clicar no logo.</td>
    <td>Verificar se ao clicar no logo "AgendaClin" o usuário é redirecionado para a página inicial.</td>
    <td>
      1. Acessar a página do perfil profissional médico.<br>
      2. Clicar no logo "AgendaClin".
    </td>
    <td>O usuário deve ser redirecionado para a página inicial.</td>
    <td>vinicius</td>
  </tr>
</table>

<h1>Página perfil médico</h1>
<table>
  <tr>
    <th>Caso de Teste</th>
    <th>Requisitos Associados</th>
    <th>Objetivo do Teste</th>
    <th>Passos</th>
    <th>Critérios de Êxito</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>CT-01: Verificar barra de pesquisa</td>
    <td>RF-001: O site deve permitir ao usuário fazer pesquisa sobre o médico.</td>
    <td>Verificar se a barra de pesquisa está funcionando corretamente.</td>
    <td>
      1. Acessar a Página perfil médico.<br>
      2. Clicar na barra de pesquisa.<br>
      3. digitar algo.<br>
      4. clicar no botão de pesquisar.
    </td>
    <td>O usuário deve ser autenticado e direcionado para o resultado da pesquisa.</td>
    <td>vinicius</td>
  </tr>
  <tr>
    <td>CT-02: Verificar o preenchimento do número de telefone</td>
    <td>RF-002: O site deve permitir ao usuário preencha com seu número.</td>
    <td>Verificar se o preenchimento está funcionando corretamente.</td>
    <td>
      1. Acessar a Página perfil médico.<br>
      2. Clicar no input de preenchimento.<br>
      3. preencher com seu número.
    </td>
    <td>O número do usuário deverá aparecer na tela .</td>
    <td>vinicius</td>
  </tr>
  <tr>
    <td>CT-06: Verificar link do logo para home</td>
    <td>RF-006: O site deve permitir ao usuário retornar à página inicial ao clicar no logo.</td>
    <td>Verificar se ao clicar no logo "AgendaClin" o usuário é redirecionado para a página inicial.</td>
    <td>
      1. Acessar a página de login.<br>
      2. Clicar no logo "AgendaClin".
    </td>
    <td>O usuário deve ser redirecionado para a página inicial.</td>
    <td>vinicius</td>
  </tr>
</table>