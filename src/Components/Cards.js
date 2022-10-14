import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  return (
    <>
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Projects</h2>
        <div className='row'>
          <Card style={{ width: '22rem', border:'none' }} className='mx-2 mt-4 card_style'>
            <Card.Img variant="top" src="holder.js/100px180" style={{height:'16rem'}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}
