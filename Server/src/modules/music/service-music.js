const fs = require('fs');
const ytdl = require('ytdl-core');

class ServicesMusic {

    async Save(url) {
        try {
            const name = new Date().getMilliseconds();
            ytdl(url)
                .pipe(fs.createWriteStream('./src/modules/music/download/music-' + name + '.mp3')); // salvando a musica em partes 
            return 'music-' + name;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ServicesMusic();


// se for enviar para o clinet
// const dir = './src/modules/music/video.mp3  ';
// const read = fs.createReadStream(dir);
// const whire = fs.createWriteStream('txt33.mp3');
