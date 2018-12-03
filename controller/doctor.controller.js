const express = require('express');
const router  = express.Router();
const docService = require('../service/doctor.service');

router.post('/add', addNewDoctor);
router.get('/showAllDoctors', getAllDoctors);

module.exports = router;

function addNewDoctor(req, res, next) {
    docService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAllDoctors(req, res, next) {
    docService.getAllDoctors()
        .then(doctors => res.json(doctors))
        .catch(err => next(err));
}
