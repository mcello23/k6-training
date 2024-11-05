const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const UserController = require('./controllers/UserController');
const router = express.Router();

router.post('/signup', celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
}), UserController.store);

module.exports = router;