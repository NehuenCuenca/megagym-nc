import './Navbar.css'
import { logoMegaGym } from '../../assets/logos/logos.js'
import { hamburguerMenu, closeMenu } from '../../assets/svgs/svgs.js'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => { 
        setToggle(!toggle)
    }

    return (
        <nav className="navbar">
            <img src={logoMegaGym.src} className='navbar__logo-megagym' width={70} height={70} alt="Logo de MegaGym" loading='eager'/>
            <button className="hamburguer-menu" onClick={handleToggle}>
                <img src={
                    toggle 
                    ? closeMenu.src
                    : hamburguerMenu.src
                } alt="Menu" width={40} height={40} loading='eager'/>
            </button>
            {
                toggle &&
                <ul className='navbar__links-list'>
                    <li>
                        <a className='link' onClick={handleToggle} href="#">Actividades</a>
                    </li>
                    <li>
                        <a className='link' onClick={handleToggle} href="#">Staff</a>
                    </li>
                    <li>
                        <a className='link' onClick={handleToggle} href="#">Precios</a>
                    </li>
                    <li>
                        <a className='link' onClick={handleToggle} href="#">Testimonios</a>
                    </li>
                    <li>
                        <a className='link' onClick={handleToggle} href="#">Nosotros</a>
                    </li>
                </ul>
            }
        </nav>  
    )
}

export default Navbar