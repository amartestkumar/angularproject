import { useEffect, useState } from 'react';
import './EmployeeList.css';
import axios from 'axios';

import Curd from './Curd';

function EmployeeList() {

 

    const [employees, setEmployees] = useState([]);
    const [show,setShow]=useState(false)

    useEffect(() => {
        debugger;
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44301/api/Employee');
                setEmployees(response.data);
            } catch (error) {
                alert("Data not found", error);
            }
        };

        fetchData();
    }, []);

    const handlerOnclickbutton=() => {
        setShow(true)
    }
    return (
        <>
            <h3 id="h3test">Employee List</h3>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Employee Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.employeename}</td>
                            <td>{employee.employeeaddress}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <hr></hr>
            <div>
                <button type="button" id="testbutton" onClick={() => handlerOnclickbutton()}>Add New Employee</button>
                {show && <Curd/> }

            </div>
           
        </>

    );
}

export default EmployeeList;
