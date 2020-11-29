import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

import './ModalPost.scss';

const ModalPost = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn btn-modal" onClick={handleShow}>
        <span className="material-icons">edit</span>
      </button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header>
          <Modal.Title>
            <h5>Create post</h5>
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control name="title" type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group controlId="exmapleForm.ControlTextarea1">
              <Form.Control name="summary" as="textarea" rows={1} placeholder="Description" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control name="img" type="text" placeholder="image url" value="https://source.unsplash.com/random" />
            </Form.Group>

            <Modal.Footer>
              <Button variant="Light" onClick={handleClose} >Close</Button>
              <Button variant="default" className="btn-submit">Save Changes</Button>
            </Modal.Footer>

          </Modal.Body>
        </Form>
      </Modal>
    </>
  )
};

export default ModalPost;