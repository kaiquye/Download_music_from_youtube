const HTTP = require('http');
const ServicesMusic = require('./service-music');
const fs = require('fs');
const Logger = require('../util/logger');
const AppError = require('../util/appError');

class ControllerMusic {

    async Save(req, res) {
        try {
            if (!req.body) return res.status(400).json(HTTP.STATUS_CODES[400]); // caso tente fazer uma requisição sem dados )
            const { url } = req.body;
            if (!url) return res.status(400).json(HTTP.STATUS_CODES[400]);
            const response = await ServicesMusic.Save(url);
            if (response instanceof AppError) return res.status(response.Error.status).json(response.Error);
            res.status(200).json({ sucess: true, message: 'file created', filename: response });
        } catch (error) {
            Logger.CreateNewLoggerApi(error.message, error.stack);
            res.status(500).json({ sucess: false, message: HTTP.STATUS_CODES[500] });
        }
    }

    async Download(req, res) {
        try {
            if (!req.params) return res.status(400).json(HTTP.STATUS_CODES[400]); // caso tente fazer uma requisição sem dados )
            const { nameMusic } = req.params;
            if (!nameMusic) return res.status(400).json(HTTP.STATUS_CODES[400]);
            res.setHeader('Content-Disposition', 'attachment;filename=' + nameMusic + '.mp3');
            // res.writeHead(200, {
            //     'Content-Type': 'application/octet-stream',
            //     'Content-Disposition': 'attachment; filename=' + nameMusic + '.mp3'
            // });
            const read = fs.createReadStream('./src/modules/music/download/' + nameMusic + '.mp3'); // lendo o arquivo
            // apagar o arquivo quando o evento END é emitido pela Stream ( AVISO : ESSA FUNÇÃO DEMORA PARA SER FINALIZADA ** fs.unlinkSync**  )
            read.on('error', () => { res.status(404).json({ sucess: false, message: 'Musica não encontrada.' }); });
            read.pipe(res); // enviando o arquivo para o navegador da pessoa;
            // res.download('./src/modules/music/download/' + nameMusic + '.mp3');
        } catch (error) {
            Logger.CreateNewLoggerApi(error.message, error.stack);
            res.status(500).json({ message: 'Erro ao fazer download do arquivo', sucess: false });
        }
    }
}

module.exports = new ControllerMusic();
