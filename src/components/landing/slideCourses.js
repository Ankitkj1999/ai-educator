import React from 'react';

const courseImage =
    "https://media.istockphoto.com/id/1363276533/photo/teacher-giving-computer-science-lecture-to-diverse-multiethnic-group-of-female-and-male.webp?a=1&b=1&s=612x612&w=0&k=20&c=YXmCaCqKvybPreyWSQgkV_NTilN4TiD0p5q85arMl5w=";

const courses = [
    {
        title: "AI for Beginners",
        description: "Kickstart your journey into Artificial Intelligence with hands-on projects.",
        image: courseImage,
    },
    {
        title: "Data Science Essentials",
        description: "Master the basics of data analysis, visualization, and machine learning.",
        image: courseImage,
    },
    {
        title: "Web Development Bootcamp",
        description: "Learn to build modern web applications using the latest technologies.",
        image: courseImage,
    },
];

const testimonials = [
    {
        name: "John Doe",
        feedback: "This course changed my life! The hands-on projects were incredibly helpful.",
        course: "AI for Beginners",
    },
    {
        name: "Jane Smith",
        feedback: "I never knew data science could be so interesting. Highly recommend this course!",
        course: "Data Science Essentials",
    },
    {
        name: "Sam Wilson",
        feedback: "The web development bootcamp was intense but worth every minute. I feel job-ready!",
        course: "Web Development Bootcamp",
    },
];

const SlideCourses = () => (
    <div className="flex flex-col items-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white dark:from-black dark:to-gray-900 py-10">
        <div className="w-full max-w-7xl px-2 md:px-10 py-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white leading-tight drop-shadow-lg text-center">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                    Explore Our Courses
                </span>
            </h2>
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {courses.map((course, idx) => (
                    <div
                        key={idx}
                        className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col"
                        data-aos="flip-left"
                        data-aos-delay={idx * 150}
                        data-aos-duration="800"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                                {course.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{course.description}</p>
                            <div className="mt-auto">
                                <button className="w-full px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:scale-105">
                                    Preview Course
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Testimonials Section */}
            <div className="flex flex-col items-center justify-center py-16 w-full bg-transparent">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white leading-tight drop-shadow-lg text-center">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                        Student Success Stories
                    </span>
                </h2>
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="group bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-700 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                            data-aos-duration="800"
                        >
                            <div className="p-6 flex flex-col flex-1">
                                <div className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2 text-center">{t.name}</div>
                                <div className="italic text-gray-700 dark:text-gray-300 mb-4 text-center">"{t.feedback}"</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-auto">Course: {t.course}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* End Testimonials Section */}
        </div>
    </div>
);

export default SlideCourses;