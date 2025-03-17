import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DefaultPage.css';

const DefaultPage = () => {
    return (
        <div className='default-page-global'>
            <h1>404</h1>
            <h3>La página que buscas no existe</h3>
            <p>Regresa a la página principal</p>
            <Link to='/'>
                <button className='default-page-button'>Inicio</button>
            </Link>
        </div>
    );
}

export default DefaultPage;