import React, { useState } from 'react';
import { useGlobalContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { handleLogin, userData } = useGlobalContext(); // Accessing handleLogin from context
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if userData exists and is an array
        if (!userData || !Array.isArray(userData)) {
            alert('User data is not available');
            return;
        }

        // Find user matching the username
        const user = userData.find(user => user.username === username);

        if (user && user.password === password) {
            handleLogin(user); // Store full user object in state and localStorage

            // Navigate based on user role
            if (user.role.includes('admin')) {
                navigate('/Dashboard');
            } else if (user.role.includes('student')) {
                navigate('/Home');
            } else {
                alert('Not Authorized');
            }
        } else {
            alert('Invalid credentials');
        }
    };

    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col lg:flex-row h-screen p-4 rounded-3xl overflow-hidden'>
            <div className='w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('./images/Webinar.svg')" }}>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-8'>
                <div className='mb-8'>
                    <img src="./images/surpasslogotrans.png" alt="Logo" className='h-28' />
                </div>
                <h1 className='text-2xl font-semibold mb-2 text-center'>Login to your Account</h1>
                <p className='mb-2 text-sm text-center'>Lorem Ipsum is simply dummy text printing</p>
                <form className='w-full max-w-sm' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Username</label>
                        <input
                            type="text"
                            placeholder='Username'
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500'
                        />
                    </div>
                    <div className='mb-6 relative'>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                        <input
                            placeholder='Password'
                            type={!open ? "password" : "text"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='mt-1 block w-full px-3 pr-10  py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500'
                        />
                        <button type='button' onClick={() => setOpen(!open)} className='absolute top-5 right-8 translate-x-4 translate-y-4'>
                            <i className={!open ? `ri-eye-line` : "ri-eye-off-line"}></i>
                        </button>
                    </div>
                    <button
                        type="submit"
                        className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
