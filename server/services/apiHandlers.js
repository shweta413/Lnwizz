/**
 * Created by shweta on 27/6/17.
 * @description: apiHandlers
 */

const rio = require('rio');
var fs = require('fs');
var csv = require('express-csv');
var express = require('express');
module.exports = function (app) {

/* sample service call
    app.get("/submitDetails", function (req, res) {
        var details = req.query.inPH + "," + req.query.inTurbidity + "," + req.query.temperature + "," + req.query.seawater + "," + req.query.conductivity + "," + req.query.temp_bleh + "," + req.query.phDesired + "," + req.query.turbidityDesired + "," + req.query.phLL + "," + req.query.phUL + "," + req.query.turbidityLL + "," + req.query.turbidityUL + "," + req.query.sulfuricCost + "," + req.query.ferricCost;
        rio.$e({command: "optimizer(" + details + ")"}).then(function (response) {
            res.status(200).send(JSON.parse(response));
        }, function (err) {
            res.status(500).send("Failed to calculate for given inputs");
        });
    });

    */



};