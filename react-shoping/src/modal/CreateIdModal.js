import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CreateIdModal = (props) => {
    const [createEmail, setCreateEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (createEmail && createPassword) {
            userCountCheck();
        }
    }

    const userCountCheck = async () => {
        try {
            let url = `http://localhost:8000/users`;
            let response = await fetch(url);
            let data = await response.json();

            createUser(data.length + 1);
        } catch {
            
        }
    }

    const createUser = async (id) => {
        let userData = { email: createEmail, password: createPassword, id : id };
        let url = `http://localhost:8000/register`;
        
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            };

            const response = await fetch(url, config);
            const data = await response.json();

            setCookie('accessToken', data['accessToken'], { path: '/' })
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className='modal_header'>
                    <h4>멤버십 가입하기</h4>
                    <FontAwesomeIcon icon={faXmark} size="2x" onClick={props.onHide} />
                </div>
                <div className='modal_header_text'>다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</div>
                <hr />
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일<span className=''>*</span></Form.Label>
                        <Form.Control type="email" vlaue={createEmail}
                            onChange={(e) => setCreateEmail(e.target.value)}
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호 설정하기<span>*</span></Form.Label>
                        <Form.Control type="password" vlaue={createPassword}
                            onChange={(e) => setCreatePassword(e.target.value)}
                            placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='modal_create_btn'>회원가입 하기</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateIdModal;