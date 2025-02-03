import React from "react";
import { Link } from "react-router-dom";
// const grupos = ["A", "B"];

export default function Daw2()
{
    return (
        <>
            <h2>Grupos del Curso 2º DAW</h2>
            <ul>
                {grupos.map(grupo => <li key={grupo}>
                    <Link to={`/grupo/${grupo}`}>2º DAW Grupo {grupo}</Link>
                </li>)}
            </ul>
        </>
    )
}