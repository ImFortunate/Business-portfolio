export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  lime?: boolean;
};

// Placeholder content — replace with real client quotes before launch.
export const testimonials: Testimonial[] = [
  {
    quote: "[Client quote about working with us.]",
    name: "[Client name]",
    title: "[Role, Company]",
  },
  {
    quote: "[Client quote about working with us.]",
    name: "[Client name]",
    title: "[Role, Company]",
    lime: true,
  },
  {
    quote: "[Client quote about working with us.]",
    name: "[Client name]",
    title: "[Role, Company]",
  },
];
