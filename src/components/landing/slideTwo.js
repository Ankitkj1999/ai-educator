import React from 'react';
import slide from '../../res/img/slideTwo.svg'
import { PiStudentFill, PiFeatherFill } from "react-icons/pi";

const SlideTwo = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-black dark:to-gray-900">
            <div className="w-full max-w-7xl px-2 md:px-10 py-20 relative flex flex-col md:flex-row items-center justify-between">
                {/* Decorative Gradient Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-100 dark:bg-purple-900 rounded-full blur-2xl opacity-60 z-0"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60 z-0"></div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col items-start z-10 w-full md:w-3/5">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight drop-shadow-lg">
                        Unlock <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Infinite Knowledge</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl animate-fade-in">
                        Craft compelling courses effortlessly with our platform, enabling you to create engaging content on any topic.<br />
                        <span className="font-semibold text-purple-500 dark:text-purple-300">Integrate video and theory lectures for a comprehensive learning experience in just a few clicks.</span>
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-8 mb-10">
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
                            <PiStudentFill className="text-4xl mb-2 text-purple-600 dark:text-purple-400" />
                            <h3 className="text-2xl font-bold mb-2 dark:text-white">Study Online</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">Video & Theory Lecture</p>
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
                            <PiFeatherFill className="text-4xl mb-2 text-blue-600 dark:text-blue-400" />
                            <h3 className="text-2xl font-bold mb-2 dark:text-white">Create Course</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">Create Course on Any Topic</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center mt-10 md:mt-0 z-10 w-full md:w-2/5">
                    <img
                        src={slide}
                        alt="Course Creation Illustration"
                        className="rounded-3xl shadow-2xl w-full max-w-2xl h-auto animate-fade-in transition-transform duration-300 object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SlideTwo;
