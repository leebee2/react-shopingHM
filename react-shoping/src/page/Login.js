import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';
import CreateIdModal from '../modal/CreateIdModal';

const Login = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    let [userEmail, setUserEmail] = useState('');
    let [userPassword, setUserPassword] = useState('');
    let [modalShow, setModalShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(!userEmail || !userPassword)) {
            dispatch(authenticateAction.login(userEmail, userPassword))
            nav('/');
        }
    }

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    로그인
                </Button>
                <Button variant="success" type="button" onClick={() => setModalShow(true)} className='create_btn'>
                    회원 가입하기
                </Button>
            </Form>
            <CreateIdModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
};

export default Login;