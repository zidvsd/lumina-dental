export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "The Clinic", href: "#clinic" },
      { label: "Smile Stories", href: "#stories" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export const footerAddress = {
  heading: "Location",
  lines: ["100 Serenity Blvd,", "London, W1 4LK"],
};

export const footerTagline =
  "Excellence in hospitality and clinical care. Redefining the dental experience for the modern patient.";

export const footerCopyright =
  "© 2024 Lumina Dental. Excellence in Hospitality & Care.";

export const footerSocials = [
  { icon: "camera", href: "#", ariaLabel: "Instagram" },
  { icon: "alternate_email", href: "#", ariaLabel: "Email" },
];

export const brandName = "Lumina";
