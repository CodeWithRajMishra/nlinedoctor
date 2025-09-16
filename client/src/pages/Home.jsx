import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpeg";
import ban2 from "../images/ban2.jpg";
import ban3 from "../images/ban3.webp";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import doc1 from "../images/doc1.jpeg";
import BackEndURL from '../util/BackEndUrl';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home=()=>{
const [mydata, setMydata] = useState([]);
const navigate = useNavigate();
const loadData =async()=>{
   let api=`${BackEndURL}/doctor/doctorinfo`; 
    try {
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
     } catch (error) {
       console.log(error)
    } 
}

useEffect(()=>{
  loadData();
}, [])

  
const ans=mydata.map((key)=>{
    return(
      <>
         <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={key.image} height="270" />
      <Card.Body>
        <Card.Title>{key.doctorname}</Card.Title>
        <Card.Text>
         <span style={{color:"red", fontWeight:"bold"}}>Specialization : {key.speciality}</span> 
         <br />
         <span style={{color:"navy", fontWeight:"bold"}}> City : {key.city}</span> 
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/getappointment/${key._id}`)}}>Get Appointment</Button>
      </Card.Body>
    </Card>
      
      </>
    )
})
    return(
        <>
           <Carousel>
      <Carousel.Item>
         <img src={ban1}  width="100%" height="300"  / >
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban2}  width="100%" height="300"  / >
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={ban3}  width="100%" height="300"  / >
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <h1> Top Doctors </h1>

      <div id="docList">
         {ans}
      </div>
        </>
    )
}
export default Home;