let alumnos = [
    { id: 1, nombre: 'Juan', grupo: 'A' },
    { id: 2, nombre: 'María', grupo: 'B' },
    { id: 3, nombre: 'Carlos', grupo: 'A' }
];

const grupos = ["A", "B"];

    // Obtener todos los alumnos
export const getAlumnos = async () => {
    try {
      return alumnos;
    } catch (error) {
      console.error('Error Cargando Alumnos: ', error);
    }
  };

    // Obtener todos los grupos
export const getGrupos = async () => {
    try {
      return grupos;
    } catch (error) {
      console.error('Error Cargando Grupos: ', error);
    }
  };

    // Agregar o actualizar un alumno
export const createAlumno = async (id, updatedAlumno) => {
    if (id)
    {
        try {
            alumnos = alumnos.map(alumno => 
            alumno.id == id ? { ...alumno, ...updatedAlumno } : alumno);
            return alumnos;
        } catch (error) {
            console.error('Error Actualizando Alumno: ', error);
        }
    }
    else
    {
        try {
            updatedAlumno.id = alumnos.length ? alumnos[alumnos.length - 1].id + 1 : 1;
            alumnos.push(updatedAlumno);
            return alumnos;

        } catch (error) {
        console.error('Error Agregando Alumno: ', error);
        }
    }
};
  
    // Eliminar un alumno
export const deleteAlumno = async (id) => {
    try {
        alumnos = alumnos.filter(alumno => alumno.id !== id);
    } catch (error) {
        console.error('Error Eliminando Alumno: ', error);
    }
};