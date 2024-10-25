import defaultImage from '../resources/images/userImage.jpg'
import University from '../resources/images/University.png'
import Collage from '../resources/images/Collage.png'
import School from '../resources/images/School.png'
import Project1 from '../resources/images/projects/project1.png'
import Project2 from '../resources/images/projects/project2.png'
import Project3 from '../resources/images/projects/project3.png'

import html5Icon from '@iconify-icons/logos/html-5'
import css3Icon from '@iconify-icons/logos/css-3'
import jsIcon from '@iconify-icons/logos/javascript'
import reactIcon from '@iconify-icons/logos/react'
import djangoIcon from '@iconify-icons/logos/django'
import cplusplus from '@iconify-icons/logos/c-plusplus'

import {
    CodeRounded,
    FacebookRounded,
    GitHub,
    HomeRounded,
    Instagram,
    LinkedIn,
    Mail,
    SchoolRounded,
} from '@mui/icons-material'

export const userProfileDefaultData = {
    Name: 'Karthikeya Bhamidipati',
    Address: 'Kukatpally, Hyderabad',
    EmailID: 'karthikeyabh554@gmail.com',
    PhoneNo: '7799661893',
    Photo: defaultImage,
}

export const Eduction = [
    {
        title: 'B.Sc.(Hons.) Coumputer Science',
        logo: University,
        school: 'Sri Sathya Sai Institute of Higher Learning, Muddenahalli Campus',
        description:
            'Aquired a strong foundation in programming and web development, I honed my skills in Python, C, C++, Java, Django, Spring Boot, React, Node.js, and Express. Alongside maintaining a GPA of 8.1 (O grade), I actively participated in workshops to stay updated on the latest industry trends. My hands-on experience in the self-reliance departments of the hostel helped sharpen my leadership and problem-solving abilities, giving me a well-rounded edge in both technical and practical aspects.',
    },
    {
        title: 'Intermediate',
        logo: Collage,
        school: 'Sri Chaitanya Junior Collage',
        description:
            'During my intermediate education in the MPC (Maths, Physics, Chemistry) stream, I developed a strong affinity for mathematics, my favorite subject, while achieving an overall score of 94.6%. I also explored public speaking, enhancing my communication skills, and gained foundational knowledge in Sanskrit, broadening my linguistic abilities.',
    },
    {
        title: '10th Class',
        logo: School,
        school: 'P N M High School',
        description:
            'In my 10th grade, I achieved a perfect GPA of 10 while being introduced to the art of public speaking. I actively participated in the GeoMap competition and the Bhagavad Geeta Sloka chanting competition, reaching the state level in both. Additionally, I showcased my knowledge in the "Bharat Ko Jano" quiz competition, further fueling my passion for learning and competition.',
    },
]

export const IntrestedSubjects = [
    'DATA SCIENCE',
    'ARTIFICIAL INTELIGENCE',
    'MECHINE LEARNING',
    'WEB DEVOLEPMENT',
    'CYBERSECURITY',
    'UX/UI DESIGN',
]

export const IconTitleMap = {
    Home: <HomeRounded />,
    Academics: <SchoolRounded />,
    Projects: <CodeRounded />,
    'Social Profiles': <LinkedIn />,
}

export const DEFAULT_SIDE_MENU = [
    {
        title: 'Home',
        icon: IconTitleMap.Home,
        link: '/',
    },
    {
        title: 'Academics',
        icon: IconTitleMap.Academics,
        link: '/academics',
    },
    {
        title: 'Projects',
        icon: IconTitleMap.Projects,
        link: '/projects',
    },
    {
        title: 'Socials',
        icon: IconTitleMap['Social Profiles'],
        link: '/social-profile',
    },
]

export const SOCIAL_PROFILES = [
    {
        title: 'Instagram',
        icon: <Instagram fontSize="inherit" />,
        link: 'https://www.instagram.com/karthikeya_bhamidipati/',
        tagLine:
            'Take life as a Big-oh,ignoring the hardships,taking the good times you had.',
        username: 'Karthikeya Bhamidipati',
    },
    {
        title: 'Facebook',
        icon: <FacebookRounded fontSize="inherit" />,
        link: 'https://www.facebook.com/karthikeya.bhamidipati.005/',
        tagLine:
            '🌍Traveler, photographer, and web dev Passionate about coding, video editing, and capturing moments📸',
        username: 'Karthikeya Bhamidipati',
    },
    {
        title: 'LinkedIn',
        icon: <LinkedIn fontSize="inherit" />,
        link: 'https://www.linkedin.com/in/karthikeya-bhamidipati/',
        tagLine:
            'IIC Student Internship Coordinator | Cybersecurity | Data Science | Web Development',
        username: 'KARTHIKEYA BHAMIDIPATI',
    },
    {
        title: 'GitHub',
        icon: <GitHub fontSize="inherit" />,
        link: 'https://github.com/karthikeya-bhamidipati',
        tagLine:
            '👋Web developer passionate about creating dynamic applications skilled in Django, Node.js, React, HTML, CSS, JavaScript, and Spring Boot. Exploring data science',
        username: 'karthikeya-bhamidipati',
    },
    {
        title: 'Mail',
        icon: <Mail fontSize="inherit" />,
        link: `mailto:${userProfileDefaultData.EmailID}`,
        tagLine:
            'Got questions, ideas, or just want to chat? Slide into my inbox — I am just an email away!',
        username: 'KARTHIKEYA BHAMIDIPATI',
    },
]

export const PROJECTS_DATA = [
    {
        image: Project1,
        avatar: [html5Icon, reactIcon, css3Icon, jsIcon],
        name: 'Chatty',
        links: [
            {
                name: 'Chatty',
                link: 'https://chatty-frontend-v05.vercel.app/login',
            },
            {
                name: 'GitHub',
                link: 'https://github.com/karthikeya-bhamidipati/chatty-frontend',
            },
        ],
        description:
            'Developed a real-time chat app using the MERN stack, with sockets enabling instant communication between users. This project showcases dynamic, real-time messaging features and is fully deployed on Vercel. As my second project, it highlights the seamless integration of web technologies for a responsive and interactive user experience.',
    },
    {
        image: Project2,
        avatar: [djangoIcon, html5Icon, css3Icon],
        name: 'Studybud',
        links: [
            {
                name: 'GitHub',
                link: 'https://github.com/karthikeya-bhamidipati/studybud-trial',
            },
            {
                name: 'Original',
                link: 'https://github.com/divanov11/StudyBud',
            },
        ],
        description:
            'Built a Django web application featuring CRUD (Create, Read, Update, Delete) operations, utilizing Django Rest Framework for API integration. This project, inspired by Denis Ivy, serves as my first venture into web development. It includes a fully functional REST API that supports API calls for data interaction, providing seamless backend communication.',
    },
    {
        image: Project3,
        avatar: [cplusplus],
        name: 'HSBC Command Line App',
        links: [
            {
                name: 'GitHub',
                link: 'https://github.com/karthikeya-bhamidipati/HSBC_c-plusplus_MiniProject',
            },
        ],
        description:
            'Developed a C++ command-line application using file handling techniques to manage financial transactions. The app functions with a file-based database to store and retrieve user data and transaction histories. Key features include user moderation with role-based access for admins and different departments. Each user is authenticated via password-protected logins, ensuring security and proper access control.',
    },
]
