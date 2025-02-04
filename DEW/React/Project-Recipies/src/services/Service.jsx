import toast from './js/script.js';

let recetas = [];
// const [spinner, setSpinner] = useState(false);
// setSpinner(true);

            recetas = fetch("http://localhost:3000/recetas").then(respuesta => respuesta.json())
            .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error: " + respuesta))
            // .finally(() => setSpinner(false));

// Obtener todos los alumnos
export const getRecetas = async () => {
    try {
      return recetas;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Obtener todos los grupos
// export const getGrupos = async () => {
//     try {
//       return grupos;
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     }
//   };
  
  // Crear una nueva Receta
  export const createReceta = async (receta) => {
    try {
      receta.id = recetas.length ? recetas[recetas.length - 1].id + 1 : 1;
      recetas.push(receta);
      return recetas;
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  
  // Actualizar una Receta Existente
  export const updateReceta = async (id, updatedReceta) => {
    try {
      recetas = recetas.map(receta => 
        receta.id === id ? { ...receta, ...updatedReceta } : receta
      );
    return recetas;
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  // Eliminar una Receta
  export const deleteReceta = async (id) => {
    try {
        recetas = recetas.filter(receta => receta.id !== id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  export const getRecipie = async (id) => {
    try {
      return recetas.find(receta => receta.id === parseInt(id)).filter(receta => receta.recipies);
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  }