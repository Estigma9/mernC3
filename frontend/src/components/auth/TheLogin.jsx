import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import '../../styles/TheLogin.css';
import baseURL from'../../api/index.js'
import { useAuth } from '../../hooks/AuthContext';

//const baseUrl = "http://localhost:4000";
const baseUrl = baseURL;

const TheLogin = () => {
  const {isLoggedIn, login, logout} = useAuth();
  
  const [currentTab, setToggleState] = useState(1);
  
  function selectTab(index) {
    setToggleState(index);
  };

  const [dataUser, setData] = useState({
    email: "",
    password: "",
 
  });

  const handleChange = (event) =>{
    console.log(event.target.name)
    console.log(event.target.value)

    setData({
      ...dataUser,
      [event.target.name]: event.target.value
      }
    );
    // console.log([login, setData]);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('Form submitted!!! XD o+<]: ');
  }

  const navigate = useNavigate();

  const loginUser = async () =>{
    try {
      let response = await axios.post(baseUrl + "/api/user/login", dataUser);
      
      console.log(response.data);

      let token = response.data.tokenReturn;      
      let user = response.data.user;

      localStorage.setItem("jwt", token);
      localStorage.setItem("user", JSON.stringify(user));        

      if (token) {
        swal("Éxito!!", "Login correcto", "success");
        navigate('/checked');
        login();
      }
    } catch (e) {
      swal("Oops!", "Algo salió mal!", "error");
    }
  }
    
  const registerUser = async () => {
    try {
      let response = await axios.post(baseUrl + '/api/user/register', dataUser);

      console.log(response);
      swal("Éxito!!", "Registro correcto", "success");
      navigate('/login');
      setToggleState(1);
      
    } catch (e) {
      swal("Oops!", "Algo salió mal con tu registro!", "error");
    }
  }

  return (
    <div className="the-login">
      {/* <!-- Formularios --> */}
      <div className="contenedor-formularios">
        {/* <!-- Links de los formularios --> */}
        <ul className="contenedor-tabs">
          <li
            className={currentTab === 1 ? "active" : ""} 
            onClick={() => selectTab(1)}
            // className="tab tab-segunda"
          >
            <a href="#iniciar-sesion">Iniciar Sesión</a>
          </li>

          <li
            className={currentTab === 2 ? "active" : ""}
            onClick={() => selectTab(2)}
            // class="tab tab-primera"
          >
            <a href="#registrarse">Registrarse</a>                    
          </li>
        </ul>


        {/* <!-- Contenido de los Formularios --> */}
        {/* <!-- Iniciar Sesión --> */}
        <div className={currentTab === 1 ? "" : "contenido-tab"}>
          <div id="iniciar-sesion">
            <h1 className="login-title">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} method="post">
                <div className="contenedor-input">
                    <label className="label"><span className="req"></span></label>
                    <input 
                      name='email'
                      onChange={handleChange}
                      type="email"
                      required
                      placeholder="Email"
                    />
                </div>

                <div className="contenedor-input">
                    <label className="label"><span className="req"></span></label>
                    <input
                      name='password'
                      onChange={handleChange}
                      type="password"
                      required
                      placeholder="Password"
                    />
                </div>

                <p className="forgot"><a href="#">¿Se te olvidó la contraseña?</a></p>

                <input
                  onClick={()=>loginUser()}                    
                  type="submit"
                  className="button button-block"
                  value="Iniciar Sesión"
                />
            </form>
          </div>
        </div>

        {/* <!-- Registrarse --> */}
        <div className={currentTab === 2 ? "" : "contenido-tab"}>
          <div id="registrarse">
              <h1 className="login-title">Registrarse</h1>
              <form onSubmit={handleSubmit} method="post">
                  <div className="fila-arriba">
                      <div className="contenedor-input">
                          <label><span className="req"></span></label>
                          <input 
                            name='username'
                            onChange={handleChange}                             
                            type="text"
                            required
                            placeholder="Nombre"
                          />
                      </div>
                      
                      <div className="contenedor-input">
                          <label><span className="req"></span></label>
                          <input 
                            name='userlastname'
                            onChange={handleChange}                              
                            type="text"
                            required
                            placeholder="Apellidos"
                          />
                      </div>
                  </div>

                  <div className="contenedor-input">
                      <label className="label"><span className="req"></span></label>
                      <input
                        name='email'
                        onChange={handleChange}
                        type="email"
                        required
                        placeholder="Email"
                      />
                  </div>

                  <div className="contenedor-input">
                      <label className="label"><span className="req"></span></label>
                      <input
                        name='password'
                        onChange={handleChange}                          
                        type="password"
                        required
                        placeholder="Password"
                      />
                  </div>

                  <div className="contenedor-input">
                      <label className="label"><span className="req"></span></label>
                      <input 
                        name='passwordcompare'
                        onChange={handleChange}
                        type="password"
                        required
                        placeholder="Verificar Password"
                      />
                  </div>

                  <input 
                    onClick ={() => registerUser()}
                    type="submit"
                    class="button button-block"
                    value="Registrarse"
                  />                    
              </form>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default TheLogin;