import Axios from 'axios';

const API = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})


// este arquivo é responsavel por direcionar e centralizar todas as rotas da aplicação
export default function ConnectionApi() {
    return ({
        decoderUrl: async function (url) {
            return API.post('/save', {
                url: url
            })
        },
        downloadMusic: async function (musicName) {
            alert(musicName)
            return API.get('/download/' + musicName);
        }
    })
}