import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setLogin("logOut");
  };
  const handleShow = () => setShow(true);

  const [nameL, setName] = useState("");

  const [login, setLogin] = useState("Login");
  return (
    <>
      <h4>
        <Badge className="mt-2 pt-2 " bg="dark" text="light">
          ⭐{nameL}✔
        </Badge>
      </h4>
      <Button variant="outline-info mx-2" onClick={handleShow}>
        {login}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter Your Full Name"
                autoFocus
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" Enter Password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
