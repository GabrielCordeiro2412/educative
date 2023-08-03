import React, { useState, useEffect } from 'react'
import './NavbarStyle.scss'
import Logo from '../../image/biglogo.svg'
import Menu from '../../image/menu.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {

    useEffect(() =>{
        function updateNavCollapse(event) {
            if(event.currentTarget.innerWidth > 768){
                setIsCollapsed(true);
            }
        }
        window.addEventListener('resize', updateNavCollapse)
        return () => {
            window.removeEventListener('resize', updateNavCollapse)
        }
    }, [])

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
        if (isCollapsed) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }
    };

    return (
        <nav className='nav-bar-area'>
            <img className='logo-educative' src={Logo} alt='Espaço Educative' />
            <button
                className="navbar-toggle"
                onClick={handleToggleCollapse}
                aria-expanded={!isCollapsed}
                aria-controls="navbarItems"
            >
                <img src={Menu} alt='Menu' className='menu-icon' />
            </button>

            <ul className={`navbar-items ${isCollapsed ? '' : 'show'}`}>
                <li><Link className='item' to="/">Início</Link></li>
                <li><Link className='item' to="/espaco">Espaço</Link></li>
                <li><Link className='item' to="#">Contato</Link></li>
            </ul>
        </nav>
    )
}