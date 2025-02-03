import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Layoutlet from './Layoutlet'
import Inicio from './Inicio'
import Daw2 from './Daw2'
import Grupo from './Grupo'
import Agregar from './Agregar'
import Editar from './Editar'
import { useState } from 'react'

const alumnos = [
    {id: "CM1", grupo:"A", nombre:"Juan Pérez", SioNo:true},
    {id: "CM2", grupo:"A", nombre:"Eva López",SioNo:true},
    {id: "CM3", grupo:"B", nombre:"Julia González",SioNo:true},
    {id: "CM4", grupo:"A", nombre:"Carlos Contreras",SioNo:false},
    {id: "CM5", grupo:"B", nombre:"Ana Fuentes",SioNo:false},
    {id: "CM6", grupo:"B", nombre:"Antonio García",SioNo:false}
]
  
export const grupos = ["A", "B"];

export default function App() {

    const [alumnosList, setAlumnos] = useState(alumnos);

    return (    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layoutlet/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path='/daw2' element={<Daw2/>}/>
                    <Route path='/grupo/:letra' element={<Grupo alumnos={alumnosList}  setAlumnos={setAlumnos}/>}/>
                    <Route path='/agregar' element={<Agregar alumnos={alumnosList} setAlumnos={setAlumnos}/>}/>
                    <Route path='/editar/:id' element={<Editar alumnos={alumnosList}  setAlumnos={setAlumnos}/>}/>
                    <Route path='*' element={<Navigate to="/" replace="true"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}