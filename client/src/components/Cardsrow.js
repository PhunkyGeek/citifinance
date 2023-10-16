import React from "react";
import {Card, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';


const Cardsrow = () => {
  const history = useNavigate();

  const restricted = () => {

    history('/login')

}

    return (
      <div className="row" style={{backgroundColor: "#03091F", paddingTop: "60px", margin: "0rem"}}>
      <h1 style={{ color: "white",
				textAlign: "center",
        fontWeight: "heavy",
        marginBottom: "35px" }}>
        Bank Anywhere Anytime
	    </h1>
<CardGroup>
  <Card style={{margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/partner-has-made-a-fraud-in-the-contract-of-sale-and-being-handed-a-picture-id1145371340?k=20&m=1145371340&s=612x612&w=0&h=6OjaI8Qa-F_skLNogC7B8MHBuaBYqiBQ7lkx1im01Wo=" />
    <Card.Body className="text-center">
      <Card.Title style={{fontWeight: "bold"}}>Apply for loans</Card.Title>
      <Card.Text>
        We give our customers loans at the lowest interest rates.
      </Card.Text>
      <Button variant="contained" style={{ marginTop: '20px', color: 'white', backgroundColor: '#821a1b', maxWidth: '150px',  borderRadius: "10px" }} size="small" onClick={restricted}>Learn More</Button>
    </Card.Body>
    
  </Card>
  <Card style={{ margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/transfer-of-money-from-hand-to-hand-picture-id1126636063?b=1&k=20&m=1126636063&s=170667a&w=0&h=BnG-0hjZWhRT_TwgLOCjStrxerx2EZzvXPtR4yxrxNc=" />
    <Card.Body className="text-center">
      <Card.Title style={{fontWeight: "bold"}}>Send Money</Card.Title>
      <Card.Text>
        Transfer money at ease with our hassle free interface.
      </Card.Text>
      <Button variant="contained" style={{ marginTop: '20px', color: 'white', backgroundColor: '#821a1b', maxWidth: '150px',  borderRadius: "10px" }} size="small" onClick={restricted}>Transfer</Button>
    </Card.Body>
    
  </Card>
  <Card style={{margin: "1.5em 1em"}}>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/consulting-with-a-financial-manager-at-the-bank-picture-id1218601476?k=20&m=1218601476&s=612x612&w=0&h=vWQhmUZMLSyqczAwMApFKyV1BuEYAjVwHNNrseYfbTc=" />
    <Card.Body className="text-center">
      <Card.Title style={{fontWeight: "bold"}}>Mortgage</Card.Title>
      <Card.Text>
        Feel at home by our unmatched mortgage service offers.
      </Card.Text>
      <Button variant="contained" style={{ marginTop: '20px', color: 'white', backgroundColor: '#821a1b', maxWidth: '150px',  borderRadius: "10px" }} size="small" onClick={restricted}>Learn More</Button>
    </Card.Body>
    
  </Card>
</CardGroup>

      </div>
    )
}


 
export default Cardsrow;