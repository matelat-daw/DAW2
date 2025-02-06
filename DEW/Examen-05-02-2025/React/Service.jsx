let recetas = [];

// Obtener Todas las Recetas.
export const getRecetas = async () => {
    try {
        return recetas = await fetch("http://localhost:3000/recetas").then(respuesta => respuesta.json())
        .catch(respuesta => "Error de Conexión" + respuesta);
    } catch (error) {
      console.error('Error al Intentar Obtener las Recetas:', error);
    }
  };