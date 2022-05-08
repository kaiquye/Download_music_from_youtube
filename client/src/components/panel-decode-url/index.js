import style from './painel.module.css';

export function PanelDecodeUrl() {



    return (
        <main className={style.root} >
            <section className={style.divInput} >
                <h1 style={{ color: 'white' }} >Convertar sua musica gratuitamente </h1>
                <label style={{ color: 'white' }} > </label>
                <input className={style.input} type={'url'} />
            </section>
            <div className={style.buttons} >
                <button className={style.Decoder} >Decoder</button>
                <button className={style.Download} >Download</button>
                <button className={style.Download} >MP3</button>
            </div>
        </main>
    )
}


