# Community Library

Este é um projeto de uma biblioteca comunitária onde os usuários podem postar livros para compartilhar com outros membros da comunidade e também emprestar livros de outros.

## Funcionalidades

- Cadastro de usuários.
- Postagem de livros para doação ou empréstimo.
- Solicitação de empréstimos entre usuários.
- Geração de relatórios de empréstimos.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **JWT** para autenticação
- **Bootstrap** para estilização do front-end

---

## Instalação

### Pré-requisitos

- Node.js (v14.x ou superior)
- npm (Node Package Manager) ou yarn

### Passos para instalação

1. Clone o repositório:

```bash
git clone https://github.com/<Lauroclara>/community-library.git
```

2. Acesse o diretório do projeto:

```bash
cd community-library
```

3. Instale as dependências:

Com npm:

```bash
npm install
```

Com yarn:

```bash
yarn install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente:

```
PORT=3000
SECRET=your_jwt_secret
```


### Gerar uma chave secreta (opcional):

Você pode gerar uma chave secreta com SHA256 executando o seguinte comando no terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Isso gerará uma chave secreta aleatória de 256 bits em formato hexadecimal.

5. Inicie o servidor:

Com npm:

```bash
npm start
```

Com yarn:

```bash
yarn start
```

6. Acesse a aplicação
Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).


## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## Contribuição 
Se voçê encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou um pull request no repositório do gitHub.

## Licença 

Este porjeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE)

## Autor

Lauro Silva 

## Agradecimentos

Obrigado por usar `COMMUNITY_LIBRARY`! Se voçê tiver alguma duvida ou precisar de ajuda, entre em contato.

---

Certifique-se de atualizar as informações de acordo com suas necessidades específicas, incluindo seu nome e quisquer outros detalhes que sejam relevantes para o seu projeto.