import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import VerifyMail from './components/VerifyMail';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div className="h-full md:h-screen flex flex-col ">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center h-[92%] bg-eduTheme px-4">
          <Routes>

            <Route path="/" element={<Navigate to="/signup" />} />
            {/* Signup Route with Nested VerifyMail */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/verifymail" element={<VerifyMail />} />

            {/* Login Route with Nested VerifyMail */}
            <Route path="/login" element={<Login />} />
            <Route path="/login/verifymail" element={<VerifyMail />} />

            {/* Welcome Route */}
            <Route path="/edulinks-ai-assistant" element={<Welcome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

