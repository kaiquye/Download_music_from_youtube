const express = require('express');
const ControllerMusic = require('../../modules/music/controller-music');

class RouteMusic {

    App;

    constructor() {
        this.App = express.Router();
        this.Routes();
    }

    Routes() {
        this.App.post('/save', ControllerMusic.Save);
        this.App.get('/download/:nameMusic', ControllerMusic.Download);
        /**
         * @NEXT_ROUTES 
         *  find-music
         */
    }
}

module.exports = new RouteMusic().App;
