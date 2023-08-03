import React from 'react';
import './FooterStyle.scss'
import Insta from '../../image/insta.svg'

const Footer = () => {
    return (
        <footer className='footer-area'>
            <p className='footer-desc'>© Todos Direitos Reservados ao <b>Espaço Educative</b></p>
            <div className='social-area'>
                <p className='footer-desc'>Siga nas redes sociais: &nbsp;</p>
                <img src={Insta} className='social-icon' alt='Instagram' />
            </div>

        </footer>
    );
};

export default Footer;