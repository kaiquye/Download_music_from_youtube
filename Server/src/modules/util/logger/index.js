const { Console } = require('node:console');
const fs = require('fs');
const FormatDate =  require('../FormatDate/index');

class Logger {

    LogDb = [];
    LogApi = [];
    /**
     * @method CalculeTimeIo calcula o tempo de I/O entre a requisição ao bnaco de dados ae a resposta.
     * @param {*} start 
     * @param {*} end 
     * @param {*} database 
     */
    CalculeTimeIo(start, end, database = 'MySql') {
        const data = fs.createWriteStream('./log/data.log');
        const logger = new Console(data);
        const time = (new Date(start).getMilliseconds - new Date(end).getMilliseconds);
        this.LogDb.push({ start, end, database, timeIO: time });
        logger.table([...this.LogDb]);
    }

    /**
    * @method Logger criando um novo logger
    * @param {*} message 
    * @param {*} type 
    * @param {*} path 
    * @param {*} error 
    */
    CreateNewLoggerApi(message, path = './ ', error = 'Error message not defined') {
        const outPut = fs.createWriteStream('./src/log/output.log');
        const errorPut = fs.createWriteStream('./src/log/errorPut.log');
        const logger = new Console(outPut, errorPut);
        this.LogApi.push({ message: message, path: path, error: error, date: FormatDate() });
        logger.table([...this.LogApi]); // desativar a quebra de linha automatica do VSCODE para conseguir visualizar a tabela
        logger.error([...this.LogApi]);
    }
}

module.exports = new Logger();