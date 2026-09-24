// Single source of truth for BENE divisions, their subdivisions and the
// header logo descriptor shown for each. Menu order follows this array.

export type SiteLink = { label: string; url: string; note: string };

export type Subdivision = {
  slug: string;
  name: string;
  href: string;
  descriptor: string[];
  summary: string;
  points: string[];
  sites: SiteLink[];
};

export type Media = { src: string; alt: string };

export type Division = {
  slug: string;
  name: string;
  short: string;
  href: string;
  image: Media;
  video?: { src: string; poster: string; label: string };
  descriptor: string[];
  menuText: string;
  headline: [string, string];
  intro: string;
  email: string;
  subs: Subdivision[];
};

export const divisions: Division[] = [
  {
    slug: 'trading',
    name: 'BENE Trading',
    short: 'Trading',
    href: '/',
    image: { src: '/divisions/trading.webp', alt: 'Port cranes silhouetted against a dusk sky' },
    descriptor: ['GLOBAL', 'COMMODITIES'],
    menuText: 'Sulphur, urea, crude oil, LNG and scrap metals.',
    headline: ['Materials that', 'move the world.'],
    intro: 'Global commodity sourcing, trade coordination and logistics.',
    email: 'sales@benellc.com',
    subs: [
      {
        slug: 'global-commodities',
        name: 'Global Commodities',
        href: '/#commodities',
        descriptor: ['GLOBAL', 'COMMODITIES'],
        summary: 'Sulphur, urea, crude oil, LNG and scrap metals.',
        points: [],
        sites: [],
      },
    ],
  },
  {
    slug: 'critical-minerals',
    name: 'BENE Critical Minerals',
    short: 'Critical Minerals',
    href: '/critical-minerals',
    image: { src: '/divisions/critical-minerals.webp', alt: 'Gloved hands mixing a glowing solution in a laboratory beaker' },
    video: { src: '/divisions/video/critical-minerals.mp4', poster: '/divisions/video/critical-minerals.webp', label: 'Molten metal flowing in an industrial foundry' },
    descriptor: ['CRITICAL', 'MINERALS'],
    menuText: 'Rare earth elements and resource recovery.',
    headline: ['The elements', 'industry depends on.'],
    intro:
      'BENE Critical Minerals focuses on rare earth elements and on recovering critical materials from industrial residues such as red mud (bauxite residue).',
    email: 'info@benellc.com',
    subs: [
      {
        slug: 'rare-earth-elements',
        name: 'Rare earth elements',
        href: '/critical-minerals/rare-earth-elements',
        descriptor: ['CRITICAL MINERALS', 'RARE EARTHS'],
        summary: 'Rare earth elements for magnets, electronics and clean-energy technology.',
        points: [
          'Developing routes to recover rare earth elements from red mud and other industrial residues.',
          'Technology and processing partnerships.',
          'Supply, offtake and project investment enquiries.',
        ],
        sites: [],
      },
    ],
  },
  {
    slug: 'energy',
    name: 'BENE Energy',
    short: 'Energy',
    href: '/energy',
    image: { src: '/divisions/energy.webp', alt: 'Electricity transmission towers against a sunset sky' },
    video: { src: '/divisions/video/energy.mp4', poster: '/divisions/video/energy.webp', label: 'Drone footage of wind turbines at sunset' },
    descriptor: ['ENERGY'],
    menuText: 'Hydrogen, methanol and battery energy storage.',
    headline: ['Energy for an', 'industrial future.'],
    intro:
      'BENE Energy brings together our work in hydrogen, methanol and battery energy storage: technology platforms and projects at different stages of development, open to partners and investors.',
    email: 'info@benellc.com',
    subs: [
      {
        slug: 'hydrogen',
        name: 'Hydrogen',
        href: '/energy/hydrogen',
        descriptor: ['ENERGY', 'HYDROGEN'],
        summary: 'Plasma-based hydrogen production technology developed by Gigacore Energy.',
        points: [
          'Modular systems designed for on-site and distributed hydrogen production.',
          'Applications across refining, green ammonia, data centres and grid support.',
          'Technology at pilot and demonstration stage; partnership and investment enquiries welcome.',
        ],
        sites: [{ label: 'Gigacore Energy', url: 'https://www.gigacore.energy/', note: 'Hydrogen technology' }],
      },
      {
        slug: 'methanol',
        name: 'Methanol',
        href: '/energy/methanol',
        descriptor: ['ENERGY', 'METHANOL'],
        summary: 'BENE Methanol develops low-carbon methanol as a fuel and chemical feedstock.',
        points: [
          'Methanol for marine fuel, chemical feedstock and hydrogen-carrier applications.',
          'Project development alongside our hydrogen platform.',
          'Offtake, partnership and investment discussions.',
        ],
        sites: [],
      },
      {
        slug: 'bess',
        name: 'BESS',
        href: '/energy/bess',
        descriptor: ['ENERGY', 'BESS'],
        summary: 'Battery energy storage, including sodium-ion technology, for grid, commercial and solar applications.',
        points: [
          'Sodium-ion battery and storage systems through Calyco Energy.',
          'Solar and storage integration through Gigacore Systems.',
          'Commercial, industrial and utility-scale storage requirements.',
        ],
        sites: [
          { label: 'Calyco Energy', url: 'https://calycoenergy.com/', note: 'Sodium-ion batteries & BESS' },
          { label: 'Gigacore Systems', url: 'https://www.gigacore.systems/', note: 'Solar & storage' },
        ],
      },
    ],
  },
  {
    slug: 'technology',
    name: 'BENE Technology',
    short: 'Technology',
    href: '/technology',
    image: { src: '/divisions/technology.webp', alt: 'Server racks in a dimly lit data centre' },
    video: { src: '/divisions/video/technology.mp4', poster: '/divisions/video/technology.webp', label: 'Abstract 3D animation of a glowing futuristic pattern' },
    descriptor: ['TECHNOLOGY'],
    menuText: 'AI agents and custom software for businesses.',
    headline: ['Intelligent systems,', 'built to purpose.'],
    intro:
      'BENE Technology designs and builds AI agents and custom software for businesses that need practical automation, dependable integrations and tools their teams will actually use.',
    email: 'info@benellc.com',
    subs: [
      {
        slug: 'ai-agents',
        name: 'AI agents',
        href: '/technology/ai-agents',
        descriptor: ['TECHNOLOGY', 'AI AGENTS'],
        summary: 'Agents that take on real work across your tools, documents and data.',
        points: [
          'Customer and operations assistants grounded in your own documents and data.',
          'Workflow automation across email, CRM, spreadsheets and internal systems.',
          'Human review steps, logging and clear hand-off wherever decisions matter.',
        ],
        sites: [],
      },
      {
        slug: 'custom-software',
        name: 'Custom software',
        href: '/technology/custom-software',
        descriptor: ['TECHNOLOGY', 'CUSTOM SOFTWARE'],
        summary: 'Web applications, integrations and internal tools built around the way you work.',
        points: [
          'Web applications, dashboards and client portals.',
          'API integrations and data pipelines between the systems you already use.',
          'Scoping, delivery and support with clear milestones.',
        ],
        sites: [],
      },
    ],
  },
  {
    slug: 'construction',
    name: 'BENE Construction',
    short: 'Construction',
    href: '/construction',
    image: { src: '/divisions/construction.webp', alt: 'A warm, contemporary living room designed by Calyco Interiors' },
    video: { src: '/divisions/video/construction.mp4', poster: '/divisions/video/construction.webp', label: 'Time-lapse of a busy construction site' },
    descriptor: ['CONSTRUCTION', '& INTERIORS'],
    menuText: 'Construction, interiors, paints and coatings.',
    headline: ['Spaces and finishes,', 'delivered.'],
    intro:
      'BENE Construction covers interiors, fit-outs, paints and coatings through our Calyco brands, with scope to take on larger construction and EPC projects.',
    email: 'info@benellc.com',
    subs: [
      {
        slug: 'construction-interiors',
        name: 'Construction & Interiors',
        href: '/construction/construction-interiors',
        descriptor: ['CONSTRUCTION', '& INTERIORS'],
        summary: 'Interior design, fit-outs and finishing through Calyco Interiors and Calyco Paints.',
        points: [
          'Residential and commercial interior design and project delivery.',
          'Paints and coatings from Calyco Paints.',
          'Construction and EPC project enquiries.',
        ],
        sites: [
          { label: 'Calyco Interiors', url: 'https://www.calycointeriors.com/', note: 'Interior design' },
          { label: 'Calyco Paints', url: 'https://calycopaints.com/', note: 'Paints & coatings' },
        ],
      },
    ],
  },
];

export const findDivision = (slug: string) => divisions.find(d => d.slug === slug);

export function descriptorFor(division: string, sub?: string) {
  const d = findDivision(division) ?? divisions[divisions.length - 1];
  return d.subs.find(s => s.slug === sub)?.descriptor ?? d.descriptor;
}

export const enquiry = (email: string, topic: string) =>
  `mailto:${email}?subject=${encodeURIComponent('Bene LLC — ' + topic + ' enquiry')}`;
