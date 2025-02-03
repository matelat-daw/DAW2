import { Link, Outlet } from "react-router-dom"

export default function Layoutlet() {
    return (
        <main>
            <nav>
                <Link to="/" className="link">Inicio</Link>
                <Link to="/daw2" className="link">Grupos 2ºDAW</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
        </main>
    )
}