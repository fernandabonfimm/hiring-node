const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock.controller');

router.get('/stock/:stockName/quote', stockController.getCurrentPrice);
router.get('/stocks/:stockName/history', stockController.getHistoricalPrice);
router.get('/stocks/:stockName/gains', stockController.projectEarnings);
router.get('/stocks/:stockName/compare', stockController.comparePrices);

module.exports = router;
