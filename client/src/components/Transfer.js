// import React from "react";
// import "../styles/Transfer.css";
// import {useState} from "react"
// import {useNavigate} from "react-router-dom"
// import { InputGroup, FormControl, Button } from "react-bootstrap";
// import NavBarLoggedIn from "./NavBarLoggedIn";
// import Footer from "./Footer";


// const Transfer = () => {

//     const navigate = useNavigate()
//     const [receiverEmail, setReceiverEmail] = useState()
//     const [receiverBank, setReceiverBank] = useState()
//     const [routingNumber, setRoutingNumber] = useState()
//     const [amount, setAmount] = useState('')
//     const [desc, setDesc] = useState('')

//     async function transferMoney(event) {
//         event.preventDefault()

//         const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/transaction', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': localStorage.getItem('token')
//             },
//             body: JSON.stringify({
//                 email: receiverEmail,
//                 bank: receiverBank,
//                 routing: routingNumber,
//                 balance: amount,
//                 desc: desc,
//             })
//         })

//         const data = await req.json()
//         console.log(data)
//         if(data.status === 'ok'){
//             navigate('/confirmation')
//         }
//     }

//     return (
//         <div>
//             <NavBarLoggedIn />
//             <div>
//                 <div className="bgh">
//                     <h1 className="transfer-heading">Hassle Free Transfer</h1>
//                     <div className="leftc">
//                         <h3 className="transfer-title">Send Money</h3>
//                         <>
//                             {/* <InputGroup className="mb-3">
//                                 <InputGroup.Text id="basic-addon1">@User</InputGroup.Text>
//                                 <FormControl
//                                     placeholder="Your Bank Account No"
//                                     aria-label="User Acc No"
//                                     aria-describedby="basic-addon1"
//                                 />
//                             </InputGroup> */}

//                             <InputGroup className="mb-3">
//                             <InputGroup.Text id="basic-addon2">@Recipient</InputGroup.Text>
//                                 <FormControl
//                                     placeholder="Recipient's Account Number"
//                                     value={receiverEmail}
//                                     onChange={(e) => setReceiverEmail(e.target.value)}
//                                     aria-label="Recipient's Acc No"
//                                     aria-describedby="basic-addon2"
//                                 />                               
//                             </InputGroup>

//                             <InputGroup className="mb-3">
//                             <InputGroup.Text id="basic-addon2">@Bank</InputGroup.Text>
//                                 <FormControl
//                                     placeholder="Recipient's Bank"
//                                     value={receiverBank}
//                                     onChange={(e) => setReceiverBank(e.target.value)}
//                                     aria-label="Recipient's Bank"
//                                     aria-describedby="basic-addon2"
//                                 />
//                             </InputGroup>

//                             <InputGroup className="mb-3">
//                             <InputGroup.Text id="basic-addon2">Routing No.</InputGroup.Text>
//                                 <FormControl
//                                     placeholder="Routing Number"
//                                     value={routingNumber}
//                                     onChange={(e) => setRoutingNumber(e.target.value)}
//                                     aria-label="Routing Number"
//                                     aria-describedby="basic-addon2"
//                                 />
//                             </InputGroup>

//                             <InputGroup className="mb-3">
//                                 <InputGroup.Text>$ Amount</InputGroup.Text>
//                                 <FormControl 
//                                     aria-label="Amount"
//                                     placeholder="Amount"
//                                     value={amount}
//                                     onChange={(e) => setAmount(e.target.value)} />
//                                 <InputGroup.Text>.00</InputGroup.Text>
//                             </InputGroup>

//                             <InputGroup>
//                                 <InputGroup.Text>Description of the transaction</InputGroup.Text>
//                                 <FormControl 
//                                     as="textarea" 
//                                     aria-label="With textarea"
//                                     value={desc}
//                                     onChange={(e) => setDesc(e.target.value)} />
//                             </InputGroup>

//                             <Button className="mt-3" variant="primary" size="lg" onClick={transferMoney} style={{ width: "100%", border: "0px", backgroundColor: "#821a1b"}}>Send</Button>
//                         </>
//                     </div>
//                     <div className="rightc">
//                         <img src="https://cdn.pixabay.com/photo/2013/07/12/12/14/euro-145386_1280.png" alt="" />
//                     </div>
//                 </div>
//             </div>
        
//         </div>

//     );
// };

// export default Transfer;

import React from "react";
import "../styles/Transfer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

// const handleErrorModal = ({ errorModal, handleErrorModalClose }) => {
// 	return (
// 	  <Modal show={errorModal} onHide={handleErrorModalClose}>
// 		<Modal.Header closeButton>
// 		  <Modal.Title>Warning</Modal.Title>
// 		</Modal.Header>
// 		<Modal.Body>
// 		  Please fill in all the required details.
// 		</Modal.Body>
// 		<Modal.Footer>
// 		  <Button
// 			variant="primary"
// 			onClick={handleClose}
// 			style={{ backgroundColor: "#821a1b" }}
// 		  >
// 			OK
// 		  </Button>
// 		</Modal.Footer>
// 	  </Modal>
// 	);
//   };

const Transfer = () => {
  const navigate = useNavigate();
  const [receiverAccount, setReceiverAccount] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverBank, setReceiverBank] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  // const [errorModal, setErrorModal] = useState(false);

  // const handleErrorModalClose = () => {
  //   setErrorModal(false);
  // };

  const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
  	const handleShowModal = () => setShowModal(true);

    const transferPay = () => {
      handleShowModal();
      setTimeout(() => {
          navigate("/kycupgrade");
        }, 8000);
  }

  async function transferMoney(event) {
    event.preventDefault();

    // Add client-side validation to ensure required fields are not empty
    if (!receiverAccount || !receiverBank || !receiverName || !routingNumber || !amount) {
      // handleErrorModal(true);
      return;
    }

    const req = await fetch("https://citizens-032f6032f3a1.herokuapp.com/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        account: receiverAccount,
        bank: receiverBank,
        name: receiverName,
        routing: routingNumber,
        balance: amount,
        desc: desc,
      }),
    });

    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      navigate("/confirmation");
    }
  }

  return (
    <div>
      <NavBarLoggedIn />
      <div>
        <div className="bgh">
          <h1 className="transfer-heading">Hassle Free Transfer</h1>
          <div className="leftc">
            <h3 className="transfer-title">Send Money</h3>
            <>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">@ Acc No</InputGroup.Text>
                <FormControl
                  placeholder="Recipient's Account Number"
                  value={receiverAccount}
                  onChange={(e) => setReceiverAccount(e.target.value)}
                  aria-label="Recipient's Acc No"
                  aria-describedby="basic-addon2"
                  required // Mark as required
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">@ Acc Name</InputGroup.Text>
                <FormControl
                  placeholder="Recipient's Account Name"
                  value={receiverName}
                  onChange={(e) => setReceiverName(e.target.value)}
                  aria-label="Recipient's Acc Name"
                  aria-describedby="basic-addon2"
                  required // Mark as required
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">@ Bank Name</InputGroup.Text>
                <FormControl
                  placeholder="Recipient's Bank"
                  value={receiverBank}
                  onChange={(e) => setReceiverBank(e.target.value)}
                  aria-label="Recipient's Bank"
                  aria-describedby="basic-addon2"
                  required // Mark as required
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Routing No.</InputGroup.Text>
                <FormControl
                  placeholder="Routing Number"
                  value={routingNumber}
                  onChange={(e) => setRoutingNumber(e.target.value)}
                  aria-label="Routing Number"
                  aria-describedby="basic-addon2"
                  required // Mark as required
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>$ Amount</InputGroup.Text>
                <FormControl
                  aria-label="Amount"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required // Mark as required
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>

              <InputGroup>
                <InputGroup.Text style={{width: "100%"}}>Description of the transaction</InputGroup.Text>
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </InputGroup>

              <Button
                className="mt-3"
                variant="primary"
                size="lg"
                onClick={transferPay}
                style={{
                  width: "100%",
                  border: "0px",
                  backgroundColor: "#821a1b",
                }}
              >
                Send
              </Button>
            </>
          </div>
          <div className="rightco">
            <img src="https://www.littletoncoin.com/shop/api/assets/LCCCatalogAssetStore/images/catalog/products/600x600/ST4565_A.png" alt="" />
          </div>
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

export default Transfer;
