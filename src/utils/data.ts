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
      title: "Boston Bites: A Foodie's Journey",
      id: "boston-bites-food-journey",
      date: "August 13, 2023",
      description: "Boston wasn't just about academia; it was a culinary adventure. From chowder to North End's finest Italian, every meal narrated a story."
  },
  {
      title: "Innovating with 222: My Summer Internship",
      id: "innovating-with-222",
      date: "August 1, 2023",
      description: "Diving into the startup culture with 222 (YC W23), I navigated through challenges and innovations, making invaluable connections along the way."
  },
  {
      title: "USC Culinary Diaries: Season 2",
      id: "usc-culinary-diaries-s2",
      date: "May 15, 2023",
      description: "Back with another season of gastronomic delights at USC. This series is all about discovering hidden gems in and around campus."
  },
  {
      title: "Arc Reviewed: Cutting-Edge Browser or Just Hype?",
      id: "arc-reviewed",
      date: "March 27, 2023",
      description: "Arc promises a revolution in browsing. I took it for a spin to see if it could handle my daily digital demands."
  },
  {
      title: "First Semester Food Finds at USC",
      id: "first-semester-food-finds-usc",
      date: "December 29, 2022",
      description: "From campus food trucks to gourmet dinners, my first semester at USC was a voyage through diverse flavors and cuisines."
  },
  {
      title: "Penn Quarter Food Escapade",
      id: "penn-quarter-food-escapade",
      date: "July 20, 2022",
      description: "Exploring Penn Quarter’s food scene offered a palette of flavors that complemented our cultural expedition to D.C.'s historic sites."
  },
  {
      title: "Illinois College Road Trip: Food Chronicles",
      id: "illinois-college-road-trip-food",
      date: "June 8, 2022",
      description: "A father-daughter road trip across Illinois's top colleges doubled as a culinary tour through the state's most beloved eateries."
  },
  {
      title: "Dialogue with Paris Shih: LGBTQ+ in Taiwanese Music",
      id: "dialogue-with-paris-shih",
      date: "August 18, 2021",
      description: "Paris Shih shared insights into the evolving landscape of LGBTQ+ representation in Taiwanese music, enriching my understanding for a year-long research project."
  },
  {
      title: "HSCTF 8: A Solver's Perspective",
      id: "hsctf-8-solvers-perspective",
      date: "June 20, 2021",
      description: "Tackling HSCTF 8 presented unique challenges; here's a detailed walkthrough of my strategies and the lessons learned from each puzzle."
  },
  {
      title: "Audio Electronics Deep Dive",
      id: "audio-electronics-deep-dive",
      date: "May 17, 2021",
      description: "Exploring the intricacies of audio electronics, my final paper discusses the technical and creative aspects of sound design and hardware."
  },
  {
      title: "picoMini 2021: Redpwn Challenge Recap",
      id: "picomini-2021-redpwn-recap",
      date: "May 11, 2021",
      description: "A retrospective on tackling redpwn's picoMini 2021; a deep dive into my approaches for web and forensic challenges, highlighting both struggles and triumphs."
  }
];

  const newsItems = [
    {
        title: "USC Computer Science Students Awarded NSF Graduate Research Fellowships",
        date: "July 6, 2023",
        description: "Emily Nguyen and James Flemings were recognized for their contributions to deep generative models focusing on wildfire prevention and privacy in machine learning.",
        tags: ["journalism", "tech"]
    },
    {
        title: "Candid",
        date: "May 20, 2023",
        description: "Photo gallery of candid moments, built with Gatsby.",
        tags: ["web-dev"]
    },
    {
        title: "Two USC Computer Science Juniors Awarded Goldwater Scholarships",
        date: "April 28, 2023",
        description: "Juniors Jordan Cahoon and Allen Chang were recognized for their research in, and beyond, computer science.",
        tags: ["journalism", "tech"]
    },
    {
        title: "TARA.ai",
        date: "April 23, 2023",
        description: "An AI-powered teaching assistant that revolutionizes virtual classrooms, helping you learn anywhere, anytime.",
        tags: ["web-dev"]
    },
    {
        title: "AthenaHacks USC Creates Community",
        date: "February 13, 2023",
        description: "More than 400 students took part in USC's hackathon for marginalized gender identities, now in its seventh year.",
        tags: ["journalism", "tech"]
    },
    {
        title: "Scott Rabenold appointed senior vice president for university advancement",
        date: "December 14, 2022",
        description: "Rabenold will join USC in February 2023.",
        tags: ["journalism"]
    },
    {
        title: "Morning, Trojan",
        date: "October 31, 2022",
        description: "Essential headlines for USC students every weekday morning, curated and written by Tomoki Chien and Claire Qiu, copy edited by Anna Hsu.",
        tags: ["journalism"]
    },
    {
        title: "Humans and robots: Stefanos Nikolaidis fosters anthro-machine collaboration in manufacturing",
        date: "October 4, 2022",
        description: "Nikolaidis received the Agilent 2022 Early Career Professor Award in July.",
        tags: ["journalism", "tech"]
    },
    {
        title: "New Tab Page",
        date: "June 15, 2022",
        description: "Organizational hub filled with time-dependent messages and quick links, built with Astro and HTML, CSS, and JavaScript.",
        tags: ["web-dev"]
    },
    {
        title: "Perfect Pitch: Using the Fast Fourier Transform (FFT) To Create Musical Arrangements",
        date: "May 12, 2022",
        description: "How might amateur musicians identify pitches to create pop arrangements? Through an understanding of some cool math, we can create an implementation simulated in MATLAB.",
        tags: ["tech", "research"]
    },
    {
        title: "Anna Hsu | Music",
        date: "March 20, 2022",
        description: "My music website, built with Astro!",
        tags: ["web-dev"]
    },
    {
        title: "picoMini by redpwn - advanced-potion-making (forensics)",
        date: "May 11, 2021",
        description: "Writeup for advanced-potion-making (forensics).",
        tags: ["cybersecurity"]
    },
    {
        title: "picoMini by redpwn - login (web)",
        date: "May 11, 2021",
        description: "Writeup for login (web).",
        tags: ["cybersecurity"]
    },
    {
        title: "TJ Latin",
        date: "April 2, 2021",
        description: "TJ Latin's website for 2020-2021! Static website with blogging by Jekyll.",
        tags: ["web-dev"]
    },
    {
        title: "Cyber-paving the way to success",
        date: "March 29, 2021",
        description: "Jefferson students placed third at CyberPatriot Nationals after three years of hard work and dedication.",
        tags: ["journalism", "cybersecurity"]
    },
    {
        title: "Phishing scams target Jefferson students",
        date: "January 16, 2021",
        description: "In the last week, Jefferson students have reported being sent suspicious Facebook links that look like YouTube thumbnails, with the text-only message 'Sankapp: Is it you in the video?'",
        tags: ["journalism", "tech"]
    }
];