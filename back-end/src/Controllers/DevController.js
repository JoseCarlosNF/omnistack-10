const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  // ! Listar cadastros
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  // ! Novo cadastro
  async store(request, response) {
    // Pegando do Corpo da Requisição
    const { github_username, techs, latitude, longitude } = request.body;

    // Verificação de usuário Duplicado.
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      // Acesso a API do github p/ outras informações
      const response_github = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = response_github.data;
      const techsArray = parseStringAsArray(techs);

      // Localização
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      // Informações p/ realizar o cadastro
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  },

  // ! Atualizar cadastro
  async update(request, response) {
    const dev = await Dev.findOneAndUpdate(
      request.params.username,
      request.body,
      { new: true }
    );
    return response.json(dev);
  },

  // ! Deletar cadastro
  async destroy(request, response) {
    await Dev.findOneAndDelete(request.params.username);
    return resizeBy.send();
  }
};
