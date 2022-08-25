import React from 'react'
import { useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from './card'

export default function ListSection(props) {
    useEffect(() => {
        console.log("Filtered Products:", props.FilteredProducts);
        console.log("Original Products:", props.Products);
    }, [])

    return (
        <Container style={{ backgroundColor: 'white' }}>
            {
                props.UseFiltered ?
                    props.FilteredProducts.map((product) =>
                        <Card
                            key={product.id}
                            product={product}>

                        </Card>
                    ) : props.Products.map((product) =>
                        <Card
                            key={product.id}
                            product={product}>

                        </Card>)
            }
        </Container>
    )
}
