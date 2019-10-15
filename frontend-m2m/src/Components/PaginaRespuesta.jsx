import React from 'react';
import './PaginaRespuesta.css';

export default class PaginaRespuesta extends React.Component() {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        return (
            <div className='container'>
                <div className='column'>
                    <h1>Palabra convertida a {metodo}:</h1>
                    <h2>{palabra}</h2>
                    <div>
                        <h1>Historial de conversiones:</h1>
                        
                    </div>
                </div>
            </div>
        )
    }
}
