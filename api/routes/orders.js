const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request in /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request in /orders'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Order detail',
        orderID: id
    });
});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Update order detail',
        orderID: id
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Delete order detail',
        orderID: id
    });
});


module.exports = router;
