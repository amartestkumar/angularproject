import { useState } from "react";
import axios from "axios";
import './Curd.css';
import EmployeeList from "./EmployeeList";


function Curd() {
    debugger;

    const [formData, setFormData] = useState({
        id: 0,
        Employeename: '',
        Employeeaddress: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:44301/api/Employee", formData);
            alert('Item added:', response.data);
            setFormData({
                Employeename: '',
                Employeeaddress: '',
                id: '',
                EmployeeList
            });

        }
        catch (error) {
            alert("Error adding item", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Employee Id:</label>
                    <input name="id" value={formData.id} onChange={handleChange} readOnly />
                </div>
                <div>
                    <label>Employee Name:</label>
                    <input name="Employeename" value={formData.Employeename} onChange={handleChange}/>
                </div>
                <div>
                    <label>Employee Address:</label>
                    <input name="Employeeaddress" onChange={handleChange} value={formData.Employeeaddress} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Curd;
