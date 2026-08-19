// masterData.js
// Combining new master data JSON and detailed existing constants

import defaultImage from '../resources/images/userImage.png'
import Project1 from '../resources/images/projects/project1.png'
import Project2 from '../resources/images/projects/project2.png'
import Project3 from '../resources/images/projects/project3.png'
import Project4 from '../resources/images/projects/project4.png'
import Project5 from '../resources/images/projects/project5.png'
import University from '../resources/images/University.png'
import PgUniversity from '../resources/images/pg_university.jpg'
import Collage from '../resources/images/Collage.png'
import School from '../resources/images/School.png'

import html5Icon from '@iconify-icons/logos/html-5'
import css3Icon from '@iconify-icons/logos/css-3'
import jsIcon from '@iconify-icons/logos/javascript'
import reactIcon from '@iconify-icons/logos/react'
import djangoIcon from '@iconify-icons/logos/django'
import cplusplus from '@iconify-icons/logos/c-plusplus'
import pythonIcon from '@iconify-icons/logos/python'
import dockerIcon from '@iconify-icons/logos/docker-icon'

export const personal_information = {
    name: 'KARTHIKEYA BHAMIDIPATI',
    location: 'Hyderabad/Pune, India',
    email: 'karthikeyabh554@gmail.com',
    phone: '+91 7799661893',
    linkedin: 'https://www.linkedin.com/in/karthikeya-bhamidipati/',
    github: 'https://github.com/karthikeya-bhamidipati',
    portfolio: 'https://karthikeyabhamidipati.vercel.app/',
    photo: defaultImage,
}

export const career_objectives =
    "Detail-oriented Computer Science graduate pursuing a Master's in Data Science and Spatial Analytics with expertise in Artificial Intelligence, GeoAI, Remote Sensing, and Geospatial Data Analytics. Skilled in developing end-to-end AI applications involving deep learning, computer vision, spatial data processing, and full-stack software development using PyTorch, TorchGeo, FastAPI, Next.js, and modern GIS technologies. Passionate about building scalable geospatial intelligence platforms for Earth Observation, environmental monitoring, and urban analytics through research-driven innovation and robust software engineering."

export const education = [
    {
        degree: 'M.Sc. Data Science and Spatial Analytics',
        score: '8.03 CGPA',
        duration: '2025 -- Present',
        institution: 'Symbiosis Institute of Geoinformatics, Pune',
        relevant_coursework:
            'Computer Vision, Machine Learning, Geospatial analytics, Google Earth Engine, ArcGIS Pro, Cybersecurity',
        logo: PgUniversity,
    },
    {
        degree: 'B.Sc. (Hons.) Computer Science',
        score: '8.12 CGPA',
        duration: '2025',
        institution:
            'Sri Sathya Sai Institute of Higher Learning, Muddenahalli',
        relevant_coursework:
            'Data Structures, Operating Systems, DBMS, Computer Networks, Software Engineering, Linux(Ubuntu)',
        logo: University,
    },
    {
        degree: 'Intermediate',
        score: '94.3%',
        duration: '2022',
        institution: 'Sri Chaitanya Junior kalasala [TSBIE]',
        logo: Collage,
    },
    {
        degree: 'Secondary Education',
        score: '10.0 GPA',
        duration: '2020',
        institution: 'P N M high School [TSBSE]',
        logo: School,
    },
]

export const skills_and_certifications = {
    skills: {
        'Programming Languages': [
            'C',
            'C++',
            'Python',
            'Java',
            'HTML',
            'CSS',
            'JavaScript',
            'LaTeX',
            'PL/pgSQL',
        ],
        'Geospatial Tools': [
            'Google Earth Engine',
            'Google Earth Pro',
            'ArcGIS Pro',
            'TorchGeo',
            'Rasterio',
        ],
        'Frameworks & Libraries': [
            'ReactJS',
            'Django',
            'ExpressJS',
            'NodeJS',
            'Spring Boot',
            'Material-UI (MUI)',
        ],
        Databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
        'Developer Tools': [
            'Git',
            'GitHub',
            'Visual Studio Code',
            'Jupyter Notebook',
        ],
        'Design & Multimedia': ['Canva', 'DaVinci Resolve'],
        'Deployment & Hosting': ['Vercel', 'Render', 'Microsoft Azure'],
    },
    certifications: [
        'Introduction to CSS3 – Umich (Feb 2024)',
        'Introduction to HTML5 – Umich (Dec 2023)',
        'Introduction to Cyber Attacks – NYU (Jun 2023)',
        'Introduction to Cybersecurity – Cisco (Oct 2024)',
        'Introduction to Data Science – Cisco (Jun 2023)',
        'Data Analytics Essentials – Cisco (Sep 2024)',
        'Web Development Bootcamp – Udemy (Sep 2024)',
        'Introduction to model context protocol – Anthropic (Oct 2025)',
        'Big Data Foundations – IBM (April 2026)',
    ],
}

export const experience = [
    {
        title: 'Software Engineer Intern',
        company: 'CYIENT',
        duration: 'May 2025 -- July 2025',
        description:
            'Designed and implemented a Tkinter-based GUI integrated with an OCR pipeline (Azure AI with tailored prompts) to extract chute-liner specifications with over 98% accuracy. Automated end-to-end Excel reporting for the sentiment analysis project using Pandas and XlsxWriter, reducing manual effort by 80% and enabling one-click dashboard generation. Conducted extensive manual testing of the chute-liner extraction workflow, including prompt engineering to optimize output accuracy. Performed thorough validation for the ZIPLY Excel workflows, ensuring accurate extraction and verification of T-blocks and associated information.',
    },
]

export const leadership_and_activities = [
    {
        role: 'Technical Head - Nirvai Club',
        description:
            'Led AI-focused initiatives, hackathons, and collaborative research-driven projects.',
    },
    {
        role: 'Placement Team Member - Symbiosis',
        description:
            'Managed LinkedIn/Meetup outreach and coordinated with industry professionals for placements.',
    },
    {
        role: 'Vice-President - Digital Enlightenment Club',
        description:
            'Conducted computer literacy programs for rural students, improving digital accessibility.',
    },
    {
        role: 'Student Internship Coordinator - IIC',
        description:
            'Streamlined internship processes and facilitated student-industry engagement.',
    },
    {
        role: 'Leader - Eco-Einsteins Club',
        description:
            'Led sustainability initiatives, reducing paper usage by 20% and improving waste management.',
    },
    {
        role: 'Editor - Multimedia Department',
        description: 'Produced 7+ videos, increasing campus engagement by 60%.',
    },
    {
        role: 'Team Lead - Insaight Department',
        description:
            'Led a 5-member team to publish campus magazine, increasing student contributions by 30%.',
    },
]

export const projects = [
    {
        title: 'GeoSentinel AI – Deep Learning for Remote Sensing',
        link: 'https://github.com/karthikeya-bhamidipati/GeoSentinel-AI',
        tech_stack: [
            'Python',
            'PyTorch',
            'TorchGeo',
            'FastAPI',
            'U-Net',
            'Next.js',
            'Docker',
        ],
        avatar: [pythonIcon, reactIcon, dockerIcon], // Placeholder avatars
        image: Project5,
        description:
            'Building an end-to-end geospatial intelligence platform integrating Sentinel-2 Earth Observation data, U-Net and DeepLabV3+, TorchGeo, FastAPI, and GIS analytics for land-cover segmentation, temporal change detection, benchmark evaluation, and interactive visualization.',
    },
    {
        title: 'CHATTY',
        link: 'https://github.com/karthikeya-bhamidipati/chatty-frontend',
        tech_stack: ['MERN Stack', 'Socket.io'],
        avatar: [html5Icon, reactIcon, css3Icon, jsIcon],
        image: Project1,
        description:
            'Engineered a real-time messaging web app with socket-based communication. Increased user engagement by 30%. Deployed frontend on Vercel and backend on Render. Developed a real-time chat app using the MERN stack, with sockets enabling instant communication between users. This project showcases dynamic, real-time messaging features.',
    },
    {
        title: 'HSBC Mini-Project',
        link: 'https://github.com/karthikeya-bhamidipati/HSBC_MiniProject',
        tech_stack: ['C++'],
        avatar: [cplusplus],
        image: Project3,
        description:
            'Developed a secure hostel management system using file handling and role-based access control. Focused on modularity, data integrity, and restricted access. Developed a C++ command-line application using file handling techniques to manage financial transactions. The app functions with a file-based database to store and retrieve user data and transaction histories.',
    },
    {
        title: 'CONTRLZ',
        link: 'https://github.com/karthikeya-bhamidipati/controlz',
        tech_stack: ['React', 'Spring Boot', 'MQTT', 'ESP01', '5V Relay'],
        avatar: [reactIcon],
        image: Project4,
        description:
            'Built an IoT-based hostel automation system enabling real-time control of lights and fans through a web dashboard. Enhanced energy efficiency and user convenience. The system integrates with a WeMos D1 Mini microcontroller and relay modules to toggle appliances ON/OFF, schedule operations, and provide real-time status updates.',
    },
    {
        title: 'Studybud',
        link: 'https://github.com/karthikeya-bhamidipati/studybud-trial',
        tech_stack: ['Django', 'Python', 'HTML', 'CSS'],
        avatar: [djangoIcon, html5Icon, css3Icon],
        image: Project2,
        description:
            'Built a Django web application featuring CRUD operations, utilizing Django Rest Framework for API integration. This project, inspired by Denis Ivy, serves as my first venture into web development. It includes a fully functional REST API that supports API calls for data interaction, providing seamless backend communication.',
    },
]

export const workshops_training_and_hackathons = [
    {
        title: 'HERE Technologies Geospatial Hackathon',
        description:
            'Developed a geospatial intelligence system for POI change detection in Singapore using OpenStreetMap as baseline and integrating multi-source data (TomTom, Foursquare). Implemented data standardization, spatial indexing, and semantic matching with AI-based scoring to detect new, closed, and anomalous locations. Gained hands-on experience in real-world geospatial pipelines, API integration, and rapid prototyping under time constraints.',
    },
    {
        title: 'GDG DevFest pune 2025',
        description:
            'Attended GDG DevFest 2025, gaining practical insights into AI agents, offline LLMs, Google ADK, and agent-driven architectures. Learned fundamentals of Flutter for cross-platform UI development and system design for AI solutions. Built awareness of responsible automation, human-centered AI, and emerging GenAI tools and workflows.',
    },
]

export const IntrestedSubjects = [
    'DATA SCIENCE',
    'ARTIFICIAL INTELLIGENCE',
    'MACHINE LEARNING',
    'DEEP LEARNING',
    'COMPUTER VISION',
    'REMOTE SENSING',
    'GEOGRAPHIC INFORMATION SYSTEMS (GIS)',
    'SPATIAL DATA ANALYTICS',
    'GEOSPATIAL INTELLIGENCE',
    'EARTH OBSERVATION',
    'FASTAPI DEVELOPMENT',
    'FULL-STACK SOFTWARE DEVELOPMENT',
    'WEB DEVELOPMENT',
    'CYBERSECURITY',
    'UX/UI DESIGN',
]
