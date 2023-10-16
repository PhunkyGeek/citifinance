import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'responsive-navbar-react';
import 'responsive-navbar-react/dist/index.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    navigate(link);
  };

  const items = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Register',
      link: '/register',
    },
    {
      text: 'Login',
      link: '/login',
    },
    {
      text: 'Security',
      link: '/login',
    },
  ];

  const logo = {
    text: 'Citizen Bank',
    link: '/',
  };

  
  const style = {
    barStyles: {
      position: 'fixed', // Make the navbar sticky
      top: 0, // Stick to the top of the screen
      left: 0, // Stick to the left of the screen
      width: '100%', // Set the width to 100% to cover the full width of the screen
      zIndex: 1000, // Set a higher z-index value to ensure it stays on top
      background: '#821a1b',
      fontSize: '15px',
      paddingRight: '20px',
      paddingLeft: '20px',
      fontFamily: "'Lato', sans-serif",
    },
    sidebarStyles: {
      background: '#222',
      buttonColor: 'white',
    },
  };

  // Custom navigation function
  const handleItemClick = (link) => () => {
    console.log('Navigating to:', link);
    handleNavigation(link);
  };

  // Add the custom handler to each item as buttons
  const menuItems = items.map((item) => ({
    ...item,
    onClick: handleItemClick(item.link),
    type: 'button', // Set type to 'button' to render buttons instead of links
  }));

  // Add the custom handler to the logo as a button
  const logoWithClickHandler = {
    ...logo,
    onClick: handleItemClick(logo.link),
    type: 'button', // Set type to 'button' to render button instead of link
  };

  return <Navbar items={menuItems} logo={logoWithClickHandler} style={style} />;
};

export default NavBar;
