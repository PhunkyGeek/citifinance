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
      text: 'Profile',
      link: '/profile'
    },
    {
      text: 'Dashboard',
      link: '/dashboard'
    },
    {
      text: 'Transfer',
      link: '/transfer'
    },
    {
      text: 'Fixed Deposit',
      link: '/fixeddeposit'
    },
    {
      text: 'Transaction History',
      link: '/transactions'
    },
    {
      text: 'Logout',
      link: '/login'
    },
  ];

  const logo = {
    text: 'Citizen Bank',
    link: '/',
  };

  const style = {
    barStyles: {
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
