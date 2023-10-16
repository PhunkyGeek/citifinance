import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/alerts.css";
import { Alert } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

const Success = () => {
    return (
        <div>
            <NavBarLoggedIn />
            <div className="bgsucc">
                <div className="container">
                    <Alert variant="success">
                        <Alert.Heading>Transaction Successful</Alert.Heading>
                        <p>
                            Your transaction is Complete. Thank you for choosing us as your banking partner. We are pleased to serve you and your financial needs.
                            Citizen bank thanks you for your patience. Maximum processing time is 24hrs.
                    </p>
                        <hr />
                        <p className="mb-0">
                            For further details and transaction queries, email us at info@citizenbank.com <br />
                            Our contact number is +14025450766
                    </p>
                    </Alert>
                </div>
            </div>
            <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
        </div>


    );
}

export default Success;