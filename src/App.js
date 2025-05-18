import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { googleClientId } from './constants';
import Loading from './pages/Loading';

// Public Pages
const Landing = lazy(() => import('./pages/landing'));
const SignIn = lazy(() => import('./pages/signin'));
const SignUp = lazy(() => import('./pages/signup'));
const ForgotPassword = lazy(() => import('./pages/forgotpassword'));
const ResetPassword = lazy(() => import('./pages/resetpassword'));
const Home = lazy(() => import('./pages/home'));
const Create = lazy(() => import('./pages/create'));
const Topics = lazy(() => import('./pages/topics'));
const Course = lazy(() => import('./pages/course'));
const Certificate = lazy(() => import('./pages/certificate'));
const Profile = lazy(() => import('./pages/profile'));
const Pricing = lazy(() => import('./pages/pricing'));
const Features = lazy(() => import('./pages/features'));
const About = lazy(() => import('./pages/about'));
const Payment = lazy(() => import('./pages/payment'));
const Success = lazy(() => import('./pages/success'));
const Manage = lazy(() => import('./pages/manage'));
const Successful = lazy(() => import('./pages/successful'));
const Failed = lazy(() => import('./pages/failed'));
const Contact = lazy(() => import('./pages/contact'));
const Shareable = lazy(() => import('./pages/shareable'));
const Exam = lazy(() => import('./pages/exam'));
const TermsPolicy = lazy(() => import('./pages/termspolicy'));
const PrivacyPolicy = lazy(() => import('./pages/privacypolicy'));
const CancelPolicy = lazy(() => import('./pages/cancelpolicy'));
const RefundPolicy = lazy(() => import('./pages/refundpolicy'));
const BillingPolicy = lazy(() => import('./pages/billingpolicy'));
const Pending = lazy(() => import('./pages/pending'));
const Error = lazy(() => import('./pages/error'));

// Admin Pages
const DashBoard = lazy(() => import('./admin/dashboard'));
const Users = lazy(() => import('./admin/users'));
const Courses = lazy(() => import('./admin/courses'));
const PaidUsers = lazy(() => import('./admin/paidusers'));
const Admins = lazy(() => import('./admin/admins'));
const Contacts = lazy(() => import('./admin/contacts'));
const Terms = lazy(() => import('./admin/terms'));
const Privacy = lazy(() => import('./admin/privacy'));
const Cancellation = lazy(() => import('./admin/cancellation'));
const Refund = lazy(() => import('./admin/refund'));
const Billing = lazy(() => import('./admin/billing'));

function App() {

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
    <Router>
      <div>
        <ToastContainer
          limit={3}
          progressClassName={sessionStorage.getItem('darkMode') === 'true' ? "toastProgressDark" : "toastProgress"}
          bodyClassName={sessionStorage.getItem('darkMode') === 'true' ? "toastBodyDark" : "toastBody"}
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={sessionStorage.getItem('darkMode') === 'true' ? 'dark' : 'light'}
        />
        <Suspense fallback={<Loading/>}>
          <Routes>
            {/* Main App */}
            <Route path="/" exact element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/forgot' element={<ForgotPassword />} />
            <Route path='/reset-password/:token' element={<ResetPassword />} />
            <Route path='/home' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/course' element={<Course />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/features' element={<Features />} />
            <Route path='/about' element={<About />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/success' element={<Success />} />
            <Route path='/subscription' element={<Manage />} />
            <Route path='/successful' element={<Successful />} />
            <Route path='/failed' element={<Failed />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/terms' element={<TermsPolicy />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            <Route path='/cancellation' element={<CancelPolicy />} />
            <Route path='/refund' element={<RefundPolicy />} />
            <Route path='/billing' element={<BillingPolicy />} />
            <Route path='/pending' element={<Pending />} />
            <Route path='/shareable' element={<Shareable />} />
            <Route path='/exam' element={<Exam />} />
            {/* Admin Panel */}
            <Route path='/dashBoard' element={<DashBoard />} />
            <Route path='/users' element={<Users />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/paid' element={<PaidUsers />} />
            <Route path='/admins' element={<Admins />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/editterms' element={<Terms />} />
            <Route path='/editprivacy' element={<Privacy />} />
            <Route path='/editcancellation' element={<Cancellation />} />
            <Route path='/editrefund' element={<Refund />} />
            <Route path='/editbilling' element={<Billing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
