import React, { useEffect, useState } from 'react'
import MyNavbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListSection from './components/list_section';
import './App.css'

const axios = require('axios').default;
// const BACKEND_IP = process.env.BACKEND_IP
export default function App() {
  const [Products, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [UseFiltered, setUseFiltered] = useState(false)

  useEffect(() => {
    if (Products.length === 0)
      axios.get('http://localhost:3000' + "/products").then((resp => setProducts(resp.data)))
    // console.log("Products", Products);
  }, [])


  return (
    <div>
      <MyNavbar
        setProducts={setProducts}
        Products={Products}
        setFilteredProducts={setFilteredProducts}
        FilteredProducts={FilteredProducts}
        setUseFiltered={setUseFiltered}
      ></MyNavbar>
      <ListSection
        setProducts={setProducts}
        Products={Products}
        FilteredProducts={FilteredProducts}
        UseFiltered={UseFiltered}
      ></ListSection>

    </div>
  )
}
