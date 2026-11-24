export interface Project {
  id: string;
  title: string;
  category: "all" | "web" | "fullstack" | "mobile";
  categoryLabel: string;
  badge: string;
  tagline: string;
  description: string;
  impact: string;
  features: string[];
  tags: string[];
  image?: string;
  logo?: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  url?: string;
  mediaLabel?: string;
  imageUrl?: string;
  certificateImage?: string;
  description?: string;
}

export const PORTFOLIO_DATA = {
  developer: {
    name: "Frank Kodi",
    role: "Software Engineer",
    statusText: "Available for full-time roles & freelance projects",
    location: "Takoradi, Ghana • Open to Remote Worldwide",
    email: "frankie.dev404@gmail.com",
    tagline: "I build fast, reliable, and user-friendly digital products that help businesses grow.",
    shortBio: "Hi, I'm Frank. I'm a software engineer with 5+ years of experience transforming ideas into polished web applications. I focus on clean code, intuitive design, and building software that just works.",
    aboutParagraphs: [
      "I specialize in building modern, responsive web applications from the ground up. Over the past 5 years, I've collaborated with early-stage startups and established businesses to deliver robust products that users love.",
      "My philosophy is simple: write clean, maintainable code, communicate clearly, and always keep the end-user experience front and center. Whether building an interactive customer portal, an e-commerce platform, or an internal dashboard, I focus on performance, security, and simplicity."
    ],
    socials: {
      github: "https://github.com/feistyfranky",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
    },
    highlights: [
      { label: "Experience", value: "5+ Years", detail: "Professional software development" },
      { label: "Delivered", value: "25+ Projects", detail: "Web applications & platforms" },
      { label: "Commitment", value: "100%", detail: "On-time & client-focused" },
      { label: "Response", value: "< 24 Hours", detail: "Fast, clear communication" }
    ],
    services: [
      {
        title: "Frontend & Web Design",
        description: "Responsive, pixel-perfect web interfaces that load fast, work across all devices, and provide smooth user experiences.",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Accessibility"]
      },
      {
        title: "Backend & Databases",
        description: "Secure, reliable backend services, authentication systems, and database structures that scale with your users.",
        skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Database Design", "User Authentication"]
      },
      {
        title: "Full Product Delivery",
        description: "From concept to deployment. I handle hosting, testing, continuous updates, and maintenance so you can focus on your business.",
        skills: ["Cloud Hosting", "Vercel / AWS", "Git & GitHub", "Performance Optimization", "SEO Basics"]
      }
    ]
  },

  projects: [
    {
      id: "brightstart",
      title: "The Bright Start Project",
      category: "web",
      categoryLabel: "Education & STEM Platform",
      badge: "Live Initiative",
      tagline: "Revolutionizing public education through STEM, teacher training, and infrastructure.",
      description: "The Bright Start Project is an initiative aimed at revolutionizing public education through STEM education, teacher training, and infrastructure development across coastal districts in Ghana. Built to connect schools, educators, and industrial partners with modern learning resources.",
      impact: "Powering STEM curriculum outreach, digital school profiles, and student success metrics across coastal district schools.",
      features: [
        "Interactive directory and profile tracking for all covered coastal districts",
        "STEM curriculum showcases, teacher training modules, and portal authentication",
        "Ecosystem resource management supporting public education and student success"
      ],
      tags: ["Web Architecture", "Responsive Design", "UI/UX", "Interactive Maps", "REST APIs", "Educational Tech"],
      image: "/brightstart-hero.png",
      logo: "/brightstart-logo.png",
      links: {
        demo: "https://stccijubileebrightstart.org/"
      }
    },
    {
      id: "duchess-autocare",
      title: "Duchesse Autocare",
      category: "web",
      categoryLabel: "Automotive E-Commerce",
      badge: "Live Storefront",
      tagline: "E-commerce platform for automotive parts, maintenance, and car care products.",
      description: "Duchesse Autocare is an e-commerce platform designed for automotive parts and car care products. The site features a user-friendly layout with a 'Daily Essentials' section, showcasing products like motor oils, filters, and batteries in well-organized, consistent cards.",
      impact: "Provides vehicle owners and mechanics with a streamlined shopping experience to browse, compare, and order verified automotive essentials online.",
      features: [
        "Curated 'Daily Essentials' catalog with structured cards for motor oils, filters, and batteries",
        "Mobile-first responsive storefront engineered for intuitive product discovery",
        "Modern SPA architecture powered by an API-driven backend with secure product checkout"
      ],
      tags: ["SPA Architecture", "Vue.js / Vite", "REST APIs", "Responsive E-Commerce", "UI/UX Design"],
      image: "/duchessautocare-preview.png",
      logo: "/duchessautocare-logo.jpg",
      links: {
        demo: "https://duchessautocare.com/"
      }
    },
    {
      id: "workspace-hub",
      title: "FlowDesk — Team Collaboration Suite",
      category: "fullstack",
      categoryLabel: "Web Application",
      badge: "Featured Project",
      tagline: "An intuitive workspace management tool for distributed teams.",
      description: "A clean, modern productivity application allowing remote teams to organize projects, share real-time updates, and track milestones without the clutter of complex enterprise tools.",
      impact: "Adopted by 15+ remote teams, improving weekly task completion visibility by 40%.",
      features: [
        "Interactive drag-and-drop task boards with instant team sync",
        "Secure user authentication with role-based team permissions",
        "Real-time notifications and activity timelines"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js"],
      links: {
        demo: "https://github.com",
        github: "https://github.com"
      }
    },
    {
      id: "analytics-portal",
      title: "MetricPulse — Business Analytics Dashboard",
      category: "web",
      categoryLabel: "Dashboard & Analytics",
      badge: "SaaS Product",
      tagline: "Clear, actionable revenue and user metrics for small business owners.",
      description: "A streamlined financial and growth dashboard that translates raw transaction data into easy-to-read charts, automated weekly reports, and churn alerts.",
      impact: "Helped founders reduce weekly reporting time from 4 hours to under 15 minutes.",
      features: [
        "Automated data visualisations with interactive date filtering",
        "Exportable PDF and spreadsheet executive summaries",
        "Mobile-first responsive design for founders on the go"
      ],
      tags: ["React", "Next.js", "Tailwind CSS", "REST APIs", "Chart.js"],
      links: {
        demo: "https://github.com",
        github: "https://github.com"
      }
    },
    {
      id: "commerce-platform",
      title: "Aura Essentials — E-Commerce Storefront",
      category: "web",
      categoryLabel: "E-Commerce",
      badge: "Client Project",
      tagline: "High-converting online store with instant checkout and inventory tracking.",
      description: "A custom online shopping experience engineered for maximum speed, seamless mobile browsing, and a friction-free checkout experience integrated with Stripe.",
      impact: "Increased mobile checkout conversion rate by 28% compared to previous template.",
      features: [
        "Sub-second page load times with optimized product image delivery",
        "Integrated secure card and Apple Pay / Google Pay checkout",
        "Live stock sync and automated customer order confirmations"
      ],
      tags: ["Next.js", "TypeScript", "Stripe API", "Tailwind CSS"],
      links: {
        demo: "https://github.com",
        github: "https://github.com"
      }
    },
    {
      id: "docu-share",
      title: "DocuPortal — Secure Client Document Hub",
      category: "fullstack",
      categoryLabel: "Client Portal",
      badge: "Enterprise Tool",
      tagline: "A safe, encrypted document sharing portal for professional service firms.",
      description: "Designed for accounting and legal firms to safely exchange confidential files with clients, collect digital signatures, and maintain audit trails.",
      impact: "Successfully eliminated unencrypted email attachments for 200+ active clients.",
      features: [
        "End-to-end encrypted file uploads and download links",
        "Client activity notifications and signature requests",
        "Clean, straightforward interface tailored for non-technical users"
      ],
      tags: ["TypeScript", "Next.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
      links: {
        demo: "https://github.com",
        github: "https://github.com"
      }
    }
  ] as Project[],

  experience: [
    {
      period: "Sep 2025 – Dec 2025",
      role: "UI/UX Intern",
      company: "AmaliTech",
      location: "Takoradi",
      description: "Completed intensive training and transitioned into hands-on agricultural e-commerce platform design and delivery.",
      achievements: [
        "Completed an intensive web development and UI/UX training phase, rapidly mastering React, modern component libraries, and IT support protocols.",
        "Transitioned into hands-on project execution, designing and launching an agricultural e-commerce platform to streamline the digital marketplace for farm produce."
      ],
      techStack: ["React", "UI/UX Design", "Component Libraries", "E-Commerce", "Web Development"]
    },
    {
      period: "Aug 2024 – Nov 2024",
      role: "IT Intern",
      company: "Sekondi Takoradi Chamber of Commerce",
      location: "Takoradi",
      description: "Spearheaded daily IT operations and engineered educational LMS portals and e-commerce platforms.",
      achievements: [
        "Spearheaded daily IT operations and provided technical support, resolving system issues to ensure smooth workflows.",
        "Developed and deployed an educational Learning Management System (LMS) to streamline digital workflows for teachers.",
        "Built a digital scholar enrollment portal to streamline student data management.",
        "Designed and launched a fully functional e-commerce website."
      ],
      techStack: ["LMS Systems", "Student Portals", "E-Commerce", "Web Applications", "IT Operations"]
    },
    {
      period: "Sep 2023 – Sep 2023",
      role: "IT Support, Software & Infrastructure Intern",
      company: "Ghana Port & Harbors Authority",
      location: "Takoradi",
      description: "Provided cross-department technical support, systems troubleshooting, and network infrastructure maintenance.",
      achievements: [
        "Provided technical support across multiple departments, troubleshooting hardware and software issues to ensure minimal downtime.",
        "Assisted in network infrastructure setup, configuration, and maintenance, improving system reliability and connectivity."
      ],
      techStack: ["Network Infrastructure", "System Maintenance", "IT Support", "Hardware/Software Troubleshooting"]
    }
  ] as ExperienceItem[],

  education: {
    degree: "BSc Information Technology - Software Engineering",
    school: "Takoradi Technical University, Takoradi",
    period: "",
    description: "Specialized in software engineering principles, web development, and computing infrastructure."
  },

  certifications: [
    {
      id: "amalitech-uiux",
      title: "UI/UX Design - Certificate of Internship",
      issuer: "AmaliTech",
      issueDate: "Issued 12th December, 2025",
      mediaLabel: "Official Certificate of Internship",
      imageUrl: "/amalitech-seal.png",
      certificateImage: "/amalitech-uiux-cert.png",
      url: "/amalitech-uiux-cert.png",
      description: "Awarded for successfully participating in the Voluntary Internship Programme, gaining skills in UI/UX Design and effectively applying theoretical knowledge to practical projects. Issued by Salami Suleiman, Head of Training at AmaliTech."
    },
    {
      id: "aws-restart-graduate",
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services Training and Certification",
      credentialId: "6c2b3377-d47f-46be-92c0-7c0262cf157d",
      mediaLabel: "AWS re/Start Graduate Badge",
      imageUrl: "/aws-restart-badge.png",
      url: "https://www.credly.com/badges/6c2b3377-d47f-46be-92c0-7c0262cf157d/public_url",
      description: "Earners of this badge have completed the AWS re/Start program. AWS re/Start is a skills development and job training program that prepares learners for careers in the cloud. Each cohort, supported by professional mentors and accredited trainers, completes training featuring real-world scenario-based learning, hands-on labs, and coursework."
    },
    {
      id: "aws-cloud-101",
      title: "AWS Educate Introduction to Cloud 101 - Training Badge",
      issuer: "Amazon Web Services Training and Certification",
      credentialId: "abbc04c0-d814-4d82-805d-21097c506e4e",
      mediaLabel: "Cloud Computing 101 Trained Badge",
      imageUrl: "/aws-cloud-101.png",
      url: "https://www.credly.com/badges/abbc04c0-d814-4d82-805d-21097c506e4e",
      description: "Earners of this badge have completed the Cloud Computing 101 training and achieved the required scores on the post-course assessment. They have demonstrated the ability to create simple cloud applications in a virtual lab environment and understand AWS cloud core services."
    },
    {
      id: "ibm-digital-literacy",
      title: "Digital Literacy",
      issuer: "IBM SkillsBuild",
      issueDate: "Issued Jul 2026",
      credentialId: "c6290f16-0646-45d7-a7ce-3ed4ced86462",
      mediaLabel: "IBM SkillsBuild Badge",
      imageUrl: "/ibm-digital-literacy.png",
      url: "https://www.credly.com/badges/c6290f16-0646-45d7-a7ce-3ed4ced86462/public_url",
      description: "Demonstrates foundational knowledge to navigate the digital world, including computer use, internet navigation, and digital communication. Covers research, creating, and presenting information safely and responsibly, and core concepts in artificial intelligence, software engineering, and data analysis."
    },
    {
      id: "ibm-data-literacy",
      title: "Data Literacy",
      issuer: "IBM SkillsBuild",
      issueDate: "Issued Jun 2026",
      credentialId: "0961443d-f3d0-488f-9cc6-021a5da2404a",
      mediaLabel: "IBM SkillsBuild Badge",
      imageUrl: "/ibm-data-literacy.png",
      url: "https://www.credly.com/badges/0961443d-f3d0-488f-9cc6-021a5da2404a/public_url",
      description: "Demonstrates foundational knowledge in how data is used to inform decisions in personal and workplace contexts. Covers identifying data sources, interpreting common visualizations, evaluating data quality, and ethical implications of responsible data use."
    },
    {
      id: "ibm-project-management",
      title: "Project Management Fundamentals",
      issuer: "IBM SkillsBuild",
      issueDate: "Issued Jun 2026",
      credentialId: "20198e5a-2039-41fe-971f-fa93fedd3411",
      mediaLabel: "IBM SkillsBuild Badge",
      imageUrl: "/ibm-project-management.png",
      url: "https://www.credly.com/badges/20198e5a-2039-41fe-971f-fa93fedd3411/public_url",
      description: "Demonstrates knowledge of project management concepts and processes across the project lifecycle. Covers initiating, planning, executing, monitoring, controlling, and closing projects, with deliverables including project charters, work breakdown structures (WBS), and communications management plans."
    }
  ] as CertificationItem[]
};
