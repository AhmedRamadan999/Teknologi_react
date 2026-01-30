import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        e.target.reset();
    };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      

    
      <Form.Group className="mb-3" controlId="Text">
        <Form.Label>Leave us a message</Form.Label>
        <Form.Control type="textarea" placeholder="Text" />
      </Form.Group>

      <Button variant="primary" type="submit " >
        Submit
      </Button>
    </Form>
  );
}


export default Contact;
