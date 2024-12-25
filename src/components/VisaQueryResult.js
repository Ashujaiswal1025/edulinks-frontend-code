import React, { useState } from 'react';

function VisaQueryResult() {
    // State to store the current angle (percentage)
    const [currentAngle, setCurrentAngle] = useState(0);

    // Function to handle the range slider change
    const handleSliderChange = (event) => {
        setCurrentAngle(event.target.value);
    };

    return (
        <div className="bg-white w-full h-full flex flex-col justify-center items-center">
            <div className={`relative w-14 h-14 md:w-64 md:h-64`}>
                {/* Outer Circular Ring */}
                <div
                    className={`absolute inset-0 rounded-full`}
                    style={{
                        background: `conic-gradient(
                          #087274 0deg, 
                          #087274 ${currentAngle}deg, 
                          transparent ${currentAngle}deg, 
                          transparent 270deg
                        )`,
                        willChange: 'transform',
                        transition: 'transform 0.8s ease-in-out',
                    }}
                />
                {/* Inner Circular Hole */}
                <div className="absolute inset-5 md:inset-6 bg-white rounded-full flex flex-col items-center justify-center border-2 md:border-4 border-eduTheme">
                </div>
            </div>
            {/* Range Slider to adjust the percentage */}
            <div className="mt-4">
                <input
                    type="range"
                    min="0"
                    max="360"
                    value={currentAngle}
                    onChange={handleSliderChange}
                    className="w-48"
                />
                <div className="text-center mt-2">{currentAngle} degree</div>
            </div>
        </div>
    );
}

export default VisaQueryResult;

