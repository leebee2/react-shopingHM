import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {
    let { id } = useParams();
    let [products, setProducts] = useState();

    useEffect(() => {
        getProductDetail();
    },[])

    const getProductDetail = async() => {
        let url = `https://my-json-server.typicode.com/leebee2/Json_DB/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();

        setProducts(data);
    }


    return (
        <Container>
            <Row>
                <Col className='product-img'>
                    <img src={products?.img}/>
                </Col>
                <Col>
                    <div>{products?.title}</div>
                    <div>₩{products?.price}</div>
                    {products?.choice ? <div className='new-product'>Conscious choice</div> : <></>}
                    <Dropdown>
                        <Dropdown.Toggle className='dropdown-btn' variant="dark">
                            사이즈 선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {products?.size.length > 0 &&
                                products.size.map((item) => (
                                    <Dropdown.Item href={`#/${item}`}>{item}</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="dark" className='add-button'>추가</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;