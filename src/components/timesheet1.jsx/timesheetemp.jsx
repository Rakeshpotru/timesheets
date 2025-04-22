import React, { useState } from 'react';

const timeSheetsemp = () => {
  // Form state
  const [formData, setFormData] = useState({
    empId: '',
    empName: '',
    projectName: '',
    todayTask: '',
  });

  // Project options
  const projectOptions = ['Alpha', 'Beta', 'Gamma', 'Delta'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Task Saved Successfully!');
    // Optionally reset form
    setFormData({
      empId: '',
      empName: '',
      projectName: '',
      todayTask: '',
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Employee Task Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label><br />
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            name="empName"
            value={formData.empName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Project Name:</label><br />
          <select
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          >
            <option value="">-- Select Project --</option>
            {projectOptions.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Today's Task:</label><br />
          <textarea
            name="todayTask"
            rows={4}
            value={formData.todayTask}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Save</button>
      </form>

      <hr />
      <h4>Preview:</h4>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default timeSheetsemp;
