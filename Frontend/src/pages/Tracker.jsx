import React, { useState } from "react";
import { Container, Form, Button, Table, Row, Col } from "react-bootstrap";

function Tracker() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [proteins, setProteins] = useState("");
  const [entries, setEntries] = useState([
    { id: 1, food: "Apple", calories: 95, proteins: 0.5 },
    { id: 2, food: "Orange", calories: 150, proteins: 1.5 },
    { id: 3, food: "Chicken Breast", calories: 200, proteins: 30 },
    { id: 4, food: "Salmon", calories: 250, proteins: 25 },
    { id: 5, food: "Banana", calories: 105, proteins: 1.3 },
    {id: 6,  food: "Broccoli",calories: 55, proteins: 4.2 },
    
    {
      id: 7,
      food: "Egg (boiled)",
      calories: 70,
      proteins: 6
    },
    {
      id: 8,
      food: "Greek Yogurt",
      calories: 120,
      proteins: 10
    },
    {
      id: 9,
      food: "Spinach",
      calories: 23,
      proteins: 2.9
    },
    {
      id: 10,
      food: "Quinoa",
      calories: 120,
      proteins: 4.1
    },
    {
      id: 11,
      food: "Almonds",
      calories: 160,
      proteins: 6
    },
    {
      id: 12,
      food: "Oatmeal",
      calories: 150,
      proteins: 6
    },
    {
      id: 13,
      food: "Tuna (canned)",
      calories: 120,
      proteins: 26
    },
    {
      id: 14,
      food: "Cottage Cheese",
      calories: 120,
      proteins: 14
    },
    {
      id: 15,
      food: "Brown Rice",
      calories: 216,
      proteins: 5
    },
    {
      id: 16,
      food: "Biryani",
      calories: 480,
      proteins: 16
    },
    {
      id: 17,
      food: "Panta Bhat",
      calories: 100,
      proteins: 2
    },
    {
      id: 18,
      food: "Hilsha Fish Curry",
      calories: 250,
      proteins: 20
    },
    {
      id: 19,
      food: "Chingri Malai Curry",
      calories: 300,
      proteins: 18
    },
    {
      id: 20,
      food: "Pitha",
      calories: 200,
      proteins: 4
    }
    
   
 
    
    
    // Add more predefined entries here...
  ]);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      food,
      calories,
      proteins,
      id: entries.length + 1,
    };
    setEntries([...entries, newEntry]);
    setFood("");
    setCalories("");
    setProteins("");
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredEntries = entries.filter((entry) =>
    entry.food.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-1">
      <h1>Nutrition Tracker</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mt-4">
          <Col>
            <Form.Group controlId="formFoodName">
              <Form.Label><strong>Food Name</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter food name"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCalories">
              <Form.Label><strong>Calories</strong></Form.Label>
              <Form.Control
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formProteins">
              <Form.Label><strong>Proteins (gm/kg)</strong></Form.Label>
              <Form.Control
                type="number"
                placeholder="Proteins"
                value={proteins}
                onChange={(e) => setProteins(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3} className="align-self-end ">
            <Button variant="primary" type="submit ">
              Add Entry
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="mt-4">
        <Col md={4}>
        <Form.Label style={{ backgroundColor: "lightgreen", padding: "5px" }}>
  <strong>Track your desired food</strong>
</Form.Label>

          <Form.Control
            type="text"
            placeholder="Search by food name"
            value={search}
            onChange={handleSearchChange}
          />
        </Col>
      </Row>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Proteins (gm/kg)</th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.food}</td>
              <td>{entry.calories}</td>
              <td>{entry.proteins}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Tracker;
