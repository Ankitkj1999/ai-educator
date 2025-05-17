# AiCourse Documentation

This is documentation on how to set up and deploy the AiCourse Web App on your hosting platform, customized with your brand name.

## Table of Contents
* [Requirement](#requirement)
* [Steps To Follow](#steps-to-follow)
* [Step 1 - Getting Started](#step-1---getting-started)
* [Step 2 - Set Up Website](#step-2---set-up-website)
* [Step 3 - Set Up Social Login](#step-3---set-up-social-login)
* [Step 4 - Set Up Payment](#step-4---set-up-payment)
* [Step 5 - Deploy](#step-5---deploy)
* [Step 6 - How to use Admin Panel](#step-6---how-to-use-admin-panel)
* [Step 7 - How to Update to New Version 4.0](#step-7---how-to-update-to-new-version-40)

---

<div id="section1"></div>
## Requirement

*   VS Code - [Free](https://code.visualstudio.com)
*   Node JS - [Free](https://nodejs.org/en)
*   GIT - [Free](https://git-scm.com/downloads)
*   MongoDB - [Free](https://www.mongodb.com/)
*   Gemini API - [Free](https://aistudio.google.com/app)
*   Github - [Free](https://github.com)
*   Unsplash - [Free](https://unsplash.com)
*   PayPal - [Free](https://www.paypal.com)
*   Paystack - [Free](https://www.paystack.com)
*   Flutterwave - [Free](https://www.flutterwave.com)
*   Google Login - [Free](https://g.co/kgs/hrq3q5m)
*   Facebook Login - [Free](https://developers.facebook.com)
*   Razorpay - [Free](https://razorpay.com)
*   Render.com - [Free](https://render.com)
*   Firebase Hosting (Optional) - [Free](https://firebase.google.com)
*   Any Other Web Hosting (Optional) - [Paid](https://firebase.google.com) (*Note: Link seems to be a placeholder or incorrect, points to Firebase*)

---

<div id="section11"></div>
## Steps To Follow

Follow these videos in order, step by step, to fully set up and install the website.

*   [Step 1 - Getting Started](#step-1---getting-started)
*   [Step 2 - Set Up Website](#step-2---set-up-website)
*   [Step 3 - Set Up Social Login](#step-3---set-up-social-login)
*   [Step 4 - Set Up Payment](#step-4---set-up-payment)
*   [Step 5 - Deploy](#step-5---deploy)
*   [Step 6 - How to use Admin Panel](#step-6---how-to-use-admin-panel)

---

<div id="section2"></div>
## Step 1 - Getting Started

In this video, I will show you how to download the required software to set up the website.

[![YouTube video player](https://img.youtube.com/vi/lel_JQhjHLw/0.jpg)](https://www.youtube.com/watch?v=lel_JQhjHLw)
> Watch Video: [Getting Started](https://www.youtube.com/watch?v=lel_JQhjHLw)

---

<div id="section3"></div>
## Step 2 - Set Up Website

In this video, I will show you how to set up website name, logo, set up payments etc.

[![YouTube video player](https://img.youtube.com/vi/Z_lRvyxWiVU/0.jpg)](https://www.youtube.com/watch?v=Z_lRvyxWiVU)
> Watch Video: [Set Up Website](https://www.youtube.com/watch?v=Z_lRvyxWiVU)

---

<div id="section4"></div>
## Step 3 - Set Up Social Login

In this video, I will show you how to set up payment methods flutterwave and social login (Google & Facebook).

[![YouTube video player](https://img.youtube.com/vi/s3er-DFHZVk/0.jpg)](https://www.youtube.com/watch?v=s3er-DFHZVk)
> Watch Video: [Set Up Social Login](https://www.youtube.com/watch?v=s3er-DFHZVk)

---

<div id="section5"></div>
## Step 4 - Set Up Payment

In this video, I will show you how to set up payment methods stripe and paystack.

[![YouTube video player](https://img.youtube.com/vi/rXzup0AbSWM/0.jpg)](https://www.youtube.com/watch?v=rXzup0AbSWM)
> Watch Video: [Set Up Payment](https://www.youtube.com/watch?v=rXzup0AbSWM)

---

<div id="section6"></div>
## Step 5 - Deploy

In this video, I will show you how to deploy the server and how to upload the website on web hosting & firebase hosting.

[![YouTube video player](https://img.youtube.com/vi/uLIDcDZkkKg/0.jpg)](https://www.youtube.com/watch?v=uLIDcDZkkKg)
> Watch Video: [Deploy](https://www.youtube.com/watch?v=uLIDcDZkkKg)

---

<div id="section7"></div>
## Step 6 - How to use Admin Panel

In this video, I will show you how to use admin panel.

[![YouTube video player](https://img.youtube.com/vi/Z_lRvyxWiVU/0.jpg)](https://www.youtube.com/watch?v=Z_lRvyxWiVU&start=1413)
> Watch Video: [How to use Admin Panel (starts at 23:33)](https://www.youtube.com/watch?v=Z_lRvyxWiVU&start=1413)

---

<div id="section23"></div>
## Step 7 - How to Update to New Version 4.0

You only need to follow this step if you are updating from version 3.0 or later to the new version 4.0. Otherwise, you can skip this step.

To update your existing source code, simply copy these files from the provided path of the new source code and paste them into the corresponding path of your existing source code. After that, update your `server.js` file on GitHub and your source code on your hosting platform in the same way as shown above. Once done, your website will be updated to version 4.0.

Here are the paths to the files that need to be copied and updated in your existing source code:

*   `\AiCourse v4.0\server\server.js`
*   `\AiCourse v4.0\src\admin\components\adminsidebar.js`
*   `\AiCourse v4.0\src\admin\components\adminstable.js`
*   `\AiCourse v4.0\src\components\landing\slideFour.js`
*   `\AiCourse v4.0\src\components\landing\slideOne.js`
*   `\AiCourse v4.0\src\components\landing\slideSix.js`
*   `\AiCourse v4.0\src\components\landing\slideTwo.js`
*   `\AiCourse v4.0\src\components\chatWidget.js`
*   `\AiCourse v4.0\src\components\notesWidget.js`
*   `\AiCourse v4.0\src\components\pricing.js`
*   `\AiCourse v4.0\src\components\usercourses.js`
*   `\AiCourse v4.0\src\pages\certificate.js`
*   `\AiCourse v4.0\src\pages\course.js`
*   `\AiCourse v4.0\src\pages\create.js`
*   `\AiCourse v4.0\src\pages\exam.js`
*   `\AiCourse v4.0\src\pages\features.js`
*   `\AiCourse v4.0\src\pages\payment.js`
*   `\AiCourse v4.0\src\pages\pricing.js`
*   `\AiCourse v4.0\src\pages\profile.js`
*   `\AiCourse v4.0\src\pages\shareable.js`
*   `\AiCourse v4.0\src\pages\signin.js`
*   `\AiCourse v4.0\src\pages\topics.js`
*   `\AiCourse v4.0\src\res\img\certificate.png`
*   `\AiCourse v4.0\src\res\img\slideOne.png`
*   `\AiCourse v4.0\src\App.css`
*   `\AiCourse v4.0\src\App.js`
*   `\AiCourse v4.0\package.json`

---
<!-- TODO  -->
## TODO - Security Measures
Implement Password Hashing:
Securely hash user passwords (e.g., using bcrypt) before storing them in the userSchema. Never store plain text passwords.
Enhance Input Validation:
Add comprehensive validation (e.g., using a library like Joi or express-validator) for all incoming request bodies (req.body) and query parameters (req.query) to prevent errors and potential security issues.
Robust Error Handling & Logging:
Replace generic error responses (e.g., //DO NOTHING or basic 500 errors) with more specific error codes and messages. Implement detailed server-side logging for errors and critical operations (e.g., using winston or pino).
Refactor into Modular Routes/Controllers:
Break down the single large server.js file by grouping related routes (e.g., auth, payments, courses, admin) into separate router files and controller functions for better organization and maintainability.
Secure Webhook Endpoints:
Implement signature verification for all incoming webhooks (PayPal, Stripe, Razorpay, etc.) to ensure they originate from the trusted payment provider.
Implement Authorization & Access Control:
Ensure users can only access/modify their own data (e.g., courses, subscriptions). Strengthen admin-only endpoint protection beyond simple checks if not already robust.
Use Database Transactions:
Wrap related database operations (e.g., creating a user and admin entry simultaneously, or updating user type and subscription status) in transactions to ensure data consistency.
Environment Variable Management:
Double-check that all sensitive credentials, API keys, and environment-specific configurations (URLs, plan IDs, costs) are exclusively managed through .env files and process.env. Document required variables.
Create Swagger Documentation:
Automatically generate API documentation using Swagger or similar tools. This will help developers understand the available endpoints, request/response formats, and security requirements.