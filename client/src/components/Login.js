import React, { useState } from "react"
import logo from "../assets/citizenB.png";
import emailpic from "../assets/email.jpg";
import pass from "../assets/pass.png";
import "../styles/Login.css"
import NavBar from "./NavBar"
import { Button, Modal } from "react-bootstrap";
// import Footer from "./Footer"
import { Link, useNavigate } from "react-router-dom"

//<a style={{ color: "#821a1b"}}>!</a>

const Login = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleCloseModal = () => setShowModal(false);
  	const handleShowModal = () => setShowModal(true);

    const loginUser = async (event) => {
        event.preventDefault()

        // Check for incomplete sign-up
		if (
			!email ||
			!password
		  ) {
			handleShowModal();
			return;
		  }

        const response = await fetch("https://citizens-032f6032f3a1.herokuapp.com/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data)

        if (data.user) {
            localStorage.setItem("token", data.user);
            navigate("/dashboard"); // Redirect to the profile page on successful login
        } 
        else {
			handleShowModal();
			return;
		}
    }


    return (
        <div>
        <NavBar/>
            <div className="main">
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={logo} alt="profile" className="profile" />

                            </div>
                        </div>
                        <form>
                        
                            <h1 className="card-title">Welcome back</h1>
                            <div>
                                <img src={emailpic} alt="email" className="email" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="name"
                                    required={true}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="name"
                                    required={true}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="login-button">
                            <Button variant="primary" type="submit" onClick={loginUser} style={{ width: "100%", backgroundColor: "#821a1b", border: "0px",  borderRadius: "10px", fontSize: "20px"}}>
                                Log In
                            </Button>
                            </div>

                            <div className="link">
                                <p className="forgot"><a href="#">Forgot Password</a></p>
                                <p>New to Citizens?</p>
                                <Link to="/register"><p className="signup">Sign Up</p></Link>
                            </div>
                        </form>

                        {/* Modal */}
						<Modal show={showModal} onHide={handleCloseModal} centered // Center the modal vertically
                        className="modal-dialog-responsive">
						<Modal.Header closeButton>
						  <Modal.Title>Unauthorized</Modal.Title>
						</Modal.Header>
						<Modal.Body>
						  Please correctly fill out all credentials.
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

export default Login