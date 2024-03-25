import './Navbar.css'
import { logoMegaGym } from '../../assets/logos/logos.js'
import { hamburguerMenu, closeMenu } from '../../assets/svgs/svgs.js'
import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => { 
        setToggle(!toggle)
    }

    return (
        <nav className="navbar">
            <a href="#home">
                <img src={logoMegaGym.src} className='navbar__logo-megagym' width={70} height={70} alt="Logo de MegaGym" loading='eager'/>
            </a>
            <button className="hamburguer-menu" onClick={handleToggle}>
                <img src={
                    toggle 
                    ? closeMenu.src
                    : hamburguerMenu.src
                } alt="Menu" width={40} height={40} loading='eager'/>
            </button>
            {
                toggle &&
                <ul className='navbar__links-list_mobile'>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggle} href="#activities">Actividades</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggle} href="#staff">Staff</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggle} href="#">Precios</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggle} href="#">Testimonios</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggle} href="#">Nosotros</a>
                    </li>
                </ul>
            }
            <ul className='navbar__links-list'>
                <li>
                    <a className='link link_hover' onClick={handleToggle} href="#activities">Actividades</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggle} href="#staff">Staff</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggle} href="#">Precios</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggle} href="#">Testimonios</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggle} href="#">Nosotros</a>
                </li>
            </ul>
        </nav>  
    )
}

export default Navbar