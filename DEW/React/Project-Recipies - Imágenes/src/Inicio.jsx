import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Inicio() {
  return (
    <>
        <h1>Te Damos la Bienvenida a la Base de Datos de Recetas del CIFP César Manrique</h1>
        <ul className='none'>
            <li><Link to="/read">Muestra la Lista de Recetas</Link></li>
            <li><Link to="/Create">Agrega una Receta a la Lista</Link></li>
        </ul>
    </>
  )
}