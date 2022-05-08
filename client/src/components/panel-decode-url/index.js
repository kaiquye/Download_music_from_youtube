import style from './painel.module.css';
import { useContext } from 'react';
import { ContextApi } from '../../context/ContextApi';
import { useState } from 'react';

export function PanelDecodeUrl() {

    const [url, setUrl] = useState(null);
    const { decoderUrl, filename, download } = useContext(ContextApi);



    return (
        <main className={style.root} >
            <section className={style.divInput} >
                <h1 style={{ color: 'white' }} >Convertar sua musica gratuitamente </h1>
                <label style={{ color: 'white' }} > </label>
                <input className={style.input} type={'url'} onBlur={(e) => setUrl(e.target.value)} />
            </section>
            <div className={style.buttons} >
                <button className={style.Decoder} onClick={async () => { await decoderUrl(url) }} >Decoder</button>
                {filename && <button className={style.Download} disabled onClick={async () => { await download(filename) }} ><a href={process.env.REACT_APP_BASEURL + 'download/' + filename} className={style.link} >Download</a></button>}
                <button className={style.Download} >MP3</button>
                <button className={style.Download} >MP4</button>
            </div>
        </main>
    )
}


