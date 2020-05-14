const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'hung') {
        res.status(200).json({
            message: `Handling GET request to /product/${id}`
        });
    } else {
        res.status(400).json({
            message: 'ID does not correct'
        });
    }

});

router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'hung') {
        res.status(200).json({
            message: `Handling PATCH request to /product/${id}`
        });
    } else {
        res.status(400).json({
            message: 'ID does not correct'
        });
    }

});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'hung') {
        res.status(200).json({
            message: `Handling DELETE request to /product/${id}`
        });
    } else {
        res.status(400).json({
            message: 'ID does not correct'
        });
    }

});

module.exports = router;


