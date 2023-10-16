import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/alerts.css";
import { Alert } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

const Failure = () => {
    return (
        <div>
            <NavBarLoggedIn />
            <div className="bgsucc">
                <div className="container">
                    <Alert variant="danger">
                        <Alert.Heading>Oops, something went wrong!</Alert.Heading>
                        <p>
                            Your transaction failed for some reason. We are currently looking into it and we will get back to you as soon as possible.
                            Thank you for choosing Citizen Bank!
                    </p>
                        <hr />
                        <p className="mb-0">
                            For any queries, contact us at info@citizenbank.com
                            Our contact number is +14025450766
                    </p>
                    </Alert>
                </div>
            </div>
            <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
        </div>

    );
}

export default Failure;