import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './RegistrationPage.css'; // Import a CSS file for custom styles
import collagefront from './collagefront.jpg';
import { Email, Password } from '@mui/icons-material';
import axios from 'axios';
import './LoginPage.css';


function LoginPage() {
    const [validated, setValidated] = useState(false);
  

    const [formData, setFormData] = useState({
        mobile: ''
    });
    const handleSubmit = (event) => {
        debugger;
            setValidated(true);
            try {
                const response = axios.get("https://localhost:44301/api/Login?mobileno=8887878787");
                if (response != null) {
                    console.log(response.data);
                }
                else {
                    alert("some error occured!..")
                }
            }
            catch (error) {
                alert("error to register", error);
            }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="registration-page">
            <div className="form-container">
                <h2 className="registration-title">Login</h2>
                <Form className="registration-form2" onSubmit={handleSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label className="lblmobileno">Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="mobile"
                            placeholder="Enter Mobile number."
                            required
                            pattern="^[6-9]\d{9}$"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid mobile number.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="light" type="submit" className="button-73">
                        Send
                    </Button>
                </Form>
            </div>
            <div className="background-image-container">
                <img src={collagefront} alt="background" className="background-image" />
            </div>
        </div>
    );
}

export default LoginPage;
