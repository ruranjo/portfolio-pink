import { IconType } from "react-icons";
import { IconEmail, IconGithub, IconLinkedin, IconX, IconYoutube } from "./assets";

export interface IconInfo {
    name: string;
    address: string;
    icon: IconType;
}

export interface BlogType {
    title: string;
    date: string;
    description: string;
    id:string;
}

interface ProjectType {
    id:number;
    title: string;
    date: string;
    description: string;
    tags: string[];
}

export interface PublicationsType {
    link: string;
    content: string;
    url: string;
}

export const iconsList: IconInfo[] = [
    {
        name: "Email",
        address: "correo@eemplo.com",
        icon: IconEmail
    },
    {
        name: "Linkedin",
        address: "https://www.linkedin.com/in/tu-perfil",
        icon: IconLinkedin
    },
    {
        name: "X",
        address: "https://www.example.com",
        icon: IconX
    },
    {
        name: "Github",
        address: "https://github.com/tu-usuario",
        icon: IconGithub
    },
    {
        name: "Youtube",
        address: "https://www.youtube.com/c/tu-canal",
        icon: IconYoutube
    }
];

export const tagsBlog:string[] = [
    "food-diary", "tech", "journalism", "research", "cybersecurity", "electronics"
]

export const blogs: BlogType[] = [
    {
        title: "Feasting in Boston: A Culinary Tale",
        id: "feasting-in-boston",
        date: "August 13, 2023",
        description: "Boston offered more than just scholarly pursuits; it was a gastronomic journey featuring everything from hearty chowders to exquisite Italian fare in the North End."
    },
    {
        title: "Summer Innovation at Startup 222",
        id: "summer-innovation-222",
        date: "August 1, 2023",
        description: "This summer at startup 222 (YC W23), I immersed myself in the dynamic world of tech innovation, facing new challenges and forging critical industry relationships."
    },
    {
        title: "USC Gastronomic Adventures: Season 2",
        id: "usc-gastronomic-adventures",
        date: "May 15, 2023",
        description: "Continuing my culinary exploration at USC, Season 2 uncovers even more secret dining spots that define the campus food scene."
    },
    {
        title: "Reviewing Arc: Revolutionary Browser or Overhyped?",
        id: "reviewing-arc-browser",
        date: "March 27, 2023",
        description: "Arc claims to redefine web browsing; I tested its capabilities to see if it truly meets the needs of modern internet users."
    },
    {
        title: "USC’s Best Bites: Discoveries from My First Semester",
        id: "usc-best-bites",
        date: "December 29, 2022",
        description: "Exploring a variety of dining options, my first semester at USC was filled with tastes ranging from quick food truck snacks to upscale restaurant meals."
    },
    {
        title: "Penn Quarter Culinary Journey",
        id: "penn-quarter-culinary-journey",
        date: "July 20, 2022",
        description: "A gastronomic tour through Penn Quarter not only pleased the palate but also complemented the cultural discoveries at Washington D.C.'s historic locations."
    },
    {
        title: "Illinois College and Culinary Exploration",
        id: "illinois-college-culinary-exploration",
        date: "June 8, 2022",
        description: "Our college road trip across Illinois became an opportunity to sample iconic local dishes, enhancing our educational visits."
    },
    {
        title: "A Chat with Paris Shih on LGBTQ+ Influences in Taiwanese Music",
        id: "chat-with-paris-shih-lgbtq-music",
        date: "August 18, 2021",
        description: "Paris Shih provided a deep dive into how LGBTQ+ themes are shaping Taiwanese music, informing my extensive research on the subject."
    },
    {
        title: "HSCTF 8: Through a Competitor’s Eyes",
        id: "hsctf-8-competitor-insights",
        date: "June 20, 2021",
        description: "Competing in HSCTF 8 brought forth a range of challenges; here I share my personal approach and key takeaways from the competition."
    },
    {
        title: "A Study of Audio Electronics",
        id: "study-audio-electronics",
        date: "May 17, 2021",
        description: "My research delves into the complex world of audio electronics, blending technical analysis with creative insights into sound technology."
    },
    {
        title: "picoMini 2021 by Redpwn: An In-Depth Challenge Review",
        id: "picomini-2021-challenge-review",
        date: "May 11, 2021",
        description: "Reflecting on my participation in Redpwn's picoMini 2021, this review breaks down my strategies across various challenges, detailing successes and hurdles."
    }
  ];
  

  export const projects: ProjectType[] = [
    {
        id: 1,
        title: "NSF Graduate Research Fellowships Celebrate USC Innovators",
        date: "July 6, 2023",
        description: "Emily Nguyen and James Flemings have earned NSF Graduate Research Fellowships for their pioneering work on deep generative models aimed at enhancing wildfire prevention strategies and ensuring privacy in AI applications.",
        tags: ["journalism", "tech"]
    },
    {
        id: 2,
        title: "Candid Moments Gallery",
        date: "May 20, 2023",
        description: "A captivating photo gallery capturing unscripted moments, created using Gatsby for a seamless viewing experience.",
        tags: ["web-dev"]
    },
    {
        id: 3,
        title: "Goldwater Scholarships Award to USC Computer Science Juniors",
        date: "April 28, 2023",
        description: "Computer Science Juniors Jordan Cahoon and Allen Chang have been honored with Goldwater Scholarships, recognizing their outstanding academic and research achievements.",
        tags: ["journalism", "tech"]
    },
    {
        id: 4,
        title: "TARA.ai: Pioneering AI in Education",
        date: "April 23, 2023",
        description: "Introducing TARA.ai, an AI-driven teaching tool designed to transform virtual learning environments and support education anytime, anywhere.",
        tags: ["web-dev"]
    },
    {
        id: 5,
        title: "Seventh Annual AthenaHacks: Empowering Marginalized Identities",
        date: "February 13, 2023",
        description: "The seventh iteration of USC's AthenaHacks saw over 400 participants, promoting innovation and inclusivity in tech.",
        tags: ["journalism", "tech"]
    },
    {
        id: 6,
        title: "Scott Rabenold to Join USC as Senior Vice President",
        date: "December 14, 2022",
        description: "Starting February 2023, Scott Rabenold will begin his tenure as USC’s senior vice president for university advancement.",
        tags: ["journalism"]
    },
    {
        id: 7,
        title: "Morning Briefs for USC Students",
        date: "October 31, 2022",
        description: "Start your day informed with 'Morning, Trojan,' delivering crucial news every weekday morning, compiled by Tomoki Chien and Claire Qiu, with editorial oversight by Anna Hsu.",
        tags: ["journalism"]
    },
    {
        id: 8,
        title: "Advancing Human-Robot Collaboration in Manufacturing",
        date: "October 4, 2022",
        description: "Professor Stefanos Nikolaidis is pioneering human-robot collaboration in manufacturing settings, recognized with the Agilent 2022 Early Career Professor Award.",
        tags: ["journalism", "tech"]
    },
    {
        id: 9,
        title: "Organizational Hub New Tab Page",
        date: "June 15, 2022",
        description: "Designed an organizational hub as a new tab page featuring time-sensitive messages and quick access links, crafted with Astro and classic web technologies.",
        tags: ["web-dev"]
    },
    {
        id: 10,
        title: "FFT and Music: Perfect Pitch Development",
        date: "May 12, 2022",
        description: "Exploring how amateur musicians can use Fast Fourier Transform (FFT) to recognize pitches and craft musical arrangements, detailed in a MATLAB simulation.",
        tags: ["tech", "research"]
    },
    {
        id: 11,
        title: "Anna Hsu's Music Portfolio",
        date: "March 20, 2022",
        description: "Discover the musical world of Anna Hsu through her personal music portfolio website, engineered with Astro.",
        tags: ["web-dev"]
    },
    {
        id: 12,
        title: "Advanced Potion-Making Forensics Challenge",
        date: "May 11, 2021",
        description: "An in-depth analysis and solution guide for the advanced-potion-making challenge in the field of cybersecurity forensics.",
        tags: ["cybersecurity"]
    },
    {
        id: 13,
        title: "Web Security Challenge: picoMini Login",
        date: "May 11, 2021",
        description: "A comprehensive breakdown of the strategies employed to tackle the login challenge at picoMini, with insights into web security.",
        tags: ["cybersecurity"]
    },
    {
        id: 14,
        title: "TJ Latin Online",
        date: "April 2, 2021",
        description: "A dedicated website for the TJ Latin community, featuring a blogging platform powered by Jekyll for dynamic content management.",
        tags: ["web-dev"]
    },
    {
        id: 15,
        title: "Jefferson CyberPatriot Team Secures National Recognition",
        date: "March 29, 2021",
        description: "The Jefferson CyberPatriot team's relentless preparation paid off with a third-place finish at the CyberPatriot Nationals.",
        tags: ["journalism", "cybersecurity"]
    },
    {
        id: 16,
        title: "Phishing Alert: Jefferson Students Targeted",
        date: "January 16, 2021",
        description: "Jefferson students have reported suspicious phishing attempts disguised as YouTube video links, prompting a swift cybersecurity response.",
        tags: ["journalism", "tech"]
    }
];


export const publications: PublicationsType[] = [
    {
        link: "USC's Impressive Showcase at NeurIPS 2023 (December 12, 2023)",
        content: "Highlighting USC's active participation, researchers will present numerous papers addressing key advances in neural information systems at NeurIPS 2023.",
        url: "#"
    },
    {
        link: "Introducing HackSC's Latest Innovation: Hibiscus (August 31, 2023)",
        content: "HackSC Engineering has developed Hibiscus, a groundbreaking new product set to transform the hackathon experience with its array of innovative features.",
        url: "#"
    },
    {
        link: "Historic Indictment of a Former President (August 1, 2023)",
        content: "Legal proceedings are underway for the ex-president related to the Capitol riots, with the trial starting this week. A conviction would not prevent a 2024 campaign.",
        url: "#"
    },
    {
        link: "NSF Awards USC Students for Wildfire and Privacy AI Research (July 6, 2023)",
        content: "USC's Emily Nguyen and James Flemings have been awarded by the NSF for their advanced research in AI, focusing on critical areas like wildfire prevention and data privacy.",
        url: "#"
    },
    {
        link: "USC's Contributions to LGBTQ+ Inclusivity in AI (June 29, 2023)",
        content: "Nathan Dennler, a key member of an internationally recognized group, is making significant strides in enhancing LGBTQ+ representation in AI studies.",
        url: "#"
    },
    {
        link: "USC Juniors Excel with Goldwater Scholarships in CS (April 28, 2023)",
        content: "Two USC juniors have been honored with Goldwater Scholarships, underscoring their pioneering research and academic prowess in computer science.",
        url: "#"
    },
    {
        link: "AthenaHacks: Fostering Diversity in Tech at USC (March 24, 2023)",
        content: "USC's AthenaHacks continues to empower underrepresented groups in technology, hosting over 400 participants in its latest edition.",
        url: "#"
    },
    {
        link: "Next-Gen Robots Understand Students’ Emotions (February 13, 2023)",
        content: "Emerging AI technologies are being developed to assess and respond to students' emotional states during learning sessions, potentially personalizing educational support.",
        url: "#"
    },
    {
        link: "USC Appoints New Senior VP for Advancement (December 14, 2022)",
        content: "Scott Rabenold has been named the new senior vice president for university advancement at USC, starting his role in February 2023.",
        url: "#"
    },
    {
        link: "Morning, Trojan: Daily Updates for USC Students (October 31, 2022)",
        content: "Get your daily dose of university news every weekday morning through 'Morning, Trojan', compiled and edited by USC's own student journalists.",
        url: "#"
    },
    {
        link: "Collaborative Breakthroughs in Human-Robot Interaction (October 4, 2022)",
        content: "Professor Stefanos Nikolaidis receives notable recognition for his work in enhancing collaboration between humans and robots in manufacturing environments.",
        url: "#"
    },
    {
        link: "Deep Dive into Cybersecurity with Advanced Potion Making (May 11, 2021)",
        content: "An extensive forensic analysis and exploration of cybersecurity practices through the 'advanced-potion-making' case study.",
        url: "#"
    },
    {
        link: "Securing the Web: Insights from picoMini's Login Challenge (May 11, 2021)",
        content: "A detailed examination of web security measures and vulnerabilities discussed through the picoMini login challenge.",
        url: "#"
    },
    {
        link: "CyberPatriot Nationals: A Testament to Jefferson's Commitment (March 29, 2021)",
        content: "Jefferson students showcase their cybersecurity expertise, clinching a top-three finish at the national CyberPatriot competition.",
        url: "#"
    },
    {
        link: "Caution Urged as Phishing Scams Circulate at Jefferson (January 16, 2021)",
        content: "Jefferson students face a wave of sophisticated phishing attacks, highlighting the need for increased cybersecurity awareness and precautions.",
        url: "#"
    },
    {
        link: "Discord as a Community Builder for Student Organizations (November 23, 2020)",
        content: "Jefferson's student organizations adopt Discord, finding new ways to stay connected and maintain student engagement virtually.",
        url: "#"
    }
];
