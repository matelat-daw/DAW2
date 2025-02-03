import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlumnos } from './services/Service';

export default function Grupo()
{
    const [alumnos, setItems] = useState([]);
    const {letra} = useParams();

    useEffect(() => {
        const fetchItems = async () => {
          const data = await getAlumnos();
          setItems(data);
        };
        fetchItems();
      }, []);

    return (
    <>
        {/* <h3>Alumnos del Curso 2º DAW {parametros.letra}</h3> */}
        <h3>Alumnos del Curso 2º DAW {letra}</h3>
        <ul>
            {alumnos.filter(alumno => alumno.grupo === letra).map((alumno, i) => <li key={i}>{alumno.nombre}</li>)}
        </ul>
    </>
    )
}