import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../styles/FD.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import { Modal } from "react-bootstrap";
// import Footer from "./Footer";

//import SmallHead from './Components/smallHead'

const FD = () => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState()
    const [time, setTime] = useState()

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
  	const handleShowModal = () => setShowModal(true);

      const fdPay = () => {
        handleShowModal();
        setTimeout(() => {
            navigate("/kycupgrade");
          }, 8000);
    }

    const createFD = async(event) => {
        event.preventDefault()
        const req = await fetch("https://citizens-032f6032f3a1.herokuapp.com/api/fd", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                amount: amount,
                time: time,
            })
        })

        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            navigate('/confirmation')
        }
    }


    return (
        <div>
            <NavBarLoggedIn />
            <div className="bghfd">
                <h1 className="deposit-heading">High Interest Deposit</h1>
                <div className="leftc">
                    <h3 className="deposit-title">Deposit Fixed Funds</h3>
                    <>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>$ Amount</InputGroup.Text>
                            <FormControl 
                                aria-label="Amount (to the nearest Rupee)"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Time</InputGroup.Text>
                            <FormControl 
                                aria-label="Time (to the nearest year)"
                                value={time}
                                onChange={(e) => setTime(e.target.value)} />
                            <InputGroup.Text>years</InputGroup.Text>
                        </InputGroup>

                        <Button className="mt-3" variant="primary" size="lg" onClick={fdPay} style={{
                            width: "100%",
                            border: "0px",
                            backgroundColor: "#821a1b",
                          }}>Pay</Button>
                    </>
                </div>
                <div className="rightc">
                    <img src="https://cdn.pixabay.com/photo/2015/11/17/02/18/hourglass-1046841_1280.png" alt="" />
                </div>
            </div>
            <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
            {/* Modal */}
						<Modal show={showModal} onHide={handleCloseModal} centered // Center the modal vertically
						className="modal-dialog-responsive">
						<Modal.Header closeButton>
						  <Modal.Title>Restricted</Modal.Title>
						</Modal.Header>
						<Modal.Body>
						  Kindly complete your KYC Upgrade to access this service.
						</Modal.Body>
						<Modal.Footer>
						  <Button variant="primary" onClick={handleCloseModal} style={{ backgroundColor: "#821a1b" }}>
							OK
						  </Button>
						</Modal.Footer>
					  </Modal>
        </div>
    );
};

export default FD;