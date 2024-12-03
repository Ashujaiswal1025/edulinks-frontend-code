import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        setLoading(true);

        try {
            // Replace with your actual API endpoint
            const response = await fetch('https://edulink-backend-code.vercel.app/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Email sent successfully!');
                navigate('/login/verifymail', { state: { email } }); // Pass email to the next screen
            } else {
                toast.error(data.message || 'Failed to login. Please try again.');
            }
        } catch (err) {
            toast.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center py-32">
            <h1 className="text-xl lg:text-4xl font-adramalech font-normal text-white text-center my-3 md:mb-10">
                Welcome to Edulinks AI Assistant to proceed further Login.
            </h1>
            <div className="flex justify-center items-center mt-6">
                <div
                    className="rounded-[20px] shadow-md flex flex-col items-center w-full md:w-[676px] md:h-[194px] max-w-[90%] bg-opacity-50 p-6 md:p-8 font-robotoCondensed"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    }}
                >
                    <form
                        className="flex flex-col gap-4 font-robotoCondensed font-bold w-full md:text-xl"
                        onSubmit={handleLogin}
                    >
                        <input
                            type="email"
                            placeholder="Please enter your email to login"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="placeholder-black border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eduTheme bg-white"
                        />
                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-eduTheme text-white text-lg md:text-xl font-bold py-1 md:px-7 px-3 rounded-[7px] hover:bg-opacity-90 transition duration-200 flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading && (
                                    <svg
                                        className="animate-spin h-5 w-5 text-white mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.735 3.899 1.958 5.291l1.042-1.042z"
                                        ></path>
                                    </svg>
                                )}
                                {loading ? 'Loging...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
