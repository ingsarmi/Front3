import React from 'react';

const Card = ({ usuario }) => {
    return (
        <div className="card">
            <p>Hola {usuario.nombre}!</p>
            <p>Sabemos que tu color preferido es:</p>
            <div className="color-box" style={{ backgroundColor: usuario.color }}>
                    {usuario.color}
                </div>
        </div>
    );
};

export default Card;