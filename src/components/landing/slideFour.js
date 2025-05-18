import React from "react";
import PricingPlan from "../pricing";
import { FreeType, FreeCost, FreeTime, MonthType, MonthTime, MonthCost, YearType, YearCost, YearTime } from '../../constants';

const SlideFour = () => {

    const freeData = `{"type": "${FreeType}", "cost": "${FreeCost}", "time": "${FreeTime}", "one": "Generate 5 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "Lifetime access", "five": "Theory & Image Course", "six": "Course In 23+ Languages", "seven": "Ai Teacher Chat"}`;
    const parsedFreeData = JSON.parse(freeData);

    const monthData = `{"type": "${MonthType}", "cost": "${MonthCost}", "time": "/${MonthTime}", "one": "Generate 10 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "1 Month Access", "five": "Theory & Image Course", "six": "Course In 23+ Languages", "seven": "Ai Teacher Chat"}`;
    const parsedMonthData = JSON.parse(monthData);

    const YearData = `{"type": "${YearType}", "cost": "${YearCost}", "time": "/${YearTime}", "one": "Generate 10 Sub-Topics", "two": "Create Unlimited Course", "three": "Video & Theory Course", "four": "1 Year Access", "five": "Theory & Image Course", "six": "Course In 23+ Languages", "seven": "Ai Teacher Chat"}`;
    const parsedYearData = JSON.parse(YearData);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 py-14">
            <div className="w-full max-w-7xl px-2 md:px-10 py-10 relative flex flex-col items-center">
                {/* Decorative Gradient Circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full blur-2xl opacity-60 z-0"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-100 dark:bg-purple-900 rounded-full blur-2xl opacity-60 z-0"></div>
                {/* Main Content */}
                <div className="flex flex-col items-center z-10 w-full md:w-5/6 mx-auto">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight drop-shadow-lg text-center">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">Pricing</span>
                    </h2>
                    <p className="py-3 font-medium text-lg md:text-xl max-md:text-xs dark:text-white text-center mb-10">
                        Choose the right plan for your education and future
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-10 justify-center items-stretch">
                        {/* All boxes have the same min-h, h-full, and max-w for equal size */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full max-w-sm h-full min-h-[560px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4">
                                <PricingPlan data={parsedFreeData} />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full max-w-xs h-full min-h-[560px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4">
                                <PricingPlan data={parsedMonthData} />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-full max-w-xs h-full min-h-[560px] flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4">
                                <PricingPlan data={parsedYearData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideFour;
