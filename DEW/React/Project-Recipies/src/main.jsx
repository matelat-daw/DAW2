import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicio from './Inicio';
import Layout from './Layout';
import Create from './components/Create';
import Read from './components/Read';
import Delete from './components/Delete';

createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inicio />}></Route>
                <Route path="/create" element={<Create />} />
                <Route path="/read" element={<Read />} />
                <Route path="/create/:id" element={<Create />} />
                <Route path="/delete/:id" element={<Delete />} />
                <Route path="*" element={<Navigate to="/" replace="true"/>}></Route>
            </Route>
        </Routes>
    </Router>
  );