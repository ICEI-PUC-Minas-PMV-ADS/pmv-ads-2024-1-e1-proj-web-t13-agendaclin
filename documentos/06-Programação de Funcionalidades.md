# Programação de Funcionalidades

### Tela de Login: AgendaClin

    Funcionalidades da Tela de Login:
    Login via contas Google e Apple, proporcionando uma autenticação rápida e segura.
    Formulário tradicional de login, permitindo acesso através de e-mail e senha.
    Opção de recuperação de senha para assistência aos usuários que esqueceram suas credenciais.
    Link para direcionamento à página de cadastro, facilitando o acesso para novos usuários.
![Texto alternativo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/feature/desenvolver_pagina_de_login/documentos/img/Loginpaciente.png?raw=true)

#### Requisito Funcional Atendido:
    Código: RF-03
    Descrição: Ferramentas que permitem aos profissionais e às clínicas gerenciarem agendamentos, cancelamentos e 
    reagendamentos de maneira eficiente.
    Prioridade: Alta

#### Artefatos da funcionalidade

    login.html: Página HTML que hospeda a tela de login.
    login.css: Folha de estilos CSS para estilização da página.
    login.js: Scripts JavaScript para funcionalidades interativas, como validação e gerenciamento de sessão.

#### Estrutura de Dados

    HTML com Bootstrap para responsividade e acessibilidade.
    CSS para customização visual, proporcionando uma interface alinhada com os padrões de design modernos.
    JavaScript para implementar lógicas de autenticação e integração com serviços externos.

#### Instruções de acesso

    A tela de login pode ser acessada a partir do menu principal ou da homepage do site, clicando em "Faça login em sua conta".
    A página é projetada para ser acessível em dispositivos variados, garantindo uma boa usabilidade independentemente do dispositivo utilizado.

    A redefinição correta para a tela de login garante que todas as funcionalidades necessárias estejam cobertas,enquanto os requisitos não funcionais como design amigável (RNF-01), segurança robusta (RNF-02), e compatibilidade entre diferentes dispositivos (RNF-03) são meticulosamente atendidos, promovendo uma experiência de usuário coesa e segura.

#### Responsável

    Yasmim Nunes

### Tela de Cadastro: AgendaClin
    Funcionalidades da Tela de Cadastro:
    Cadastro via Contas Sociais: Permite aos usuários se cadastrarem rapidamente utilizando suas contas Google ou Apple, facilitando o processo sem a necessidade de preencher múltiplos campos.
    Formulário de Cadastro Tradicional: Inclui campos para inserção de e-mail, verificação de e-mail e senha, garantindo que as informações do usuário sejam corretamente coletadas e validadas.
    Concordância com Termos e Política de Privacidade: Ao criar uma conta, o usuário deve concordar com os termos de uso e política de privacidade, garantindo que esteja ciente das condições de uso do serviço.
![Texto alternativo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/feature/desenvolver_pagina_de_login/documentos/img/paciente.png?raw=true
)
#### Requisito Funcional Atendido:
    Código: RF-02
    Descrição: Criação de perfis completos para cada especialista, incluindo especialidades, qualificações, anos de 
    experiência e avaliações feitas por pacientes anteriores.
    Prioridade: Média

#### Artefatos da funcionalidade
    cadastro.html: Página HTML que hospeda a tela de cadastro.
    cadastro.css: Folha de estilos CSS para estilização da página.
    cadastro.js: Scripts JavaScript para validação dos dados de entrada e interações na página.

#### Estrutura de Dados
    HTML com Bootstrap utilizado para a estruturação responsiva e acessível da página.
    CSS para a personalização visual, proporcionando uma interface alinhada aos padrões de design modernos.
    JavaScript para a implementação de lógicas de autenticação e interação com APIs externas.

#### Instruções de acesso
    A tela de cadastro pode ser acessada clicando em "Não tem conta? Crie uma" na tela de login ou diretamente através de um link específico no website.
    A página é projetada para ser acessível em diversos dispositivos, garantindo usabilidade independente do dispositivo utilizado.

    Esta tela é uma parte crucial da jornada do usuário dentro da plataforma "AgendaClin", garantindo que a entrada de 
    novos usuários no sistema seja segura, eficiente e em conformidade com as normativas de segurança e privacidade.

#### Responsável

    Yasmim Nunes

### Tela de Busca de Especialistas: AgendaClin
    Descrição da Tela:
    Esta tela permite que os usuários pesquisem e agendem consultas com profissionais de saúde, oferecendo filtros por 
    especialidade, data disponível e localização. Cada perfil de médico exibe informações como nome, especialidade, 
    avaliações, endereço e horários disponíveis, facilitando a escolha informada do usuário.

    Funcionalidades da Tela:
    Filtros de Pesquisa: Usuários podem filtrar profissionais por especialidade, datas disponíveis, e localização para encontrar o médico que melhor atende suas necessidades.
    Informações do Profissional de Saúde: Exibição de detalhes como nome, foto, especialidade, avaliações de outros pacientes, e endereço completo.
    Visualização de Disponibilidade: Calendário interativo que mostra a disponibilidade de horários do profissional, permitindo agendamentos diretos.
    Reservas de Horário: Os usuários podem clicar em um horário disponível para iniciar o processo de agendamento de uma consulta.
![Texto alternativo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/feature/desenvolver_pagina_de_login/documentos/img/serchmedico.png?raw=true)
#### Requisito Funcional Atendido:
    RF-01: Implementação de um calendário online interativo que exibe a disponibilidade em tempo real.
    RF-02: Criação de perfis completos para cada especialista, incluindo especialidades e avaliações feitas por pacientes anteriores.
    RF-03: Ferramentas que permitem gerenciamento eficiente de agendamentos, cancelamentos e reagendamentos.
    RF-05: Envio automático de confirmações de agendamento, detalhando informações como horário, local e orientações de preparo.

#### Artefatos da funcionalidade
    search_doctors.html: Página HTML que hospeda a tela de busca e agendamento.
    doctors.css: Folha de estilos CSS para design e layout da página.
    doctors.js: Scripts JavaScript para funcionalidades interativas, como filtros de pesquisa e agendamento.

#### Estrutura de Dados
    HTML para a estruturação do layout, utilizando frameworks como Bootstrap para responsividade.
    CSS para estilização, garantindo uma interface visualmente agradável e funcional.
    JavaScript para manipulação de eventos e interações dinâmicas com a interface.

#### Instruções de acesso
    A tela pode ser acessada através do menu principal da plataforma "AgendaClin", selecionando a opção de busca por médicos.
    É acessível em dispositivos móveis e desktops, garantindo uma experiência de usuário consistente em diferentes plataformas.

    Esta tela é uma peça central para a funcionalidade da plataforma, permitindo que os usuários encontrem e agendem 
    consultas de maneira eficiente e informada, alinhada aos requisitos de usabilidade e acessibilidade.

#### Responsável
    Yasmim Nunes

### Painel de Consultas Médicas: AgendaClin
    Descrição do Componente:
    O "Doctor Consult Dashboard" é uma ferramenta essencial dentro da plataforma "AgendaClin", projetada para médicos 
    gerenciarem suas consultas. Este componente de calendário permite uma visualização clara e interativa dos 
    compromissos agendados, facilitando o planejamento e a organização do tempo do profissional de saúde.

    Funcionalidades do Componente:

    Visualização Mensal e Semanal: Os médicos podem visualizar sua agenda em formatos mensal ou semanal, ajustando conforme a necessidade para um planejamento mais detalhado ou abrangente.
    Gerenciamento de Compromissos: Possibilita o agendamento de novas consultas e a alteração de compromissos existentes, incluindo a capacidade de cancelar ou reagendar consultas diretamente através do dashboard.
    Navegação Fácil: Ferramentas intuitivas permitem navegar entre diferentes meses e dias, e os médicos podem rapidamente saltar para datas específicas usando seletores de data.
    Destaque para Compromissos Agendados: Os compromissos são claramente destacados no calendário, com detalhes como o nome do paciente e o horário da consulta, como é o caso da consulta de "Mônica Marinho" das 14:30 às 15:00, facilitando a visualização rápida da disponibilidade.
![Texto alternativo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/feature/desenvolver_pagina_de_login/documentos/img/search-doctor.png?raw=true)
#### Requisito Funcional Atendido:
    RF-01: Implementação de um calendário online interativo que exibe a disponibilidade em tempo real, facilitando o 
    agendamento de consultas pelos pacientes.
    RF-03: Ferramentas que permitem aos profissionais de saúde gerenciar agendamentos, cancelamentos e 
    reagendamentos de maneira eficiente.

#### Artefatos do Componente
    calendar.html: Página HTML que aloja o componente de calendário.
    calendar.css: Folha de estilos CSS para personalizar a aparência do calendário.
    calendar.js: Scripts JavaScript responsáveis por funcionalidades dinâmicas como carregar eventos, interagir com o usuário para agendamento e reagendamento, e integrar com sistemas externos se necessário.

#### Estrutura de Dados
    Utiliza HTML para a estruturação do layout do calendário, empregando bibliotecas como FullCalendar para funcionalidade interativa e responsiva.
    CSS personalizado para garantir a integração visual com a identidade visual da plataforma.
    JavaScript para manipular eventos do calendário e integrar com o back-end da plataforma.

#### Instruções de acesso
    Acesso restrito aos profissionais de saúde com contas verificadas na plataforma "AgendaClin", que necessitam gerenciar seus horários e consultas.
    Projetado para ser acessível e funcional em uma variedade de dispositivos, assegurando que médicos possam gerenciar suas agendas de qualquer lugar.

    O "Doctor Consult Dashboard" é uma ferramenta chave para a gestão eficiente das consultas médicas, oferecendo aos 
    profissionais de saúde uma visão completa e controle sobre suas agendas, alinhado com as melhores práticas de 
    usabilidade e funcionalidade.

> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

