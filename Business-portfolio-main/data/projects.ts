export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  tags: string[];
  description: string;
  featured?: boolean;
  stats?: ProjectStat[];
  image: string;
  imageLabel: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "fastiq",
    name: "FastIQ",
    tags: ["EdTech", "AI", "Product design + Dev"],
    description:
      "An AI study platform that turns students' course materials into flashcards, summaries, quizzes and mock exams. Designed and built end to end.",
    featured: true,
    stats: [
      { value: "200+", label: "students signed up" },
      { value: "8 wks", label: "idea to launch" },
    ],
    image: "/image.png",
    imageLabel: "FastIQ study platform preview",
    url: "https://www.fastiq.online/",
  },
  {
    slug: "divine-homes",
    name: "Divine Homes",
    tags: ["Construction", "Real Estate"],
    description:
      "A professional website for a Nigerian building contractor, showcasing residential and commercial construction, house renovation, and building services.",
    image: "/image copy 3.png",
    imageLabel: "Divine Homes construction portfolio preview",
    url: "https://divine-homes.netlify.app/",
  },
  {
    slug: "study-buddy",
    name: "StudyBuddy",
    tags: ["EdTech", "Education", "Web App"],
    description:
      "A student-focused learning platform designed to help students organize their learning, study more effectively and stay on track.",
    image: "/image copy 2.png",
    imageLabel: "StudyBuddy learning dashboard preview",
    url: "https://studybuddy-inky.vercel.app/",
  },
  {
    slug: "saasgrave",
    name: "SaaSGrave",
    tags: ["SaaS", "Marketplace"],
    description:
      "A platform where founders can list their SaaS products for free, with paid plans and a bold, heritage-inspired brand built around the idea that a bolder tomorrow builds on our past.",
    image: "/image copy 17.png",
    imageLabel: "SaaSGrave platform preview",
    url: "https://saasgrave.com/",
  },
  {
    slug: "prime-estate",
    name: "Prime Estate",
    tags: ["Real Estate", "Website"],
    description:
      "A luxury real estate website for exploring curated homes and prime properties, helping clients buy, rent or invest, with property listings and tour scheduling.",
    image: "/image copy 4.png",
    imageLabel: "Prime Estate luxury property website preview",
    url: "https://prime-estate-eta.vercel.app/",
  },

  {
    slug: "webtech",
    name: "WebTech",
    tags: ["FinTech", "Blockchain", "Mobile App"],
    description:
      "A decentralized finance app for sending, receiving and earning money, and trading stocks, forex and crypto from one mobile wallet.",
    image: "/image copy 6.png",
    imageLabel: "WebTech decentralized finance app preview",
    url: "https://webtech-theta-seven.vercel.app/",
  },
  {
    slug: "audio-pro",
    name: "Audio Pro",
    tags: ["E-commerce", "Product Showcase"],
    description:
      "A premium product showcase for a home speaker, highlighting its Acoustic Lens Technology and 360-degree sound with bold visuals and video.",
    image: "/image copy 7.png",
    imageLabel: "Audio Pro home speaker showcase preview",
    url: "https://audio-pro.netlify.app/",
  },
  {
    slug: "whot",
    name: "Whot",
    tags: ["Gaming", "Multiplayer"],
    description:
      "An online Nigerian game room for playing the classic Whot card game with others, with player accounts, live player count, and sound and haptics settings.",
    image: "/image copy 14.png",
    imageLabel: "Whot online game room preview",
    url: "https://ngngames.vercel.app/",
  },
  {
    slug: "verive",
    name: "Verive",
    tags: ["Events", "Community", "Web App"],
    description:
      "A trust-first platform for discovering verified tech events in Africa, surfacing only events backed by real ratings, attendance and community trust.",
    image: "/image copy 8.png",
    imageLabel: "Verive verified tech events platform preview",
    url: "https://verive.vercel.app/",
  },

  {
    slug: "find-any-book",
    name: "Find Any Book",
    tags: ["Books", "Search", "Web App"],
    description:
      "A search engine for public-domain and open-access books that finds legal full-text editions across trusted archives, with in-app reading and saved history.",
    image: "/image copy 11.png",
    imageLabel: "Find Any Book search engine preview",
    url: "https://findanybookintheworld.jaycryptoxyz.workers.dev/",
  },
  {
    slug: "merge-x-images",
    name: "Merge X Images",
    tags: ["Tool", "Social Media"],
    description:
      "A tool for moodboard makers: paste one X post, it pulls the post's image set and joins it back into one clean file, so no more screenshotting four times.",
    image: "/image copy 12.png",
    imageLabel: "Merge X Images tool preview",
    url: "https://mergeximages.vercel.app/",
  },
  {
    slug: "yvflix",
    name: "YVFLIX",
    tags: ["Streaming", "Entertainment", "Web App"],
    description:
      "A Netflix-style interface for YouTube, organizing videos into series, movies and personal lists so it's built for watching instead of scrolling.",
    image: "/image copy 13.png",
    imageLabel: "YVFLIX video streaming interface preview",
    url: "https://yvflix.followerstomoney.com/",
  },
  {
    slug: "logscity",
    name: "LogsCity",
    tags: ["E-commerce", "Social Media"],
    description:
      "An online store for Facebook, Instagram and TikTok pages sorted by follower tier, with one-time payment and instant credential delivery.",
    image: "/image copy 9.png",
    imageLabel: "LogsCity social accounts store preview",
    url: "https://logscity.vercel.app/",
  },
  {
    slug: "fortuneflow",
    name: "FortuneFlow",
    tags: ["Careers", "SaaS", "Web App"],
    description:
      "A job application tracker that helps you track applications, set follow-up reminders and see your whole job search clearly, without spreadsheets or scattered notes.",
    image: "/image copy 20.png",
    imageLabel: "FortuneFlow job application tracker preview",
    url: "https://job-tracker-liard-tau.vercel.app/",
  },
  {
    slug: "haoshu",
    name: "Haoshu",
    tags: ["AI", "Outreach", "Growth"],
    description:
      "An outreach research tool that studies both sides of a deal, scores the fit, and turns the strongest evidence into a ready-to-send DM, email and proposal.",
    image: "/image copy 15.png",
    imageLabel: "Haoshu outreach research tool preview",
    url: "https://haoshu.followerstomoney.com/",
  },
  {
    slug: "dating-a-designer",
    name: "Dating a Designer",
    tags: ["Dating", "Community", "Web App"],
    description:
      "A dating space for designers, where people meet through the work they make and find matches with good taste and better chemistry.",
    image: "/image copy 10.png",
    imageLabel: "Dating a Designer landing page preview",
    url: "https://datingadesigner.fun/",
  },
  {
    slug: "thrivecore-initiative",
    name: "ThriveCore Initiative",
    tags: ["NGO", "Nonprofit", "Website"],
    description:
      "A website for a Nigerian NGO that trains youth, protects children, empowers entrepreneurs and strengthens families in underserved communities, with volunteer and donation flows.",
    image: "/image copy 19.png",
    imageLabel: "ThriveCore Initiative NGO website preview",
    url: "https://tci-kappa.vercel.app/",
  },
  {
    slug: "chat-space",
    name: "Chat Space",
    tags: ["Social", "Community", "Web App"],
    description:
      "A text-only conversation platform with no photos or video. Open one conversation, add one useful link if it matters, and just talk.",
    image: "/image copy 16.png",
    imageLabel: "Chat Space text conversation platform preview",
    url: "https://chatspace-two.vercel.app/",
  },
  {
    slug: "full-stack-academy",
    name: "Full-Stack Academy",
    tags: ["EdTech", "Landing Page"],
    description:
      "A coding bootcamp landing page that takes learners from zero to hero in HTML, CSS, JavaScript and React, with real-world projects, mentor support and career guidance.",
    image: "/image copy 5.png",
    imageLabel: "Full-stack development course landing page preview",
    url: "https://lorem-sigma.vercel.app/",
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    tags: ["Security", "Tool"],
    description:
      "A secure generator that creates strong, random passwords instantly, with adjustable length, uppercase, lowercase, number and symbol options, a strength meter and one-click copy.",
    image: "/image copy 18.png",
    imageLabel: "Password Generator tool preview",
    url: "https://password-generator-lake-zeta-79.vercel.app/",
  },
];
