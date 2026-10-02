export type TeamMember = {
  name: string;
  role: string;
  image: string;
  /** Personal X profile. The photo links here when set. */
  x?: string;
};

export const team: TeamMember[] = [
  {
    name: "Fortune Iwueze",
    role: "Software Developer",
    image: "/IMG_2391.JPG (1).jpeg",
    x: "https://x.com/devfortune_",
  },
  {
    name: "Emeka Divine",
    role: "Frontend Developer & Visual Designer",
    image: "/1786890676673.jpg (1).jpeg",
    x: "https://x.com/emekadivine_exe",
  },
  {
    name: "Abraham Nissi",
    role: "B2B content writer & SEO stragist",
    image: "/Professional pic.JPG (2).jpeg",
    x: "https://x.com/nissicreat09",
  },
  {
    name: "Jude Inyang",
    role: "Product Engineering & Startup Builder",
    image: "/image copy.png",
    x: "https://x.com/tryjude",
  },
];
