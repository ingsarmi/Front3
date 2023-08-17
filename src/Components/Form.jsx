import React, { useState } from 'react';
import Card from './Card'; 

const Form = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        color: '',
    });
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = () => {
        if (usuario.nombre.trim().length >= 3 && usuario.color.length >= 6) {
            setEnviado(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div className="form-container">
            <label>Nombre del usuario</label>
            <input
                type="text"
                placeholder="Ingrese tu nombre"
                value={usuario.nombre}
                onChange={(event) => setUsuario({ ...usuario, nombre: event.target.value })}
            />
            <label>Color preferido</label>
            <input
                type="text"
                placeholder="Ingresa tu color favorito (formato HEX)"
                value={usuario.color}
                onChange={(event) => setUsuario({ ...usuario, color: event.target.value })}
            />
            <button onClick={handleSubmit}>Enviar</button>
            {enviado && (
                <Card usuario={usuario} />
            )}
            {error && <h3 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h3>}
        </div>
    );
};

export default Form;

