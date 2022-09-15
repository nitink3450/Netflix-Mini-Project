import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

function LogIn() {
  const [show, setShow] = useState(false);
  const [isLogggedIn, setIsLogggedIn] = useState(false);
  const [Name, setName] = useState('');

  const handleClose = () => {
    setShow(false);

  };

  const handleClose1 = () => {
    setShow(false);
    setIsLogggedIn(!isLogggedIn)
    if (Name == '' || Name == null) {
      alert('Add Proper Full Name..');
      setIsLogggedIn(false);
    }
  };

  const handleShow = () => {
    if (isLogggedIn == true) {
      setIsLogggedIn(false)
    }
    else {
      setShow(true)
    }

  };
  return (
    <>
      <h4>
        <Badge className="mt-2 pt-2 " bg="dark" text="light">
          {isLogggedIn ? `Hello ${Name}` : 'Please Login into Your Account'}
        </Badge>
      </h4>
      <Button variant="outline-info mx-2" onClick={handleShow}>
        {isLogggedIn ? 'LogOut' : 'LogIn'}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form name="Form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus required
                name="email"
              />
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Full Name"
                autoFocus required
                name="text"
                onChange={(e) => { setName(e.target.value) }}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Enter Password"
                autoFocus required
                name="password"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LogIn;
