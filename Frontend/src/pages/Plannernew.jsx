import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header"
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/1.jpeg'
// Importing images from your local folder (add your own images here)
import meal1 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti.png';
import meal2 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vd 1.jpg';
import meal3 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vd2.png';
import meal4 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic1.jpg';
import meal5 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/egg1.jpg';
import meal6 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vd3.png';
import meal7 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti2.jpg';
import meal8 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vd4.jpg';
import meal9 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vege1.jpg';
import meal10 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti4.jpg';
import meal11 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/shak1.jpg';
import meal12 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vd5.jpg';
import meal13 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti3.jpeg';
import meal14 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/shak2.jpg';
import meal15 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vege2.jpg';
import meal16 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic2.jpg';
import meal17 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/dal1.jpg';
import meal18 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/vd6.png';
import meal19 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti5.jpg';
import meal20 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/egg2.jpg';
import meal21 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef1.jpg';
import meal22 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic3.jpg';
import meal23 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/chiken2.jpg';
import meal24 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef3.jpeg';
import meal25 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti6.jpg';
import meal26 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/shak2.jpg';
import meal27 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef4.jpg';
import meal28 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic4.jpg';
import meal29 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/egg4.jpg';
import meal30 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef5.jpg';
import meal31 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti2.jpg';
import meal32 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/chiken1.jpg';
import meal33 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef6.jpg';
import meal34 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic2.jpg';
import meal35 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/egg4.jpg';
import meal36 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef6.jpg';
import meal37 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti4.jpg';
import meal38 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/chiken2.jpg';
import meal39 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/fish2.jpg';
import meal40 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic1.jpg';
import meal41 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/shak2.jpg';
import meal42 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef1.jpg';
import meal43 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti5.jpg';
import meal44 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/egg4.jpg';
import meal45 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef7.jpg';
import meal46 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic2.jpg';
import meal47 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/chicken3.jpg';
import meal48 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef1.jpg';
import meal49 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/ruti7.jpg';
import meal50 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/shak3.jpg';
import meal51 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/beef8.jpg';
import meal52 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/kic4.jpg';
import meal53 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/egg5.jpg';
import meal54 from 'C:/Users/USER/OneDrive/Desktop/DBMS Project/Meal Planner 10/Frontend/src/images/fish2.jpg';


const plannernew = () => {
  const [targetCalories, setTargetCalories] = useState('');
  const [timeFrame, setTimeFrame] = useState('day');
  const [diet, setDiet] = useState('Vegetarian');
  const [price, setPrice] = useState('300');
  const [showMeals, setShowMeals] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowMeals(true);
  };

  // Array of images for each meal plan based on diet and price
  const mealData = {
    Vegetarian: {
      300: [
        { image: meal1, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal2, title: 'Lunch ', description: 'Description: Rice-1 plate, vegetable-1 boul, salad' },
        { image: meal3, title: 'Dinner', description: 'Description: Rice-1 plate, vegetable-1 boul, salad' },
        { image: meal4, title: 'Breakfast (Optional)', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal5, title: 'Lunch (Optional)', description:'Description:Egg-1 piece,Rice-1 plate', optional: true},
        { image: meal6, title: 'Dinner (Optional)', description: 'Description: Rice-1 plate, vegetable-1 boul, salad', optional: true },
      ],
      600: [
        { image: meal7, title: 'Breakfast', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal8, title: 'Lunch', description: 'Description: Rice-1 plate, vegetable-1 boul, salad' },
        { image: meal9, title: 'Dinner ', description: 'Light premium vegetarian dinner' },
        { image: meal10, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity', optional: true },
        { image: meal11, title: 'Lunch ', description: 'Description: Rice-1 plate, vegetable-1 boul, salad', optional: true },
        { image: meal12, title: 'Dinner', description: 'Premium vegetarian salad', optional: true },
      ],
      1000: [
        { image: meal13, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal14, title: 'Lunch ', description: 'Description: Rice-1 plate, vegetable-1 boul, salad' },
        { image: meal15, title: 'Dinner', description: 'Exquisite vegetarian dinner' },
        { image: meal16, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal17, title: 'Lunch ', description: 'Luxurious vegetarian smoothie', optional: true },
        { image: meal18, title: 'Dinner', description: 'Description: Rice-1 plate, vegetable-1 boul, salad', optional: true },
      ]
    },
    Keto: {
      300: [
        { image: meal19, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal20, title: 'Lunch ', description: 'Description:Egg-1 piece,Rice-1 plate' },
        { image: meal21, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad' },
        { image: meal22, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal23, title: 'Lunch ', description: 'Description: Rice-1 plate, Chiken 1 piece, salad', optional: true },
        { image: meal24, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad', optional: true },
      ],
      600: [
        { image: meal25, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal26, title: 'Lunch ', description: 'Description: Rice-1 plate, vegetable-1 boul, salad' },
        { image: meal27, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad' },
        { image: meal28, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal29, title: 'Lunch ', description: 'Description:Egg-1 piece,Rice-1 plate', optional: true },
        { image: meal30, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad', optional: true },
      ],
      1000: [
        { image: meal31, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal32, title: 'Lunch ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece' },
        { image: meal33, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad' },
        { image: meal34, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal35, title: 'Lunch ', description: 'Description:Egg-1 piece,Rice-1 plate', optional: true },
        { image: meal36, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad', optional: true },
      ]
    },
    Vegan: {
      300: [
        { image: meal37, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal38, title: 'Lunch ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece' },
        { image: meal39, title: 'Dinner', description: 'Light vegan dinner' },
        { image: meal40, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal41, title: 'Lunch ', description: 'Description: Rice-1 plate, vegetable-1 boul, salad', optional: true },
        { image: meal42, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad', optional: true },
      ],
      600: [
        { image: meal43, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal44, title: 'Lunch ', description: 'Description:Egg-1 piece,Rice-1 plate' },
        { image: meal45, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad' },
        { image: meal46, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal47, title: 'Lunch ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal48, title: 'Dinner', description: 'Premium vegan salad', optional: true },
      ],
      1000: [
        { image: meal49, title: 'Breakfast ', description: 'Description: Bread-3 pieces, Dal- As per quantity' },
        { image: meal50, title: 'Lunch ', description: 'Description: Rice-1 plate, vegetable-1 boul, salad' },
        { image: meal51, title: 'Dinner', description: 'Description: Rice-1 plate,Beef-5 piece, salad' },
        { image: meal52, title: 'Breakfast ', description: 'Description: kichuri-1 plate, Salad, egg-1 piece', optional: true },
        { image: meal53, title: 'Lunch ', description: 'Description:Egg-1 piece,Rice-1 plate', optional: true },
        { image: meal54, title: 'Dinner', description: 'Luxurious vegan salad', optional: true },
      ]
    }
  };

  const dayNames = ["Saturday", "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Render meal cards based on selected time frame, diet, and price 
  const renderMealCards = () => {
    const selectedMeals = mealData[diet][price]; // Get the meals for the selected diet and price
    const mealCount = timeFrame === 'day' ? 6 : 21;
    const dayCards = [];

    for (let i = 0; i < mealCount; i++) {
      const meal = selectedMeals[i % 6]; // Cycle through the 6 meals for weekly plans

      if (timeFrame === 'week' && i % 3 === 0) {
        // For weekly plan, add a header every 3 meals
        dayCards.push(
          <Col key={`day-${i}`} xs={12}>
            <h3>{dayNames[Math.floor(i / 3)]}</h3>
          </Col>
        );
      }

      dayCards.push(
        <Col key={i} xs={12} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={meal.image} alt={meal.title}   style={{ width: '450px', height: '350px', objectFit: 'cover' }}/>
            <Card.Body>
              <Card.Title>{meal.title}</Card.Title>
              <Card.Text>
                {meal.description} <br />
                Target Calories: {targetCalories} <br />
                Diet: {diet} <br />
                Price Range: {price/3} <br />
                {meal.optional && <span style={{ color: 'red' }}>Optional</span>}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    }

    return dayCards;
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center ">
      <h2 className="my-4 text-4xl font-extrabold">Meal Planner</h2>
      <Form onSubmit={handleFormSubmit} className="w-50">
        <Form.Group controlId="targetCalories" className="mb-3">
          <Form.Label>  <h3 className=" font-normal">Target Calories</h3></Form.Label>
          <Form.Control
          
            type="number"
            placeholder="Enter target calories"
            value={targetCalories}
            onChange={(e) => setTargetCalories(e.target.value)}
            required
          />
          
        </Form.Group>

        <Form.Group controlId="timeFrame" className="mb-3">
          <Form.Label><h3 className=" font-normal">Time Frame</h3></Form.Label>
          <Form.Control
            as="select"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            required
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="diet" className="mb-3">
          <Form.Label> <h3 className=" font-normal">Diet</h3></Form.Label>
          <Form.Control
            as="select"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            required
          >
            <option value="Vegetarian">Vegetarian</option>
            <option value="Keto">Keto diet</option>
            <option value="Vegan">Vegan</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="price" className="mb-3">
          <Form.Label><h3 className=" font-normal">Price</h3></Form.Label>
          <Form.Control
            as="select"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          >
            <option value="300">300</option>
            <option value="600">600</option>
            <option value="1000">1000</option>
          </Form.Control>
        </Form.Group>

        {/* <Button variant="primary" type="submit" className="w-100">
          Generate Meal Plan
        </Button> */}
        <Button type="submit"  className="w-50 items-center "  style={{ backgroundColor: '#28a745', color: 'white',borderRadius: '30px', border: 'none' }}
>
  Generate Meal Plan
</Button>

      </Form>

      {showMeals && (
        <Row className="mt-4">
          {renderMealCards()}
        </Row>
      )}
    </Container>
  );
};



export default plannernew;
