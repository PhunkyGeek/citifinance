import React from "react"
import { useState } from "react"
import NavBar from './NavBar';
// import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/citizenB.png";
import "../styles/registerStyles.css";
import DatePicker from "react-datepicker"; // Import the DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import the DatePicker styles

const EmailExistsModal = ({ show, handleClose }) => {
	return (
	  <Modal show={show} onHide={handleClose}>
		<Modal.Header closeButton>
		  <Modal.Title>Warning</Modal.Title>
		</Modal.Header>
		<Modal.Body>
		  The email you provided is already registered. Please use a different
		  email or <a href="/login">login</a> with your existing account.
		</Modal.Body>
		<Modal.Footer>
		  <Button
			variant="primary"
			onClick={handleClose}
			style={{ backgroundColor: "#821a1b" }}
		  >
			OK
		  </Button>
		</Modal.Footer>
	  </Modal>
	);
  };


const Register = () => {
	const navigate = useNavigate()

	const [showModal, setShowModal] = useState(false);
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')
	const [address, setAddress] = useState('')
	const [contact, setContact] = useState('')
	const [ssn, setSsn] = useState('')
	const [id, setId] = useState('')
	const [backId, setBackId] = useState('')
	const [city, setCity] = useState('')
	const [region, setRegion] = useState('')
	const [zip, setZip] = useState('')
	const [dob, setDob] = useState(null);

	const [emailExists, setEmailExists] = useState(false);

  const handleEmailExistsClose = () => {
    setEmailExists(false);
  };


	const handleCloseModal = () => setShowModal(false);
  	const handleShowModal = () => setShowModal(true);

	  const handleSsnChange = (e) => {
		// Remove any non-digit characters from the input
		const sanitizedValue = e.target.value.replace(/\D/g, '');
		// Limit the value to 9 digits
		const ssnValue = sanitizedValue.slice(0, 9);
		setSsn(ssnValue);
	  };


	const registerUser = async (event) => {
		event.preventDefault()

		// Check for incomplete sign-up
		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!id ||
			!ssn ||
			!address ||
			!contact ||
			!city ||
			!region ||
			!zip
		  ) {
			handleShowModal();
			return;
		  }

		// Password validation check
		if (password !== passwordConfirmation) {
			handleShowModal();
			return;
		  }

		const response = await fetch("https://citizens-032f6032f3a1.herokuapp.com/api/register", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				id: id,
				backId: backId,
				ssn: ssn,
				address: address,
				contact: contact,
				city: city,
				region: region,
				zip: zip,
			}),
		})

		const data = await response.json();
		console.log(data);

		if (data.emailExists) {
			setEmailExists(true);
			
			return;
		}

		if (data.status === 'ok') {
			navigate('/dashboard')
		}
		
	}

	return (
		<div>
		<NavBar/>
			
			<div style={{ color: "black", backgroundColor: "#e1e3eb", paddingTop: "60px", paddingBottom: "40px" }}>
			<div className="imgs">
                    <div className="container-image">
                        <img src={logo} alt="profile" className="profile" style={{ backgroundColor: "#e1e3eb", paddingTop: "50px", borderRadius: "0px", height: "180px", width: "230px" }}/>
                    </div>
                </div>

				{/* Modal */}
				<EmailExistsModal show={emailExists} handleClose={handleEmailExistsClose} />
				<div className="form-body container mt-5 mb-5">
					<h4 className="mb-5" style={{ textAlign: "center", marginTop: "-20px" }}>Get started with us today! By filling out the form given below</h4>
					<div className="form" style={{ width: "50%", margin: "auto" }}>
						<Form>
						<h1>Personal Details</h1>
							<Row className="mb-4">
								<Form.Group as={Col} controlId="formFirstName">
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="John"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formLastName">
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Doe"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										required
									/>
								</Form.Group>
							</Row>

							<Row className="mb-4">
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)} 
										required
										/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridAddress2">
								<Form.Label>Phone</Form.Label>
								<Form.Control 
									placeholder="Phone Number"
									value={contact}
									onChange={(e) => setContact(e.target.value)}
									required
								/>
							</Form.Group>
							</Row>

							<Form.Group as={Col} controlId="formGridDob">
							<Form.Label >Date of Birth</Form.Label>
							<br />
							<DatePicker
							  selected={dob}
							  onChange={(date) => setDob(date)}
							  placeholderText="Select Date of Birth"
							  peekNextMonth
							  showMonthDropdown
							  showYearDropdown
							  dropdownMode="select"
							  dateFormat="MM/dd/yyyy"
							  maxDate={new Date()} // Optional: To prevent future dates as the date of birth
							  isClearable // Optional: To enable clearing the selected date
							  className="form-dob" // Optional: To apply custom styles
							  required
							/>
							</Form.Group>

							<h1>For Official Use</h1>

							<Form.Group className="mb-4" controlId="formGridAddress1">
								<Form.Label>Address</Form.Label>
								<Form.Control 
									placeholder="1234 Main St"
									value={address}
									onChange={(e) => setAddress(e.target.value)} 
									required
								/>
							</Form.Group>

							<Row className="mb-4">
								<Form.Group as={Col} controlId="formGridCity">
									<Form.Label>City</Form.Label>
									<Form.Control 
										type="text"
										placeholder="Jackson"
										value={city}
										onChange={(e) => setCity(e.target.value)} 
										required
									/>
										
								</Form.Group>

								<Form.Group as={Col} controlId="formGridState">
									<Form.Label>State</Form.Label>
									<Form.Control 
										type="text"
										placeholder="Mississippi"
										value={region}
										onChange={(e) => setRegion(e.target.value)}
										required
										/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridZip">
									<Form.Label>Zip</Form.Label>
									<Form.Control 
										type="pin"
										placeholder="12345"
										value={zip}
										onChange={(e) => setZip(e.target.value)} 
										required
									/>
								</Form.Group>
							</Row>

							<Form.Group className="mb-4" controlId="formAadhar">
								<Form.Label>Social Security number (SSN)</Form.Label>
								<Form.Control 
									type="number" 
									placeholder="xxx-xx-xxxx"
									value={ssn}
									onChange={handleSsnChange} 
									required
								/>
							</Form.Group>

							<Form.Group className="mb-4" controlId="formDep">
								<Form.Label>ID Card (front)</Form.Label>
								<Form.Control
									type="file" 
									value={id}
									onChange={(e) => setId(e.target.value)}
									required 
								/>
							</Form.Group>

							<Form.Group className="mb-4" controlId="formDep">
								<Form.Label>ID Card (back)</Form.Label>
								<Form.Control
									type="file" 
									value={backId}
									onChange={(e) => setBackId(e.target.value)} 
									required
								/>
							</Form.Group>

							{/* <Form.Group controlId="formAadharCard" className="mb-3">
								<Form.Label>Aadhar copy</Form.Label>
								<Form.Control type="file" />
							</Form.Group> */}

							<Row style={{ marginBottom: "20px" }}>
							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)} 
									required
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPasswordConfirmation">
								<Form.Label>
								<i className="fas fa-lock" style={{ marginLeft: "5px", color: "#001" }}></i> </Form.Label>
								<Form.Control
									type="password"
									placeholder="Confirm Password"
									value={passwordConfirmation}
									onChange={(e) => setPasswordConfirmation(e.target.value)} 
									required
								/>
							</Form.Group>
							</Row>
							

							<Form.Group className="mb-4" id="formGridCheckbox">
								<Form.Check type="checkbox" label="Accept terms and conditions" style={{ fontSize: "15px" }}/>
							</Form.Group>

							<Button variant="primary" type="submit" onClick={registerUser} style={{ width: "100%", backgroundColor: "#821a1b", border: "0px",  borderRadius: "10px", fontSize: "20px"}}>
								Sign Up
                			</Button>

							<div className="loglink">
                                <p>Already a member?</p>
                                <Link to="/login"><p className="login">Log in</p></Link>
                            </div>
							
						</Form>

						{/* Modal */}
						<Modal show={showModal} onHide={handleCloseModal} centered // Center the modal vertically
						className="modal-dialog-responsive">
						<Modal.Header closeButton>
						  <Modal.Title>Warning</Modal.Title>
						</Modal.Header>
						<Modal.Body>
						  Please fill out all the required fields and make sure the passwords match.
						</Modal.Body>
						<Modal.Footer>
						  <Button variant="primary" onClick={handleCloseModal} style={{ backgroundColor: "#821a1b" }}>
							OK
						  </Button>
						</Modal.Footer>
					  </Modal>
					</div>
				</div>
			</div>
			<h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
		</div>


	);
}

export default Register