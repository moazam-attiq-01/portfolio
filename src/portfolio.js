/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Moazam Attiq",
  title: "Hi, Moazam this side",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JAVA / JavaScript / React.js / Node.js / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/moazam-attiq-01/",
  linkedin: "https://www.linkedin.com/in/moazam-attiq01/",
  gmail: "moazam498.mam@gmail.com",
  facebook: "https://www.facebook.com/the.moazam14",
  instagram: "https://www.instagram.com/the_moazam14/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK I CAN WORK WITH EASE",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "mongo-db",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GIFT University",
      logo: require("./assets/images/giftLogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "December 2022 - Present",
      desc: "Ranked top 10% in the program with a CGPA of 3.77. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Learned about different ecosystems and environments",
        "Got familiar with web and native development"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/pgcLogo.png"),
      subHeader: "Intermediate in Pre-Engineering",
      duration: "October 2020 - June 2022",
      desc: "Passed the degree with 72% marks.",
      descBullets: [
        "Gathered info about the computers, their usage, working during my free time and interest."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Project Consultant & Software Support",
      company: "Self-employed",
      companylogo: require("./assets/images/freelancerLogo.png"), // Use any placeholder image or your own logo
      date: "Ongoing",
      desc: "Offering expert consulting in full-stack web development, database management, DSA, and software documentation for academic and freelance projects.",
      descBullets: [
        "Assist with projects involving HTML, Tailwind CSS, PHP, MySQL, and Java.",
        "Provide end-to-end software support, from installation to configuration.",
        "Build strong client relationships through timely and professional delivery."
      ]
    },
    {
      role: "Mentor / Peer Project Leader",
      company: "GIFT University",
      companylogo: require("./assets/images/giftLogo.png"), // Use your university logo if available
      date: "2023 – Present",
      desc: "Guided peers in team-based academic projects, promoting effective collaboration, clean coding practices, and timely delivery of course assignments.",
      descBullets: [
        "Led technical and documentation efforts for university course projects.",
        "Improved team productivity by enforcing software engineering best practices."
      ]
    },
    {
      role: "Project Leader – Course Projects",
      company: "GIFT University",
      companylogo: require("./assets/images/giftLogo.png"),
      date: "2023 – Present",
      desc: "Oversaw end-to-end development and documentation of software engineering course projects like Railway Ticketing System, Banking Application, and Vehicle Repair System.",
      descBullets: [
        "Managed back-end and UI/UX design using PHP, MySQL, and Figma.",
        "Produced detailed software documentation for system architecture and user workflows."
      ]
    }
  ]
  
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Personal Project Repositories 📁"),
  subtitle: "Hands-on academic and course-based projects developed across Web, Mobile, Networking, and Java domains.",

  achievementsCards: [
    {
      title: "Point of Sale System (Web Engineering)",
      subtitle:
        "A MERN stack-based POS application tailored for small-scale shop use. Includes inventory, billing, and refund tracking.",
      image: require("./assets/images/webProjectLogo.jpg"),
      imageAlt: "POS Logo",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/PointOfSaleSystem"
        }
      ]
    },
    {
      title: "Mobile File Sharing App – LabLink",
      subtitle:
        "React Native + Firebase based file sharing platform built for the Mobile Computing course. Supports file upload and real-time database sync.",
      image: require("./assets/images/reactLogo.png"),
      imageAlt: "LabLink App",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/LabLink"
        }
      ]
    },
    {
      title: "Matchmaking Web App",
      subtitle:
        "Web-based matchmaking platform using PHP, HTML, CSS, and JavaScript. Includes registration, matching algorithm, and dashboard UI.",
      image: require("./assets/images/codeLogo.png"),
      imageAlt: "Matchmaking Logo",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/Matchmaking_System"
        }
      ]
    },
    {
      title: "Railway Reservation System (Web Version)",
      subtitle:
        "A PHP and Tailwind CSS based reservation platform with real-time seat selection and route management.",
      image: require("./assets/images/trainLogo.png"),
      imageAlt: "Railway System",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/Railway_Reservation_System"
        }
      ]
    },
    {
      title: "University Networking (Cisco Packet Tracer)",
      subtitle:
        "Simulated university network infrastructure project built in Cisco Packet Tracer. Demonstrated subnetting, routing, and topology optimization.",
      image: require("./assets/images/networkLogo.png"),
      imageAlt: "Networking Project",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/University_Networking"
        }
      ]
    },
    {
      title: "Bank System Documentation (SRE)",
      subtitle:
        "Software Requirement Engineering documentation project for a fictional banking system. Includes SRS, ERD, and flow diagrams.",
      image: require("./assets/images/docsLogo.jpg"),
      imageAlt: "Bank Docs",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/Bank_System"
        }
      ]
    },
    {
      title: "Vehicle Management System (Java + DSA)",
      subtitle:
        "A command-line based Java project demonstrating file I/O and core data structures like linked lists and trees.",
      image: require("./assets/images/javaLogo.png"),
      imageAlt: "Java DSA",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/Vehicle_Management_System"
        }
      ]
    },
    {
      title: "University Management System (Java)",
      subtitle:
        "A mini terminal-based management system for university staff/students built using core Java.",
      image: require("./assets/images/javaLogo.png"),
      imageAlt: "Java App",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/University_Management_System"
        }
      ]
    },
    {
      title: "SmartTrack – SDLC Docs",
      subtitle:
        "A documentation-only project on railway system lifecycle, covering SDLC, use cases, and system diagrams.",
      image: require("./assets/images/docsLogo.jpg"),
      imageAlt: "SmartTrack Docs",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/SmartTrack"
        }
      ]
    },
    {
      title: "POS – SCD Documentation",
      subtitle:
        "Visual and design documentation for a POS system including SCD, flowcharts, and Figma UI wireframes.",
      image: require("./assets/images/docsLogo.jpg"),
      imageAlt: "POS Docs",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/moazam-attiq-01/Point_of_Sale_System"
        }
      ]
    }
  ],
  display: true
};




// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3047018018",
  email_address: "moazam498.mam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
