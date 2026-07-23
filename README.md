# Rachel's Professional Developer Portfolio

A premium, futuristic, and responsive developer portfolio built with React.js, Vite, Tailwind CSS, and Framer Motion. 

## Features
- **Modern UI**: Glassmorphism, dark theme, and smooth gradients.
- **Animations**: Scroll-triggered animations using Framer Motion.
- **GitHub Integration**: Automatically fetches and displays recent repositories and profile stats using the GitHub API.
- **Contact Form**: Integrated with EmailJS for direct email communication without a backend.
- **Responsive**: Fully responsive design for mobile, tablet, and desktop devices.

<<<<<<< HEAD
## Tech Stack
- Frontend: React.js (Vite), JavaScript ES6+
- Styling: Tailwind CSS (v4)
- Animations: Framer Motion, React Type Animation
- API Calls: Axios (GitHub API)
- Icons: React Icons
- Deployment: Vercel-ready
=======
- 🌌 Interactive Particle Background
- 🎨 Modern UI Design
- 📱 Fully Responsive Layout
- ✨ Smooth Scroll Animations
- 👤 About Me Section
- 💻 Skills Showcase
- 📂 Dynamic Projects Section
- 🔍 Project Filtering
- 📧 Contact Form
- 🔗 Social Media Links
- ⬆️ Scroll To Top Button
- ⚡ GitHub API Integration
>>>>>>> 36a5f353b4ffdd528ee585fe017b93d9de3e25a6

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Configuration**
   - Update `src/utils/githubAPI.js` with your specific GitHub username.
   - Update `src/components/Contact.jsx` with your EmailJS credentials (Service ID, Template ID, Public Key).
   - Place your resume in `public/assets/resume/resume.pdf` (or `src/assets/resume/resume.pdf`).
   - Replace project images with actual screenshots in `src/components/Projects.jsx`.

## Deployment to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click "Add New" -> "Project" and import your GitHub repository.
4. Vercel will automatically detect the **Vite** framework.
5. Click **Deploy**. Your premium portfolio will be live in minutes!
