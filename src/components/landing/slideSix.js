import React from 'react';
import { usePWAInstall } from 'react-use-pwa-install';

const SlideSix = () => {
    const install = usePWAInstall();
    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-gray-900 py-8">
            <div className="w-full max-w-7xl px-2 md:px-10 py-10 relative flex flex-col items-center">
                {/* Decorative Gradient Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60 z-0"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-100 dark:bg-purple-900 rounded-full blur-2xl opacity-60 z-0"></div>
                {/* Main Content */}
                <div className="flex flex-col items-center z-10 w-full md:w-5/6 mx-auto">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight drop-shadow-lg text-center">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Desktop App</span>
                    </h2>
                    <div className="w-full flex flex-col md:flex-row items-center justify-between border border-black bg-white py-6 px-6 dark:border-white dark:bg-black rounded-3xl shadow-2xl">
                        <div className="mb-4 md:mb-0 md:mr-8 flex-1 max-md:text-center">
                            <p className="text-lg md:text-xl font-normal text-black dark:text-white">
                                Create personalized courses, interact with an AI teacher, access content offline,<br className="hidden md:block" />
                                and test your knowledge with AI-generated quizzes all in one desktop app.
                            </p>
                        </div>
                        <div className="flex flex-shrink-0 items-center">
                            <button
                                onClick={install}
                                disabled={!install}
                                className={`inline-flex items-center justify-center px-8 py-3 font-semibold text-lg rounded-lg transition shadow-lg
                                    ${install ? 'bg-black text-white dark:bg-white dark:text-black cursor-pointer hover:scale-105' : 'bg-gray-400 text-white cursor-not-allowed'}
                                `}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideSix;
