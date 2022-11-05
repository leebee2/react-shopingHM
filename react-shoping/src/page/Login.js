import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CreateIdModal from '../modal/CreateIdModal';

const Login = ({ setAuthen }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //값 여부 체크
        if (!(!userEmail || !userPassword)) {
            setAuthen(true);
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