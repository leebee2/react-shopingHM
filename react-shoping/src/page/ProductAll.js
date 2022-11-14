import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    let dispatch = useDispatch();
    let [query, setQuery] = useSearchParams('');
    let productList = useSelector(state => state.product.productList);
    let error = useSelector(state => state.product.producList_ErrorMSG);

    useEffect(() => {
        getProduct();
    }, [query])

    const getProduct = () => {
        let keyword = query.get('q') || "";
        
        //미들웨어를 거쳐서 보내기
        dispatch(productAction.getProducts(error, keyword))
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