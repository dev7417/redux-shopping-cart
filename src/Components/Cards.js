import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardData';
import { useState } from 'react';
import CardDetails from './CardDetails';
import './cart.css';


export default function Cards() {
  const [data, setData] = useState(Cardsdata);
  const [search, setSearch] = useState('')

  return (
    <>
      {/* <CardDetails/> */}
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Projects</h2>
        <div className='row'>
          <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />

          {
            data.map((element, id) => {
              console.log(element)
              return (

                <>
                  <Card style={{ width: '22rem', border: 'none' }} className='mx-2 mt-4 card_style'>
                    <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} />
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>
                        {element.address}
                      </Card.Text>
                      <div className='button_div d-flex justify-content-center'>
                      <Button variant="primary" className='col-lg-12'>Add to Cart</Button>

                      </div>
                    </Card.Body>
                  </Card>

                </>

              )

            })
          }

        </div>
      </div>
    </>
  )
}
