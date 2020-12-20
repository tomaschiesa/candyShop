const db = require('../database/models');

let visitCountMiddleware = {
  addVisit: function(req, res, next) {
    db.Prod.findByPk(req.params.id)
    .then(function(elProducto) {
    // return res.json(elProducto.visit_count)
    db.Prod.update({
      visit_count: elProducto.visit_count+1
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      next();
    }); 
  }); 
  },
}
module.exports = visitCountMiddleware;



/*

db.Stats.create({
      view_stat_id: 1,
      index: 1,
      active:1
    })
    .then(function() {
      next();
    })
  }

*/