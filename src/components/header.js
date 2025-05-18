import React, { useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { name, serverURL, websiteURL } from '../constants';
import DarkModeToggle from './DarkModeToggle';
import LogoComponent from './LogoComponent';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios';

const Header = ({ isHome }) => {
  const storedTheme = sessionStorage.getItem('darkMode');
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (isHome && sessionStorage.getItem('uid') === null) {
      navigate("/signin");
    }
    async function dashboardData() {
      const postURL = serverURL + `/api/dashboard`;
      const response = await axios.post(postURL);
      sessionStorage.setItem('adminEmail', response.data.admin.email);
      if (response.data.admin.email === sessionStorage.getItem('email')) {
        setAdmin(true)
      }
    }
    if (sessionStorage.getItem('adminEmail')) {
      if (sessionStorage.getItem('adminEmail') === sessionStorage.getItem('email')) {
        setAdmin(true)
      }
    } else {
      dashboardData();
    }
  }, [isHome, navigate]);

  function redirectSignIn() {
    navigate("/signin");
  }
  function redirectAdmin() {
    sessionStorage.setItem('darkMode', false);
    const webURL = websiteURL;
    window.location.href = webURL + '/dashboard';
  }
  function redirectFeatures() {
    navigate("/features");
  }
  function redirectSignUp() {
    navigate("/signup");
  }
  function redirectHome() {
    navigate("/home");
  }
  function redirectGenerate() {
    navigate("/create");
  }
  function redirectProfile() {
    navigate("/profile");
  }
  function Logout() {
    sessionStorage.clear();
    showToast('Logout Successful');
    redirectSignIn();
  }
  function redirectPricing() {
    navigate('/pricing', { state: { header: true } });
  }
  function redirectPricingTwo() {
    navigate('/pricing', { state: { header: false } });
  }

  const showToast = async (msg) => {
    toast(msg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }

  // Theme-based styles
  const navBg =
    storedTheme === "true"
      ? "bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 border-b border-blue-400"
      : "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border-b border-blue-400";

  const linkBase =
    "transition-colors duration-200 border-b-0 font-medium mb-2 mt-2 px-4 py-2 rounded-lg";
  const linkLight =
    "text-blue-900 hover:bg-blue-200 hover:text-purple-700";
  const linkDark =
    "text-pink-100 hover:bg-blue-950 hover:text-pink-300";
  const btnBase =
    "font-bold px-6 py-2 rounded-lg transition-colors duration-200";
  const btnLight =
    "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600";
  const btnDark =
    "bg-gradient-to-r from-blue-700 to-pink-700 text-white hover:from-blue-800 hover:to-pink-800";

  return (
    <Flowbite>
      <Navbar fluid className={`py-3 ${navBg}`}>
        <Navbar.Brand href={websiteURL} className="ml-1 flex items-center gap-2">
          <LogoComponent isDarkMode={storedTheme} />
          <span className={`self-center whitespace-nowrap text-2xl font-black ${storedTheme === "true" ? "text-pink-100" : "text-blue-900"}`}>{name}</span>
        </Navbar.Brand>
        <div className="flex md:hidden justify-center items-center">
          <DarkModeToggle className='inline-flex items-center md:hidden' />
          <Navbar.Toggle className='inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-0 md:hidden' />
        </div>
        <Navbar.Collapse>
          <div className="hidden md:flex justify-center items-center">
            <DarkModeToggle />
          </div>
          <Navbar.Link
            className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
            onClick={isHome ? redirectPricingTwo : redirectPricing}
          >
            Pricing
          </Navbar.Link>
          <Navbar.Link
            className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
            onClick={redirectFeatures}
          >
            Features
          </Navbar.Link>
          {!isHome && (
            <>
              <Navbar.Link
                onClick={redirectHome}
                className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
              >
                Home
              </Navbar.Link>
              <Navbar.Link
                onClick={redirectProfile}
                className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
              >
                Profile
              </Navbar.Link>
              <Navbar.Link
                onClick={Logout}
                className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
              >
                Logout
              </Navbar.Link>
              {admin && (
                <Navbar.Link
                  className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
                  onClick={redirectAdmin}
                >
                  Admin
                </Navbar.Link>
              )}
              <Navbar.Link
                onClick={redirectGenerate}
                className={`${btnBase} ${storedTheme === "true" ? btnDark : btnLight} ml-2 !mt-0 !mb-0 !px-5 !py-2 !rounded-lg !shadow-md hover:scale-105`}
                as="button"
              >
                Generate Course
              </Navbar.Link>
            </>
          )}
          {isHome && (
            <>
              <Navbar.Link
                onClick={redirectSignIn}
                className={`${linkBase} ${storedTheme === "true" ? linkDark : linkLight}`}
              >
                SignIn
              </Navbar.Link>
              <Navbar.Link
                onClick={redirectSignUp}
                className={`${btnBase} ${storedTheme === "true" ? btnDark : btnLight} ml-2`}
              >
                SignUp
              </Navbar.Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export default Header;