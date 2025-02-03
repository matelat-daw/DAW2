import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Inicio() {
  return (
    <>
        <h1>Te Damos la Bienvenida a la Base de Datos del CIFP César Manrique</h1>
        <ul>
            <li><Link to="/read">Muestra la Lista de Alumnos</Link></li>
            <li><Link to="/Create">Agrega un Alumno a la Lista</Link></li>
        </ul>
    </>
  )
}