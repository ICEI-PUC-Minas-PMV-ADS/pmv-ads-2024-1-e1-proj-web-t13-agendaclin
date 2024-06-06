# Plano de Testes de Software
<h1>Plano de Teste do AgendaClin</h1>

<h2>Objetivo</h2>
    <p>Garantir que todas as funcionalidades das páginas de login, cadastro, pesquisa de médicos e calendário estejam funcionando corretamente e de acordo com os requisitos especificados.</p>

<h2>Escopo</h2>
    <p>Testar as páginas:</p>
    <ul>
        <li>Página de Login</li>
        <li>Página de Cadastro</li>
        <li>Página de Pesquisa de Médicos</li>
        <li>Página de Calendário</li>
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

> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
