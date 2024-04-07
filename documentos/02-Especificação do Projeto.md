# Especificação do Projeto

## Perfis de Usuários

De forma a detalhar os perfis de usuários da plataforma de gestão de saúde, é importante identificar as diversas necessidades e características de cada grupo envolvido. A seguir, apresentamos uma tabela sintetizada com os principais perfis de usuários identificados, destacando suas descrições e necessidades específicas.

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Paciente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários que buscam facilidade e agilidade para agendar consultas médicas, valorizando a possibilidade de fazer isso a qualquer momento e de qualquer local. Eles desejam acessar informações detalhadas e confiáveis sobre os profissionais de saúde, como qualificações e avaliações de outros pacientes, para fazer escolhas informadas. A flexibilidade para alterar ou cancelar agendamentos de forma simples e rápida é fundamental para atender às necessidades de sua rotina dinâmica.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.	Sistema de agendamento online acessível. <br>
2.	Informações detalhadas e atualizadas sobre profissionais de saúde.<br>
3.	Ferramenta de avaliação e feedback de consultas anteriores.<br>
4.	Opções flexíveis para reagendamento e cancelamento de consultas.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Profissional de Saúde </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissionais dedicados a oferecer cuidados de saúde de qualidade, que precisam de uma ferramenta eficiente para gerenciar suas agendas. Eles buscam otimizar o tempo de espera dos pacientes e melhorar a capacidade de atendimento, mantendo um alto padrão de qualidade. A facilidade de comunicação com os pacientes e o acesso rápido aos seus históricos de consultas são essenciais para oferecer um atendimento personalizado e eficaz.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.	Visão clara e atualizada da agenda de consultas.<br>
2.	Ferramentas para gerenciar e reduzir o tempo de espera dos pacientes.<br>
3.	Acesso fácil aos históricos de consultas dos pacientes para um atendimento personalizado.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03: Administrador de Clínica </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsáveis pela gestão eficiente de clínicas e consultórios, procuram por soluções que integrem a administração de múltiplos profissionais e serviços de forma unificada. Eles buscam otimizar a alocação de recursos através de insights sobre padrões de agendamento e necessitam de ferramentas capazes de coletar e analisar o feedback dos pacientes, visando a melhoria contínua dos serviços oferecidos.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1.	Sistema integrado para gestão de agendas de vários profissionais.<br>
2.	Análise de dados para otimização da alocação de recursos e serviços.<br>
3.	Ferramentas para coleta e análise de feedback dos pacientes.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

<!DOCTYPE html>
<html>
<body>



<table>
    <tr>
        <th>Quem (Usuário)</th>
        <th>O Que (Necessidade)</th>
        <th>Por Que (Objetivo)</th>
    </tr>
    <tr>
        <td>Paciente</td>
        <td>Encontrar especialistas médicos com base em especialidade, localização geográfica ou disponibilidade de horário através de uma plataforma online.</td>
        <td>Poder agendar consultas de maneira conveniente e eficiente. Otimizar meu tempo e assegurar acesso a serviços de saúde que se encaixem na minha agenda.</td>
    </tr>
    <tr>
        <td>Paciente</td>
        <td>Desejo ter a capacidade de reagendar ou cancelar consultas facilmente através da plataforma.</td>
        <td>Adaptar meus compromissos médicos às mudanças na minha disponibilidade. Necessito de flexibilidade para gerenciar minha saúde face às incertezas do dia a dia.</td>
    </tr>
    <tr>
        <td>Profissional de saúde</td>
        <td>Visualizar e organizar meus compromissos de forma eficiente através de uma ferramenta de gestão de agenda.</td>
        <td>Maximizar o tempo de atendimento aos pacientes e minimizar períodos ociosos. Pretendo oferecer o melhor cuidado possível aos meus pacientes aproveitando ao máximo o tempo disponível.</td>
    </tr>
    <tr>
        <td>Administrador de clínica</td>
        <td>Acessar relatórios detalhados e análises sobre o uso da plataforma.</td>
        <td>Embasa decisões estratégicas relacionadas à alocação de recursos e à otimização de processos. Almejo melhorar continuamente a satisfação dos pacientes e a eficiência operacional da clínica.</td>
    </tr>
</table>

</body>
</html>

## Requisitos do Projeto

### Requisitos Funcionais

<!DOCTYPE html>
<html>
<body>



<table>
    <tr>
        <th>ID</th>
        <th>Descrição</th>
        <th>Prioridade</th>
    </tr>
    <tr>
        <td>RF-01</td>
        <td>Implementação de um calendário online interativo exibindo a disponibilidade em tempo real dos profissionais de saúde para facilitar o agendamento de consultas pelos pacientes.</td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-02</td>
        <td>Criação de perfis completos para cada especialista incluindo especialidades, qualificações, anos de experiência, e avaliações feitas por pacientes anteriores.</td>
        <td>MÉDIA</td>
    </tr>
    <tr>
        <td>RF-03</td>
        <td>Ferramentas que permitem aos profissionais e às clínicas gerenciarem agendamentos, cancelamentos e reagendamentos de maneira eficiente.</td>
        <td>ALTA</td>
    </tr>
    <tr>
        <td>RF-04</td>
        <td>Desenvolvimento de um sistema através do qual os pacientes podem avaliar suas experiências de consulta, promovendo a melhoria contínua do serviço.</td>
        <td>MÉDIA</td>
    </tr>
    <tr>
        <td>RF-05</td>
        <td>Envio automático de confirmações de agendamento incluindo detalhes como horário, local, orientações de preparo e chegada.</td>
        <td>ALTA</td>
    </tr>
</table>

</body>
</html>


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

<!DOCTYPE html>
<html>
<body>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Descrição</th>
      <th>Prioridade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RNF-01</td>
      <td>Design e desenvolvimento de uma interface amigável e acessível a todos os usuários, incluindo suporte a leitores de tela e automações para pessoas com deficiência.</td>
      <td>ALTA</td>
    </tr>
    <tr>
      <td>RNF-02</td>
      <td>Implementação de medidas de segurança robustas para proteger as informações pessoais e de saúde dos usuários em conformidade com as regulamentações vigentes de proteção de dados.</td>
      <td>ALTA</td>
    </tr>
    <tr>
      <td>RNF-03</td>
      <td>Garantia de que a plataforma seja plenamente funcional e apresente um design responsivo em diferentes dispositivos e tamanhos de tela.</td>
      <td>ALTA</td>
    </tr>
    <tr>
      <td>RNF-04</td>
      <td>Estruturação da plataforma para suportar um aumento significativo no número de usuários e volume de dados sem comprometer o desempenho ou a experiência do usuário.</td>
      <td>MÉDIA</td>
    </tr>
    <tr>
      <td>RNF-05</td>
      <td>Adoção de um design simples e minimalista, facilitando a navegação e a usabilidade para usuários de todas as idades e habilidades técnicas.</td>
      <td>MÉDIA</td>
    </tr>
  </tbody>
</table>

</body>
</html>



**Prioridade: Alta / Média / Baixa. 

