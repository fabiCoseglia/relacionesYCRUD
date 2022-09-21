const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsControllers');

router.get('/', actorsController.list);
router.get('/detail/:id', actorsController.detail)



module.exports = router;