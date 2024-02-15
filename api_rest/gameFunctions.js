const Joi = require("joi");
const DB = require('./dataBaseMock');

function checkIfIdIsValid(id) {
  return !(isNaN(id) || !parseInt(id));
}

function findGameById(id) {
  let game = DB.games.find((game) => game.id == id);
  return game;
}

function validateSchemaPost(req) {
  const schema = Joi.object({
    title: Joi.string().trim().min(1).required(),
    price: Joi.number().min(0).required(),
    year: Joi.number()
      .integer()
      .min(1900)
      .max(new Date().getFullYear())
      .required(),
  });

  const { error, value } = schema.validate(req.body);
  return error ? false : value;
}

function validateSchemaPut(req) {
  const schema = Joi.object({
    title: Joi.string().trim().min(1),
    price: Joi.number().min(0),
    year: Joi.number().integer().min(1900).max(new Date().getFullYear()),
  });

  const { error, value } = schema.validate(req.body);
  return error ? false : value;
}

module.exports = {
  checkIfIdIsValid,
  findGameById,
  validateSchemaPost,
  validateSchemaPut
};
