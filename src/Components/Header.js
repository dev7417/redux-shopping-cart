import React from 'react'
import { Navbar } from 'react-bootstrap/'
import { Container } from 'react-bootstrap'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { RemoveToCart } from '../redux/Action/action';
import './cart.css'


export default function Header() {

    const getData = useSelector((state) => state.cartReducer.cartData);
    console.log("==============================>Header", getData)
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const removeData = (e)=>{
        dispatch(RemoveToCart(e));

    }
    console.log("=============removeData",removeData)
    return (
        <>
            <div>
                <Navbar bg="dark" expand="dark" style={{ height: "80px" }}>
                    <Container>
                        <NavLink to='/Card' className='text-white font-weight-bold' style={{ textDecoration: "none", textTransform: "uppercase" }}>Add To Cart</NavLink>
                        <Nav className="me-auto px-4">
                            <NavLink to='/' className='text-white font-weight-bold' style={{ textDecoration: "none", textTransform: "uppercase" }}>Home</NavLink>
                        </Nav>
                        <Badge badgeContent={getData.length} color="primary"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <i className="fa fa-cart-plus text-white" style={{ fontSize: "25px", cursor: 'pointer' }}></i>
                        </Badge>

                    </Container>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >


                        {getData.length ?
                            <div>
                                <Card  className='d-flex justify-content-center align-items-center' style={{ width: '15rem' }}>
                                    
                                        {getData.map((item) => {
                                            return (
                                                <>
                                                <div className = ''>
                                                <Card.Img variant="top" src={item.imgdata} className='img-fluid img' />
                                              <Card.Body>
                                                    <Card.Title style = {{fontSize:'15px'}}>{item.rname}</Card.Title>
                                                    <Card.Text style={{fontSize:"19px"}}>
                                                    ₹ {item.price} <span style={{backgroundColor:'red', color:'#fff', borderRadius:'15px', marginLeft:'10px', cursor:'pointer'}}><i className="fa fa-times-circle" onClick={()=>removeData(item)}></i></span>
                                                    </Card.Text>
                                                    
                                                    </Card.Body>
                                                    </div>
                                                </>
                                            )
                                        })}

                                </Card>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "20rem", padding: "10px", position: "relative" }}>
                                <i className='fa fa-close smallclose' style={{ position: "absolute", top: "2px", right: "20px", fontSize: "20px", cursor: "pointer" }} onClick={handleClose}></i>
                                <p style={{ fontSize: "22px" }}>Your Cart is Empty</p>
                            </div>

                        }










                    </Menu>
                </Navbar>
            </div>

        </>
    )
}
