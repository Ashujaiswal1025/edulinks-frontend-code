import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SignUp from './components/SignUp';
import VerifyMail from './components/VerifyMail';
import Login from './components/Login';
import Welcome from './components/Welcome';
import ChatWithMe from './components/ChatWithMe';
import CareerPathTest from './components/CareerPathTest';
import CareerPathwayPhase from './components/CareerPathwayPhase';

const AuthGuard = ({ children }) => {
  console.log('children', children);
  const authToken = localStorage.getItem("authenticatedToken");
  return authToken ? children : <Navigate to="/signup" />;
};

const PublicRoute = ({ children }) => {
  const authToken = localStorage.getItem("authenticatedToken");

  return authToken ? <Navigate to="/edulinks-ai-assistant" /> : children;
};

// Custom wrapper to use useLocation
function MainContent() {
  const location = useLocation();

  // Check if the current route is ChatWithMe
  const isChatPage = location.pathname === '/edulinks-ai-assistant/chat-with-me';

  return (
    <div className={`flex-grow ${isChatPage ? '' : 'bg-eduTheme'}`}>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup/verifymail" element={<PublicRoute><VerifyMail /></PublicRoute>} />
        <Route path="/login/verifymail" element={<PublicRoute><VerifyMail /></PublicRoute>} />
        <Route path="/edulinks-ai-assistant" element={<AuthGuard><Welcome /></AuthGuard>} />
        <Route path="/edulinks-ai-assistant/chat-with-me" element={<AuthGuard><ChatWithMe /></AuthGuard>} />
        <Route path="/edulinks-ai-assistant/career-path-test" element={<AuthGuard><CareerPathTest /></AuthGuard>} />
        <Route path="/edulinks-ai-assistant/career-path-test/phase" element={<AuthGuard><CareerPathwayPhase /></AuthGuard>} />
      </Routes>
    </div>
  );  
}

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen" >
        {/* Fixed Header */}
        <div className="header">
          <Header />
        </div>

        {/* Main Content Area */}
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
