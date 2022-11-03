import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    let [query, setQuery] = useSearchParams('');
    let [productList, setProductList] = useState([]);
    let [error, setError] = useState("");


    useEffect(() => {
        getProduct();
    }, [query])

    const getProduct = async () => {
        try {
            if (error != '')
                setError('');

            let keyword = query.get('q') || "";
            let url = `https://my-json-server.typicode.com/leebee2/Json_DB/products?q=${keyword}`;
            let response = await fetch(url);
            let data = await response.json();

            if (data.length < 1) {
                if (keyword !== "") {
                    setError(`${keyword}와 일치하는 상품이 없습니다`);
                } else {
                    throw new Error("결과가 없습니다");
                }
            }
            setProductList(data);

        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <Container>
            {error ? (
                <Alert variant="danger" className="text-center">
                    {error}
                </Alert>
            ) : <Container>
                <Row>
                    {productList.length > 0
                        && productList.map((item) => (
                            <Col key={item.id} md={3} sm={12}>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            }
        </Container>
    );
};

export default ProductAll;