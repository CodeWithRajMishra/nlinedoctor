import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import BackEndURL from '../util/BackEndUrl';
import Card from 'react-bootstrap/Card';

const SearchDoctor=()=>{
    const [name, setName] = useState("");
    const [mydata, setMydata] = useState([]);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
       let api=`${BackEndURL}/doctor/searchbyname`; 
       const response = await axios.post(api, {name:name});
       console.log(response.data);
       setMydata(response.data);
    }


    const ans= mydata.map((key)=>{
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
        <Button variant="primary">Get Appointment</Button>
      </Card.Body>
    </Card>
            
            </>
        )
    })


    return(
        <>
         <h1> Search Doctor</h1>
         <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />       
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>       

    <hr />

      <div id="docList" style={{justifyContent:'space-around'}}>
         {mydata.length>=1? (
            <>
             {ans}
            </>
         ) : (

            <span> No Record Found !!!</span>
         )}
      </div>
        </>
    )
}
export default SearchDoctor;