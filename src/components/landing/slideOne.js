import React from 'react';
import slide from '../../res/img/slideOne.png'
import { useNavigate } from "react-router-dom";

const SlideOne = () => {

    const navigate = useNavigate();

    function redirectSignIn() {
        navigate("/signin");
    }
    function redirectSignUp() {
        navigate("/signup");
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-gray-900">
            <div className="w-full max-w-7xl px-2 md:px-10 py-20 relative flex flex-col items-center">
                {/* Decorative Gradient Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60 z-0"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-100 dark:bg-purple-900 rounded-full blur-2xl opacity-60 z-0"></div>
                {/* Main Content */}
                <div className="flex flex-col items-start z-10 w-full md:w-5/6 mx-auto">
                    <h1 className="text-5xl md:text-8xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight drop-shadow-lg">
                        Unlock <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Smarter Learning</span><br />
                        <span className="text-blue-600 dark:text-blue-400">with AI</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-5xl animate-fade-in">
                        Instantly create personalized courses, chat with an AI teacher, and test your knowledge with interactive quizzes.<br />
                        <span className="font-semibold text-blue-500 dark:text-blue-300">Learn in 23+ languages, take notes, and download for offline access.</span>
                    </p>
                    <div className="flex space-x-4 mb-8">
                        <button onClick={redirectSignIn} className="border-blue-600 text-blue-600 border px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 transition duration-200 shadow-md hover:scale-105">
                            Sign In
                        </button>
                        <button onClick={redirectSignUp} className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-600 dark:bg-blue-400 dark:text-black dark:hover:bg-blue-500 transition duration-200 shadow-lg hover:scale-105">
                            Get Started
                        </button>
                    </div>
                    <div className="flex items-center space-x-3 mt-2 mb-8">
                        <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-lg text-gray-500 dark:text-gray-400">Trusted by 10,000+ learners</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src={slide}
                            alt="AI Course Generator Preview"
                            className="rounded-3xl shadow-2xl w-full max-w-6xl h-auto animate-fade-in transition-transform duration-300 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideOne;
