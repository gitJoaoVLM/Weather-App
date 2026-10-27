# 🌤️ Weather App - Previsão do Tempo

Uma aplicação web moderna, responsiva e intuitiva para consulta de condições meteorológicas em tempo real de qualquer cidade do mundo, desenvolvida utilizando HTML5, CSS3, JavaScript e a API OpenWeatherMap.

---

## 🚀 Funcionalidades

- 🔍 **Busca por Cidade:** Digite o nome de qualquer cidade para obter os dados meteorológicos atualizados.
- 🌡️ **Informações Detalhadas:**
  - Temperatura atual
  - Condição climática (com ícone ilustrativo)
  - Temperaturas máxima e mínima
  - Umidade relativa do ar
  - Velocidade do vento
- ⚠️ **Tratamento de Erros:** Alertas interativos para busca de campos vazios ou cidades não encontradas.
- 📱 **Layout Responsivo:** Design limpo e adaptável para dispositivos móveis e desktop.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização moderna utilizando Flexbox, CSS Grid, gradientes e a fonte *Poppins*.
- **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM e requisições assíncronas com `fetch` e `async/await`.
- **[OpenWeatherMap API](https://openweathermap.org/api):** Fornecimento dos dados meteorológicos em tempo real.
- **[Font Awesome 6](https://fontawesome.com/):** Ícones vetoriais.

---

## 📂 Estrutura do Projeto

```text
├── index.html                  # Estrutura principal da página
├── style.css                   # Estilos e regras de layout
├── script.js                   # Consumo da API e manipulação da interface
└── images/
    └── undraw_question_vqsl.svg # Ilustração para busca sem resultado
```

---

## 🔧 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gitJoaoVLM/Weather-App
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd Weather-App
   ```

3. **Abra o arquivo `index.html`:**
   - Você pode abrir diretamente o arquivo `index.html` no seu navegador.
   - Ou utilizar uma extensão de servidor local como o **Live Server** no VS Code para uma melhor experiência de desenvolvimento.

---

## 🔑 Configuração da API

A aplicação consome a API do **OpenWeatherMap**. 

> **Nota:** O código inclui uma chave de API padrão no arquivo `script.js`. Caso deseje utilizar sua própria chave de API:
> 1. Cadastre-se gratuitamente em [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
> 2. Obtenha sua chave em **API Keys**.
> 3. Substitua a variável `apiKey` no arquivo `script.js`:
>    ```javascript
>    const apiKey = "SUA_CHAVE_AQUI";
>    ```

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizar, estudar ou aprimorar o código!

---

<p align="center">
  Desenvolvido com 💙 por você!
</p>