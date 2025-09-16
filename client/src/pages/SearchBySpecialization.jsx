import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BackEndURL from "../util/BackEndUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const SearchBySpecialization = () => {
      const [speciality, setSpeciality] = useState("");
      const [mydata, setMydata] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let api = `${BackEndURL}/doctor/searchbyspeciality`;
        const response = await axios.post(api, { speciality: speciality });
        console.log(response.data);
        setMydata(response.data);
    }
    return (
        <>
            <h1> Search By City </h1>
            <Form style={{ width: "400px", margin: "auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Specialization</Form.Label>
       <Form.Select aria-label="Default select example" name="speciality" onChange={(e)=>{setSpeciality(e.target.value)}}>
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
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>Doctor Name</th>
                        <th>Specialization</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Contact </th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.length >= 1 && (
                        mydata.map((key, index) => {
                            return (
                                <>
                                    <tr>
                                       <td>{index+1}</td>
                                       <td> <img src={key.image} width="100" height="100" /> </td>
                                       <td> {key.doctorname}</td>
                                       <td> {key.speciality}</td>
                                       <td> {key.city}</td>
                                       <td> {key.address}</td>
                                       <td> {key.contact}</td>
                                       <td> {key.email}</td>
                                    </tr>
                                </>
                            )
                        })
                    )}
                </tbody>
            </Table>
        </>
    )
}
export default SearchBySpecialization;


