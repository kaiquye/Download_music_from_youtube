import Axios from 'axios';

const API = Axios.create({
    baseURL: process.env.URLBASE
})


// este arquivo é responsavel por direcionar e centralizar todas as rotas da aplicação
export default function ConnectionApi() {
    return ({
        decoderUrl: async function (url) {
            return API.get('/save', {
                url: url
            })
        },
        downloadMusic: async function (musicName) {
            return API.get('/save/download/' + musicName);
        }
    })
}