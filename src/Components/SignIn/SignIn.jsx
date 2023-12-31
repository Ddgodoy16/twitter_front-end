import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:4000/api/crear_usuario';

export const SignIn = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        email: "",
        pass: ""
    });

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post(url, formData, { withCredentials: true });
            const data = result.data;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const navigate = useNavigate();

    const goToIniciarSesion = () => {
        navigate('/');
    };

    return (
        <>
 
 <div className="container-fluid" style={{ backgroundColor: '#007FFF', height: '100vh', position: 'relative' }}>
  <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
    <div className="col-6 text-center">
    <h1>Twitter</h1>
      <img src="/twitter.png" alt="Twitter" style={{ width: '100px', height: '100px' }} />
           <form className="mt-5 formInicioSesion" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" name="email" onChange={onHandleChange} />
          <label>Correo Electronico</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="user_name" onChange={onHandleChange} />
          <label>Nombre de Usuario</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" className="form-control" name="pass" onChange={onHandleChange} />
          <label>Contraseña</label>
        </div>

        <button className="btn btn-primary w-100">Registrarse</button>
      </form>

      <div className="formInicioSesion mt-3">
        ¿Tienes una cuenta?
        <button className="btn" onClick={goToIniciarSesion}>
          Inicia Sesion
        </button>
      </div>
    </div>
  </div>
</div>


        </>
    )
}
