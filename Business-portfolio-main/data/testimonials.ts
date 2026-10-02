export type Testimonial = {
  quote: string;
  /** Optional. The name/role line only appears once a real name is added. */
  name?: string;
  /** Role and company, e.g. "Founder, Acme Ltd". */
  title?: string;
  /** Optional photo in /public. Without one, the card shows the client's initials. */
  avatar?: string;
  /** Optional 1–5 star rating. Only add this for real reviews that came with a rating. */
  rating?: number;
  /** Highlights one card in the accent colour. */
  lime?: boolean;
};

// Placeholder quotes — replace with real client reviews (and add name/title) before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with this team was a great experience. They understood our vision, paid attention to details, and delivered a website that aligned with what we had in mind.",
  },
  {
    quote:
      "The team was professional, responsive, and easy to work with throughout the project. They kept us updated and made the entire process seamless.",
    lime: true,
  },
  {
    quote:
      "I'm impressed with the quality of their work. They transformed our ideas into a clean, modern, and user-friendly website. I'd gladly work with them again.",
  },
  {
    quote:
      "What stood out to me was their communication and willingness to listen. They took our feedback seriously and made sure everything was done to our satisfaction.",
  },
  {
    quote:
      "From the initial conversation to the final delivery, the experience was smooth. The team was dedicated, creative, and committed to delivering quality work.",
  },
];
