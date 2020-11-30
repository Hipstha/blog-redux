import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { createNewPost, updatePostAction, updatePostActionModal, hideModalAction } from '../../redux/actions/PostActions';

import './ModalPost.scss';

const ModalPost = () => {

  const dispatch = useDispatch();

  // state from redux to update
  let isPostToUpdate = useSelector(state => state.posts.isPostToUpdate);
  let postUpdate = useSelector(state => state.posts.postUpdate);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // form state to create
  const create = () => {
    dispatch( hideModalAction() );
    handleShow();
  }

  const closeModal = () => {
    dispatch( hideModalAction() );
    handleClose();
    setForm({
      id: 0,
      title: '',
      summary: '',
      category: 'Travel',
      img: 'https://source.unsplash.com/random',
      comments: []
    });
  }


  const [form, setForm] = useState({
    id: 0,
    title: '',
    summary: '',
    category: 'Travel',
    img: 'https://source.unsplash.com/random',
    comments: []
  });

  const getFormData = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submittedForm = (e) => {
    e.preventDefault();

    if (form.title === '' || form.summary === '' || form.category === '' || form.img === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'All fields are required'
      });
      return;
    }

    dispatch( createNewPost(form) );
    handleClose();
    setForm({
      id: 0,
      title: '',
      summary: '',
      category: 'Travel',
      img: 'https://source.unsplash.com/random',
      comments: []
    });
  };

  // Form state to update
  useEffect(() => {
    if(isPostToUpdate) {
      setForm(postUpdate);
      handleShow();
    }
  }, [isPostToUpdate]);

  const updateForm = (e) => {
    e.preventDefault();
    dispatch( updatePostAction(form) );
    handleClose();
    setForm({
      id: 0,
      title: '',
      summary: '',
      category: 'Travel',
      img: 'https://source.unsplash.com/random',
      comments: []
    });
  }
  



  return (
    <>
      <button type="button" className="btn btn-modal" onClick={create}>
        <span className="material-icons">edit</span>
      </button>

      <Modal show={show} onHide={closeModal}>

        <Modal.Header>
          <Modal.Title>
            { isPostToUpdate ? <h5>Update</h5> : <h5>Create Post</h5> }
            
          </Modal.Title>
        </Modal.Header>

        <Form> 
          <Modal.Body>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control name="title" 
                            type="text" 
                            placeholder="Title" 
                            value={form.title}
                            onChange={getFormData}
              />
            </Form.Group>

            <Form.Group controlId="exmapleForm.ControlTextarea1">
              <Form.Control name="summary" 
                            as="textarea" 
                              rows={1} 
                              placeholder="Description"
                              value={form.summary}
                              onChange={getFormData} 
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control onChange={getFormData} 
                            name="category" 
                            as="select"
              >
                <option value="Travel">Travel</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
                <option value="Food">Food</option>
                <option value="Work">Work</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control name="img" 
                            type="text" 
                            placeholder="image url" 
                            value="https://source.unsplash.com/random" 
                            value={form.img}
                            onChange={getFormData}
              />
            </Form.Group>

            <Modal.Footer>
              
              <Button variant="Light" 
                      onClick={closeModal}
              >
                Close
              </Button>

              { isPostToUpdate ? 
                (
                  <Button variant="default" 
                          type="button" 
                          className="btn-submit"
                          onClick={updateForm}
                  >
                    Update Post
                  </Button>
                ) : 
                (
                  <Button variant="default" 
                          type="button" 
                          className="btn-submit"
                          onClick={submittedForm}
                  >
                    Create Post
                  </Button>
                ) 
              }
            </Modal.Footer>

          </Modal.Body>
        </Form>
      </Modal>
    </>
  )
};

export default ModalPost;