import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Paginas/auth/login';
import Register from './Paginas/auth/register';
import Home from './Paginas/admin/home';
import Citas from './Paginas/admin/citas_admin';
import HomeC from './Paginas/clientes/home_cliente';
import RegistroCita from './Paginas/clientes/registroProductos';
import VerCitas from './Paginas/clientes/verCitas';
import { userThemeHook } from "./GlobalComponents/ThemeProvider";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme] = userThemeHook();

  return (
    <main className={theme ? 'bg-black' : 'bg-light'}>
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/homeC" element={<HomeC />} />
            <Route path="/registrarCitas" element={<RegistroCita />} />
            <Route path="/verCitas" element={<VerCitas />} />
          </Routes>
        </Router>
      </Fragment>
    </main>
  );
}

export default App;
