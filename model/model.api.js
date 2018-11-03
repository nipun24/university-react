const express = require('express');
const router = express.Router();

const models = require('./models');
const modelController = require('./model.controller');

router.get('/:model', modelController.getDoc);
router.post('/:model', modelController.postDoc);
router.get('/:model/:name', modelController.getDoc);
router.put('/:model/:name', modelController.putDoc);
router.delete('/:model/:name', modelController.deleteDoc);

// reset path
router.post('/reset', modelController.resetDB);
router.get('/', (req, res, next) => {
    res.send(models);
});

module.exports = router;