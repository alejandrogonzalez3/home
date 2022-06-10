// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alejandro",
  middleName: "",
  lastName: "González",
  message: "Let's change the world. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/alejandrogonzalez3",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/alextabagon",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/alejandro-gonzalez-martinez/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/alextabagon17/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/alejandrogonzalez.png"),
  imageSize: 375,
  message:
    "Knowledge lover and new technologies discoverer. Master degree in Computer Engineering from the University of A Coruña. I appreciate always going out of my comfort zone in search of new challenges, always trying to reach the top giving the best of me.",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "alejandrogonzalez3",
  reposLength: 0,
  specificRepos: ["fishCare", "fishCare-backend", "fishCare-scripts", "home"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "HTML/CSS", value: 90 },
    { name: "Android", value: 70 },
    { name: "SQL", value: 75 },
    { name: "Java", value: 95 },
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Goal-Oriented", value: 70 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I always have my ears open to new offers! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "alejandro.gonzalez3@udc.es",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/nomasystems.png'),
      date: 'January 2020 - April 2020',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/trabe.png'),
      date: 'September 2020 - Present',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
