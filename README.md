# 🏋️‍♂️ Gymate - Premium Gym & Fitness Web Application

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

Gymate is a modern, responsive, and feature-rich single-page web application designed for local gyms and fitness centers. It provides an intuitive interface for users to explore gym facilities, check membership pricing, calculate their BMI, view class schedules, read the latest fitness blogs, and securely register/login for personal accounts.

👉 **[Live Demo](https://gym-website-ten-topaz.vercel.app)**

---

## 🌟 Key Features

* **⚡ Interactive BMI Calculator**: Real-time Body Mass Index (BMI) calculator with dynamic feedback helping users assess their physical metrics.
* **📅 Class Schedule Board**: Interactive weekly timetable detailing daily workout routines, classes, and trainer assignments.
* **🔐 Secure Authentication**: Full user signup and login features powered securely by **Firebase Authentication**.
* **📋 Pricing Plans**: Structured membership options (Beginner, Intermediate, Elite) with feature breakdowns.
* **✨ Dynamic Gallery**: Interactive gallery showing off gym facilities, equipment, and training sessions.
* **📞 Contact & Location**: Contact forms along with physical address details, phone numbers, and operating hours.
* **📱 Responsive Layout**: Fully responsive, mobile-first UI with smooth transitions and hover micro-animations.

---

## 🛠️ Tech Stack & Dependencies

* **Frontend Framework**: [React.js](https://reactjs.org/) (Create React App)
* **Styling & Design System**: [Tailwind CSS](https://tailwindcss.com/) for fluid, modern, utility-first styling.
* **Routing**: [React Router v6](https://reactrouter.com/) for seamless page navigation.
* **Database & Auth**: [Firebase](https://firebase.google.com/) (Auth, Firestore).
* **Carousel Components**: `react-responsive-carousel` for sliding banners.
* **Deployments**: [Vercel](https://vercel.com/) for lightning-fast Edge CDN hosting.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/Sanskar1431/Gym_website.git
cd Gym_website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Firebase
Create a `.env` file or update `src/firebase.js` with your Firebase project configurations:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Run Local Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 6. Build for Production
To create an optimized production build in the `build` folder:
```bash
npm run build
```

---

## 🌐 Deployment to Vercel

The application is deployed directly to **Vercel** with optimized builds:

```bash
# Link and deploy with Vercel CLI
npx vercel --prod
```

---

## 📄 License
This project is open-sourced and available under the MIT License. Developed with 💻 and 🏋️‍♂️.
