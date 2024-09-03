import React from 'react'
import { useState } from 'react';

const Employee = () => {
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: '',
    dateofbirth: '',
    gender: '',
    country: '',
    file: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-4 mt-4 bg-white shadow-lg rounded-lg">
          <h2 className="p-3 bg-yellow-400 text-2xl font-bold mb-2 text-gray-700 text-center">Employee Information</h2>
            <form onSubmit={handleSubmit}>
              <div className='row gap-2 grid grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="lastname" className="block text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type='text'
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your lastname"
                  required
                />
                </div>
              </div>

              <div className='row gap-2 grid grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type='number'
                  id="mobilenumber"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your lastname"
                  required
                />
                </div>
              </div>

              <div className='row gap-2 grid grid-cols-2'>
                <div className="mb-4">
                  <label htmlFor="lastname" className="block text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type='date'
                    id="dateofbirth"
                    name="dateofbirth"
                    value={formData.dateofbirth}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your lastname"
                    required
                  />
                </div>
                <fieldset>
              <legend className="text-gray-700 mb-1">Gender</legend>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Other</span>
                </label>
              </div>
                </fieldset>
              </div>
             
              <div className='row gap-2 grid grid-cols-2'>
                  <div className="mb-4">
                      <label htmlFor="country"className="block text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="Select your country" disabled>Select your country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                      </select>
             </div>

                  <div className="mb-4">
                  <label htmlFor="file" className="block text-gray-700 mb-1">
                    Upload File
                  </label>
                  <input
                    type='file'
                    id="file"
                    name="file"
                    value={formData.file}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your lastname"
                    required
                  />
                  </div>
              </div>
        
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Employee
              </button>
            </form>
      </div>      
   </>
    
  )
}

export default Employee