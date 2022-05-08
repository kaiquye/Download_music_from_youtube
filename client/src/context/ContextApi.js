import { useState } from 'react';
import { createContext } from 'react';
import useApi from '../services/Api';
import { Navigate } from 'react-router-dom'

export const ContextApi = createContext({});

export function ContextApiProvider({ children }) {

    const API = useApi();
    const [filename, setFilename] = useState(null);

    const decoderUrl = async function (url) {
        try {
            if (!url) return alert('Aviso : URL invalida.')
            const response = await API.decoderUrl(url);
            console.log(response.data.filename)
            if(!response.data.filename) return alert('Aviso : não foi possivel converter sua musica.')
            setFilename(response.data.filename);
        } catch (error) {
            console.log({ error })
        }
    }

    const download = async function (nameMusic) {
        if (!nameMusic) return alert('Aviso : musica invalida.');
    }

    return (
        <ContextApi.Provider value={{ decoderUrl, filename, download }} >
            {children}
        </ContextApi.Provider>
    )
}