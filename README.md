# Portfolio Project

This is a portfolio website built using React, Material UI, and Joy UI. It showcases personal projects, social profiles, academic background, and a downloadable resume.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Scripts](#scripts)
4. [Packages Used](#packages-used)
5. [Installation](#installation)
6. [Running the Project](#running-the-project)
7. [Functionality Overview](#functionality-overview)
8. [Additional Requirements](#additional-requirements)

## Project Overview

A responsive portfolio website showcasing projects, social links, and an academic timeline.

## Directory Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── Karthikeya_Bhamidipati_Resume.pdf
│   ├── LOGO.jpeg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── Dashbord.jsx
│   │   ├── Home.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Projects.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   └── navSlice.js
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── dashbord.css
│   │   │   ├── home.css
│   │   │   ├── profile.css
│   │   │   ├── projects.css
│   │   │   └── shared.css
│   │   └── images/
│   │       └── projects/
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── pakage.json
└── README.md
```

## Scripts

```bash
npm start
```

Runs the app in development mode

```bash
npm run build
```

Builds the app for production

```bash
npm run test
```

Runs tests

```bash
npm run lint
```

Checks code quality

## Packages Used

React
Material UI
Joy UI
React Router
Redux Toolkit
Typewriter-effect
Axios

## Installation

Clone the repository:

```bash
git clone https://github.com/karthikeya-bhamidipati/PorfolioProject.git
```

Navigate to the project directory:

```bash
cd PorfolioProject
```

Install dependencies:

```bash
npm install
```

## Running the Project

After installation, run the project locally:

```bash
npm start
```

## Functionality Overview

Home Page: Personalized greeting with a resume download button.
Profile Page: Links to social profiles.
Projects Page: Grid of personal projects with descriptions.
Academics Page: Timeline of educational background.
404 Page: Custom error page with user data fetch.

## Additional Requirements

Ensure Node.js and npm are installed.
Place your resume (Karthikeya_Bhamidipati_Resume.pdf) in the public directory for download functionality.
