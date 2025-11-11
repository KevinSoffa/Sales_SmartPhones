# 🚀Projeto Full Stack de Engenharia de Dados e Visualização - 📱 Sales Smartphones

<div align="center">
  <img height="180em" src="https://raw.githubusercontent.com/KevinSoffa/API-previdencia-KevinSoffa/refs/heads/develop/img/Kevin%20Soffa%20(2).png"/>
</div>

## Sumário 🔄

1. [Descrição](#descrição-)
2. [Tecnologias](#tecnologias)
3. [Desenvolvimento](#desenvolvimento-)
4. [Configuração do Ambiente](#-configuração-do-ambiente)
5. [Modo de Uso](#modo-de-uso-)

---
## Descrição 📝
### 
Desenvolvi um projeto completo integrando engenharia de dados, back-end e front-end, com o objetivo de criar um pipeline de dados automatizado e uma interface visual interativa para análise de informações.

O projeto percorre todas as etapas do ciclo de dados — desde o tratamento e transformação em notebooks Python, consolidando dados na camada prata, até a disponibilização via API e exibição de dashboards dinâmicos no navegador.

## Tecnologias ⚙️
<div align="left">
    <img src="https://skillicons.dev/icons?i=py" height="40" alt="python logo"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" height="40"/>
    <img src="https://skillicons.dev/icons?i=postgres" height="40" alt="postgresql logo"/>
    <img src="https://skillicons.dev/icons?i=fastapi" height="40" alt="fastapi logo"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" height="40" alt="logo swagger"/>
    <img src="https://skillicons.dev/icons?i=nodejs" height="40" alt="node logo"/>
    <img src="https://skillicons.dev/icons?i=javascript" height="40" alt="javascript logo"/>
    <img src="https://skillicons.dev/icons?i=html" height="40" alt="html logo"/>
</div>

- `Linguagens: Python, JavaScript`
- `Frameworks: FastAPI, Node.js, Express, Handlebars.js`
- `Bibliotecas: Pandas, PySpark, Chart.js / Plotly`
- `Banco de Dados: PostgreSQL`
- `Outros: Swagger, HTML5, CSS3`

## Desenvolvimento 👨‍💻
<img src="" height="400" alt="python logo"/>

---
#### ✅ETL e Tratamento de Dados [ Python | Pandas | PySpark | PostgreSQL  ]

- Criação de um notebook Python responsável por coletar, limpar e transformar dados brutos.
- Utilização do Pandas para manipulação de pequenos volumes e do PySpark para processamentos distribuídos em larga escala.
- Salvando dados tratados na camada `SILVER`

#### ✅Back-End e API [ FastAPI ]
- Construção de uma API RESTful com o framework FastAPI para servir os dados tratados.
- Implementação de endpoints organizados para consulta, filtragem e agregação dos dados.
- Uso de Swagger UI para documentação.
- Estrutura modular e escalável, seguindo boas práticas de arquitetura de software (camadas de controllers, services e models).

#### ✅Front-End e Visualização [ Node.js | Handlebars.js | Charts.js ]
- Desenvolvimento de uma aplicação Node.js com Express e Handlebars.js para renderização dinâmica das páginas.
- Consumo direto da API Python para popular os gráficos e dashboards.
- Utilização de bibliotecas de visualização (como Chart.js ou Plotly) para criar gráficos interativos e responsivos.
- Interface limpa e intuitiva, com foco em usabilidade e análise visual de dados.

#### 📊Destaques Técnicos

- Pipeline completo: extração → transformação → API → visualização.
- Comunicação entre microserviços Python e Node.js.
- Manipulação eficiente de dados com Pandas e PySpark.
- Dashboards dinâmicos com atualização em tempo real via API.
- Projeto modular, escalável e documentado.



### 🔧 Configuração do Ambiente 
#### Instalando bibliotecas necessárias
- 💻 Crie um ambiente virtual
```bash
python -m venv {nome-da-sua-venv}
```

- ▶️ Ative o ambiente virtual
```bash
{nome-da-sua-venv}\Scripts\activate
```

- 🏗️ Instalar todas as bibliotecas nessárias
```bash
pip install -r requirements
```

Antes de executar o projeto, configure as seguintes variáveis de ambiente no seu arquivo `.env` ou diretamente no sistema (toda conexão de banco de dados é feita aqui):

| Variável              | Descrição                                           | tipo        |
|-----------------------|-----------------------------------------------------|-------------|
| HOST                  | Define o endereço do servidor do banco de dados     |  str        |
| DATABASE              | Nome do banco de dados que a aplicação irá utiliza  |  str        |
| USER                  | Nome de usuário para autenticação no banco de dados |  str        |
| PASSWORD              | Senha do usuário para acessar o banco de dados      |  str        |



### 📂 Exemplo de arquivo `.env`
```plaintext
##################################################
### CONEXÃO BANCO DE DADOS
##################################################
HOST=
DATABASE=
PASSWORD=
USER=
```
## Modo de Uso▶️

### ⚡Executando ETL
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/notebook-01.png" height="400"/>
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/notebook-02.png" height="700"/>
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/notebook-03.png" height="700"/>
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/notebook-04.png"/>

### 💾 PostgreSQL
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/postgres-01.png"/>

#### ⚡ Para iniciar o servidor local da API python via prompt de comando basta rodar o comando a baixo na pasta raiz
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

#### ⚡Para acessar o Swagger
```bash
localhost/docs
```
### 📚SWAGGER
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/api-01.png"/>

<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/api-02.png"/>

#### ⚡Para acessar os Gráficos e Dashboard - Rode seu Server Node
```bash
npm start
```
```bash
localhost/
```
#### 🌐 DashBoard     
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/front-01.png"/>   
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/front-02.png"/>         
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/front-03.png" />
<img src="https://raw.githubusercontent.com/KevinSoffa/Sales_SmartPhones/refs/heads/master/img/front-04.png" />                
