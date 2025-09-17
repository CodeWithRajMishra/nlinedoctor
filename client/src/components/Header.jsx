import docimg from "../images/doctor.jpeg";
import mainheading from "../images/mainheading.png";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BackEndURL from "../util/BackEndUrl";
import axios from "axios";
import { ToastContainer,  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {useNavigate} from "react-router-dom";


const Header=()=>{
    const [input, setInput] = useState({});
     const [input1, setInput1] = useState({});
    const [image, setImage] = useState("");
   const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
   const [email1, setEmail1] = useState("");
   const [password1, setPassword1]= useState("");

    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);
    const handleShow1 = () => setShow1(true);

    const navigate = useNavigate();
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



  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api=`${BackEndURL}/doctor/doctorsave`;     
    if (!image) return alert("Please select a Image");
 const formData = new FormData();
 formData.append("file", image);
  
 for (let x in input) {
      formData.append(x, input[x]);
    }

 try {
 const res = await axios.post(api, formData, {
 headers: { "Content-Type": "multipart/form-data" },
 });

 console.log(res);
  setShow(false);
  toast.info("You are Succesfully Registered!");


 } catch (err) {
 console.error(err);
 }
  }


    const handleSubmit1=async(e)=>{
      e.preventDefault();
       let api=`${BackEndURL}/doctor/doctorlogin`;  
       try {
           const response = await axios.post(api, {email:email1, password:password1});
           console.log(response.data);
           localStorage.setItem("docname", response.data.doctorname);
           localStorage.setItem("docid", response.data._id);
           navigate("/doctordashboard");

       } catch (error) {
           console.log(error);
       }
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
                <Button variant="primary" onClick={handleShow1}>Login</Button>    <Button variant="primary" onClick={handleShow}>Registration</Button>
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
      <Button variant="primary" onClick={handleSubmit} type="submit">
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
           
           <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>    
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name="email1" value={email1} onChange={(e)=>{setEmail1(e.target.value)}}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password1" value={password1} onChange={(e)=>{setPassword1(e.target.value)}} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit1} type="submit">
        Login
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   
   
   
   
   
   
        <ToastContainer/>
        </>
    )
}
export default Header;