import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    let products = useSelector((state) => state.product.productDetail);

    useEffect(() => {
        getProductDetail();
    }, [])

    const getProductDetail = async () => {
        dispatch(productAction.getProductDetail(id))
    }

    return (
        <Container>
            {products.id != undefined ?
                <Row>
                    <Col className='product-img'>
                        <img src={products.img} alt="product_img" />
                    </Col>
                    <Col>
                        <div>{products.title}</div>
                        <div>₩{products.price}</div>
                        {products.choice ? <div className='new-product'>Conscious choice</div> : <></>}
                        <Dropdown>
                            <Dropdown.Toggle className='dropdown-btn' variant="dark">
                                사이즈 선택
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {products.size?.length > 0 ?
                                    products.size.map((item, index) => (
                                        <Dropdown.Item href={`#/${item}`} key={index}>{item}</Dropdown.Item>
                                    )) : <></>}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="dark" className='add-button'>추가</Button>
                    </Col>
                </Row>
                : <></>}
        </Container>
    );
};

export default ProductDetail;