import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {
    saveEmployee(Employee) {
        return axios.post("http://localhost:8080/api/employee", Employee);
    }
    

    getEmployees() {
      return axios.get(EMPLOYEE_API_BASE_URL);
    }
    

    // getEmployeeById(id) {
    //     return axios.get(`http://localhost:8080/api/employees/${id}`);
    // }
    

    deleteEmployee(id) {
      return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }

    updateEmployee(id, employee) {
      return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
    }

}

export default new EmployeeService();
