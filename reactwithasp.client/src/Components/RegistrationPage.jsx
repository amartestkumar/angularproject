import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import collagefront from './collagefront.jpg';
import { Email, Password } from '@mui/icons-material';
import axios from 'axios';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RegistrationPage() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        course: '',
        mobile: '',
        isadmin: false,
        address:''

    });
    const handleSubmit = (event) => {
        debugger;
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setValidated(true);
            try {
                const response = axios.post("https://localhost:44301/api/Registration", formData);
                if (response != null) {
                     toast("Registered Successfully!");
                    navigate('/login')
                }
                else {
                    alert("some error occured!..")
                }
            }
            catch (error) {
                alert("error to register", error);
            }
        }
    };
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="registration-page">
            <h2 className="registration-title">Registration</h2>
            <Form className="registration-form" onSubmit={handleSubmit}>
                
                <Form.Group controlId="formBasicusername">
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter name" required onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicemail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasiccourse">
                    <Form.Label>Course:</Form.Label>
                    <Form.Select name="course" onChange={handleChange} required>
                        <option value="">Select a course</option>
                        <option value="BSc">BSc</option>
                        <option value="MSc">MSc</option>
                        <option value="BA">BA</option>
                        <option value="MA">MA</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formBasicmobile">
                    <Form.Label>Mobile Number:</Form.Label>
                    <Form.Control
                        type="text"
                        name="mobile"
                        placeholder="Enter Mobile"
                        required
                        pattern="^[6-9]\d{9}$"
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid mobile number.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formBasicaddress">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" name="address" placeholder="Enter Address" required onChange={handleChange} />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="button-92">
                    Register
                </Button>
            </Form>
            <div className="background-image-container">
                <img src={collagefront} alt="background" className="background-image" />
            </div>
        </div>
    );
}

export default RegistrationPage;

