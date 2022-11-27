
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let accountController = require('../controllers/account.controller');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/login');
    }
    next();
}

router.get('/', requireAuth, accountController.displaySurveyListPage);
router.get('/addSurvey', requireAuth, accountController.displayAddSurveyPage);
router.post('/addSurvey', requireAuth, accountController.processAddSurvey);

router.get('/editSurvey/:id', requireAuth, accountController.displayEditSurveyPage);
router.post('/editSurvey/:id', requireAuth, accountController.processEditSurvey);

router.get('/deleteSurvey/:id', requireAuth, accountController.processDeleteSurvey);

router.get('/viewSurvey/:id', requireAuth, accountController.displayResultSurveyListPage);
router.get('/viewSurveyDetail/:id', requireAuth, accountController.displayResultSurveyDetailPage);

module.exports = router;

