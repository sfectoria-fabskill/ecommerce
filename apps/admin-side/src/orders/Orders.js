import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";



function Orders() {
  const [order, setOrder] = useState([])
  const [updated, setUpdated] = useState(false)

  const fetch = async () => {
    const response = await axios.get("http://localhost:3001/api/v1/orders")
    setOrder(response.data)

  }

  const updateOrder = async (id, status) => {
    const response = await axios.put(`http://localhost:3001/api/v1/orders/changeStatus/${id}`, { status: status })
    setUpdated(!updated)

  }

  const deleteOrder = async (id) => {
    const response =  await axios.delete(`http://localhost:3001/api/v1/orders/${id}`)
    setUpdated(!updated)
    
  }


  useEffect(() => {
    fetch()
  }, [updated])

  return (
    <div>
      {order.map((e, i) => {
        return (<div className='card'>
          <div className='card-body'>
            <h1>{e.clientName}</h1>
            <h3>{e.OrderLine.length}</h3>
            <h3>{e.status}</h3>
            <div
              className='d-flex gap-5'
            > <Button variant='success' onClick={() => {
              updateOrder(e.id, "confirmed")
            }}>Accept</Button>
              <Button variant='warning'
                onClick={() => {
                  updateOrder(e.id, "refused")
                }}
              >Refuse</Button>
              
              <Button variant='danger'
                onClick={() => {
                  deleteOrder(e.id)
                }}
              >Delete</Button>
              
              
              </div>
           

          </div>
        </div>)
      })}
    </div>
  )
}

export default Orders