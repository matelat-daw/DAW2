import './index.css'
import { Link } from 'react-router-dom';

export const grupos=["A", "B"];

export default function Daw2() {
    return (
        <>
            <h1>Grupos 2º DAW</h1>        
            <ul>
                {grupos.map(grupo =>
                    <li key={grupo}>
                        <Link to={`/grupo/${grupo}`}>2º DAW Grupo {grupo}</Link>
                    </li>
                )}
            </ul>
        </>
    )
}

