import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';


const ProductAll = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        let url = `https://my-json-server.typicode.com/leebee2/Json_DB/products`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    return (
        <div>
            <Container>
                <Row>
                    {
                        productList.map((menu,index) => (
                            <Col key={index} lg={3}> <ProductCard item={menu} /></Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;