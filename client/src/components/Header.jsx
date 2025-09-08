import docimg from "../images/doctor.jpeg";
import mainheading from "../images/mainheading.png";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const Header=()=>{
    const [input, setInput] = useState({});
    const [image, setImage] = useState("");
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   
  const handleImage=(e)=>{
       setImage(e.target.files[0]);
       console.log(e.target.files[0]);
  }

   const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
   }

  

    return(
        <>
            <div id="header">
               <div id="logo">
                  <img src={docimg}  className="logoimg"/>
               </div>
               <div id="heading">
                     <img src={mainheading} />
               </div>
               <div id="rightmenu">
                <Button variant="primary">Login</Button>    <Button variant="primary" onClick={handleShow}>Registration</Button>
               </div>
     
            </div>


         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Specialization</Form.Label>
       <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
      <option>Open this select menu</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Gastroenterologist">Gastroenterologist</option>
      <option value="Neurologist">Neurologist</option>
       <option value="Radiologist">Radiologist</option>
        <option value="General Physician">General Physician</option>
         <option value="ENT Specialist">ENT Specialist</option>
          <option value="Dentist">Dentist</option>
           <option value="Gynecologist">Gynecologist</option>
            <option value="Surgeon">Surgeon</option>
    </Form.Select>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city"  onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Clinic Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Doctor Image</Form.Label>
        <Form.Control type="file" name="file" onChange={handleImage}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact Number</Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name="email" onChange={handleInput}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default Header;