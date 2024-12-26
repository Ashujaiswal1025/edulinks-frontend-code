import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as echarts from 'echarts';
import { visaQueryResults } from '../quizData/visaQuery.result';

function VisaQueryResult() {
    const chartRef = useRef(null);
    const location = useLocation();
    const { selectedCountry, percentageChance } = location.state || {};

    let subjectTag;
    let resultContent;

    visaQueryResults[selectedCountry].forEach(element => {
        if (percentageChance >= element.lowestPercentage && percentageChance <= element.highestPercentage) {
            subjectTag = element.subject;
            resultContent = element.content;
        }
    });

    useEffect(() => {
        // Initialize the chart
        const myChart = echarts.init(chartRef.current);

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
                        borderRadius: 10,// Rounded corners for the center circle
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

        // Cleanup on component unmount
        return () => {
            myChart.dispose();
        };
    }, [percentageChance]);

    return (
        <div className="bg-white w-full h-full flex flex-col md:flex-row justify-center items-center pt-16">
            <div className='w-full md:w-2/5 md:h-full h-2/5'>
                <img src='https://s3-alpha-sig.figma.com/img/fa73/7adc/9fed5644286b0ecb30091a49628617f0?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTcoy9EUXZdfSDPanPS0la0Is-BqOuD8v-XFhez37fMEqUe9IZi7MGsm7QWOkU0mGuob~8su2xiuxg5qVRktQOOm8NtoDITolryS5tVfURIvNTKZQhkI-fLt4dZGkQXYixxQiPJ1JTYAyZPcrAnvxZTADKrcPV~dGVc-LkZVQ4-~YV5Au6KCRblJoT8bFud6DFyegYyzM7K9loLWnobfWhuQUr7RoMaYMRXmOLhDSC3SdsLrJ7UM7xSVvt6D12er9X5uORFU61OegpygOCUA3azTIeJova--S6YPmlCC4wU-JrhWK8Gj8f7yl~gUIIED~-Fgs0yda35cYGQblwS8rg__' alt='city' className='w-full h-full' />
            </div>
            <div className="md:w-3/5 w-full h-3/5 md:h-full flex flex-col justify-center items-center py-3">
                <div className='md:w-4/5 font-adramalech text-center'>
                    <p className='text-2xl'>Based on your profile assessment, your likelihood</p>
                    <p className='text-2xl'>of securing a {selectedCountry} Study Visa is</p>
                </div>
                <div
                    ref={chartRef}
                    className='-mt-5 md:w-4/5  w-full h-[300px] flex justify-center items-center'
                // style={{ width: '80%', height: '300px' }}
                ></div>
                <div className='md:w-4/5 text-center gap-2'>
                    <h2 className='text-2xl text-center font-adramalech md:-mt-10 mb-2'>{subjectTag}</h2>
                    <div className='w-full  flex justify-center'>
                        <p className='w-5/6 font-robotoCondensed text-lg text-center font-medium space-x-0 px-5'>{resultContent}</p>
                    </div>
                    <p className='font-robotoCondensed text-lg text-center font-medium space-x-0 px-5'> Let’s take the next step together!</p>
                    <button className='bg-eduTheme px-6 py-2 text-xl rounded-[22.5px] mt-3'>Book 1:1 Counselling</button>
                </div>
            </div>
        </div>
    );
}

export default VisaQueryResult;
