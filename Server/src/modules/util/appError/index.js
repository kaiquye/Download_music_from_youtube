const HTTP = require('http');

class AppError extends Error {

    #message;
    #status;
    #type;
    #path;

    constructor(status, message, path = false) {
        super();
        this.#message = message,
        this.#status = status,
        this.#type = HTTP.STATUS_CODES[status];
        this.#path = path ? new Error().stack : path;

    }

    get Console() {
        return console.log('\x1b[31m', this.#message);
    }

    get Error() {
        this.Console;
        return (
            {
                message: this.#message,
                status: this.#status,
                status_code: this.#type,
                this: this.#path
            }
        );
    }

}

module.exports = AppError;