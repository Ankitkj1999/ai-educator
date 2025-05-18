import React from 'react';
import { Avatar, Blockquote, Rating } from 'flowbite-react';
import { review, from, photoURL, profession } from '../../constants';

const SlideFive = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-gray-900 py-14">
            <div className="w-full max-w-7xl px-2 md:px-10 py-20 relative flex flex-col items-center">
                {/* Decorative Gradient Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60 z-0"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-100 dark:bg-purple-900 rounded-full blur-2xl opacity-60 z-0"></div>
                {/* Main Content */}
                <div className="flex flex-col items-center z-10 w-full md:w-5/6 mx-auto">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-white leading-tight drop-shadow-lg text-center">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">What Learners Say</span>
                    </h2>
                    <figure className="w-full max-w-2xl mx-auto py-10 flex flex-col items-center bg-white/70 dark:bg-black/70 rounded-3xl shadow-2xl">
                        <div className="mb-4 flex items-center">
                            <Rating size="md">
                                <Rating.Star color="black" className="dark:fill-white" />
                                <Rating.Star color="black" className="dark:fill-white" />
                                <Rating.Star color="black" className="dark:fill-white" />
                                <Rating.Star color="black" className="dark:fill-white" />
                                <Rating.Star color="black" className="dark:fill-white" />
                            </Rating>
                        </div>
                        <Blockquote>
                            <p className="text-xl md:text-2xl font-bold text-black dark:text-white text-center px-4">
                                {review}
                            </p>
                        </Blockquote>
                        <figcaption className="mt-6 flex items-center space-x-3">
                            <Avatar rounded size="md" img={photoURL} alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-black dark:divide-white">
                                <cite className="pr-3 font-bold text-black dark:text-white">{from}</cite>
                                <cite className="pl-3 text-sm font-normal text-black dark:text-white">{profession}</cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default SlideFive;
