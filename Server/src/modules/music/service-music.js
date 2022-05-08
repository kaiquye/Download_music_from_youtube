const fs = require('fs');
const ytdl = require('ytdl-core');
const Logger = require('../util/logger');
const AppErro = require('../util/appError/index');

class ServicesMusic {

    async Save(url) {
        try {
            const name = new Date().getMilliseconds();
            ytdl(url)
                .pipe(fs.createWriteStream('./src/modules/music/download/music-' + name + '.mp3')); // salvando a musica em partes 
            return 'music-' + name;
        } catch (error) {
            Logger.CreateNewLoggerApi('Erro ao criar processa arquivo', error.stack, error.message);
            return new AppErro(500, 'Erro ao processar imagem');
        }
    }
}

module.exports = new ServicesMusic();

