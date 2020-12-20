
const db = require('../database/models');

async function lasCategoriasMiddleware (req, res, next) {
  await db.Category.findAll({order: [ [ 'name', 'ASC' ]]})
  .then(function(lasCategorias) {
    res.locals.lasCategorias = lasCategorias
  })
  next();
}
module.exports = lasCategoriasMiddleware;