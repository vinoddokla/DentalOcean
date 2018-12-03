const express = require('express');
const router  = express.Router();
const WorkEntryService = require('../service/workEntry.service');

router.post('/add', addWorkEntry);

module.exports = router;

function addWorkEntry(req, res, next) {
    WorkEntryService.addNewWork(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}