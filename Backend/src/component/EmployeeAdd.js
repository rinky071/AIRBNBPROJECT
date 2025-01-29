import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./Service/EmployeeService";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const EmployeeAdd = () => {
  const [Employee, setEmployee] = useState({
    empname: "",
    empage: "",
    empdpt: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...Employee, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    // Validation before making the API call
    if (!Employee.empname || !Employee.empage || !Employee.empdpt) {
      setMessage("Please fill all required fields.");
      return;
    }

    // Make the API call to save the employee
    EmployeeService.saveEmployee(Employee)
      .then((response) => {
        console.log("Saved successfully:", response.data);
        setMessage("Data saved successfully!");
        setTimeout(() => navigate("/employeelist"), 2000); // Redirect after saving
      })
      .catch((error) => {
        console.error("Error saving employee:", error);
        setMessage("An error occurred while saving data.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h1 className="text-center text-primary mb-4">Add Employee</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="empname" className="form-label">
                  Employee Name
                </label>
                <input
                  type="text"
                  name="empname"
                  value={Employee.empname}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter employee name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="empage" className="form-label">
                  Employee Age
                </label>
                <input
                  type="number"
                  name="empage"
                  value={Employee.empage}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter employee age"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="empdpt" className="form-label">
                  Employee Department
                </label>
                <input
                  type="text"
                  name="empdpt"
                  value={Employee.empdpt}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter employee department"
                />
              </div>

              <div className="d-flex justify-content-between">
                <button onClick={saveEmployee} type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </div>

              {message && <p className="mt-3 text-center">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
