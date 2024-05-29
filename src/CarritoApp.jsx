import { Routes, Route} from 'react-router-dom'
import NavBar from './componentes/NavBar'
import CompraPage from './pages/CompraPage'
import CarritoPage from './pages/CarritoPage'
import { Navigate } from 'react-router-dom'
import ProductoProvider from './context/ProductoProvider'
import CarritoProvider from './context/CarritoProvider'
const CarritoApp = () => {
  return (
    <ProductoProvider>
      <CarritoProvider>
    <NavBar></NavBar>
    <div className='container'>
    <Routes>
        <Route path='/' element={<CompraPage></CompraPage>}></Route>
        <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
        <Route path='/' element={<Navigate  to= '/'></Navigate>}></Route>

    </Routes>
    </div>
    </CarritoProvider>
   </ProductoProvider>
  )
}

export default CarritoApp
