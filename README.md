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
## Backend TODOs - Security, Refactoring & Best Practices

### Security Measures

*   **Implement Password Hashing:**
    *   [ ] Securely hash user passwords (e.g., using `bcrypt`) before storing them in the `userSchema`. **Never store plain text passwords.**
*   **Enhance Input Validation:**
    *   [ ] Add comprehensive validation (e.g., using a library like `Joi` or `express-validator`) for all incoming request bodies (`req.body`) and query parameters (`req.query`) to prevent errors, malformed data, and potential injection vulnerabilities.
*   **Secure Webhook Endpoints:**
    *   [ ] Implement signature verification for all incoming webhooks (PayPal, Stripe, Razorpay, etc.) to ensure they originate from the trusted payment provider and haven't been tampered with.
*   **Implement Authorization & Access Control (RBAC/ABAC):**
    *   [ ] Ensure users can only access/modify their own data (e.g., personal courses, subscriptions).
    *   [ ] Strengthen admin-only endpoint protection beyond simple checks, potentially using middleware to verify admin roles.
*   **Environment Variable Management:**
    *   [ ] Double-check that *all* sensitive credentials (database URIs, API keys, email passwords, payment gateway secrets), and environment-specific configurations (URLs, plan IDs, costs) are exclusively managed through `.env` files and accessed via `process.env`.
    *   [ ] Create a `.env.example` file to document required environment variables without committing actual secrets.
*   **Set Security HTTP Headers:**
    *   [ ] Implement security-enhancing HTTP headers (e.g., using a library like `helmet`) to protect against common web vulnerabilities like XSS, clickjacking, etc. (e.g., `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`).
*   **Implement Basic Rate Limiting:**
    *   [ ] Add rate limiting (e.g., using `express-rate-limit`) to API endpoints, especially authentication and resource-intensive ones, to prevent abuse and DoS attacks.
*   **Sanitize User-Generated Content for Output:**
    *   [ ] If displaying user-provided content (like notes or course content directly input by users) back to other users or in HTML, ensure it's properly sanitized to prevent XSS attacks. (Note: `showdown` for Markdown to HTML needs careful configuration if the Markdown source is untrusted).

### Refactoring & Maintainability

*   **Refactor into Modular Routes/Controllers:**
    *   [ ] Break down the single large `server.js` file by grouping related routes (e.g., authentication, payments, courses, admin) into separate router files (`routes/auth.js`, `routes/payment.js`, etc.).
    *   [ ] Move business logic for each route into corresponding controller functions (`controllers/authController.js`, etc.) for better organization and testability.
*   **Use Database Transactions:**
    *   [ ] Wrap related database operations (e.g., creating a user and admin entry simultaneously, or updating user type and subscription status after a successful payment) in Mongoose transactions to ensure data atomicity and consistency.
*   **Consistent and Specific Error Handling:**
    *   [ ] Replace generic error responses (e.g., `//DO NOTHING` or basic 500 errors) with more specific HTTP status codes and meaningful JSON error messages.
    *   [ ] Implement a centralized error handling middleware.
*   **Detailed Server-Side Logging:**
    *   [ ] Implement detailed server-side logging for requests, errors, and critical operations (e.g., using a library like `winston` or `pino`). Include timestamps and relevant context.

### API & Documentation

*   **Create/Generate API Documentation (e.g., Swagger/OpenAPI):**
    *   [ ] Document all API endpoints, including request/response formats, expected parameters, authentication requirements, and potential error codes.
    *   [ ] Consider using tools like Swagger/OpenAPI (e.g., with `swagger-jsdoc` and `swagger-ui-express`) to generate interactive API documentation.

This list provides a good roadmap for enhancing the backend's security, structure, and maintainability.





          
## Frontend TODOs - UI/UX, Performance & Best Practices

### UI/UX Enhancements

* **Landing Page Optimization:**
    * [ ] Redesign hero section with more engaging visuals and clearer value proposition
    * [ ] Add interactive course preview cards with hover effects
    * [ ] Implement smooth scroll animations between sections
    * [ ] Add testimonials section with student success stories
    * [ ] Create an animated features showcase

* **Course Interface Improvements:**
    * [ ] Implement a progress tracking sidebar showing course completion status
    * [ ] Add a collapsible course outline with current section highlight
    * [ ] Create better visual hierarchy for course content (headings, subheadings, content)
    * [ ] Add estimated time to complete for each section
    * [ ] Implement a floating action button for quick navigation

* **Chat Widget Enhancement:**
    * [ ] Add typing indicators for AI responses
    * [ ] Implement markdown support for better code formatting
    * [ ] Add code syntax highlighting
    * [ ] Create a collapsible chat history sidebar
    * [ ] Add ability to save important chat snippets

* **Notes Widget Upgrade:**
    * [ ] Add rich text editing capabilities
    * [ ] Implement auto-save functionality
    * [ ] Add tags/categories for better organization
    * [ ] Create a search function for notes
    * [ ] Add export options (PDF, Markdown)

### Performance Optimization

* **Code Splitting & Lazy Loading:**
    * [ ] Implement React.lazy() for route-based code splitting
    * [ ] Add Suspense boundaries with meaningful loading states
    * [ ] Lazy load images and heavy components
    * [ ] Implement infinite scrolling for long lists

* **State Management:**
    * [ ] Refactor global state management using Context API or Redux
    * [ ] Implement proper state persistence
    * [ ] Add error boundaries for better error handling
    * [ ] Optimize re-renders using React.memo and useMemo

### Accessibility & Best Practices

* **Accessibility Improvements:**
    * [ ] Add proper ARIA labels and roles
    * [ ] Ensure proper heading hierarchy
    * [ ] Implement keyboard navigation
    * [ ] Add screen reader support
    * [ ] Ensure sufficient color contrast

* **Component Architecture:**
    * [ ] Create a component library with storybook documentation
    * [ ] Implement proper prop-types or TypeScript interfaces
    * [ ] Add unit tests for critical components
    * [ ] Create reusable hooks for common functionality

* **Responsive Design:**
    * [ ] Implement mobile-first approach
    * [ ] Add proper breakpoints for all screen sizes
    * [ ] Optimize touch targets for mobile devices
    * [ ] Ensure consistent spacing across viewports

### Developer Experience

* **Code Quality:**
    * [ ] Set up ESLint with proper rules
    * [ ] Add Prettier for consistent code formatting
    * [ ] Implement pre-commit hooks for code quality
    * [ ] Add JSDoc comments for complex components

* **Build & Deployment:**
    * [ ] Optimize build configuration for production
    * [ ] Implement proper environment variable management
    * [ ] Add build-time optimizations (tree shaking, minification)
    * [ ] Set up continuous integration/deployment pipeline

This TODO list provides a structured approach to improving the frontend of the AiCourse platform, focusing on user experience, performance, and maintainability. The tasks are organized by priority and impact, allowing for systematic implementation.
        