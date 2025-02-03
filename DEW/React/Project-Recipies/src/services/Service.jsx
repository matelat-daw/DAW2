import toast from './js/script.js';

// let alumnos = [
//     { id: 1, nombre: 'Juan', grupo: 'A' },
//     { id: 2, nombre: 'María', grupo: 'B' },
//     { id: 3, nombre: 'Carlos', grupo: 'A' }
// ];

let alumnos2 = await fetch("http://localhost:3000/alumnos").then(respuesta => respuesta.json())
                .catch(respuesta => toast(2, "Error de Conexión", "Lo Siento No hay Conexión con el Servidor. Asegurate de que el Servidor está en Ejecución. Error: " + respuesta))
                // .then(respuesta => toast(0, "Todo Ha Ido Bien:", "Se han cargado los Datos del Servidor." + respuesta))

const grupos = ["A", "B"];

// Obtener todos los alumnos
export const getAlumnos = async () => {
    try {
      return alumnos2;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Obtener todos los grupos
export const getGrupos = async () => {
    try {
      return grupos;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  
  // Crear un nuevo alumno
  export const createAlumno = async (alumno) => {
    try {
      alumno.id = alumnos2.length ? alumnos2[alumnos2.length - 1].id + 1 : 1;
      alumnos2.push(alumno);
      return alumnos2;
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };
  
  // Actualizar un alumno existente
  export const updateAlumno = async (id, updatedAlumno) => {
    try {
      alumnos2 = alumnos2.map(alumno => 
        alumno.id === id ? { ...alumno, ...updatedAlumno } : alumno
      );
    //   return updatedAlumno;
    return alumnos2;
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  // Eliminar un alumno
  export const deleteAlumno = async (id) => {
    try {
        alumnos2 = alumnos2.filter(alumno => alumno.id !== id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };