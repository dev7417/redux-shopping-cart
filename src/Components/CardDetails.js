import React from 'react'
import Table from 'react-bootstrap/Table'
import './cart.css'
export default function CardDetails() {
  return (
   <>
    <div className='container mt-2'>
      <h2 className='text-center'>Items Details Page</h2>

      <section className='container mt-3'>
      <div className='itemdetails d-flex'>
        <div className='items_img'>
          <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"/>
        </div>
        <div className='details'>
          <Table>
            <tr>
              <td>
                <p> <strong> Restaurant: Massala Theoryy</strong></p>
                <p> <strong> Price: Massala Theoryy</strong></p>
                <p> <strong> Dishes: Massala Theoryy</strong></p>
                <p> <strong> Total: Massala Theoryy</strong></p>

              </td>
              <td>
                <p><strong>Rating:</strong> <span style={{background:'green', color:'#fff',padding:'2px 5px', borderRadius:'5px', fontSize:'20px'}}><i class="fa fa-star">3.5</i></span> </p>
                <p><strong>Order Review</strong> <span style={{backgroundColor:'green', color:'#fff', padding:'2px 10px',borderRadius:'5px'}}><i class="fa fa-star">4</i></span></p>
                <p><strong>Remove</strong><span style={{backgroundColor:'red', color:'#fff', padding:'2px 2px', borderRadius:'5px',margin:'0px 5px', cursor:'pointer'}}><i class="fa fa-times-circle"></i></span></p>
              </td>
            </tr>
          </Table>
        </div>
      </div>
      </section>
    </div>
   
   </>
  )
}
