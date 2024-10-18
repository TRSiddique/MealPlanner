import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import underweightImg from "C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/assets/underweight.png";
import healthyImg from "C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/assets/healthy.png";
import overweightImg from "C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/assets/overweight.png";

function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [imgSrc, setImgSrc] = useState(null);

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      const calculatedBmi = (weight / (height * height)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 25) {
        setMessage(
          "Your BMI indicates that you may be underweight for your height. Its essential to ensure youre getting enough nutrients and calories to support your health. Consider speaking with a healthcare professional for personalized advice on achieving a healthy weight"
        );
        setImgSrc(underweightImg);
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setMessage(
          "Your BMI indicates a healthy weight for your height, suggesting that you are taking good care of your body. Keep up the balanced lifestyle!"
        );
        setImgSrc(healthyImg);
      } else {
        setMessage(
          "Your BMI suggests that you may be carrying excess weight for your height, which could potentially impact your health. Its essential to consider making healthy lifestyle choices, such as eating a balanced diet and incorporating regular physical activity, to support your well-being. Consulting with a healthcare professional can provide personalized guidance on achieving a healthier weight"
        );
        setImgSrc(overweightImg);
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <Container className="mt-4">
        <h2 className="text-center mb-4">BMI Calculator</h2>
        <Form onSubmit={calcBmi}>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="weight">
                <Form.Label>
                  <strong>Weight (Kg)</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="height">
                <Form.Label>
                  <strong>Height (M)</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button
                variant="outline-secondary"
                type="submit"
                className="mr-2 bg-primary py-2 text-white font-bold"
              >
                Submit
              </Button>

              <Button variant="outline-secondary" onClick={reload}>
                Reload
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="justify-content-center mt-4">
          <Col md={6} className="text-center">
            {bmi && (
              <>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
              </>
            )}
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            {imgSrc && (
              <img src={imgSrc} alt="BMI Status" className="img-fluid" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BMI;
