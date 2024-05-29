import React from 'react'
import { useContext } from "react"
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

const NavBar = () => {
  const{listaCompras}=useContext(CarritoContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink to = '/'className="navbar-brand" href="#">carrito</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to = '/'className="nav-link active" aria-current="page" href="#">compras</NavLink>
          </li>
        </ul>
        <NavLink to = '/carrito' >
      <Badge badgeContent={listaCompras.length} color="secondary">
      <ShoppingCart color="action"/>
      </Badge>
        </NavLink>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
