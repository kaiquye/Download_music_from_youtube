const fs = require('fs');
const ytdl = require('ytdl-core');
const Logger = require('../util/logger');
const AppErro = require('../util/appError/index');

class ServicesMusic {

    async Save(url) {
        try {
            const name = new Date().getMilliseconds();
            const decoder = ytdl(url)
                .pipe(fs.createWriteStream('./src/modules/music/download/music-' + name + '.mp3')); // salvando a musica em partes 
            const promisse = new Promise((resolver, rejects)=>{
                decoder.on('error', ()=>{
                    return rejects(new Error('Erro'));
                });
                decoder.on('open', ()=>{
                    return resolver(true);
                });
            });
            return promisse.then((data)=>{
                return 'music-' + name;
            }).catch((error)=>{
                console.log(error);
            });
        } catch (error) {
            Logger.CreateNewLoggerApi('Erro ao criar processa arquivo', error.stack, error.message);
            return new AppErro(500, 'Erro ao processar imagem');
        }
    }
}

module.exports = new ServicesMusic();

