import { useState } from 'react';
import './index.css'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import App from './App.jsx';

export default function PassData() {
    const deportistas = [
        {id: 1, nombre: "Juan", apellido1: "García", apellido2: "Pérez"},
        {id: 2, nombre: "Eva", apellido1: "González", apellido2: "Sánchez"},
        {id: 3, nombre: "Ana", apellido1: "García", apellido2: "Pérez"}
      ];
      return (
        <BrowserRouter>
        <Routes>
            <Route path="/deportistas" element={<App deportistas={deportistas} />}></Route>
            <Route path="*" element={<Navigate to="/" replace="true" />}></Route>
        </Routes>
      </BrowserRouter>
      )
    }