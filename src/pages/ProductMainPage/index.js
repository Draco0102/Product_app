import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../../components/layout/Layout'

const ProductMainPage = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(()=>{
      (async()=>{
          try{
              let result = await axios.get("https://fakestoreapi.com/products")
              setData(result.data)
              setLoading(false)
          }catch (error){
              console.log(error)
          }
      })()
  },[])

  if(loading){
      return(
          <div>Loading</div>
      )
  }

return (
  <Layout>
    <ul>
        {data.map(product => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
              <p>{product.title}</p>
            </div>
          </li>
        ))}
      </ul>
  </Layout>
)
}

export default ProductMainPage
