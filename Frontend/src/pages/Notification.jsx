import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Notification() {
  const [notification, setNotification] = useState({
    show: true,
    variant: 'danger',
    heading: 'Hey, nice to see you!',
    message: 'Welcome to our website! Check out our latest updates.',
    link: '/updates' // Assuming you have a route to handle '/updates'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({
        show: true,
        variant: 'success',
        heading: 'New Feature!',
        message: 'Try our new meal planning tool today.',
        link: '/meal-planning'
      });
    }, 2000);

    const secondTimer = setTimeout(() => {
      setNotification({
        show: true,
        variant: 'info',
        heading: 'Weekly Recipe Picks!',
        message: 'Discover this week’s top recipes for healthy eating.',
        link: '/recipes'
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <>
      {notification.show && (
        <Alert variant={notification.variant} onClose={() => setNotification(prev => ({ ...prev, show: false }))} dismissible>
          <Alert.Heading>{notification.heading}</Alert.Heading>
          <p>
            {notification.message} <NavLink to={notification.link}>Click here</NavLink>
          </p>
        </Alert>
      )}
    </>
  );
}

export default Notification;
