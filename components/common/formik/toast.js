import React from 'react'
import Toast from 'react-bootstrap/Toast';

function ToastComponent(props) {
    const { toast, toastClose } = props


    return (
        <>
            <div className='text-right fixed-top'>



                {
                    toast.map(items => (
                        <Toast
                            className="d-inline-block m-1"
                            bg={items?.bg}
                            show={items.show}
                            delay={2000}
                            key="Toast1"
                            onClose={() => toastClose(items.id)}
                            autohide
                        >
                            {/* <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header> */}
                            <Toast.Body className={'text-white'}>
                                {items.msg}
                            </Toast.Body>
                        </Toast>))
                }


            </div>

        </>
    )
}

export default ToastComponent