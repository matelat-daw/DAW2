import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/create">Crear Alumno</Link>
            </li>
            <li>
              <Link to="/read">Leer Alumnos</Link>
            </li>
            <li>
              <Link to="/update">Actualizar Alumno</Link>
            </li>
            <li>
              <Link to="/delete">Eliminar Alumno</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;