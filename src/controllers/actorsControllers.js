const db = require('../database/models');
const sequelize = db.sequelize;


const actorsController = {
    list: (req, res) => {
        db.Actor.findAll({
            order: ['first_name']
        })
            .then(actors => {
                res.render('actorList', {actors})
            })
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id, {
            include: [
                {
                    association: 'movies'
                }
            ]
        })
            .then(actor => {
                res.render('actorsDetail.ejs', {actor});
            });
     }

}

module.exports = actorsController;