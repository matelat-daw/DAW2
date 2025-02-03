import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './Inicio';
import Layout from './Layout';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import Daw2 from './Daw2'
import Grupo from './Grupo'

createRoot(document.getElementById('root')).render(
    <Router>
        <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inicio />}></Route>
                <Route path="/create" element={<Create />} />
                <Route path="/read" element={<Read />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/delete/:id" element={<Delete />} />
                <Route path='/Daw2' element={<Daw2 />}></Route>
                <Route path='/Grupo/:letra' element={<Grupo />}></Route>
                <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
            </Route>
        </Routes>
        </div>
    </Router>
  );