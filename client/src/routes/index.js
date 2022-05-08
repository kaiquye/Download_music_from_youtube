import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { PageDecoderMusic } from '../page/page-decoder-musica';
import { ContextApiProvider } from '../context/ContextApi';

export function AppRoutes() {

    return (
        <BrowserRouter>
            <ContextApiProvider>
                <Routes>
                    <Route path='/appmusic' element={<PageDecoderMusic />} />
                    <Route path="*" element={<>
                        <h1>CRIAR A PAGINA DE 404</h1>
                    </>} />
                </Routes>
            </ContextApiProvider>
        </BrowserRouter>
    )
}