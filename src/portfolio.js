/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/home-first.json"; // Rename to your file name for custom animation

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
  username: "Hammad Hassan",
  title: "Hi, I'm Hammad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hmadhsan",
  linkedin: "https://www.linkedin.com/in/HammadHassan/",
  gmail: "HammadHassan70@gmail.com",
  gitlab: "https://dev.to/hmadhsan",
  facebook: "https://hmadhsan.hashnode.dev/",
  //medium: "https://medium.com/@HammadHassan",
  stackoverflow: "https://stackoverflow.com/users/10422806/Hammad-Hassan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly web and mobile applications using latest tech stack"
    ),
    emoji("⚡ Design highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
 
 
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
  
    {
      skillName: "mongo-db",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

 
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
       {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bingen University of Applied Sciences",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - Present",
      desc: "Learning following courses with specialization in AI",
      descBullets: [
        "AI, ML, System Analysis, Computer Vision, System Architecture, Data Mining",
      ]
    },
    {
      schoolName: "SMI University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - Aug 2019",
      desc: "Completed following main courses with high distinction",
      descBullets: ["Software Engineering, OOP, Programming Fundamentals, Database Systems, Machine Learning, Artificial Intelligence etc"],

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Qavi Technologies",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "July 2020 – Sep-2022",
      desc: "My responsibilities as a web and mobile software engineer were as follows",
      descBullets: [
        "Worked as a web and mobile application developer on different projects using JS stack like react, vue, node, next, nuxt and react native.",
        "Involved in writing maintainable web and mobile application level code to interact with Rest APIs along with unit testing.",
        "Involved in converting UI mocks into pixel perfect screen with mobile responsiveness."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Qavi Technologies",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Feb 2020 – June-2020",
      desc: "My responsibilities as a web and mobile software engineer were as follows",
      descBullets: [
        "Worked as a Front End Developer with backend team on a mobile application Islamic Media Entertainment and Web Application Nida- ul-Quran using React Native and Reactjs respectively.",
        "Participation in team scrums."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "MEAN 3",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Sep 2019 – Dec 2019",
      desc: "Worked as a software engineer intern where I had the responsibilities of building web pages and mobile application screens."
    },

    {
      role: "Freelancer (Web/Mobile)",
      company: "Fiverr",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2019 – Dec 2019",
      desc: "Worked as a freelance web and mobile application developer with several clients around the world and always got 5-star ratings and excellent reviews on my work."
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
  title: "Major Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/islamphobia.webp"),
      projectName: "Islamophobia Australia Official App",
      projectDesc: "The Islamophobia Australia Official App is to provide a platform for all Muslims living in Australia to report incidents of Islamophobia.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reportislamophobia.com.au/#/",
        
        },
        //  you can add extra buttons here.
        {
          name: 'Download Android App',
          url: 'https://play.google.com/store/apps/details?id=com.islamophobia'
        },
        {
          name: 'Download iOS App',
          url: 'https://apps.apple.com/app/id1531076195'
        }
      ]
    },
    {
      image: require("./assets/images/islamicMedia.webp"),
      projectName: "Islamic Media Entertainment",
      projectDesc: "Islamic Media Entertainment is the multi-media mobile appliction providing the public access to download and listen to hundreds of lectures on a variety of topics and themes by renowned local, national and international speakers.",
      footerLink: [
        {
          name: 'Download Android App',
          url: 'https://play.google.com/store/apps/details?id=com.islamicmediaaa&hl=en&gl=US'
        },
        {
          name: 'Download iOS App',
          url: 'https://apps.apple.com/us/app/islamic-media-entertainment/id1509062270?platform=iphone'
        },
      ]
    },
    {
      image: require("./assets/images/manafeth.webp"),
      projectName: "Manafeth",
      projectDesc: "Manafeth application built using React Native that provides detailed statistical data about the external trade of the Sultante in terms of imports, exports, and re-exports, as well as data about goods and customs outlets in addition to trading data with other countries.",
      footerLink: [
        {
          name: 'Download Android App',
          url: 'https://play.google.com/store/apps/details?id=om.gov.ncsi.manafeth&hl=en&gl=US'
        },
        {
          name: 'Download iOS App',
          url: 'https://apps.apple.com/us/app/manafeth/id1445997833'
        },
      ]
    },
    {
      image: require("./assets/images/nidaul.png"),
      projectName: "Nida Ul Quran",
      projectDesc: "Nida Ul Quran is an online learning platform where teachers have their schedule and students can book slot from it for a private online class.",
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://nidaulquran.com/home'
        },
        
      ]
    },
    {
    //  image: require("./assets/images/nidaul.png"),
      projectName: "Vetfile",
      projectDesc: "Vetfile is the veterinary web app where you can find out all the veterinary professionals.",
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://allosaurus-uat.vetfile.co.uk/#/'
        },
        
      ]
    },
    {
      image: require("./assets/images/asaanghar.png"),
      projectName: "AsaanGhar",
      projectDesc: "AsaanGhar is an on going project of house building Finance Application providing affordable housing and school building solutions to primarily low and low-middle income groups of population by encouraging new construction in affordable housing sector.",
      footerLink: [
        {
          name: 'Visit Website',
          url: 'http://dashboard.asaanghar.com/login'
        },
        
      ]
    },
    {
      //image: require("./assets/images/asaanghar.png"),
      projectName: "Mercury Labs",
      projectDesc: "Mercury Labs is the web application which helps userto find the best ecommerce solutions",
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://mercurylabs.io/'
        },
        
      ]
    },
    {
      //image: require("./assets/images/asaanghar.png"),
      projectName: "Vettimes",
      projectDesc: "Vettimes is the veterinary marketplace where you can find all the vet related information and news. I had a task to convert the frontend part of this web application which was originally built in VueJS to convert it into NuxtJS for better SEO optimization.",
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://vettimes.co.uk'
        },
        
      ]
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Won First Prize",
      subtitle:
        "Winner in SMIU Spring-festival Web Development Tech Event 2018",
      image: require("./assets/images/smiu.jpg"),
      imageAlt: "Smiu",
      footerLink: [
      
        {
          name: "Award",
          url: "https://ibb.co/hLdM2bn"
        },
        
      ]
    },
    {
      title: "Runner Up",
      subtitle:
        "Web Development Competition at Developers Day FAST NUCES 2017",
      image: require("./assets/images/dev-day.jfif"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certficate",
          url: "https://ibb.co/mFHcc4R"
        }
      ]
    },

    {
      title: "Member of National Leadership Program",
      subtitle: "Helped me to boost my leadership skills",
      image: require("./assets/images/smi.jpg"),
      imageAlt: "youtube",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Youtube video",
          url: "https://www.youtube.com/watch?v=yzkKQh1Jtx0"
        }
      ]
    },
    {
      title: "Awards and certifications",
      subtitle: "I have completed many online courses, volunteering and took part in extra-curricular activities",
      image: require("./assets/images/awards.jfif"),
      imageAlt: "awards",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Certificates",
          url: "https://ibb.co/album/qCFLV5"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Tech Articles",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt and some of my articles are as belows.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://hmadhsan.hashnode.dev/a-convenient-way-to-migrate-the-complete-vuejs-application-to-nuxtjs",
      title: "A convenient way to migrate the complete Vue.js application to Nuxt.js!",
      description:
        "Before starting, I am assuming that you have some prior experience or at least know-how of how Nuxt works. (if you are from React background and have worked on Next.js"
    },
    {
      url: "https://hmadhsan.hashnode.dev/how-to-dockerize-react-app-in-few-easy-steps",
      title: "How to Dockerize React App in few easy steps",
      description:
        "Before, Starting this article I'm assuming that you have already installed Docker on your machine and it is running successfully."
    },
    {
      url: "https://dev.to/hmadhsan/getting-started-guide-for-restful-api-using-node-mongo-express-1gg6",
      title: "Getting Started Guide for Restful API using Node, Mongo & Express",
      description:
        "I am assuming that you have some basic understanding of JavaScript and have already installed NodeJS too."
    },
    {
      url: "https://dev.to/hmadhsan/series-how-to-structurize-react-apps-ep-beginner-level-500h",
      title: "How to structurize React Apps",
      description:
        "For any web or mobile application project, it is very necessary to structurize your code to possibly the best level, this not only does your code look clean"
    },
    {
      url: "https://hmadhsan.hashnode.dev/a-simple-hack-to-handle-unknown-dynamic-nested-routes-in-nuxt-js",
      title: "A simple hack to handle unknown dynamic nested routes in NUXT JS",
      description:
        "If you don't know how deeply nested your dynamic routes will be in the NUXT project.."
    },
    {
      url: "https://dev.to/hmadhsan/generate-release-apk-app-release-apk-in-react-native-for-android-2022",
      title: "Generate Release APK (app-release.apk) in React Native for Android",
      description:
        "Here I'm writing some very simple and easy steps to generate release APK for android that is also used to upload and publish to play store."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      slides_url: "https://bit.ly/HammadHassan-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Hammad-Hassan-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49-157-34668863",
  email_address: "hammadhassan616@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "hmadhsan", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  isHireable
};
