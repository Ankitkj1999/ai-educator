import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import { FreeType, FreeCost, FreeTime, MonthType, MonthTime, MonthCost, YearType, YearCost, YearTime } from '../constants';
import PricingPlan from '../components/pricing';
import { GiCancel } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { FaInfinity } from "react-icons/fa6";
import { Button, Card } from 'flowbite-react';
import { useLocation, useNavigate } from 'react-router-dom';

const testimonials = [
    {
        name: "Aarav S.",
        feedback: "The flexible pricing allowed me to start learning without worrying about costs. Highly recommended!",
        course: "AI for Beginners"
    },
    {
        name: "Priya K.",
        feedback: "Upgrading my plan was seamless and the support team is fantastic. I love the course variety!",
        course: "Data Science Essentials"
    },
    {
        name: "Rahul M.",
        feedback: "Being able to cancel anytime gave me peace of mind. The platform is user-friendly and effective.",
        course: "Machine Learning Pro"
    }
];

// Animation hook for fade-in on scroll
function useFadeInOnScroll(ref) {
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const handleScroll = () => {
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                node.classList.add('fade-in-up');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);
}

const Pricing = () => {

    const { state } = useLocation();
    const { header } = state || false;

    const freeData = `{"type": "${FreeType}", "cost": "${FreeCost}", "time": "${FreeTime}", "one": "Generate 5 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "Lifetime access", "five": "Theory & Image Course", "six": "Course In 23+ Languages", "seven": "Ai Teacher Chat"}`;
    const parsedFreeData = JSON.parse(freeData);

    const monthData = `{"type": "${MonthType}", "cost": "${MonthCost}", "time": "/${MonthTime}", "one": "Generate 10 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "1 Month Access", "five": "Theory & Image Course", "six": "Course In 23+ Languages", "seven": "Ai Teacher Chat"}`;
    const parsedMonthData = JSON.parse(monthData);

    const YearData = `{"type": "${YearType}", "cost": "${YearCost}", "time": "/${YearTime}", "one": "Generate 10 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "1 Year Access", "five": "Theory & Image Course", "six": "Course In 23+ Languages", "seven": "Ai Teacher Chat"}`;
    const parsedYearData = JSON.parse(YearData);

    const navigate = useNavigate();

    function redirectCancel() {
        navigate("/cancellation");
    }

    function redirectRefund() {
        navigate("/refund");
    }

    function redirectBilling() {
        navigate("/billing");
    }

    function redirectContact() {
        navigate("/contact");
    }

    const data = [
        { question: 'What is our cancellation policy ?', answer: <p>You can read our cancellation policy from <p className='text-blue-800 underline' onClick={redirectCancel}>here</p></p> },
        { question: 'What is our refund policy ?', answer: <p>You can read our refund policy from <p className='text-blue-800 underline' onClick={redirectRefund}>here</p></p> },
        { question: 'What is our subscription and billing policy ?', answer: <p>You can read our subscription and billing policy from <p className='text-blue-800 underline' onClick={redirectBilling}>here</p></p> },
        { question: 'What are the available payment gateways ?', answer: 'Our platform supports multiple payment gateways, including PayPal, and Razorpay.' },
    ];

    const [expandedItem, setExpandedItem] = useState(null);

    const handleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    const style = {
        "root": {
            "base": "max-w-sm max-md:max-w-xs flex rounded-none border border-black bg-white shadow-none dark:border-white dark:bg-black m-4",
            "children": "flex h-full flex-col justify-center gap-3 p-5",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": "hover:bg-white dark:hover:bg-black"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-none",
                "on": "h-96 w-full rounded-none object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }

        }
    }

    const benefitsRef = useRef(null);
    useFadeInOnScroll(benefitsRef);

    return (
        <div className='h-screen flex flex-col'>
            <Header isHome={header} className="sticky top-0 z-50" />
            <div className='dark:bg-black flex-1'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <h1 className="text-6xl font-black mt-14 max-md:text-3xl dark:text-white">Pricing Plan</h1>
                    <p className="text-center text-black mt-6 max-w-2xl font-medium max-md:text-xs dark:text-white">
                        Choose the Perfect Plan for Your Success
                    </p>
                    <div className="lg:flex py-14 gap-8">
                        <div className="flex flex-col items-center justify-center lg:w-1/3 px-3 max-md:pt-4">
                            <div className="w-full max-w-xs h-full min-h-[560px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4">
                                <PricingPlan data={parsedFreeData} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center lg:w-1/3 px-3 max-md:pt-4">
                            <div className="w-full max-w-xs h-full min-h-[560px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4">
                                <PricingPlan data={parsedMonthData} />
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center lg:w-1/3 px-3 max-md:pt-4">
                            <div className="w-full max-w-xs h-full min-h-[560px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4">
                                <PricingPlan data={parsedYearData} />
                            </div>
                        </div>
                    </div>
                    <div
                        className="dark:bg-black pt-16 transition-opacity duration-1000 opacity-0"
                        ref={benefitsRef}
                        id="pricing-benefits"
                    >
                        <div className="flex items-center justify-center text-center">
                            <div className="text-4xl font-black dark:text-white max-md:text-2xl">Pricing Benefits</div>
                        </div>
                        <div className="lg:flex pt-10 max-md:py-14 gap-6">
                            <Card key={1} theme={style} className="benefit-card transition-transform duration-700 opacity-100">
                                <FaInfinity className="text-4xl max-md:text-3xl dark:text-white" />
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    Flexible Pricing
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>Tailor costs to usage needs for optimal budgeting flexibility</p>
                            </Card>
                            <Card key={2} theme={style} className="benefit-card transition-transform duration-700 opacity-100">
                                <FaRankingStar className="text-4xl max-md:text-3xl dark:text-white" />
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    Upgrade Anytime
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>Seamlessly scale plans to match evolving requirements at any moment</p>
                            </Card>
                            <Card key={3} theme={style} className="benefit-card transition-transform duration-700 opacity-100">
                                <GiCancel className="text-4xl max-md:text-3xl  dark:text-white" />
                                <h5 className='text-xl font-black tracking-tight text-black dark:text-white'>
                                    Cancel Subscription Anytime
                                </h5>
                                <p className='font-normal text-sm text-black dark:text-white'>Terminate subscription anytime, providing ultimate flexibility and user control</p>
                            </Card>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center flex-col px-6 max-md:px-2 pt-16">
                        <h1 className="text-4xl font-black dark:text-white max-md:text-2xl mb-10">Frequently asked questions</h1>
                        <ul>
                            {data.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <Button
                                        className='w-96 max-sm:max-w-xs mb-6 items-start justify-start text-start border-black dark:border-white dark:bg-black dark:text-white bg-white text-black font-bold rounded-none  enabled:hover:bg-white enabled:focus:bg-white enabled:focus:ring-transparent dark:enabled:hover:bg-black dark:enabled:focus:bg-black dark:enabled:focus:ring-transparent'
                                        onClick={() => handleExpand(index)}
                                    >
                                        {data[index].question}
                                    </Button>
                                    {expandedItem === index && (
                                        <div className='max-w-sm max-sm:max-w-xs mb-6 items-start justify-start text-start border-black dark:border-white dark:bg-black dark:text-white bg-white text-black font-normal rounded-none enabled:hover:bg-white enabled:focus:bg-white enabled:focus:ring-transparent dark:enabled:hover:bg-black dark:enabled:focus:bg-black dark:enabled:focus:ring-transparent'>
                                            {item.answer}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Testimonials Section */}
                    <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-gray-900 w-full">
                        <h2 className="text-4xl font-black dark:text-white max-md:text-2xl mb-10">Student Success Stories</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            {testimonials.map((t, idx) => (
                                <div
                                    key={idx}
                                    className="w-full max-w-xs min-h-[260px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 150}
                                    data-aos-duration="800"
                                >
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-2 text-center">{t.name}</div>
                                        <div className="italic text-gray-700 dark:text-gray-300 mb-4 text-center">"{t.feedback}"</div>
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 text-center mt-auto">Course: {t.course}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footers className="sticky bottom-0 z-50" />
        </div>
    );
};

export default Pricing;
