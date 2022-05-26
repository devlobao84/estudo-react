import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from "./Pages/Repositories";
import Home from "./Pages/Home";
import Contato from "./Pages/Contact";
import Testing from "./Pages/Testando/test";
import OutroTeste  from "./Pages/Home/outroTest";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repositories" element={<Repositories />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/testando" element={<Testing />} />
                <Route path="/outroteste" element={<OutroTeste />} />
                
            </Routes>
        </BrowserRouter>
    )
}
