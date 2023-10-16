import React, { useState } from "react";
import "../styles/Deposit.css";
import "../styles/FD.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
// import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
//import SmallHead from './Components/smallHead'

const Deposit = () => {

    const [amount, setAmount] = useState()
    const [desc, setDesc] = useState('')
    const navigate = useNavigate()

    async function updateBalance(event) {
        event.preventDefault()

        const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/balance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                balance: amount
            })
        })

        const data = await req.json()
        console.log(data.status)
        if (data.status === 'ok') {

            // setAmount(tempBalance)
            // setTempBalance(0)
            navigate('/confirmation')
        }
        else {
            alert("error")
            navigate('/failed')
        }
    }
    return (
        <div>
            <NavBarLoggedIn />
            <div className="bghfd">
            <h1 className="deposit-heading">Hassle Free Deposit</h1>
                <div className="leftc">
                <h3 className="deposit-title">Deposit Funds</h3>
                    <>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$ Amount</InputGroup.Text>
                            <FormControl
                                aria-label="Amount (to the nearest Rupee)"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} 
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Description of the transaction</InputGroup.Text>
                            <FormControl 
                                as="textarea" 
                                aria-label="With textarea"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)} />
                        </InputGroup>

                        <Button className="mt-3" variant="primary" size="lg" onClick={updateBalance} style={{
                            width: "100%",
                            border: "0px",
                            backgroundColor: "#821a1b",
                          }}>Deposit</Button>
                    </>
                </div>
                <div className="rightc">
                    <img src="https://cdn.pixabay.com/photo/2015/11/04/16/36/piggy-bank-1022853_1280.png" alt="" />
                </div>
            </div>
            <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
        </div>
    );
};

export default Deposit;