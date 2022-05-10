require('dotenv').config(); 
const express = require('express');
const cors = require('./middleware/Cors');
const routeMusic = require('./routes/route-music');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
class Main {

    App;
    constructor() {
        this.App = express();
        this.Middleware();
        this.Routes();
    }

    Middleware() {
        const accessLogStream = fs.createWriteStream(path.join('./src/log', 'access.log'), { flags: 'a' });
        this.App.use(morgan('combined', { stream: accessLogStream }));
        this.App.use(express.json());
        this.App.use(cors.ConfigCors());
    }

    Routes() {
        this.App.use('/api', routeMusic);
    }
}

(() => {
    const server = new Main().App;
    server.listen(process.env.PORT, console.log('Server runnig at ' + process.env.PORT));
})();