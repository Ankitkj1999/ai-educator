import React, { useEffect } from 'react';
import Header from '../components/header';
import Footers from '../components/footers';
import SlideOne from '../components/landing/slideOne';
import SlideTwo from '../components/landing/slideTwo';
import SlideThree from '../components/landing/slideThree';
import SlideFour from '../components/landing/slideFour';
import SlideFive from '../components/landing/slideFive';
import SlideSix from '../components/landing/slideSix';
import SlideCourses from '../components/landing/slideCourses';
import { serverURL } from '../constants';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Animate.css for simple animations
import 'animate.css';

const Landing = () => {

    useEffect(() => {
        AOS.init({ once: false, duration: 800, offset: 100 });
        async function dashboardData() {
            const postURL = serverURL + `/api/policies`;
            const response = await axios.get(postURL);
            sessionStorage.setItem('TermsPolicy', response.data[0].terms);
            sessionStorage.setItem('PrivacyPolicy', response.data[0].privacy)
        }
        if (sessionStorage.getItem('TermsPolicy') === null && sessionStorage.getItem('PrivacyPolicy') === null) {
            dashboardData();
        }
    }, []);

    return (
        <>
            <Header isHome={false} data-aos="fade-down" />
            <div data-aos="fade-up">
                <SlideOne />
            </div>
            <div data-aos="fade-right">
                <SlideTwo />
            </div>
            <div data-aos="fade-left">
                <SlideThree />
            </div>
            <div data-aos="zoom-in-up">
                <SlideFour />
            </div>
            <div data-aos="fade-up">
                <SlideFive />
            </div>
            <div data-aos="fade-up">
                <SlideSix />
            </div>
            <div data-aos="zoom-in-up">
                <SlideCourses />
            </div>
            <Footers data-aos="fade-up" />
        </>
    );
};

export default Landing;