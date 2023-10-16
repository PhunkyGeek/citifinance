import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
// import ChartistGraph from "react-chartist";
import { useNavigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";
// import UserGreeting from "./UserGreeting";
// import { fetchUserData } from "../service/api"; 

import "./dashboard.css";
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
import {
  FaHome,
  FaChartLine,
  FaMoneyBillAlt,
  FaCreditCard,
  FaExclamationCircle,
  FaHeart,
  FaBars,
  FaLock,
  FaChevronLeft,
} from "react-icons/fa";
// import Sidebar from "./Sidebar";
import "../styles/Sidebar.css"; // Add the CSS file for the sidebar styles
import NavBarLoggedIn from '../components/NavBarLoggedIn';



function Dashboard() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showModal, setShowModal] = useState(false);

  // // Function to fetch user data from the backend API
  // const fetchUserDataFromApi = async () => {
  //   try {
  //     // Make an API call to fetch user data, replace 'userId' with the actual user ID
  //     const userData = await fetchUserData(userId);
  //     setFirstName(userData.firstName);
  //     setLastName(userData.lastName);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  // // Call the fetchUserDataFromApi function when the component mounts
  // useEffect(() => {
  //   fetchUserDataFromApi();
  // }, []);

  async function populateInfo() {

    const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/user', {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
    })

    const data = await req.json()
    if (data.status === 'ok') {
        setFirstName(data.fname)
        setLastName(data.lname)
    }
    else {
        alert(data.error)
    }
}


    const wTransfer = () => {

        navigate('/transfer')

    }

    const dTransfer = () => {

        navigate('/transfer')

    }

    const deposit = () => {

        navigate('/deposit')

    }

    const kycUpgrade = () => {

        navigate('/kycupgrade')

    }

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
          const user = jwt_decode(token)
          if (!user) {
              localStorage.removeItem(token)
              navigate('/login', { replace: true })
          }
          else {
              // populateBalance()
              populateInfo()
              // getUpdatedFd()

          }
      }

      const timer = setTimeout(() => {
        setShowModal(true);
      }, 4000); // 3000 milliseconds = 3 seconds
  
      return () => {
        clearTimeout(timer);
      };

  }, [])

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

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

  // const barChartData = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  //   series: [
  //     [40, 20, 10, 30, 15, 30, 25], // Replace these values with your actual data
  //   ],
  // };

  // const barChartOptions = {
  //   seriesBarDistance: 10,

  //   axisX: {
  //     showLabel: false, // Set this to true to show X-axis labels (Months)
  //   },
  //   axisY: {
  //     showLabel: false, // Set this to true to show Y-axis labels (Bar values)
  //     showGrid: true, // Set this to true to show Y-axis grid lines
  //   },
  //   chartPadding: {
  //     top: 15,
  //     right: 55,
  //     bottom: 5,
  //     left: 10,
  //   },
  // };


  return (
    <>
    <NavBarLoggedIn />
    {/* Display the UserGreeting component with the user's name */}
    <h2 className="display-4"> Welcome back {firstName}!</h2>
      <Container fluid>

          
            <Row className="card-row">
              <Col lg="3" sm="6">
                <Card className="card-stats card-color-1abc9c">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-chart text-warning"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Limit</p>
                          <Card.Title as="h4">$400,000</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Review Limit
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats card-color-821a1b">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-light-3 text-success"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Checking</p>
                          <Card.Title as="h4">$0</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      <i className="far fa-calendar-alt mr-1"></i>
                      Checking balance
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats card-color-821a1b">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-vector text-danger"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Savings</p>
                          <Card.Title as="h4">$0</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      <FaLock className="ml-1" /> 
                      Savings balance
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats card-color-821a1b">
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-favourite-28 text-primary"></i>
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Loans</p>
                          <Card.Title as="h4">---</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Check Eligibility
                    </div>
                  </Card.Footer>
                </Card>
              </Col>

              <Row className="dashrow">
              <Col md="4">
                <div className="button-group">
                  <Button
                    variant="contained"
                    style={{
                      marginTop: '20px',
                      color: 'white',
                      backgroundColor: '#821a1b',
                      borderRadius: "10px"
                    }}
                    size="large"
                    onClick={wTransfer}
                  >
                    Wire Transfer
                  </Button>
                  <br />
                  <Button
                    variant="contained"
                    style={{
                      marginTop: '20px',
                      color: 'white',
                      backgroundColor: '#821a1b',
                      borderRadius: "10px"
                    }}
                    size="large"
                    onClick={dTransfer}
                  >
                    Domestic Transfer
                  </Button>
                  <br />
                  <Button
                    variant="contained"
                    style={{
                      marginTop: '20px',
                      color: 'white',
                      backgroundColor: '#821a1b',
                      borderRadius: "10px"
                    }}
                    size="large"
                    onClick={deposit}
                  >
                    Make Deposit
                  </Button>
                  <br />
                  <Button
                    variant="contained"
                    style={{
                      marginTop: '20px',
                      color: '#821a1b',
                      backgroundColor: '#1abc9c',
                      borderRadius: "10px",
                      borderWidth: "1px",
                      borderColor: '#821a1b',
                    }}
                    size="large"
                    onClick={kycUpgrade}
                  >
                    KYC Upgrade
                  </Button>
                </div>
              </Col>
            
              <Col md="8">
                <Card className="card-act">
                  <Card.Header className="card-head">
                    <Card.Title as="h4">Virtual Card</Card.Title>
                    <p className="card-category">Coming soon</p>
                  </Card.Header>
                  <Card.Body className="virtual-card-body">
                <div className="virtual-card-logo">
                  <FaCreditCard size={32} color="white" />
                </div>
                <div className="virtual-card-info">
                  <p className="virtual-card-number">**** **** **** 1234</p>
                  <div className="virtual-card-meta">
                    <span className="virtual-card-validity">VALID THRU</span>
                    <span className="virtual-card-expiry">12/25</span>
                  </div>
                  <p className="virtual-card-owner">CARD HOLDER NAME</p>
                </div>
              </Card.Body>
              <Card.Footer className="virtual-card-footer">
              <div className="stats">
              <i className="far fa-clock"></i> Get your virtual card soon!
              </div>
              </Card.Footer>
                </Card>
              </Col>
            </Row>
            
          
            <Row className="dashrow">
              
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
            <Card.Footer className="virtual-card-footer">
              <div className="stats">
              <i className="far fa-clock"></i> Updated 1 minute ago
              </div>
            </Card.Footer>
          </Card>
        </Col>
            </Row>
       </Row>
      </Container>

      <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upgrade Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do your KYC Upgrade to perform any transaction, access services and bonuses.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => kycUpgrade()} style={{backgroundColor: "#821a1b", border: "0px", width: "100%"}}>
            Upgrade Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;