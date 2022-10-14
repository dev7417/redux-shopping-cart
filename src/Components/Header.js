import React from 'react'
import { Navbar } from 'react-bootstrap/'
import { Container } from 'react-bootstrap'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div>
                <Navbar bg="dark" expand="dark" style={{ height: "80px" }}>
                    <Container>
                        <NavLink to='/Card' className='text-white font-weight-bold' style={{ textDecoration: "none", textTransform: "uppercase" }}>Add To Cart</NavLink>
                        <Nav className="me-auto px-4">
                            <NavLink to='/' className='text-white font-weight-bold' style={{ textDecoration: "none", textTransform: "uppercase" }}>Home</NavLink>
                        </Nav>
                        <Badge badgeContent={4} color="primary"
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
                        <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "20rem", padding: "10px", position: "relative" }}>
                            <i className='fa fa-close smallclose' style={{ position: "absolute", top: "2px", right: "20px", fontSize: "20px", cursor: "pointer" }} onClick={handleClose}></i>
                            <p style={{ fontSize: "22px" }}>Your Cart is Empty</p>
                        </div>
                    </Menu>
                </Navbar>
            </div>

        </>
    )
}
