
import { useContext } from "react"
import Card from "../componentes/Card"
import { ProductoContext } from "../context/ProductoContext"
import { CarritoContext } from "../context/CarritoContext"
const CompraPage = () => {
   const {producto} = useContext(ProductoContext);
   const{agregarCompra,eliminarCantidad}=useContext(CarritoContext)
    const handleAgregar = (compra) => {
      agregarCompra(compra)
    }
    const handleQuitar = (id) => {
      eliminarCantidad(id)
    }
   
  return (
   <>
   <h1>Comprar</h1>
   <hr/>
    {producto.map(producto => (
       <Card key={producto.id}
       imagen={producto.image}
       titulo={producto.title}
       descripcion={producto.description}
       precio ={producto.price}
       handleAgregar={() => handleAgregar(producto)}
       handleQuitar={() => handleQuitar(producto.id)}
        >

       </Card>
    ))}

   </>
  )
}

export default CompraPage
