const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  checkIfIdIsValid,
  findGameById,
  validateSchemaPost,
  validateSchemaPut
} = require("./gameFunctions");

const DB = require('./dataBaseMock');

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
  let id = req.params.id;
  if (!checkIfIdIsValid(id)) {
    return res.status(400).json({ error: "Invalid ID." });
  }

  parseInt(id);
  let game = findGameById(id);
  if (!game) {
    return res.status(404).json({ error: "Game not found." });
  }

  res.status(200).json(game);
});

app.post("/game", (req, res) => {
  let value = validateSchemaPost(req);
  if (!value) {
    return res.status(400).json({ error: "Invalid data." });
  }

  const newGame = {
    id: DB.games.length + 1,
    ...value,
  };
  DB.games.push(newGame);
  res.status(200).json(newGame);
});

app.delete("/game/:id", (req, res) => {
  let id = req.params.id;
  if (!checkIfIdIsValid(id)) {
    return res.status(400).json({ error: "Invalid ID." });
  }

  let game = findGameById(id);
  if (!game) {
    return res.status(404).json({ error: "Game not found." });
  }

  let index = DB.games.findIndex((g) => g.id == game.id);
  DB.games.splice(index, 1);
  res.statusCode = 200;
  res.json(game);
});

app.put("/game/:id", (req, res) => {
  let id = req.params.id;
  if (!checkIfIdIsValid(id)) {
    return res.status(400).json({ error: "Invalid ID." });
  }

  parseInt(id);
  let game = findGameById(id);
  if (!game) {
    return res.status(404).json({ error: "Game not found." });
  }
  let value = validateSchemaPut(req);
  if (!value) {
    return res.status(400).json({ error: "Invalid data." });
  }

  Object.keys(value).forEach((key) => {
    if (value[key] ?? false) {
      game[key] = value[key];
    }
  });
  res.statusCode = 200;
  res.json(game);
});

app.listen(8080, () => {
  console.log("API up!");
});
