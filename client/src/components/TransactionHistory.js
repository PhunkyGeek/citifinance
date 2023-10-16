import React from "react";
import '../styles/TransactionHistory.css'
// import "../styles/Transfer.css";
import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { InputGroup, FormControl, Button } from "react-bootstrap";
// import NavBar from "./NavBar";
// import Footer from "./Footer";
import jwt_decode from "jwt-decode"
// import { Card } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
  } from "react-bootstrap";


const TransactionHistory = () => {

// Dummy data for Recent Credit/Debit Transactions table
   const transactionsData = [
    // {
    //   id: 1,
    //   type: "Credit",
    //   description: "Received payment from XXX",
    //   amount: "$108,970.00",
    // },
    // {
    //   id: 2,
    //   type: "Debit",
    //   description: "Paid utility bill",
    //   amount: "$150",
    // },
    // Add more dummy data items here...
  ];

    const [Array_recieved, setArrayRecieved] = useState([]);
    const [Array_sent, setArraySent] = useState([]);

    const convertDate = (iso) => {
        return iso.substr(0, 10);
    }

    async function getTransactions() {
        const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/transaction', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
        })
        const data = await req.json()
        console.log(data)
        if (data.status === 'ok') {
            setArrayRecieved(data.objReceived)
            setArraySent(data.objSent)
        }
        else {
            alert(data.error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if (!user) {
                localStorage.removeItem(token)
            }
            else {
                getTransactions()
            }
        }
    }, [])

    return (
        <div>
            <NavBarLoggedIn />
            <div className="transactionbody">
                <h2>Transaction History</h2>
                <br />
            </div>
            <Row>
              
            <Col md="12">
            <Card className="card-tasks">
              <Card.Header className="card-head">
                <Card.Title as="h4">Recent Credit/Debit Transactions</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionsData.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.id}</td>
                          <td>{transaction.type}</td>
                          <td>{transaction.description}</td>
                          <td>{transaction.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                <i className="far fa-clock"></i> Updated 1 minute ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
              </Row>
             
        </div>

    );
}

export default TransactionHistory

