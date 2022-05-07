const Cors = require('cors');

exports.ConfigCors = () => {

    /**
     * @description Config cors acess.
     */
    const Config = {
        "origin": "*",
        "methods": "GET,POST",
        "preflightContinue": false,
        "optionsSuccessStatus": 200
    }
    /**
     * @description instacia do cors ja configurada.
    */
    return Cors(Config);

}