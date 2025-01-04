import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as echarts from 'echarts';
import { visaQueryResults } from '../quizData/visaQuery.result';
// Import Images
import gemanyImg from '../Images/Germany-Img.png';
import ukImg from '../Images/UK-Img.png';
import usaImg from '../Images/USA-Img.png';
import CanadaImg from '../Images/Canada-Img.png';
import nzImg from '../Images/NewZealand-Img.png';
import ausImg from '../Images/Aus-Img.png';

function VisaQueryResult() {
    const chartRef = useRef(null);
    const location = useLocation();
    const { selectedCountry, percentageChance } = location.state || {};

    const countryImage = {
        Germany: gemanyImg,
        Canada: CanadaImg,
        Australia: ausImg,
        UK: ukImg,
        USA: usaImg,
        'New Zealand': nzImg,
    }

    const selectedImg = countryImage[selectedCountry];

    let subjectTag;
    let resultContent;

    visaQueryResults[selectedCountry].forEach(element => {
        if (percentageChance >= element.lowestPercentage && percentageChance <= element.highestPercentage) {
            subjectTag = element.subject;
            resultContent = element.content;
        }
    });

    const [chart, setChart] = useState(null);

    useEffect(() => {
        // Initialize the chart
        const myChart = echarts.init(chartRef.current);
        setChart(myChart);

        // Chart options
        const option = {
            series: [
                {
                    name: 'Percentage',
                    type: 'gauge',
                    splitNumber: 5,
                    itemStyle: {
                        color: 'rgba(55,215,217,1)',
                    },
                    progress: {
                        show: true,
                        width: 15,
                    },
                    axisLine: {
                        lineStyle: {
                            width: 15,
                        }
                    },
                    axisLabel: {
                        distance: 10,
                        fontSize: 14,
                    },
                    axisTick: {
                        length: 15,  // Length of ticks
                        lineStyle: {
                            color: '#000',  // Tick color
                            width: 0
                        }
                    },
                    splitLine: {
                        length: 0,  // Length of the split lines
                        lineStyle: {
                            color: '#000',  // Split line color
                            width: 0
                        }
                    },
                    detail: {
                        formatter: '{value}%',  // Format of the value displayed in the center
                        offsetCenter: [0, '70%'],  // Position of the value
                        fontSize: 30,  // Font size of the value
                        fontWeight: 'bold',
                        color: 'rgba(55,215,217,1)',  // Color of the center text
                        backgroundColor: 'transparent',  // Center background transparency
                        borderRadius: 10, // Rounded corners for the center circle
                        valueAnimation: true,
                    },
                    anchor: {
                        show: true,
                        showAbove: true,
                        size: 15,
                        itemStyle: {
                            color: 'rgba(8, 114, 116, 1)'
                        }
                    },
                    pointer: {
                        length: '70%',  // Length of the pointer
                        width: 4,  // Width of the pointer
                        itemStyle: {
                            color: 'rgba(55,215,217,1)'  // Pointer color will be dynamic based on value
                        }
                    },
                    data: [
                        {
                            value: percentageChance,
                        }
                    ]
                }
            ]
        };

        // Set the options on the chart instance
        myChart.setOption(option);

        // Resize chart on window resize
        window.addEventListener('resize', () => {
            myChart.resize();
        });

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', () => {
                myChart.resize();
            });
            myChart.dispose();
        };
    }, [percentageChance]);

    return (
        <div className="bg-white w-full h-full flex flex-col md:flex-row justify-center items-center pt-16">
            {/* Left Image Section */}
            <div className="w-full md:w-2/5 md:h-full h-2/5 relative">
                <img
                    src={selectedImg}
                    alt="city"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Content Section */}
            <div className="md:w-3/5 w-full h-3/5 md:h-full flex flex-col justify-center items-center py-8 px-4 md:px-0">
                {/* Heading Section */}
                <div className="md:w-4/5 mt-5 text-center font-adramalech">
                    <p className="text-xl md:text-2xl">
                        Based on your profile assessment, your likelihood of securing a {selectedCountry} Study Visa is
                    </p>
                </div>

                {/* ECharts Gauge */}
                <div
                    ref={chartRef}
                    className="mt-2 md:w-4/5 w-full flex justify-center items-center"
                    style={{ height: '300px' }}  // Set default height
                ></div>

                {/* Result Information */}
                <div className="md:w-4/5 text-center gap-2 mt-4">
                    <h2 className="text-xl md:text-2xl font-adramalech md:-mt-8 mb-2">{subjectTag}</h2>
                    <div className="w-full flex justify-center">
                        <p className="w-5/6 font-robotoCondensed text-base md:text-lg text-center font-medium space-x-0 px-5">
                            {resultContent}
                        </p>
                    </div>
                    <button
                        onClick={() => window.location.href = "https://cal.com/edulink-9gf5fp/30min"}
                        className="bg-eduTheme px-6 py-2 text-xl rounded-[22.5px] mt-3"
                    >
                        Book 1:1 Counselling
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VisaQueryResult;
