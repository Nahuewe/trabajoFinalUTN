import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Categories from "./Categories"

const NavBar = () => {
    
    function darkmode() {
        const d = document
        const logo = d.querySelector(".logo")
        const tema = d.querySelector(".tema")

        if (!d.body.classList.contains("dark")) {
            d.body.classList.add("dark")
            localStorage.setItem('temaOscuro', 'true')
            tema.textContent = "light_mode"
            logo.src = "https://i.imgur.com/F8Vj4ZJ.png"
        
        } else {
            d.body.classList.remove("dark")
            localStorage.setItem('temaOscuro', 'false')
            tema.textContent = "bedtime"
            logo.src = "https://i.imgur.com/5GRUqAi.png"
        }
    }

    return (
        <header>
            {/* NAV TOP (GENERAL) */}
            <nav className="top">
                {/* NAV IZQUIERDA */}
                <div className="izq">
                    <Link to={'/'}>
                        <img className='logo' alt="Logo" src="https://i.imgur.com/5GRUqAi.png"></img>
                    </Link>
                </div>

                {/* NAV DERECHA */}
                <div className="der">
                    
                    {/* dark/light mode */}
                    <button onClick={darkmode} className="material-icons-outlined tema" title="Cambiar modo">bedtime</button>

                    {/* carrito de compras */}
                    <CartWidget/>

                </div>
            </nav>
            
            {/* NAV BOT (CATEGORIAS0) */}
            <Categories/>
        </header>
    )
}

export default NavBar