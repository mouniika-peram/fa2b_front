import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteConfirmation(props){
    const { showModal, hideModal, confirmModal, id, message, custom_cancel_msg,custom_delete_msg } = props
    
    return (
      
            <Modal show={showModal} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
                <Modal.Footer>
                    <Button variant="default" onClick={hideModal}>
                    {custom_cancel_msg ? custom_cancel_msg :"Cancel"}
                    </Button>
                    <Button variant="danger" onClick={() => confirmModal(id)}>
                    
                    {custom_delete_msg ? custom_delete_msg : "Delete"}

                    </Button>
                </Modal.Footer>
            </Modal>


           
       



    )
}


export default DeleteConfirmation