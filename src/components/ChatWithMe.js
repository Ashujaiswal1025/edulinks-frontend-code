import React, { useState, useEffect, useRef } from "react";
import bot from "../Images/bot.png";
import book from "../Images/books 1.png";
import Career from "../Images/Career Pathway Test 1.png";
import Visa from "../Images/Visa Query Solver 1.png";
import parse from "html-react-parser";
import { marked } from "marked";

function ChatWithMe() {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const userData = localStorage.getItem('setUserData');
  const [count, setCount] = useState(0);
  const capitalizeFirstName = (userData) => userData.split(' ')[0].replace(/^./, char => char.toUpperCase());
  console.log('count122', count);
  const [messages, setMessages] = useState([
    { role: "bot", text: `Hi ${capitalizeFirstName(userData)}👋 I’m your personal study abroad assistant. I can guide you through study visas, scholarships, top courses, and universities for six amazing countries. Let’s start exploring your study abroad journey! Where do you want to begin?` },
  ]);
  const customStyles = {
    link: {
      color: "#007bff", // Typical blue link color
      textDecoration: "underline", // Underline to indicate it's a link
      cursor: "pointer", // Pointer cursor on hover
    },
  };
  console.log('messages12', messages);
  const chatEndRef = useRef(null);  // Reference to the chat end

  /*toggle sidebar */

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setLoading(true)
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");

    // Replace with your actual API endpoint
    try {

      const response = await fetch('https://edulinkchatbot.io/asksite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      if (response.ok) {
        const updatedCount = count + 1; // Calculate the next count value
        const htmlContent = marked(data.answer);

        // Add the new bot response to the messages
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "bot", text: htmlContent },
        ]);

        if (updatedCount === 5) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              role: "bot",
              text: `${capitalizeFirstName(userData)}👋, I hope these answers have been helpful so far! 😊 If you still have questions or need personalized advice, you can book a free 1:1 session with our expert counselors. What would you like to do next?`,
            },
          ]);
        }

        setCount(updatedCount); // Update the count state
      } else {
        console.log('response1234567', response);
      }
    } catch (err) {
      console.error('Request failed:', err);
    }
    finally {
      setLoading(false);
    }
  };

  // Scroll to the bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    textareaRef.current.style.height = '1px'; // Initial height
    textareaRef.current.style.height = (textareaRef.current.scrollHeight) + 'px';
  }, [input]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`h-full bg-eduTheme  lg:w-[448px] lg:flex lg:relative flex-col font-robotoCondensed lg:pl-[85px] lg:pt-20 pt-28 pb-10 px-5 top-18 left-0 ${isSidebarVisible ? "fixed" : "hidden"}`}>
        <div
          className="lg:w-[294px] md:mt-16 mt-5 mb-8 mr-3 text-xl font-bold px-2 py-[2px]"
          style={{ background: "rgba(255,255,255,0.53)" }}
        >
          Explore Edulinks AI other features
        </div>


        <div className="text-xl leading-6 font-bold">
          <div className="flex items-center text-white mb-6">
            <div className="w-[78px] h-[78px] bg-white rounded-full flex items-center justify-center">
              <img src={book} alt="Book icon" className="w-[52px] h-[52px]" />
            </div>
            <div className="ml-2">
              <h4>University/Course</h4>
              <h4>Shortlisting</h4>
            </div>
          </div>
          <div className="flex items-center text-white mb-6">
            <div className="w-[78px] h-[78px] bg-white rounded-full flex items-center justify-center">
              <img src={Career} alt="Career icon" className="w-[52px] h-[52px]" />
            </div>
            <div className="ml-2">
              <h4>Career Path</h4>
              <h4>Test</h4>
            </div>
          </div>
          <div className="flex items-center text-white">
            <div className="w-[78px] h-[78px] bg-white rounded-full flex items-center justify-center">
              <img src={Visa} alt="Visa icon" className="w-[52px] h-[52px]" />
            </div>
            <div className="ml-2">
              <h4>Visa Query</h4>
              <h4>Solver</h4>
            </div>
          </div>
        </div>
        <div className="flex-grow"></div>
        <button className="lg:w-[261px] lg:h-[34px] p-1 lg:p-0 bg-white text-xl font-bold text-black rounded-md mt-10 lg:mt-0">
          Book 1:1 Counseling Session
        </button>
      </div>

      {/* Chat Window */}
      <div className="flex-grow bg-eduThemeOP flex flex-col pt-20">
        {/*toggle Sidebar */}
        <div className="lg:hidden fixed top-24 right-5">
          <button onClick={toggleSidebar}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-lg mx-2 text-token-text-secondary"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        {/* Chat Messages */}
        <div className="flex-grow p-4 overflow-y-auto flex flex-col text-xl font-normal chat-container">
          <div className="space-y-4 mt-auto font-robotoCondensed">
            {messages.map((message, index) => {
              const isSpecialMessage =
                message.role === "bot" &&
                count === 5 &&
                index === messages.length - 1; // Ensure this is the last message

              return (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "bot" && (
                    <div className="p-2">
                      <img src={bot} alt="bot" className="w-[51px] h-[48px]" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs ${message.role === 'bot' ? "py-5 px-2" : "p-2"} rounded-lg bg-white`}
                    style={{
                      maxWidth: "60%", // Adjusts max width of the bubble
                      minWidth: "10%", // Ensures bubble doesn't shrink too small
                      wordBreak: "break-word", // Wraps long words properly
                      overflowWrap: "break-word", // Ensures text doesn't overflow
                      padding: "12px", // Ensure sufficient padding
                    }}
                  >
                    {isSpecialMessage ? (
                      <>
                        {message.text}
                        <div className="flex flex-col">
                          <span className="bg-eduThemeOPL mt-8 p-3 rounded-md cursor-pointer"
                            onClick={() => {
                              window.location.href = 'https://your-link-for-1on1-session.com';
                            }}
                          >
                            Yes, I’d love to connect with experts for personalized guidance.
                          </span>
                          <span className="bg-eduThemeOPL mt-3 p-2 rounded-md cursor-pointer"
                            onClick={() => {
                              setMessages((prevMessages) => [
                                ...prevMessages,
                                {
                                  role: "bot",
                                  text: "Great! Let me know how I can assist you further 😊.",
                                },
                              ]);

                              setCount(count + 1);
                            }}
                          >
                            No, I’d prefer continuing to chat with you for now.
                          </span>
                        </div>
                      </>
                    ) : (
                      parse(message.text, {
                        replace: (domNode) => {
                          if (domNode.name === "a") {
                            return (
                              <a
                                href={domNode.attribs.href}
                                style={customStyles.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={domNode.attribs.href}
                              >
                                {domNode.children[0].data}
                              </a>
                            );
                          }
                        },
                      })
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="w-[60px] ml-3 h-[60px] rounded-full bg-eduTheme text-white font-black text-2xl flex justify-center items-center">
                      {capitalizeFirstName(userData)[0]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Chat End Ref */}
          <div ref={chatEndRef} />
        </div>

        {/* Input Field */}
        <div className="flex justify-center my-3 px-4 sm:px-0 ">
          <div className="bg-white px-3 py-2 border-t w-full sm:w-[80%]  lg:w-[60%] flex justify-center rounded-full shadow-md">
            <form
              onSubmit={handleSend}
              className="flex w-full items-center rounded-full space-x-2 overflow-hidden max-h-[200px]" // Limit the height of the form
            >
              <textarea
                placeholder="Type your message..."
                ref={textareaRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  if (textareaRef.current) {
                    textareaRef.current.style.height = "auto"; // Reset the height
                    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
                  }
                }}
                style={{
                  resize: "none",
                }}
                className="flex-grow bg-transparent placeholder:text-black p-3 outline-none focus:outline-none overflow-y-auto rounded-lg max-h-[150px] text-sm sm:text-base"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-eduTheme text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition-colors duration-300"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChatWithMe;
