// import React from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "../styles/FooterStyles.js";

// const Footer = () => {
// return (
// 	<Box>
// 	<h1 style={{ color: "white",
// 				textAlign: "center",
// 				marginTop: "-30px",
//                 marginBottom: "65px" }}>
// 		Citizen Bank: Today Tomorrow Together
// 	</h1>
// 	<Container style={{ display: 'flex', justifyContent: 'center' }}>
// 		<Row>
// 		<Column>
// 			<Heading>About Us</Heading>
// 			<FooterLink href="#">Aim</FooterLink>
// 			<FooterLink href="#">Vision</FooterLink>
// 			<FooterLink href="#">Testimonials</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Services</Heading>
// 			<FooterLink href="#">Loans</FooterLink>
// 			<FooterLink href="#">Online Transfers</FooterLink>
// 			<FooterLink href="#">Deposits</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">+14025450766</FooterLink>
// 			<FooterLink href="#">info@citizenbank.com</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Legal Disclosure</Heading>
// 			<p style={{ color: '#821a1b' }}>Member FDIC. Bank Deposits FDIC Insured</p>
// 		</Column>
// 		</Row>
// 	</Container>
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '-60px' }}>
// 	<h6 style={{ color: 'white' }}>601 Lexington Avenue, 153 E 53rd ST, New York, NY 10022</h6>
//     </div>
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px', marginBottom: '10px' }}>
//       <h6 style={{ color: 'white' }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
//     </div>
// 	</Box>
// );
// };
// export default Footer;

import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../styles/FooterStyles.js";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "-30px",
          marginBottom: "65px",
        }}
      >
        Citizen Bank: Today Tomorrow Together
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Loans</FooterLink>
            <FooterLink href="#">Online Transfers</FooterLink>
            <FooterLink href="#">Deposits</FooterLink>
          </Column>
        
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">+14025450766</FooterLink>
            <FooterLink href="#">info@citizenbank.com</FooterLink>
          </Column>
          <Column>
            <Heading>Legal Disclosure</Heading>
            <p style={{ color: "#821a1b", maxWidth: "180px" }}>
              Member FDIC. Bank Deposits FDIC Insured
            </p>
          </Column>
        </Row>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "10px",
		  marginLeft: "10px",
		  marginRight: "10px",
        }}
      >
        <h6 className="addy" style={{ color: "white" }}>
          601 Lexington Avenue, 153 E 53rd ST, New York.
        </h6>
        <h6 style={{ color: "white", marginTop: "10px" }}>
          Copyright © 2023 Citizen Bank, All rights reserved.
        </h6>
      </div>
    </Box>
  );
};

export default Footer;
