import axios from 'axios';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'RachelRajkumar'; 
const BASE_URL = 'https://api.github.com/users';

export const fetchGithubProfile = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${GITHUB_USERNAME}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching github profile (Rate limit or network error):", error.message);
        // Provide fallback data so the UI doesn't break when API is rate-limited
        return {
            login: GITHUB_USERNAME,
            avatar_url: 'https://avatars.githubusercontent.com/u/204484284?v=4',
            html_url: `https://github.com/${GITHUB_USERNAME}`,
            name: 'Rachel R',
            bio: 'Full Stack Developer & Computer Science Student',
        };
    }
};

const FALLBACK_REPOS = [
    {
        id: 1,
        name: "QueueFlow360",
        description: "Smart Queue, Appointment and Customer Service Management Platform.",
        html_url: "https://github.com/RachelRajkumar/QueueFlow360",
        homepage: "https://github.com/RachelRajkumar/QueueFlow360",
        language: "Java",
        updated_at: new Date().toISOString()
    },
    {
        id: 2,
        name: "Smart-Grocery-Planner",
        description: "Seamless grocery planning, real-time management and dynamic UI.",
        html_url: "https://github.com/RachelRajkumar/Smart-Grocery-Planner",
        homepage: "https://smart-grocery-planner-rho.vercel.app",
        language: "JavaScript",
        updated_at: new Date().toISOString()
    },
    {
        id: 3,
        name: "E-Commerce-Application",
        description: "Feature-rich e-commerce application built with HTML, CSS, JavaScript, and Django backend.",
        html_url: "https://github.com/RachelRajkumar",
        homepage: null,
        language: "Python",
        updated_at: new Date().toISOString()
    },
    {
        id: 4,
        name: "Java-Shopping-Cart",
        description: "Object-oriented Java shopping cart application with cart state management.",
        html_url: "https://github.com/RachelRajkumar",
        homepage: null,
        language: "Java",
        updated_at: new Date().toISOString()
    }
];

export const fetchGithubRepos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
        if (Array.isArray(response.data) && response.data.length > 0) {
            return response.data;
        }
        return FALLBACK_REPOS;
    } catch (error) {
        console.error("Error fetching github repos:", error.message);
        return FALLBACK_REPOS;
    }
};
