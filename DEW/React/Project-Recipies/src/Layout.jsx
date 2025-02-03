import React from "react";
import {Link, Outlet} from 'react-router-dom';

export default function Layout()
{
    return (
        <main>
            <nav>
                <Link to="/">Inicio |</Link>
                <Link to="/Read">Lista de Alumnos |</Link>
                <Link to="/Create">Agrega un Alumno |</Link>
                <Link to="/Daw2">2º DAW</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </main>
    )
}