
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavScrollExample(props) {
    const [Search, setSearch] = useState('')
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">BuyHere</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={Search}
                            onChange={(e) => {
                                setSearch(e.target.value);

                                props.setUseFiltered(false)
                            }}
                        />

                        <Button variant="outline-success" onClick={() => {
                            console.log(Search.length);
                            if (Search.length > 0) {

                                const result = props.Products.filter((item) => {
                                    console.log(item.name);
                                    return String(item.name).includes(Search)
                                });
                                console.log("Result:", result);
                                props.setFilteredProducts(result)
                                props.setUseFiltered(true)
                                return
                            }
                            props.setUseFiltered(false)
                            props.setFilteredProducts([])
                        }}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;