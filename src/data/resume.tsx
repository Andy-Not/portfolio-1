import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import pseg from "../../public/pseg.png"
export const DATA = {
  name: "Joandy Alejo Garcia",
  initials: "JA",
  url: "https://dillion.io",
  location: "Allentown, PA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Aspiring Software Engineer | Passionate about Building User-Friendly Solutions.",
  summary:"I am a versatile developer proficient in both front-end and back-end technologies. With expertise in React, " +
      "Java, Python, C and MySQL, I specialize in creating accessible and highly functional software solutions. " +
      "My dedication to continuous learning drives me to seek out new opportunities to contribute to projects and " +
      "expand my skill set.",
  avatarUrl: "/mypic.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "CSS",
    "HTML",
    "C#",
    "Python",
    "JavaScript",
    "Angular",
    "Postgres",
    "Docker",
    "Spring Boot",
    "Java",
    "C/C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PSEG",
      href: "https://atomic.finance",
      badges: [],
      location: "Hybrid",
      title: "ER&T Application Support Intern",
      logoUrl: "/pseg.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description:"As an Information Technology Applications Developer Intern at PSEG, I developed and implemented an " +
          "automated solution for file scheduling and execution, streamlining workflows and reducing manual effort. " +
          "I also contributed to improving onboarding processes by documenting internal applications and actively " +
          "participated in agile development methodologies, collaborating with the team to achieve project goals."
    },
  ],
  education: [
    {
      school: "Bloomsburg University Of Pennsylvania",
      href: "https://www.commonwealthu.edu/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/blooms.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Lehigh Carbon Community College",
      href: "https://www.lccc.edu/",
      degree: "Associate's Degree in Web Development",
      logoUrl: "/lccc.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "PSEG Intern Website",
      dates: "August, 2024",
      location: "Newark, NJ",
      description:
        "I created a knowledge base to streamline intern onboarding, organized status meetings for team coordination, " +
          "used GitHub for version control, and collaborated with the content team on a user-friendly intern guide.",
      image:"/pseg.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "hel",
        },
        {
          tools: ["React", "CSS"]
        }
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
