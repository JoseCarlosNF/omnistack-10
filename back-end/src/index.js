const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors");

// ! Offline DB
mongoose.connect("mongodb://localhost:27017/omnistack-10", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// ? Online DB
// mongoose.connect(
//   "mongodb+srv://jose:omnistack@cluster0-zsutk.mongodb.net/week10?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
