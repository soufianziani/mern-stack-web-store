import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      email: user,
      password: password
    };

    try {
      const response = await axios.post('/api/user', credentials);
      if (response.data.success) {
        // Redirect the user to the admin page
        window.location.href = '/admin-page';
      } else {
        // Handle invalid credentials or display error message
        console.log('Invalid Login');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
  <div className="max-w-sm w-full text-gray-600">
    <div className="text-center">
      <img src="logo.png" width={150} className="mx-auto" />
      <div className="mt-5 space-y-2">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Admin Login</h3>
      </div>
    </div>
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label className="font-medium">
          User Name 
        </label>
        <input
          type="text"
          placeholder=" your Name "
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
      >
        Login
      </button>
      <div className="text-center">
      </div>
    </form>
  </div>
</main>

  );
};

export default AdminLogin;
