const db = require('../database/models');

function milSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
let mainController = {
  //MOST VIEWS - Vista index web
  index: function(req, res, next) {
    db.Category.findAll()
    .then(function(laCategoria){
      db.Prod.findAll({
        include:[{association: 'Category'}],
        order: [ [ 'visit_count', 'DESC' ]],
        limit: 12,
      })
      .then(function(losProductos) {
        res.render('index', {losProductos:losProductos, laCategoria:laCategoria, milesGenerator: milSeparator})
      })
    })
  }
}
module.exports = mainController;
