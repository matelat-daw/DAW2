import React from "react";
import {Link, Outlet} from 'react-router-dom';

export default function Layout()
{
    return (
        <main>
            <nav>
                <Link to="/">Inicio |</Link>
                <Link to="/Read">Lista de Recetas |</Link>
                <Link to="/Create">Agrega una Receta |</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </main>
    )
}