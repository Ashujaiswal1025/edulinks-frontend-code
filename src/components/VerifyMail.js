import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import { useLocation } from 'react-router-dom';

function VerifyMail() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const email = location.state?.email;

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/[^0-9]/.test(value)) return; // Only accept digits

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleVerify = async () => {
    const otpValue = otp.join(''); // Combine OTP digits into a single string

    if (otpValue.length < 4) {
      toast.error('Please enter a valid 4-digit OTP');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://edulink-backend-code.vercel.app/v1/auth/verify-otp?otp=${otpValue}&email=${email}`,
        { method: 'GET' }
      );

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('authenticatedToken', result.token.access.token)
        localStorage.setItem('setUserData', result.userData.name)
        toast.success('OTP verified successfully!');
        console.log('dataatat',  result);
        navigate('/edulinks-ai-assistant');
      } else {
        toast.error(result.message || 'OTP verification failed.');
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-full flex justify-center items-center'>
      <div
        className="rounded-[20px] shadow-md flex flex-col items-center w-full md:w-[676px] md:h-[345px] max-w-[90%] bg-opacity-50 p-6 md:p-8 font-robotoCondensed"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
      >
        <ToastContainer /> {/* Toast notifications container */}
        <h2 className="text-lg md:text-2xl mt-4 md:mb-8 font-bold text-center">
          Verify Your Email
        </h2>
        <p className="text-sm text-center my-1">Please Enter your 4 digit OTP Sent to your E-mail</p>

        <div className="flex justify-center gap-2 my-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              placeholder="_"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength="1"
              className="w-[44px] h-[48px] rounded-lg text-center text-2xl focus:outline-none focus:ring-2 focus:ring-eduTheme font-bold"
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            onClick={handleVerify}
            disabled={loading}
            className={`bg-eduTheme text-white text-lg md:text-xl font-bold py-1 px-7 rounded-[7px] hover:bg-opacity-90 transition duration-200 flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''
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
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyMail;
