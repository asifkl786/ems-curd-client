import axios from 'axios';

  const API_URL = "http://outstanding-passion-production.up.railway.app/api/employees";

  //const API_URL = 'http://localhost:8080/api/employees';
               

  // Fetch all employees
    export const fetchEmployees = async () => {
       return await axios.get(API_URL);
    };
  
  // Create a new employee
  export const createEmployee = (formData) => axios.post(API_URL,formData);

  // Fetch a single employee by ID
  export const getEmployee = (employeeId) => axios.get(API_URL + '/' + employeeId);

  // Update an existing employee
  export const updateEmployee = (employeeId,formData) => axios.put(API_URL + '/' + employeeId , formData);
  
  // Delete an employee
  export const deleteEmployee = (employeeId) => axios.delete(API_URL + '/' + employeeId);

  {/*export const deleteEmployee = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
  };*/}
  