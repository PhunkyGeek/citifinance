import React, { useState, useEffect, useRef } from "react";
import jwt_decode from "jwt-decode";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bpfp from "../assets/image.png";
import "../styles/ProfileNew.css";
import { useNavigate } from "react-router";
import NavBarLoggedIn from "./NavBarLoggedIn";

const ProfileNew = () => {
  const navigate = useNavigate();

  const [accountId, setAccountId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [ssn, setSsn] = useState("");
  const [id, setId] = useState("");
  const [backId, setBackId] = useState("");
  const [balance, setBalance] = useState("108,970.00");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zip, setZip] = useState("");
  const [fd, setFd] = useState();
  const [profilePic, setProfilePic] = useState(() => {
    // Retrieve the profile picture data URL from local storage on component mount
    const storedPic = localStorage.getItem("profilePic");
    return storedPic ? storedPic : bpfp;
  });

  const profilePicInputRef = useRef(null);

  // Your existing code...

  const handleProfilePicClick = () => {
    profilePicInputRef.current.click();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setProfilePic(dataURL);
        // Save the profile picture data URL to local storage
        localStorage.setItem("profilePic", dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        // Handle the image data here (e.g., save it to state or do other processing)
        setId(dataURL);
        // Save the ID image data URL to local storage
        localStorage.setItem("id", dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUploader = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setBackId(dataURL);
        // Save the ID (back) image data URL to local storage
        localStorage.setItem("backId", dataURL);
      };
      reader.readAsDataURL(file);
    }
  };



    async function populateInfo() {

        const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/user', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setAccountId(data.accountId)
            setFirstName(data.fname)
            setLastName(data.lname)
            setPassword(data.password)
            setEmail(data.email)
            setAddress(data.address)
            setContact(data.contact)
            setSsn(data.ssn)
            setBalance(data.balance)
            setCity(data.city)
            setRegion(data.state)
            setZip(data.zip)
            setId(data.id)
            setBackId(data.backId)
            setFd(data.fd_amount)
        }
        else {
            alert(data.error)
        }
    }

    async function populateBalance() {

        const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/balance', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setBalance(data.balance)
        }
        else {
            alert(data.error)
        }
    }

    // async function updateFd(){
    //     const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/user', {
    //         method: 'POST',
    //         headers: {
    //             'x-access-token': localStorage.getItem('token')
    //         },
    //         body
    //     })
    // }

    async function getUpdatedFd() {

        const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/updatedfd', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = req.json()
        if (data.status === 'ok') {
            setFd(data.newFd)
        }
        else {
            alert(data.error)
        }
    }
    // async function populateFd(){
    //     const req = await fetch('https://citizens-032f6032f3a1.herokuapp.com/api/fd', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token')
    //         },
    //     })

    //     const data = await req.json()
    //     if (data.status === 'ok') {
    //         setBalance(data.balance)
    //     }
    //     else {
    //         alert(data.error)
    //     }
    // }

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

        // Retrieve the saved ID image data URLs from local storage on component mount
    const storedId = localStorage.getItem("id");
    const storedBackId = localStorage.getItem("backId");
    setId(storedId ? storedId : "");
    setBackId(storedBackId ? storedBackId : "");

    }, [])

    return (
        <div>
            <NavBarLoggedIn />
            <div className="container mt-4" style={{ /* Your existing styles */ }}>
        <div className="jumbotron">
          <div className="gridpf">
            <div className="c1">
              {/* Profile picture */}
              <div
                className="profile-pic"
                style={{
                  backgroundImage: `url(${profilePic})`,
                }}
                onClick={handleProfilePicClick}
              >
                <input
                  ref={profilePicInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
                        
                        <div className="c2">
                            <h2 className="display-3">{firstName} {lastName}</h2>

                            <p><strong>Account Number:</strong> 0171401599</p>
                            <p><strong>Checking:</strong> $0</p>
                            <p><strong>Savings:</strong> $0</p>
                            <p><strong>Fixed Deposit:</strong> {fd}</p>
                                                 
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="profile-info">
                        <p><strong>Address :</strong> {address}, {city} - {zip}, {region}</p>
                        <p><strong>Phone Number :</strong> {contact} </p>
                        <p><strong>Email :</strong> {email}</p>
                        <p><strong>SSN Number :</strong> {ssn} </p>
                        {/* <p>Balance : {balance}</p> */}
                        <br/>
                        <h4><strong>KYC Upgrade</strong> (For Official Use Only!)</h4>
                        <div>
                        <p style={{ marginTop: "30px", fontSize: "15px"}}>Upload ID (Front)</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      {id && <img src={id} alt="ID Front" style={{ display: "flex", maxWidth: "200px" }} />}
                      <br/>
                      <p style={{ marginTop: "30px", fontSize: "15px"}}>Upload ID (Back)</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUploader}
                      />
                      {backId && <img src={backId} alt="ID Back" style={{ maxWidth: "200px" }} />}
                    </div>
                        <p className="lead">
                            <a style={{ width: "100%", border: "0px", marginTop: "40px", backgroundColor: "#821a1b" }} className="btn btn-primary btn-lg mb-2" href="#" role="button">
                                Save
                            </a>
                        </p>
                    </div>

                </div>
            </div>
            <h6 style={{ textAlign: "center", marginTop: "30px" }}>Copyright © 2023 Citizen Bank, All rights reserved.</h6>
        </div>

    );
};

export default ProfileNew;