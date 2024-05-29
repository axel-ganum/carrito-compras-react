import React, { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []

// Define el reducer fuera del componente CarritoProvider
const compraReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[COMPRA] Agregar Compra':
            return [...state, action.payload]
        case '[COMPRA] Aumentar Cantidad Compra':
            // Implementar la lógica para aumentar cantidad
            return state.map(compra => 
                compra.id === action.payload ? { ...compra, cantidad: compra.cantidad + 1 } : compra
            )
        case '[COMPRA] Disminuir Cantidad Compra':
            // Implementar la lógica para disminuir cantidad
            return state.map(compra =>  {
                const cant = compra.cantidad -1
                if(compra.id === action.payload && compra.cantidad > 1) return {...compra, cantidad: cant}
                return compra
    })
        case '[COMPRA] Eliminar Compra':
            return state.filter(compra => compra.id !== action.payload)
        default:
            return state
    }
}

const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(compraReducer, initialState)

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[COMPRA] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[COMPRA] Aumentar Cantidad Compra',
            payload: id
        }
        dispatch(action)
    }

    const disminuirCantidad = (id) => {
        const action = {
            type: '[COMPRA] Disminuir Cantidad Compra',
            payload: id
        }
        dispatch(action)
    }

    const eliminarCantidad = (id) => {
        const action = {
            type: '[COMPRA] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider

