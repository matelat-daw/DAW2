import { useState } from "react";

export default function Deportistas({deportistas}) {
  // Crear un estado para los deportistas, con la función se cambia el estado y se carga
  const [Deportista, setDeportistas] = useState(deportistas);

  // Función para incrementar la experiencia de cada programador
  const mayusMinus = () => {
    let minus = true;
    if(minus){
      minus = false;
      setDeportistas(prevDepor =>
        prevDepor.map(d => ({...d, nombre: d.nombre.toUpperCase(), apellido1: d.apellido1.toUpperCase(), apellido2: d.apellido2.toUpperCase()})))
    }
    else{
      minus = true;
      setDeportistas(prevDepor =>
        prevDepor.map(d => ({...d, nombre: d.nombre.toLowerCase(), apellido1: d.apellido1.toLowerCase(), apellido2: d.apellido2.toLowerCase()})))
    }
  };

  return (
    <>
    <ul>
      {
        // Deportista.map(({nombre: nom, apellido1: ap1, apellido2: ap2}, i) => (
            Deportista.map(({deportista}, i) => (
          <li key={i}>
            {deportista.nombre} {deportista.apellido1} {deportista.apellido2}
          </li>
        ))
      }
      <button type="button" onClick={mayusMinus}>Pasar a mayusculas/minusculas</button>
      <script>console.log(Deportista);</script>
    </ul>
    </>
  ) 
}