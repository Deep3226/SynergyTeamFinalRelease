
let express = require('express');
let mongoose = require('mongoose');

function displayName(req) {
    return req.user ? req.user.displayName : ''
}

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: displayName(req)});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', {title: 'Contact', displayName: displayName(req)});
}