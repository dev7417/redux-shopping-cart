import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container, Nav } from 'react-bootstrap'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>

            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Nav.Link to="/" className="text-decoration-none text-white">Add To Cart </Nav.Link>
                    <Nav className="me-auto px-2">
                        <Nav.Link>Home</Nav.Link>
                    </Nav>

                    <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                        <i className="fa fa-cart-plus text-light" style={{ fontSize: "26px", cursor: "pointer" }}></i>
                    </Badge>
                </Container>
            </Navbar>

        </>
    )
}
