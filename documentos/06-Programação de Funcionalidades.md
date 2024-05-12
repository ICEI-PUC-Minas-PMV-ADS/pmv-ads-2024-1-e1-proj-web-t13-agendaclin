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



Tela de agendamento de consulta (RF-03)

Responsável: Icaro

O acesso a tela de agendamento da consulta será após o paciente escolher o profissional, a data e o horário. As estruturas de dados foram baseadas em HTML, CSS.

Exemplo da primeira tela de confirmação:

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/165850657/909cdf49-26dc-4b8d-aec2-cb8afc499c1d)

O acesso a segunda tela de agendamento da consulta será após o preenchimento da primeira tela de confirmação. As estruturas de dados foram baseadas em HTML, CSS.

Exemplo segunda tela de confirmação:

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/165850657/10508b49-41cb-4ad9-9769-f1ab210a2a88)

O acesso a terceira tela de agendamento da consulta será após o preenchimento da segunda tela de confirmação. As estruturas de dados foram baseadas em HTML, CSS.

Exemplo terceira tela de confirmação:

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/165850657/d21ad01f-6408-4daa-81ed-55dab2d3d4b6)

Requisito atendido

RF-03: Ferramentas que permitem aos profissionais e às clínicas gerenciarem agendamentos, cancelamentos e reagendamentos de maneira eficiente.

Artefatos da funcionalidade:
•	schedule-consult-step-1.html

•	schedule-consult-step-1.css

•	schedule-consult-step-2.html

•	schedule-consult-step-2.css

•	schedule-consult-step-3.html

•	schedule-consult-step-3.css

Estrutura de dados:

•	schedule-consult-step-1.html

Instruções de acesso: 

1.	Abra um navegador de internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/00be7490908eb37a99bcf94a4878d75278c7bf53/codigo-fonte/modules/home/home.html
2.	Ao selecionar a especialidade, doença ou nome no campo de buscar.
3.	Efetue seu cadastrado/login.
4.	Selecione um dos horários dos médicos disponíveis.
5.	Terá acesso ao primeiro passo da confirmação de agendamento.






# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

[Utilize a estrutura abaixo para cada funcionalidade entregue na etapa]

### Título da funcionalidade

[Adicione imagem da funcionalidade/tela]


#### Requisito atendido

[RF-X: adicione a descrição do requisito atendido]


#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]


#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]


#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]


#### Responsável

[Adicione nome do responsável pelo desenvolvimento da funcionalidade]




> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)


# Programação de Funcionalidades

Tela de home onde o visitante irá conhecer melhor sobre a AgendaClin, será a primeira tela de todas. As estruturas de dados foram baseadas nas tecnologias HTML e CSS.

Exemplo da primeira tela de confirmação:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/165437811/7c8839be-92f1-4bb7-9a29-a3a093a8273d)



O acesso a segunda tela de agendamento da consulta será após clicar no botão do calendario. As estruturas de dados foram baseadas também em HTML e CSS.

Exemplo segunda tela de confirmação:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/165437811/7e18507d-3753-4912-b03f-53f106169ca0)



#### Requisito atendido

[RF-1: Ferramentas que permitem aos profissionais e às clínicas gerenciarem agendamentos, cancelamentos e reagendamentos de maneira eficiente.]


#### Artefatos da funcionalidade

•	home.html

•	home.css

•	doctor-patient-document.html

•	doctor-patient-document.css


#### Estrutura de Dados

•	home.html

•	doctor-patient-document.html

#### Instruções de acesso

você precisa abrir um navegador de internet de sua preferência e digitar a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/00be7490908eb37a99bcf94a4878d75278c7bf53/codigo-fonte/modules/home/home.html



#### Responsável

Michael Benyamin Gorenstein Brasil




> **Links Úteis**:
> - [Tutorial HTML](https://www.w3schools.com/html/default.asp)
> - [Tutorial css](https://www.w3schools.com/css/default.asp)




Tela de agendamento de consulta (RF-03)

Responsável: Breno Marques de Moura

O acesso a tela de cancelamento  da consulta será após o paciente marcar a consulta e depois optar por cancelar a consulta. As estruturas de dados foram baseadas em HTML, CSS.

Exemplo da primeira tela de confirmação:

 ![image]( https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/documentos/img/Tela%20consulta%20cancelada.png)

O acesso a segunda tela de reagendamento da consulta será após o preenchimento da tela de agendar consulta e o paciente terá a opção de remarcar vendo os dias e horários disponíveis para o reagendamento. As estruturas de dados foram baseadas em HTML, CSS.

Exemplo segunda tela de confirmação:

 ![image]( https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/documentos/img/Tela%20reagendamento.png)

O acesso a terceira tela já é do médico e será possível ver as informações como telefone, nome, e-mail etc. do paciente após o médico fazer o cadastro dele na opção adicionar paciente . As estruturas de dados foram baseadas em HTML, CSS.

Exemplo terceira tela de confirmação:

 ![image]( https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/documentos/img/Tela%20lista%20pacientes.png)

Requisito atendido

RF-03: Ferramentas que permitem aos profissionais e às clínicas gerenciarem agendamentos, cancelamentos e reagendamentos de maneira eficiente.

Artefatos da funcionalidade:
•	cancel-consulta.html

•	cancel-consulta.css

•	reschedule-consult.html

•	reschedule-consult.css

•	doctor-patient-list.html

•	doctor-patient-list.css

Estrutura de dados:

•	reschedule-consult-step-1.html

Instruções de acesso: 

1.	Abra um navegador de internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/codigo-fonte/modules/cancel-consult/cancel-consult.html

# Programação de Funcionalidades

Tela de login do fluxo Médico/Administrador (RF - 02)    
Segue Tela de login do usuário, após o usuário efetuar o login, ele será direcionado à tela.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/documentos/img/Tela%20login.png)

Segue tela do cadastro do usuário, após o preenchimento dos dados o usuário será direcionado à segunda tela de cadastro  

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/documentos/img/Tela%20registro_medico_1.png)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/documentos/img/Tela%20registro_medico_2.png)

Requisito atendido:
RF-02: Criação de perfis completos para cada especialista incluindo especialidades, qualificações, anos de experiência, e avaliações feitas por pacientes anteriores.

Artefatos da funcionalidade:

• doctor-login.html
• doctor-login.css
• doctor-signup-step-1.html
• doctor-signup-step-1.css
• doctor-signup-step-2.html
• doctor-signup-step-2.css

Estrutura de Dados

• schedule-consult-step-1.html

Instruções de acesso:
1- Abra um navegador de internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/main/codigo-fonte/modules/doctor-login/doctor-login.html

2- Faça login em sua conta por meio do Google ou por meio da Apple, salvo ainda a possibilidade de fazer login com suas credênciais pré-cadastradas.
  
3- Clique em "Entrar" para entrar em sua conta.

4- Caso o usuário não saiba sua senha, clicar no link "Esqueceu sua senha?".

5- Caso o usuário ainda não tenha sua conta feita, clicar no link "Ainda não tem conta? Faça seu cadastro".

Responsável: 
Giovanni Gonçalves Shintaku



## Tela perfil médico (RF-05)

Responsável: Vinicius

O acesso à tela "perfil médico" será onde somente o médico terá as informações, la ele coloca seus dados como o endereço, número de telefone e informações sobre o médico e sua Experiência, pode também organizar suas consultas marcadas. As estruturas foram baseadas em HTML, CSS.

Exemplo da primeira tela de confirmação:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/166730468/7e158651-1e5b-41b2-a267-5d8667fd9b5c)


O acesso da segunda tela é a tela "perfil paciente" será onde o paciente terá as informações sobre o médico, la ele ver os dados como endereço, número de telefone e informações sobre a Experiência que o médico coloca em no perfil e ate mesmo comentarios de outros pacientes que ja tiveram consultas com ele, pode também olhas Horário disponiveis para consulta. As estruturas foram baseadas em HTML, CSS.

Exemplo segunda tela de confirmação:

 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/assets/166730468/a1813722-449f-40f2-bc99-a1bd77376465)



Requisito atendido

RF-05: ferramentas que permitem o paciente saber mais informações sobre  médico,e facilitar a Interação de agendamentos

Artefatos da funcionalidade:

• doctor-professional-profile.html

• doctor-professional-profile.css

Estrutura de dados:

•	doctor-professional-profile

Instruções de acesso: 

1.	Abra um navegador de internet e informe a seguinte URL: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t13-agendaclin/blob/d0e1f3ec470b9acf2a4646474a6689806ee83f9e/codigo-fonte/modules/doctor-professional-profile/doctor-professional-profile.html
2.	Ao selecionar a especialidade, doença ou nome no campo de buscar.
3.	Efetue seu cadastrado/login.
4.	Selecione um dos horários dos médicos disponíveis.
5.	Terá acesso ao primeiro passo da confirmação de agendamento.
