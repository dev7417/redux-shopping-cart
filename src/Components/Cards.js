import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardData';
import { useState } from 'react';


export default function Cards() {
  const [data, setData] = useState(Cardsdata);
  return (
    <>
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Projects</h2>
        <div className='row'>
          {
            data.map((element, id) => {
              console.log(element)
              return (
                <>
                  <Card style={{ width: '22rem', border: 'none' }} className='mx-2 mt-4 card_style'>
                    <Card.Img variant="top" src={element.imgdata}style={{ height: '16rem' }} />
                    <Card.Body>
                      <Card.Title>{element.rname}</Card.Title>
                      <Card.Text>
                        {element.address}
                      </Card.Text>
                      <Button variant="primary" className='d-flex mx-auto'>ADD</Button>
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
