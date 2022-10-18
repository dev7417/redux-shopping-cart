import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './cart.css'
export default function CardDetails() {
  const { rname } = useParams()
  const [data, setData] = useState([])
  console.log({ rname })
  const navigate = useNavigate();
  const getData = useSelector((state) => state.cartReducer.cartData);
  const removeBtn = (e)=>{
    e.preventDefault()
    navigate('/');
  }
  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == rname;
    })
    setData(compareData)
  }
  useEffect(() => {
    compare()
  }, [rname])
  return (
    <>

    {data.map((item)=>{
      return(
        <div className='container mt-2'>
        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className='itemdetails d-flex'>
            <div className='items_img'>
        <img src = {item.imgdata}/>

            </div>
            <div className='details'>
              <Table>
                <tr>
                  <td>
                    <p> <strong> Restaurant: {item.address}</strong></p>
                    <p> <strong> Price:  &#8360; {item.price}</strong></p>
                    <p> <strong> Dishes: {item.rname}</strong></p>
                    <p> <strong> Total: {item.somedata}</strong></p>

                  </td>
                  <td>

                    <p><strong>Rating:</strong> <span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px', fontSize: '20px' }}><i className="fa fa-star">{item.rating}</i></span> </p>
                    <p><strong>Order Review</strong> <span style={{ backgroundColor: 'green', color: '#fff', padding: '2px 10px', borderRadius: '5px' }}><i className="fa fa-star">4</i></span></p>
                    <p><strong>Remove</strong><span style={{ backgroundColor: 'red', color: '#fff', padding: '2px 2px', borderRadius: '5px', margin: '0px 5px', cursor: 'pointer' }}><i className="fa fa-times-circle" onClick = {()=>navigate('/')}></i></span></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
      )
    })}

    





    </>
  )
}
