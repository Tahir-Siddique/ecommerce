import axios from 'axios'
import React, { useState } from 'react'

export default function Card(props) {
  const [Purchase, setPurchase] = useState('Purchase')

  return (

    <div className="card">
      {/* <i className="fa fa-long-arrow-left"></i> */}
      <div style={{ width: "100%" }}>
        <img style={{ width: "100%" }} src={props.product.image} />

      </div>
      <div className="text m-3">
        <h3>{props.product.name}</h3>
        <div className="price">
          <p>Price: {props.product.price}Rs.</p>
        </div><div className="rating_reviews">
          <p>Rating: {props.product.rating} ⭐</p>
        </div>
        <div className="last_section">
          <button onClick={() => {
            setPurchase("Purchasing..")
            axios.post('http://localhost:3000' + "/purchase", { 'product': props.product },).then((resp => {
              setPurchase("Purchase Again")
              console.log(resp.data);
              return resp.data
            }
            ))


          }}>{Purchase}</button>
        </div>
      </div>
    </div>
  )
}
