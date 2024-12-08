import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch('https://edulink-backend-code.vercel.app/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Sign-up successful! Redirecting to verification...', {
          position: 'top-center',
        });
        navigate('/signup/verifymail', { state: { email: formData.email } });
      } else {
        toast.error(data.message || 'An error occurred during sign-up.', {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        position: 'top-center',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className="flex flex-col items-center justify-center pt-28">
        <ToastContainer />
        <h1 className=" text-3xl md:text-4xl font-adramalech font-bold text-white text-center mb-10">
          Welcome to Edulinks AI Assistance to proceed further Sign up.
        </h1>

        {/* Form Container */}
        <div className='w-full flex justify-center items-center'>
          <div
            className="rounded-[20px] shadow-md flex flex-col items-center md:w-[676px] md:h-[421px] max-w-[90%] bg-opacity-50 p-6 md:p-8"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <h2 className="text-lg md:text-2xl mt-4 md:mb-8 mb-4 font-robotoCondensed font-bold text-center">
              Sign Up
            </h2>

            <form
              className="flex flex-col gap-4 font-robotoCondensed font-bold w-full md:text-xl"
              onSubmit={handleSignUp}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="placeholder-black border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eduTheme bg-white"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="placeholder-black border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eduTheme bg-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="placeholder-black border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-eduTheme bg-white"
                required
              />

              {/* Submit Button */}
              <div className="flex justify-start mt-4">
                <button
                  type="submit"
                  className={`bg-eduTheme text-white text-lg md:text-xl font-bold py-1 md:px-7 px-3 rounded-[7px] hover:bg-opacity-90 transition duration-200 flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  disabled={loading}
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
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Login Prompt */}
        <div className="mt-4 font-robotoCondensed text-sm md:text-base">
          <p className="text-center">
            <div>Already have an account? </div>
            <Link
              to="/login"
              className="font-bold underline hover:text-opacity-90"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
