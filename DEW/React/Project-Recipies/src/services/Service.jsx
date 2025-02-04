import toast from './js/script.js';

let recetas = [];
// const [spinner, setSpinner] = useState(false);
// setSpinner(true);

            recetas = fetch("http://localhost:3000/recetas").then(respuesta => respuesta.json())
            .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error: " + respuesta))
            // .finally(() => setSpinner(false));

// Obtener Todas las Recetas.
export const getRecetas = async () => {
    try {
      return recetas;
    } catch (error) {
      console.error('Error al Intentar Obtener las Recetas:', error);
    }
  };
  
  // Agregar/Modificar una Receta
  export const createReceta = async (id, nuevaReceta) => {
    if (id)
    {
        try {
            recetas = recetas.map(receta => 
            receta.id == id ? { ...receta, ...nuevaReceta } : receta
            );
        return recetas;
        } catch (error) {
            console.error('Error al Modificar una Receta: ', error);
        }
    }
    else
    {
        try {
        nuevaReceta.id = recetas.length ? recetas[recetas.length - 1].id + 1 : 1;
        recetas.push(nuevaReceta);
        return recetas;
        } catch (error) {
        console.error('Error al Agregar una Receta: ', error);
        }
    }
  };
  
  // Eliminar una Receta
  export const deleteReceta = async (id) => {
    try {
        recetas = recetas.filter(receta => receta.id !== id);
    } catch (error) {
      console.error('Error al Eliminar una Receta: ', error);
    }
  };

  export const getRecipie = async (id) => {
    try {
      return recetas.find(receta => receta.id === parseInt(id)).filter(receta => receta.ingridients);
    } catch (error) {
      console.error('Error Obteniendo los Ingredientes: ', error);
    }
  }