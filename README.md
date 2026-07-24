## 🚀 About the Project

This project is a highly interactive, modern, and responsive developer portfolio. Designed with a focus on user experience and visual aesthetics, it leverages glassmorphism, dynamic animations, and dark-mode optimizations to provide a premium feel. 

The portfolio includes sections for an About me intro, Experience, Skills, dynamic Projects, Certificates, a dedicated Resume viewer, and a fully functional Contact form powered by EmailJS.

---

## ✨ Features

- 🎨 **Modern UI Design**: Premium glassmorphism effects, a sleek dark theme, and smooth gradients.
- 📱 **Fully Responsive Layout**: Seamless experience across mobile, tablet, and desktop devices.
- 🎬 **Smooth Scroll Animations**: Engaging scroll-triggered animations powered by Framer Motion.
- 🌌 **Interactive Backgrounds**: Captivating particle and animated backgrounds.
- 💼 **Comprehensive Sections**: Includes Hero, About, Experience, Skills, Projects, Certificates, and Github Stats.
- 🔍 **Dynamic Project Filtering**: Easily sort and find projects by category or tech stack.
- ⚡ **GitHub API Integration**: Automatically fetches and showcases real-time GitHub profile stats.
- 📧 **Serverless Contact Form**: Direct email communication using EmailJS.
- 📄 **Resume Section**: Dedicated resume viewer and download capabilities.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion, React Type Animation
- **Icons:** React Icons
- **API Calls:** Axios (GitHub API integration)
- **Form Handling:** EmailJS
- **Linting:** Oxlint
- **Deployment:** Vercel-ready

---

## 📂 Folder Structure

```text
src/
├── assets/         # Static assets like images and resumes
├── components/     # Reusable React components (Hero, About, Projects, etc.)
├── utils/          # Helper functions and configurations (e.g., GitHub API calls)
├── App.jsx         # Main application component routing
├── index.css       # Global styles and Tailwind configuration
└── main.jsx        # Application entry point
```

---

## 💻 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed on your machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/RachelRajkumar/Personal-Portfolio.git
   ```
2. Navigate to the project directory
   ```sh
   cd Personal-Portfolio
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Configuration:
   - Update your GitHub username in `src/components/Github.jsx` if necessary.
   - Update `src/components/Contact.jsx` with your EmailJS credentials (Service ID, Template ID, Public Key).
   - Place your resume in `public/assets/resume/resume.pdf` (or `src/assets/resume/resume.pdf`).
   - Replace project images with actual screenshots in `src/components/Projects.jsx`.

5. Start the development server
   ```sh
   npm run dev
   ```

---

## 🚀 Deployment

The easiest way to deploy this portfolio is using Vercel.

1. Push your final code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New Project** and import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework.
5. Click **Deploy**. Your premium portfolio will be live in minutes!

---

## 📬 Contact

**Rachel Rajkumar** - [LinkedIn](https://www.linkedin.com/in/rachel-r-176480343/) - [GitHub](https://github.com/RachelRajkumar)


---


