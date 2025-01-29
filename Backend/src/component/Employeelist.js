import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import EmployeeService from "./Service/EmployeeService";

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null); // Stores the employee being edited
  const [formData, setFormData] = useState({ empname: "", empage: "", empdpt: "" });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await EmployeeService.getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
      alert("Failed to fetch employee data.");
    }
    setLoading(false);
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      await EmployeeService.deleteEmployee(id);
      setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp.id !== id));
      alert("Employee deleted successfully!");
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  };

  const openEditModal = (employee) => {
    setEditEmployee(employee);
    setFormData({ empname: employee.empname, empage: employee.empage, empdpt: employee.empdpt });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateEmployee = async () => {
    if (!editEmployee) return;
    try {
      await EmployeeService.updateEmployee(editEmployee.id, formData);
      alert("Employee updated successfully!");
      fetchEmployees(); // Refresh the list after update
      setEditEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg p-4">
            <h1 className="text-center text-primary mb-4">Employee List</h1>
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {!loading ? (
                <tbody>
                  {employees.length > 0 ? (
                    employees.map((employee) => (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.empname}</td>
                        <td>{employee.empage}</td>
                        <td>{employee.empdpt}</td>
                        <td>
                          <i
                            className="fas fa-edit text-warning me-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => openEditModal(employee)}
                          ></i>
                          <i
                            className="fas fa-trash text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteEmployee(employee.id)}
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">No employees found.</td>
                    </tr>
                  )}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center">
                      <i className="fas fa-spinner fa-spin"></i> Loading...
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>

      {/* Employee Edit Modal */}
      {editEmployee && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Employee</h5>
                <button type="button" className="btn-close" onClick={() => setEditEmployee(null)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="empname"
                    value={formData.empname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    name="empage"
                    value={formData.empage}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <input
                    type="text"
                    className="form-control"
                    name="empdpt"
                    value={formData.empdpt}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setEditEmployee(null)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={updateEmployee}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
