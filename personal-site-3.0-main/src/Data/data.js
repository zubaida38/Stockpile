const HEADER = "Joseph Moussa";
const NAV_HEADER = "JM";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-me", label: "About Me" },
  { id: 4, url: "#mystory", label: "My Story" },
  { id: 5, url: "#footer", label: "Contact" }
];
const BANNER_DATA = {
  HEADING: "Joseph Moussa",
  DESCRIPTION:
    "Software Engineer",
  TWITTER_URL:
    "https://twitter.com/j__moussa",
  TWITTER_TAGLINE: "Add me on Twitter"
};
const SERVICE_DATA = {
  HEADING: "Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Platform Architecture",
      DESCRIPTION:
        "Every software problem has a specific solution (more specific than many realize) and at the heart of every solution is an understandable architecture that is specific and tailor-made to address the problem in the most efficient and sensible way.",
      URL: "images/services/architecture/architecture.jpg"
    },
    {
      LABEL: "Software Development",
      DESCRIPTION:
        "Most software platforms being built nowadays rely on large amounts of data flowing and interacting within the system, this can be done via batch or streaming, in SQL or NoSQL, and with various scaling requirements. I build platforms that allow for better management and leverage of data, enabling growth and further insights to be drawn from analytics.",
      URL: "images/services/development/development.jpg"
    },
    {
      LABEL: "Product Management",
      DESCRIPTION: "Taking a customer centric, data driven approach to the product development lifecycle. My plain and simple approach to Product Management is to assess customer feedback and weave it into the development sprints. That's way easier said than done and there are too many variations of success to count, but it's a crucial part of making sure a product stays engaging and ultimately, successful.",
      URL: "images/services/project_management/project_management.jpg"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "About Me",
  TITLE: "Who, Me?",
  IMAGE_URL: "images/network.png",
  DESCRIPTION: "I'm an experienced software engineer with a specialization in data platforms and data-centric applications.  \
    I have had the priviledge of working with both large and small companies/startups, as both a contractor and employee in teams of all sizes, and understand the interpersonal nuances when architecting a software solution.\
    I have a passion for technology and a drive to research interesting solutions.\
    ",
  BIRTHDAY: '1995-04-01',
  TRAITS_HEADER: "Outstanding qualities",
  TRAITS: [
    "Experience architecting and implementing small scale prototypes to large scale distributed cloud solutions",
    "Strong technical skills and experience in building data-centric applications",
    "Prioritization of consumer experience when building for scale"
  ]
};
const MYWORK_DATA = {
  HEADING: "My Story",
  ACCOMPLISHMENTS: [
    {
      TITLE: "A Foundation for Growth",
      DESCRIPTION:
        "Early on I was involved with music and marching band throughout high school, college, and in the independent circuit.\
        I played a variety of instruments but the one that took me the furthest was drums. \
        I entered into the marching snare activites as a completely self-taught drummer. \
        This experience and perspective shaped me to always do something passionately, with discipline, patience and to strive for excellence in everything.",
      IMAGE_URL: "images/mystory1.jpg",
      ACC_DESC: "Notable Moments",
      ACCOMPLISHMENTS: [
        "Super Bowl XLVIII pre-game performance",
        "The Tonight Show starring Jimmy Fallon w/U2 (S1E1)",
      ],
      DESIGNATION: "Snare Drummer at Rutgers University, and 'United Percussion', an independent percussion ensemble."
    },
    {
      TITLE: "Invaluable Education",
      DESCRIPTION:
        "I attended Rutgers University initially with the intention of going into biology and eventually dentistry however after a year and a half I realized my true passion was for building products and I already had an interest in software. The rest is history.",
      IMAGE_URL: "images/mystory2.jpg",
      ACC_DESC: "Curriculum",
      ACCOMPLISHMENTS: [
        "Data Structures",
        "Computer Security",
        "Operating Systems",
        "Computer Architecture"
      ],
      DESIGNATION: "B.A. in Information Technology & Informatics, (with a minor in Computer Science) '13-'18"
    },
    {
      TITLE: "Expansive Early Career",
      DESCRIPTION:
        "In my short tenure as an engineer, I've had the priviledge of working on both large and small scale software platforms. Each taught me something specific and helped me get more acquainted with both the general process as well as the industry as a whole.",
      IMAGE_URL: "images/mystory3.jpg",
      ACC_DESC: "Experience",
      ACCOMPLISHMENTS: [
        "AT&T gave me an opportunity to work on bleeding edge PoC technologies in the R&D department",
        "Vicasso (formerly Internet Creations) taught me about the traditional software development lifecycle and how to interact with project managers, other interdisciplinary team members, and the client",
        "Genomic Prediction is where I started designing and leading the development of data platforms and pipelines",
      ],
      DESIGNATION: "Software Engineer at AT&T (student technical intern), Internet Creations, and Genomic Prediction"
    },
    {
      TITLE: "Moving Forward",
      DESCRIPTION:
        "I am currently employed at The Walt Disney Company, where I work as an engineer in the Media & Engertainment Division tackling challenges related to content, and shaping consumer experience.",
      IMAGE_URL: "images/mystory4.jpg",
      ACC_DESC: "Experience",
      ACCOMPLISHMENTS: [
        "Refactor and improve on medium to large-scale data pipeline platforms for querying, enriching and storing data",
        "Design and architect custom data pipelines used to drive both long and short-term analytics using both batch and streaming techniques",
        "Document and communicate implementation and usage details in addition to system architecture documentation for fellow engineers"
      ],
      DESIGNATION: "Software Engineer II at The Walt Disney Company"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Socials",
  DESCRIPTION: "Connect with me on social media. I post blog content whenever I feel like breaking down the method to my madness.",
  IMAGES_LIST: [
    "images/instagram-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/github-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    ".",
  CONTACT_DETAILS: {
    HEADING: "Contact me",
    EMAIL: "joseph.moussa.dev@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAV_HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  MYWORK_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;
