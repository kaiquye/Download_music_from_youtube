const HTTP = require('http');
const ServicesMusic = require('./service-music');
const fs = require('fs');

class ControllerMusic {

    async Save(req, res) {
        try {
            console.log(req.body);
            if (!req.body) return res.status(400).json(HTTP.STATUS_CODES[400]); // caso tente fazer uma requisição sem dados )
            const { url } = req.body;
            if (!url) return res.status(400).json(HTTP.STATUS_CODES[400]);
            const nameMusic = await ServicesMusic.Save(url);
            res.status(200).json({ nameMusic });
        } catch (error) {
            console.log(error);
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
            read.pipe(res); // enviando o arquivo para o navegador da pessoa;
            // res.download('./src/modules/music/download/' + nameMusic + '.mp3');
        } catch (error) {
            console.log(error);
        } fs.unlinkSync;
    }
}

module.exports = new ControllerMusic();
