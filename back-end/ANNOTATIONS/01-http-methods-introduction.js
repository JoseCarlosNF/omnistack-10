//const express = require("express");
//const app = express();
//app.use(express.json());

//app.post("/users", (request, response) => {
//  console.log(request.body);
//  return response.json({ message: "Hello Planeta" });
//});

//app.listen(3333);

/*  ----------------          ANOTAÇÕES         ----------------
! Métodos http
* GET: 
  Busca de informação, 'pegar'.
  ? Ex: realizar uma busca por usuário
* POST
  Criar informação. 
  ? Ex: Adicionar um usuário.
* PUT
  Editar.
  ? Ex: Editar informações de um produto ou usuário.
* DELETE
  Deletar.
  ? Ex: Deletar um usuário ou produto.

! Tipos de Parametros
* Query Params
  Utilizados, principalmente com o método GET, já que ele não suporta corpo. Usado para, filtro, ordenação, paginação, ...
  |  name   | value |
  | search  | Jose  |
  ? request.query

  Busca por Jose, na rota raiz.
  ? http://localhost:3333/?search=Jose

* Route Params
  Uma especie de parametro passodo por meio da rota, requisitada para acesso.
  ? request.params

  No exemplo a seguir, é requisitada a exclusão do usuário com ID = 1
  ? DELETE http://localhost:3333/users/1

* Body
  O corpo da requisição é responsavél por fornecer informações mais extensas, tal como o email do usuário, e outras informações que não seriam viavéis de serem repasadas por outros meios, como os anteriormente vistos. Pode ter variados tipos/formas, em APIs RESTful usa-se o formato JSON.
  ? request.body
  ? POST http://localhost:3333/users
  {
    "name": "Jose",
    "email": "jcnf.mail@gmail.com"
  }
 */
