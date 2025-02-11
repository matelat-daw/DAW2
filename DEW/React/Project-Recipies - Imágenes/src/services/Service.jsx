import toast from './js/script.js';

let recetas = [];

// Obtener Todas las Recetas.
export const getRecetas = async () => {
    try {
        return await fetch("http://localhost:3000/recetas").then(respuesta => respuesta.json())
        .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error: " + respuesta))
        // .then(jsonData => getImages(jsonData));
    } catch (error) {
      console.error('Error al Intentar Obtener las Recetas:', error);
    }
  };

export function getImages(jsonData)
{
    jsonData.map(img => blobConverter(img.image));
    return jsonData;
}

async function blobConverter(urlImg){
    let blobImg;
    await fetch(urlImg)
    .then(res => res.blob())
    .then(blob => blobImg=blob);
    crearElementos(blobImg);
}

let imageArray = [];
let index = 0;
function crearElementos(blobImg)
{
    let img = document.createElement("img");
    img.src = URL.createObjectURL(blobImg);
    img.alt = "Foto Decorativa";
    imageArray[index] = img;
    console.log("Imagen: " + index + " es: " + imageArray[index]);
    index++;
    return imageArray;
}
  
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

//   export const getRecipie = async (id) => {
//     try {
//       return recetas.find(receta => receta.id === parseInt(id)).filter(receta => receta.ingridients);
//     } catch (error) {
//       console.error('Error Obteniendo los Ingredientes: ', error);
//     }
//   }