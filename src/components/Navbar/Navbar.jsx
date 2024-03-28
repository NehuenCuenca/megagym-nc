import './Navbar.css'
import { calculateSettingAsThemeString, updateThemeOnHtmlEl } from '@helpers/themes.js'
import { logoMegaGym } from '@assets/logos/logos.js'
import { darkMenu, darkCloseMenu, lightMenu, lightCloseMenu, sun, moon } from '@assets/svgs/svgs.js'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [currentTheme, setCurrentTheme] = useState(null);

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme");
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
        const currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
        
        updateThemeOnHtmlEl({ theme: currentThemeSetting });
        setCurrentTheme(currentThemeSetting)
    }, [])
    
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    } 

    const handleToggleTheme = () => {
        const newTheme = (currentTheme === 'light') ? 'dark': 'light'
        
        localStorage.setItem("theme", newTheme);
        updateThemeOnHtmlEl({ theme: newTheme });
        setCurrentTheme(newTheme)
    }
    
    return (
        <nav className="navbar">
            <a href="#home">
                <img src={logoMegaGym.src} className='navbar__logo-megagym' width={70} height={70} alt="Logo de MegaGym" loading='eager'/>
            </a>

            {
                currentTheme &&
                <>
                    <button className="toggle-theme" onClick={handleToggleTheme}>
                        <img src={currentTheme === 'light' ? moon.src : sun.src} alt="Interruptor de tema" width={40} height={40} loading='eager' className="toggle-theme__icon"/>
                    </button>
                
                    <button className="hamburguer-menu" onClick={handleToggleMenu}>
                        {currentTheme === 'light' && <img src={toggleMenu ? darkCloseMenu.src : darkMenu.src} alt="Menu" width={40} height={40} loading='eager' className="hamburguer-menu__icon"/>}
                        {currentTheme === 'dark' && <img src={toggleMenu ? lightCloseMenu.src : lightMenu.src} alt="Menu" width={40} height={40} loading='eager' className="hamburguer-menu__icon"/>}
                    </button>
                </>
            }

            {
                toggleMenu &&
                <ul className='navbar__links-list_mobile fadeInLeft'>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggleMenu} href="#activities">Actividades</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggleMenu} href="#staff">Staff</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggleMenu} href="#prices">Precios</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggleMenu} href="#testimonials">Testimonios</a>
                    </li>
                    <li>
                        <a className='link_mobile link_mobile_hover' onClick={handleToggleMenu} href="#us">Nosotros</a>
                    </li>
                </ul>
            }
            <ul className='navbar__links-list'>
                <li>
                    <a className='link link_hover' onClick={handleToggleMenu} href="#activities">Actividades</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggleMenu} href="#staff">Staff</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggleMenu} href="#prices">Precios</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggleMenu} href="#testimonials">Testimonios</a>
                </li>
                <li>
                    <a className='link link_hover' onClick={handleToggleMenu} href="#us">Nosotros</a>
                </li>
            </ul>
        </nav>  
    )
}

export default Navbar