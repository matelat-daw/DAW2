import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getAlumnos } from './services/Service';
import { getRecetas } from './services/Service';

export default function Grupo()
{
    const [recetas, setItems] = useState([]);
    const {letra} = useParams();

    useEffect(() => {
        const fetchItems = async () => {
          const data = await getRecetas();
          setItems(data);
        };
        fetchItems();
      }, []);

    return (
    <>
        {/* <h3>Alumnos del Curso 2º DAW {parametros.letra}</h3> */}
        <h3>Alumnos del Curso 2º DAW {letra}</h3>
        <ul>
            {recetas.filter(receta => receta.tipoCocina === letra).map((receta, i) => <li key={i}>{receta.nombre}</li>)}
        </ul>
    </>
    )
}