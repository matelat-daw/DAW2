import { useEffect } from "react";
import { useState } from "react";

export default function recetasapi() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

    function fechito(){
      fetch("http://localhost:3000/recetas")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoader(true);
      })
      .catch(e =>{
        console.log(e);
        setLoader(true);
      }
      );
    }
  
      useEffect(() => {
        setTimeout(() => {fechito()}, 5000 );
      }, [data])

      //Mientras cargan todos los datos muestra lo siguiente
    if(!loader){
      return "Cargando ..."
    }

  return (
    <div>
      <h1 className="title">Fetch Recetas API</h1>
      <div>
        <h2>Lista de Recetas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Tipo de cocina</th>
              <th>Tiempo de preparación</th>
              <th>Tiempo de cocina</th>
              <th>Ingredientes</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 && data.map((receta) => (
                <tr key={receta.id}>
                  <td>{receta.id}</td>
                  <td>{receta.name}</td>
                  <td>{receta.cuisine}</td>
                  <td>{receta.prepTimeMinutes} min</td>
                  <td>{receta.cookTimeMinutes} min</td>
                  <td>{receta.ingredients}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}