// ---------------------------------------------------------------------------
//  Single source of truth for personal details. Edit these values freely.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Dhruv Ajmera',
  initials: 'DA',
  role: 'Computer Science & Mathematics',
  affiliation: 'The University of Texas at Austin',
  location: 'Austin, Texas',
  email: 'dhruv.ajmera@utexas.edu',
  // Replace with your real domain before deploying.
  url: 'https://dhruvajmera.com',
  tagline:
    'Undergraduate researcher working in the intersection of low-level implementation and high-level mathematics.',
  description:
    'Personal site of Dhruv Ajmera — Computer Science & Mathematics at UT Austin. Research, presentations, and curriculum vitae.',
};

export const nav = [
  { label: 'Research', href: '/publications/' },
  { label: 'Presentations', href: '/research/' },
  // { label: 'Projects', href: '/projects/' },
  // { label: 'Writing', href: '/writing/' },
  { label: 'CV', href: '/cv/' },
];

// `icon` maps to a glyph in components/Icon.astro
export const socials = [
  { label: 'Email', href: 'mailto:dhruv.ajmera@utexas.edu', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/dajmera-24', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dhruv-ajmera/', icon: 'linkedin' },
];
