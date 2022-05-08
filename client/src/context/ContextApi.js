import { createContext } from 'react';
import useApi from '../services/Api';

export const ContextApi = createContext({});

export function ContextApiProvider({ children }) {

    const API = useApi();

    const decoderUrl = async function (url) {
        try {
            const response = await API.decoderUrl(url);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContextApi.Provider value={{ decoderUrl }} >
            {children}
        </ContextApi.Provider>
    )
}