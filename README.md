<div>
    <span style="font-size: 30px;">
        <h1>API para Cadastro de Produtos</h1> 
    </span>
    <img src="./Shared/pictures/javascript.png" height="30">
</div>

</br>

<h2> 💻 Sobre o Projeto </h2>

<p style="margin-left: 30px;">
    API desenvolvida para a gestão do cadastro de produtos. Esta API viabiliza consultas, cadastros, atualizações e exclusões de produtos. O conceito do projeto foi criar uma aplicação utilizando JavaScript (Vanilla) e Node.js, sem recorrer a frameworks, ORM's ou bibliotecas externas. O objetivo principal foi construir uma aplicação o mais leve e limpa possível, permitindo uma compreensão mais profunda de como tudo acontece por baixo dos panos nos frameworks e bibliotecas disponíveis no mercado.
</p>

</br>

<h2> ⚙️ Funcionalidades </h2>
    <div style="margin-left: 30px;">
        <li>
            <input type="checkbox" checked> Consultar Todos os Produtos Cadastrados
        </li>
        <li>
            <input type="checkbox" checked> Consultar Produto por ID
        </li>
        <li>
            <input type="checkbox" checked> Cadastrar Novo Produto
        </li>
        <li>
            <input type="checkbox" checked> Atualizar Cadastro de Produto Existente
        </li>
        <li>
            <input type="checkbox" checked> Deletar Produto Existente
        </li>
    </div>

</br>

<h2> 🛠 Tecnologias Utilizadas</h2>
    <div style="margin-left: 30px;">
        <li>
            JavaScript
            <img src="./Shared/pictures/javascript.png" height="15">
        </li>
        <li>
            Node.JS
            <img src="./Shared/pictures/nodejs.png" height="15">
        </li>
        <li>
            PostgreSQL
            <img src="./Shared/pictures/postgres.png" height="15">
        </li>
        <li>
            dotENV
            <img src="./Shared/pictures/dotenv.png" height="15">
        </li>
        <li>
            Node Test
            <img src="./Shared/pictures/nodejs.png" height="15">
        </li>
    </div>

</br>

<h2>💡 Rotas da Aplicação </h2>

<li style="margin-left: 30px;">
    <strong>
        A API segue a estrutura padrão RESTful para os endpoints:
    </strong>
</li>

</br>

<div style="margin-left: 50px;">
    <li>
        <span> 
            GET -> <strong>/product</strong>
        </span> </br>
        <span style="margin-left: 30px"> 
            Retorna uma Lista com Todos Produtos Cadastrados
        </span>
    </li>
    </br>
    <li>
        <span>
            GET -> <strong>/product?id={id}</strong>
        </span> </br>
        <span style="margin-left: 30px">
            Retorna o prudo com ID passado na requisição
        </span>
    </li>
    </br>
    <li>
        <span>
            POST -> <strong>/product</strong>
        </span></br>
        <span style="margin-left: 30px">
            Cria um novo produto conforme atributos passados no body da requisição
        </span>
    </li>
    </br>
    <li>
        <span>
            PUT -> <strong>/product?id={id}</strong>
        </span></br>
        <span style="margin-left: 30px">
            Edita o produto, de ID passado via paramentro, com os parametros passados nos body
        </span>
    </li>
    </br>
    <li>
        <span>
            DELETE -> <strong>/product?id={id}</strong>
        </span></br>
        <span style="margin-left: 30px">
            Deleta o produto ja cadastrado conformr o ID passado por parametro
        </span>
    </li>
    </br>
    <li>
        <span>
            <strong>Body</strong> da Requisição
        </span></br></br>
        <span>
            <span style="margin-left: 30px">{</span> </br>
                <span style="margin-left: 40px">
                    "name": Produto 1, 
                </span> </br>
                <span style="margin-left: 40px">
                    "price": 10.99,
                </span></br>
                <span style="margin-left: 40px">
                    "description": "Teste Cadatro 1"
                </span></br>
            <span style="margin-left: 30px">}</span>
        </span>
    </li>
</div>

</br>

<h2> 🚀 Como Executar o Projeto</h2>

<span> <strong> Pré requisitos: </strong> </span>

<div style="margin-left: 30px;">
    <li>Node.js >= 20.9.0</li>
    <li>Docker Desktop</li>
</div>

</br>

<span> <strong>Execução:</strong> </span></br>

~~~
# Clone o projeto
git@github.com:alissondevsouza/http-server-no-framework-js.git
~~~

</br>

~~~
# Seleciona a versão do node
nvm use 20.9.0
~~~

</br>

~~~
# Instale as dependencias do projeto
npm install
~~~

</br>

~~~~
# Suba o banco de dados do projeto
docker-compose up -d
~~~~

</br>

~~~
# Execute o projeto
npm run start:dev
~~~

</br>

<span> <strong>Execução de testes:</strong> </span></br>

~~~
# Testes Unitários
npm run test:unit
~~~

</br>

~~~
# Testes de Integração
npm run test:int
~~~

</br>

~~~
# Cobertura de testes
npm run test:cov
~~~

<h2> 💪 Como Contribuir para o Projeto </h2>

<div style="margin-left: 30px;">
    <ol>
        <li>Faça um fork do projeto.</li>
        <li>Crie uma nova branch com as suas alterações:
        <code>git checkout -b my-feature</code></li>
        <li>Salve as alterações e crie uma mensagem de commit contando o que você fez:
        <code>git commit -m "feature: My new feature"</code></li>
        <li>Envie as suas alterações:
        <code>git push origin my-feature</code></li>
        <li>Abra um Pull Request para a branch develop</li>
    </ol>
</div>


