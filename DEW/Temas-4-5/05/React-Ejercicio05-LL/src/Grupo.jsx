import './index.css'
import { useParams, Link } from "react-router-dom"
import React from 'react';

export default function Grupo({alumnos, setAlumnos}) {
    
    const {letra} = useParams();

    function eliminarAlumno(id) {
        if (confirm(`¿Desea eliminar el alumno con ID ${id}?`)) {
            setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
        }
    }

    return(
        <>
            <h2>Alumnos de 2º DAW {letra}</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Si o No</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alumnos.filter(alumno => alumno.grupo == letra).map(({nombre, id,SioNo}, i) => 
                            <tr key={i}>
                                <td>{id}</td>
                                <td>{nombre}</td>
                                <td>{SioNo?"si":"no"}</td>
                                <td>
                                    <Link to={`/editar/${id}`} state={{ grupo: letra }} className='link'><i className="fa-regular fa-pen-to-square"></i></Link>
                                    <a onClick={() => eliminarAlumno(id)} className='link'><i className="fa-regular fa-trash-can"></i></a>
                                </td>
                            </tr> 
                        )
                    }
                </tbody>
            </table>
            <div className='button-box'>
                <Link to='/agregar' state={{ grupo: letra }} className='button'>Añadir alumno</Link>
            </div>
            <Link to='/Daw2' className='button'>Volver</Link>
        </>
    )
}