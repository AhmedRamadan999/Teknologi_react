import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
function About() {
   const [open, setOpen] = useState(false);
  return (
    <div className="about-wrap">
      <Card
        className="about-card"
        onClick={() => setOpen(!open)}
        style={{ width: "30rem" }}
      >
        <Card.Img
          variant="top"
          src="https://www.biographic.com/wp-content/uploads/2021/05/Big_Picture_2021_homepage.jpg"
        />
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            This website is a course project and will be evaluated be my
            professor
          </Card.Text>

          {open && (
            <Card.Text>
              <p className="card-text">
                I'll leave introducing myself for later; this is just a test to
                show my skills.
              </p>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
