const { Router } = require("express");
const DevController = require("./Controllers/DevController");
const SearchController = require("./Controllers/SearchController");

const routes = Router();

// ! DevController
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.delete("/devs/:username", DevController.destroy);
routes.put("/devs/:username", DevController.update);

// ! SearchController
routes.get("/search", SearchController.index);

module.exports = routes;
