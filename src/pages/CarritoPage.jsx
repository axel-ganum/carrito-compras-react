import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

const CarritoPage = () => {
   const{listaCompras,aumentarCantidad,disminuirCantidad,eliminarCantidad}=useContext(CarritoContext)

   const calcularTotal = () =>{
     return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
   }

    const handleImprimir = () => {
      print()
    }
  return (
  <>
   <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {listaCompras.map(item => (

    <tr key={item.id}>
      <th>{item.title}</th>
      <td>{item.price}</td>
      <td>
        <button  className='btn btn-ouline-primary' onClick={() => disminuirCantidad(item.id)}>-</button>
        <button className='btn btn-primary'>{item.cantidad}</button>
        <button className='btn btn-ouline-primary' onClick={() => aumentarCantidad(item.id)}>+</button>
        </td>
      <td>
        <button 
         type='button'
         className='btn btn-danger'
         onClick={() => eliminarCantidad(item.id)}
        >Eliminar</button>

      </td>
    </tr>
    ))}
   </tbody>
  <td><b>TOTAL:</b></td>
    <td></td>
    <td>${calcularTotal()}</td>
    <td></td>
</table>

<div className="d-grid gap-2">
    <button className="btn btn-primary"
     onClick={handleImprimir}
     disabled= {listaCompras<1}
    >COMPRAR</button>
</div>
  </>
  )
}

export default CarritoPage
