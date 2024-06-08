# Plano de Testes de Software
<h1>Plano de Teste do AgendaClin</h1>

<h2>Objetivo</h2>
    <p>Garantir que todas as funcionalidades das páginas de login, cadastro, pesquisa de médicos, calendário e agendamento de consulta estejam funcionando corretamente e de acordo com os requisitos especificados.</p>

<h2>Escopo</h2>
    <p>Testar as páginas:</p>
    <ul>
        <li>Página de Login</li>
        <li>Página de Cadastro</li>
        <li>Página de Pesquisa de Médicos</li>
        <li>Página de Calendário</li>
        <li>Página de Confirmaçao do Agendamento</li>
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
<h1>Página de login</h1>
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
    <td>CT-01: Verificar login com Google</td>
    <td>RF-001: O site deve permitir ao usuário fazer login com conta Google.</td>
    <td>Verificar se o login com Google está funcionando corretamente.</td>
    <td>
      1. Acessar a página de login.<br>
      2. Clicar em "Continuar com Google".<br>
      3. Realizar login com uma conta Google válida.
    </td>
    <td>O usuário deve ser autenticado e redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-02: Verificar login com Apple</td>
    <td>RF-002: O site deve permitir ao usuário fazer login com conta Apple.</td>
    <td>Verificar se o login com Apple está funcionando corretamente.</td>
    <td>
      1. Acessar a página de login.<br>
      2. Clicar em "Continuar com Apple".<br>
      3. Realizar login com uma conta Apple válida.
    </td>
    <td>O usuário deve ser autenticado e redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-03: Verificar login com e-mail e senha</td>
    <td>RF-003: O site deve permitir ao usuário fazer login com e-mail e senha.</td>
    <td>Verificar se o login com e-mail e senha cadastrados no Firebase está funcionando corretamente.</td>
    <td>
      1. Acessar a página de login.<br>
      2. Inserir e-mail e senha.<br>
      3. Clicar em "Entrar".
    </td>
    <td>O usuário deve ser autenticado e redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-04: Verificar link de recuperação de senha</td>
    <td>RF-004: O site deve permitir ao usuário recuperar a senha.</td>
    <td>Verificar se o link "Esqueceu sua senha?" redireciona para a página de recuperação de senha.</td>
    <td>
      1. Acessar a página de login.<br>
      2. Clicar em "Esqueceu sua senha?".
    </td>
    <td>O usuário deve ser redirecionado para a página de recuperação de senha.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-05: Verificar link de cadastro</td>
    <td>RF-005: O site deve permitir ao usuário acessar a página de cadastro.</td>
    <td>Verificar se o link "Ainda não tem conta? Faça seu cadastro!" redireciona para a página de cadastro.</td>
    <td>
      1. Acessar a página de login.<br>
      2. Clicar em "Ainda não tem conta? Faça seu cadastro!".
    </td>
    <td>O usuário deve ser redirecionado para a página de cadastro.</td>
    <td>Yasmim</td>
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
    <td>Yasmim</td>
  </tr>
</table>

<h1>Página de cadastro</h1>
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
    <td>CT-07: Verificar cadastro com Google</td>
    <td>RF-007: O site deve permitir ao usuário cadastrar uma conta com Google.</td>
    <td>Verificar se o cadastro com Google está funcionando corretamente.</td>
    <td>
      1. Acessar a página de cadastro.<br>
      2. Clicar em "Continuar com Google".<br>
      3. Realizar cadastro com uma conta Google válida.
    </td>
    <td>O usuário deve ser cadastrado e redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-08: Verificar cadastro com Apple</td>
    <td>RF-008: O site deve permitir ao usuário cadastrar uma conta com Apple.</td>
    <td>Verificar se o cadastro com Apple está funcionando corretamente.</td>
    <td>
      1. Acessar a página de cadastro.<br>
      2. Clicar em "Continuar com Apple".<br>
      3. Realizar cadastro com uma conta Apple válida.
    </td>
    <td>O usuário deve ser cadastrado e redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-09: Verificar cadastro com e-mail e senha</td>
    <td>RF-009: O site deve permitir ao usuário cadastrar uma conta com e-mail e senha.</td>
    <td>Verificar se o cadastro com e-mail e senha no Firebase está funcionando corretamente.</td>
    <td>
      1. Acessar a página de cadastro.<br>
      2. Inserir e-mail, verificar e-mail e senha.<br>
      3. Clicar em "Criar perfil".
    </td>
    <td>O usuário deve ser cadastrado e redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-10: Verificar erro ao cadastrar com e-mail já existente</td>
    <td>RF-010: O site deve exibir mensagem de erro ao tentar cadastrar com e-mail já existente.</td>
    <td>Verificar se a mensagem de erro é exibida corretamente.</td>
    <td>
      1. Acessar a página de cadastro.<br>
      2. Inserir e-mail já existente e senha.<br>
      3. Clicar em "Criar perfil".
    </td>
    <td>Uma mensagem de erro deve ser exibida.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-11: Verificar erro para senhas que não cumprem requisitos</td>
    <td>RF-011: O site deve exibir mensagem de erro para senhas que não cumprem os requisitos mínimos.</td>
    <td>Verificar se a mensagem de erro é exibida corretamente.</td>
    <td>
      1. Acessar a página de cadastro.<br>
      2. Inserir e-mail válido e senha que não cumpre os requisitos.<br>
      3. Clicar em "Criar perfil".
    </td>
    <td>Uma mensagem de erro deve ser exibida.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-12: Verificar link do logo para home</td>
    <td>RF-012: O site deve permitir ao usuário retornar à página inicial ao clicar no logo.</td>
    <td>Verificar se ao clicar no logo "AgendaClin" o usuário é redirecionado para a página inicial.</td>
    <td>
      1. Acessar a página de cadastro.<br>
      2. Clicar no logo "AgendaClin".
    </td>
    <td>O usuário deve ser redirecionado para a página inicial.</td>
    <td>Yasmim</td>
  </tr>
</table>

<h1>Página de pesquisa de médicos</h1>
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
    <td>CT-13: Verificar busca por especialidade, doença ou nome</td>
    <td>RF-013: O site deve permitir buscar médicos por especialidade, doença ou nome.</td>
    <td>Verificar se a busca retorna resultados corretos.</td>
    <td>
      1. Acessar a página de pesquisa.<br>
      2. Inserir uma especialidade, doença ou nome.<br>
      3. Clicar em "Buscar".
    </td>
    <td>Os resultados correspondentes devem ser exibidos.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-14: Verificar filtro por cidade</td>
    <td>RF-014: O site deve permitir filtrar médicos por cidade.</td>
    <td>Verificar se o filtro retorna resultados corretos.</td>
    <td>
      1. Acessar a página de pesquisa.<br>
      2. Selecionar uma cidade no filtro.<br>
      3. Clicar em "Buscar".
    </td>
    <td>Os resultados correspondentes devem ser exibidos.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-15: Verificar filtro por convênios</td>
    <td>RF-015: O site deve permitir filtrar médicos por convênios.</td>
    <td>Verificar se o filtro retorna resultados corretos.</td>
    <td>
      1. Acessar a página de pesquisa.<br>
      2. Selecionar um convênio no filtro.<br>
      3. Clicar em "Buscar".
    </td>
    <td>Os resultados correspondentes devem ser exibidos.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-16: Verificar filtro por datas disponíveis</td>
    <td>RF-016: O site deve permitir filtrar médicos por datas disponíveis.</td>
    <td>Verificar se o filtro retorna resultados corretos.</td>
    <td>
      1. Acessar a página de pesquisa.<br>
      2. Selecionar uma data disponível no filtro.<br>
      3. Clicar em "Buscar".
    </td>
    <td>Os resultados correspondentes devem ser exibidos.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-17: Verificar filtro por bairros</td>
    <td>RF-017: O site deve permitir filtrar médicos por bairros.</td>
    <td>Verificar se o filtro retorna resultados corretos.</td>
    <td>
      1. Acessar a página de pesquisa.<br>
      2. Selecionar um bairro no filtro.<br>
      3. Clicar em "Buscar".
    </td>
    <td>Os resultados correspondentes devem ser exibidos.</td>
    <td>Yasmim</td>
  </tr>
  <tr>
    <td>CT-18: Verificar detalhes dos médicos</td>
    <td>RF-018: O site deve exibir detalhes dos médicos corretamente.</td>
    <td>Verificar se os detalhes do médico, como nome, especialidade, endereço e horários estão corretos e visíveis.</td>
    <td>
      1. Acessar a página de pesquisa.<br>
      2. Visualizar os detalhes dos médicos listados.
    </td>
    <td>Os detalhes devem estar corretos e visíveis.</td>
    <td>Yasmim</td>
  </tr>
</table>

<h1>Página de consultas agendadas</h1>


<table border="1">
        <tr>
            <th>Caso de Teste</th>
            <th>Requisitos Associados</th>
            <th>Objetivo do Teste</th>
            <th>Passos</th>
            <th>Critérios de Êxito</th>
            <th>Responsável</th>
        </tr>
        <tr>
            <td>CT-19: Verificar exibição das datas</td>
            <td>RF-019: O site deve exibir as datas corretamente no calendário.</td>
            <td>Verificar se as datas são exibidas corretamente.</td>
            <td>
                1. Acessar a página de calendário.<br>
                2. Navegar pelo calendário.
            </td>
            <td>As datas devem ser exibidas corretamente.</td>
            <td>Yasmim</td>
        </tr>
        <tr>
            <td>CT-20: Verificar exibição das consultas agendadas</td>
            <td>RF-020: O site deve exibir as consultas agendadas no calendário.</td>
            <td>Verificar se as consultas agendadas aparecem no calendário.</td>
            <td>
                1. Acessar a página de calendário.<br>
                2. Visualizar as consultas agendadas.
            </td>
            <td>As consultas agendadas devem estar visíveis no calendário.</td>
            <td>Yasmim</td>
        </tr>
        <tr>
            <td>CT-21: Verificar detalhes das consultas agendadas</td>
            <td>RF-021: O site deve exibir os detalhes das consultas agendadas ao clicar nelas.</td>
            <td>Verificar se ao clicar em uma consulta, os detalhes são exibidos corretamente.</td>
            <td>
                1. Acessar a página de calendário.<br>
                2. Clicar em uma consulta agendada.
            </td>
            <td>Os detalhes da consulta devem ser exibidos corretamente.</td>
            <td>Yasmim</td>
        </tr>
        <tr>
            <td>CT-22: Verificar navegação entre meses</td>
            <td>RF-022: O site deve permitir a navegação entre meses no calendário.</td>
            <td>Verificar a navegação entre os meses no calendário.</td>
            <td>
                1. Acessar a página de calendário.<br>
                2. Navegar entre os meses.
            </td>
            <td>A navegação entre os meses deve funcionar corretamente.</td>
            <td>Yasmim</td>
        </tr>
        <tr>
            <td>CT-23: Verificar agendamento de consulta</td>
            <td>RF-023: O site deve permitir ao usuário agendar consultas pelo calendário.</td>
            <td>Verificar se uma consulta pode ser agendada corretamente.</td>
            <td>
                1. Acessar a página de calendário.<br>
                2. Selecionar uma data e horário disponíveis.<br>
                3. Agendar uma consulta.<br>
                4. Verificar se a consulta aparece no calendário.
            </td>
            <td>A consulta deve ser agendada e exibida no calendário.</td>
            <td>Yasmim</td>
        </tr>
        <tr>
            <td>CT-24: Verificar link do logo para home</td>
            <td>RF-024: O site deve permitir ao usuário retornar à página inicial ao clicar no logo.</td>
            <td>Verificar se ao clicar no logo "AgendaClin" o usuário é redirecionado para a página inicial.</td>
            <td>
                1. Acessar a página de calendário.<br>
                2. Clicar no logo "AgendaClin".
            </td>
            <td>O usuário deve ser redirecionado para a página inicial.</td>
            <td>Yasmim</td>
        </tr>
        <tr>
            <td>CT-25: Verificar botão para a página de pacientes</td>
            <td>RF-025: O site deve permitir ao médico navegar para a página de pacientes através de um botão.</td>
            <td>Verificar se o botão "Ir para a página de pacientes" redireciona corretamente.</td>
            <td>
                1. Acessar a página de consultas agendadas.<br>
                2. Clicar no botão "Ir para a página de pacientes".
            </td>
            <td>O usuário deve ser redirecionado para a página de pacientes.</td>
            <td>Yasmim</td>
        </tr>
    </table>

<h1>Página de Confirmaçao do Agendamento</h1>
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
    <td>CT-26: Verificar a opçao de selecionar o convenio</td>
    <td>RF-026: O site deve permitir de forma obrigatoria, a seleçao de convenio ou particular .</td>
    <td>Verificar se a seleçao esta obrigatoria e armazenando o dado.</td>
    <td>
      1. Acessar a página de confirmacao de agendamento.<br>
      2. Escolher uma das opçoes de convenio.<br>
      3. Clicar em "Continuar".
    </td>
    <td>A pagina deve avançar para a proxima tela e salvar a informaçao em LocalStorage.</td>
    <td>Icaro</td>
  </tr>
  <tr>
    <td>CT-27: Verificar opçao de primeira consulta </td>
    <td>RF-027: O site deve permitir o usuario selecionar se é a sua primeira consulta ou nao.</td>
    <td>Verificar se a opçao esta sendo salva no LocalStorage.</td>
    <td>
      1. Acessar a página de confirmacao de agendamento.<br>
      2. Selecionar uma opçao de "sim" ou "nao" em "É a sua primeira consulta?".<br>
      3. Clicar em "Continuar".
    </td>
    <td>A pagina deve avançar para a proxima tela e salvar a informaçao em LocalStorage.</td>
    <td>Icaro</td>
  </tr>
  <tr>
    <td>CT-28: Verificar o preenchimento dos dados pessoais</td>
    <td>RF-028: O site deve permitir a inserçao do nome, sobrenome e telefone do usuario.</td>
    <td>Verificar se os campos estao preenchidos e armazenando os dados em LocalStorage.</td>
    <td>
      1. Acessar a página de confirmacao de agendamento 2.<br>
      2. Preencher campos "Nome", "Sobrenome" e "Telefone".<br>
      3. Clicar em "Continuar".
    </td>
    <td>A pagina deve avançar para a proxima tela e salvar as informaçoes em LocalStorage.</td>
    <td>Icaro</td>
  </tr>
  <tr>
    <td>CT-29: Verificar opçao de informaçoes adicionais</td>
    <td>RF-029: O site deve permitir o preenchimento de informaçoes adicionais.</td>
    <td>Verificar se os dados estao sendo salvos em LocalStorage.</td>
    <td>
      1. Acessar a confirmacao de agendamento 2.<br>
      2. Preencher o campo de "Informaçoes Adicionais".<br>
      3. Clicar em "Continuar".
    </td>
    <td>A pagina deve avançar para a proxima tela e salvar as informacoes em LocalStorage.</td>
    <td>Icaro</td>
  </tr>
  <tr>
    <td>CT-30: Verificar opçao de Reagendar Consulta</td>
    <td>RF-030: O site deve permitir reagendar a consulta.</td>
    <td>Verificar se o paciente será redirecionado para a tela de reagendamento.</td>
    <td>
      1. Acessar a página de confirmacao de agendamento 3.<br>
      2. Ir na opçao "Reagendar Consulta".<br>
    </td>
    <td>O usuario deve ser redirecionado para a tela de reagendamento.</td>
    <td>Icaro</td>
  </tr>
  <tr>
    <td>CT-31: Verificar opçao de Cancelar Consulta</td>
    <td>RF-031: O site deve permitir o cancelamento da consulta.</td>
    <td>Verificar se o paciente será redirecionado para a tela de confirmacao do cancelamento e se os dados serao apagados.</td>
    <td>
      1. Acessar a página de confirmacao de agendamento 3.<br>
      2. Ir na opçao "Cancelar Consulta".
    </td>
    <td>O usuario deve ser redirecionado para a tela de confirmaçao do cancelamento e os dados apagados do LocalStorage.</td>
    <td>Icaro</td>
  </tr>
</table> 


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
    <td>icaro</td>
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
    <td>icaro</td>
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
    <td>icaro</td>
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
    <td>icaro</td>
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
    <td>icaro</td>
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
    <td>icaro</td>
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
    <td>icaro</td>
  </tr>
</table>

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

<br><br>

<hr>

<br><br>

# Plano de Testes de Software
<h1>Plano de Teste do AgendaClin</h1>

<h2>Objetivo</h2>
    <p>Garantir que todas as funcionalidades das páginas Home e Carregamento de documentos de acordo com os requisitos especificados.</p>

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
    
<h1>Página Home</h1>

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
    <td>CT-01: Acessar a página de login</td>
    <td>RF-001: O site deve permitir ao usuário acessar a página de login.</td>
    <td>Verificar se foi aberta a página.</td>
    <td>
      1. Acessar a página pelo botão "Entrar" na barra barra de navegação.
    </td>
    <td>O usuário deve ter tido acesso à pagina</td>
    <td>Michael</td>
  </tr>

  <tr>
    <td>CT-02: Acessar a página de cadastro</td>
    <td>RF-002: O site deve permitir ao usuário acessar a pagina de cadastro</td>
    <td>Verificar se foi aberta a página.</td>
    <td>
      1. Acessar a página pelo botão "Cadastrar" na barra barra de navegação.
    </td>
    <td>O usuário deve ter tido acesso à pagina</td>
    <td>Michael</td>
  </tr>

  <tr>
    <td>CT-03: Pesquisa que manda para a página de login</td>
    <td>RF-003: O site deve emitir um alerta ao usuário no qual informa para loggar</td>
    <td>Verificar se ao Acessar a página do está funcionando corretamente.</td>
    <td>
      1. Pesquise por um especialista.<br>
      2. Pesquise uma cidade.<br>
      3. Clique no botão de pesquisa.
    </td>
    <td>O usuário deve ser direcionado para a página de login.</td>
    <td>Michael</td>
  </tr>
</table>

<br><br>
  
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
    <td>CT-01: Acessar a página de agendamentos</td>
    <td>RF-001: O site deve permitir ao usuário acessar a página de agendamentos</td>
    <td>Verificar se foi aberta a página.</td>
    <td>
      1. Acessar a página pelo botão com ícone de calendário na barra barra de navegação lateral.
    </td>
    <td>O usuário deve ter tido acesso à pagina</td>
    <td>Michael</td>
</tr>

  <tr>
    <td>CT-02: Acessar a página do perfil do médico</td>
    <td>RF-002: O site deve permitir ao usuário acessar a pagina do perfil do médico</td>
    <td>Verificar se foi aberta a página.</td>
    <td>
      1. Acessar a página pelo botão com o ícone do perfil na barra barra de navegação lateral.
    </td>
    <td>O usuário deve ter tido acesso à pagina</td>
    <td>Michael</td>
  </tr>

  <tr>
    <td>CT-03: O arquivo do laudo médico ser armazenado em localstorage</td>
    <td>RF-003: O site deve emitir um alerta ao usuário no qual informa que o arquivo foi armazenado com sucesso</td>
    <td>Verificar se o arquivo está armazenado.</td>
    <td>
      1. Clique no botão ou arraste o arquivo.<br>
      2. Aperte f12 e vá em application. (Habilite o modo desenvolvedor no seu navegador, caso esteja testando no Safari ou outros)<br>
      3. Clique em localstorage e veja se o nome do seu arquivo está aparecendo.
    </td>
    <td>O arquivo deve ser enviado e aparecer o alerta de envio bem sucedido.</td>
    <td>Michael</td>
  </tr>
  
</table>
