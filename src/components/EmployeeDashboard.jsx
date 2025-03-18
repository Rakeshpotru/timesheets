import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeDashboard = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Assuming you have JWT or another authentication token stored
  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('YOUR_API_GATEWAY_URL/employees/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [token]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {employeeData.first_name}!</h1>
      <p>Email: {employeeData.email}</p>
      <p>Department: {employeeData.department}</p>
      <p>Position: {employeeData.position}</p>
    </div>
  );
};

export default EmployeeDashboard;
