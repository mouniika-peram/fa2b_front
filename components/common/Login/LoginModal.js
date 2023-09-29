import { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";

import LoginForm from "./LoginForm";

import SignupForm from "./SignupForm";


import LoadButton from "../formik/loadButton";




function LoginModal(props) {

    const { classextra, bname } = props


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return (
        <>

            <LoadButton type="button" variant="" className={classextra} bname={bname} onClick={() => setShow(true)} />



            <div onClick={e => e.stopPropagation()}>
                {/* https://github.com/react-bootstrap/react-bootstrap/issues/3105 --> why above line we have written because of  model inside  checkbox event is not triggering because of navbar(parent)  */}
                <Modal size="sm" className="text-capitalize" show={show} onHide={handleClose}  >

                    <Modal.Header closeButton className='border border-0  pb-0'>

                    </Modal.Header>

                    <Modal.Body className=''>
           



                        <Tab.Container defaultActiveKey="login">

                            <Nav variant="pills" className="flex-column" defaultActiveKey="login">
                                <div className="row">
                                    <Col>
                                        <Nav.Item>
                                            <Nav.Link className='login_btn text-center' eventKey="login">Login</Nav.Link>
                                        </Nav.Item>
                                    </Col>
                                    <Col>

                                        <Nav.Item>
                                            <Nav.Link className='signup_btn text-center' eventKey="signup">Signup</Nav.Link>
                                        </Nav.Item>

                                    </Col>
                                </div>

                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="login">
                                    <LoginForm />
                                    {/* <ForgotPasswordModal /> */}

                                </Tab.Pane>

                                <Tab.Pane eventKey="signup">
                                    <SignupForm />
                                </Tab.Pane>



                            </Tab.Content>

                        </Tab.Container>



                    </Modal.Body>


                </Modal>
            </div>
        </>
    );


}


export default (LoginModal);
