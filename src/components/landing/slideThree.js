import React from "react";
import { PiKeyboard, PiVideo } from "react-icons/pi";
import { RiAiGenerate } from "react-icons/ri";

const SlideThree = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-gray-900">
            <div className="w-full max-w-7xl px-2 md:px-10 py-20 relative flex flex-col items-center">
                {/* Decorative Gradient Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60 z-0"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-100 dark:bg-purple-900 rounded-full blur-2xl opacity-60 z-0"></div>
                {/* Main Content */}
                <div className="flex flex-col items-center z-10 w-full md:w-5/6 mx-auto">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-12 text-gray-900 dark:text-white leading-tight drop-shadow-lg text-center">
                        How it <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Works</span>
                    </h2>
                    <div className="flex flex-col md:flex-row w-full gap-10 mb-10">
                        {/* Step 1 */}
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition">
                            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mb-4">
                                <PiKeyboard className="text-5xl text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 dark:text-white text-center">Enter Course Title</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                                Enter the course title for which you want to generate content using AI.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition">
                            <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full mb-4">
                                <RiAiGenerate className="text-5xl text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 dark:text-white text-center">AI Generates Sub-Topics</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                                AI will generate topics and subtopics based on the title you provide.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition">
                            <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-full mb-4">
                                <PiVideo className="text-5xl text-pink-600 dark:text-pink-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 dark:text-white text-center">Video & Theory Course</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                                AI will generate video and theory course allowing you to start learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideThree;
