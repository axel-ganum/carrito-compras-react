import React, { useEffect, useState } from 'react';
import { ProductoContext } from './ProductoContext';

const ProductoProvider = ({ children }) => {
  const [producto, setProducto] = useState([]);
  
  const fetchProducto = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data);
      setProducto(data);
    } catch (error) {
      console.error('Error fetching productos:', error);
    }
  };
   
  useEffect(() => {
    fetchProducto();
  }, []);
  
  return (
    <ProductoContext.Provider value={{ producto }}>
      {children}
    </ProductoContext.Provider>
  );
};

export default ProductoProvider;

