import { site } from "@/content";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

const contactLine = `If you have any questions, email us at ${site.email}.`;

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  intro: `This policy explains what personal information ${site.name} ("we", "us") collects through this website, why we collect it and how we look after it. We are based in Nigeria and handle personal data in line with the Nigeria Data Protection Act 2023 and, where it applies to you, the GDPR.`,
  sections: [
    {
      heading: "Information we collect",
      paragraphs: ["We only collect what you choose to give us, plus basic technical data needed to run the site:"],
      list: [
        "Booking and enquiry form: your name, email address, phone number, and optionally your company name, preferred call date and time, and a description of your project.",
        "Live chat: messages you send through our chat widget, and any name or email you choose to share there.",
        "Emails: anything you send us directly by email.",
        "Technical data: like most websites, our hosting provider and chat provider may record your IP address, browser type and pages visited for security and performance.",
      ],
    },
    {
      heading: "How we use your information",
      list: [
        "To reply to your enquiry and arrange the call you requested.",
        "To discuss, quote for and deliver the work you ask us about.",
        "To keep the website secure and working properly.",
      ],
      paragraphs: ["We do not sell your personal information, and we do not use it for advertising."],
    },
    {
      heading: "Legal basis",
      paragraphs: [
        "We process your information because you asked us to (for example, by submitting the booking form), because it is necessary to take steps towards a contract with you, or because we have a legitimate interest in running and protecting our website.",
      ],
    },
    {
      heading: "Services we use",
      paragraphs: ["We share data only with the providers that help us run this website:"],
      list: [
        "Resend: delivers booking form submissions to our inbox by email.",
        "Tawk.to: provides the live chat widget. It may set cookies so a conversation continues as you move between pages.",
        "Our website hosting provider: serves the site and keeps standard server logs.",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "This website doesn't use advertising or tracking cookies of its own. The Tawk.to chat widget uses cookies and similar storage to keep your chat session working. You can block or delete cookies in your browser settings, though the chat may not work properly if you do.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep enquiries and chat messages for as long as needed to respond and, if we work together, for the length of the project plus any period required for legal, tax or accounting reasons. After that we delete them.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You can ask us to access, correct or delete the personal information we hold about you, to object to or restrict how we use it, or to receive a copy of it. To make a request, email us and we will respond within 30 days. You also have the right to complain to the Nigeria Data Protection Commission or your local data protection authority.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use reputable providers and encrypted connections (HTTPS) to protect your information. No method of transmission over the internet is completely secure, but we take reasonable steps to keep your data safe.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. Any changes will be posted on this page.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [contactLine],
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  intro: `These terms apply to your use of the ${site.name} website. By using the site, you agree to them. If you don't agree, please don't use the site.`,
  sections: [
    {
      heading: "About this website",
      paragraphs: [
        `This website showcases the design, development and content services offered by ${site.name} and lets you get in touch with us. Information on the site is for general purposes only and doesn't form an offer or a contract.`,
      ],
    },
    {
      heading: "Our services",
      paragraphs: [
        "Booking a call or sending an enquiry doesn't commit either of us to anything. Any project we take on will be covered by a separate written proposal or agreement setting out the scope, timeline, fees and ownership of the work. If that agreement conflicts with these terms, the agreement wins.",
      ],
    },
    {
      heading: "Using the site",
      paragraphs: ["When you use this website, you agree not to:"],
      list: [
        "Use it for anything unlawful, or in a way that could damage, disable or overload the site.",
        "Try to gain unauthorised access to the site, its servers or any connected systems.",
        "Submit false information, spam or harmful content through the booking form or live chat.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        `Unless stated otherwise, the content on this website, including text, design, graphics and our logo, belongs to ${site.name}. Project screenshots and client names are shown with permission or as examples of our work and remain the property of their respective owners. You may not copy or reuse this content without our written permission.`,
      ],
    },
    {
      heading: "Links to other websites",
      paragraphs: [
        "This site links to live projects and to our social media profiles. We don't control those websites and aren't responsible for their content or how they handle your data.",
      ],
    },
    {
      heading: "No warranties",
      paragraphs: [
        "We work to keep the website accurate and available, but it is provided \"as is\". We don't guarantee it will always be available, error-free or up to date.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by law, we are not liable for any loss or damage arising from your use of this website or your reliance on its content. Nothing in these terms limits liability that cannot be limited by law.",
      ],
    },
    {
      heading: "Privacy",
      paragraphs: ["How we handle personal information is explained in our Privacy Policy."],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the Federal Republic of Nigeria, and any disputes will be handled by the Nigerian courts.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. Any changes will be posted on this page.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [contactLine],
    },
  ],
};
