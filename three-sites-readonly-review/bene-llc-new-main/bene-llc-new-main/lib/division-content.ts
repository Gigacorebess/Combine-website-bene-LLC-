// About and Contact copy for each division, so that /<division>/about and
// /<division>/contact stay inside the division the visitor is already in.
//
// Trading (Global Commodities) is deliberately absent: it is the root site and
// keeps its own bespoke /about and /contact pages. Everything here drives the
// shared DivisionAbout / DivisionContact templates, so adding a division means
// adding an entry — not another pair of page components.

export type DivisionAbout = {
  headline: [string, string];
  lede: string;
  fine: string;
  /** Numbered blocks: [number, title, body]. */
  approach: [string, string, string][];
  closing: string;
};

export type DivisionContact = {
  headline: [string, string];
  lede: string;
  fine: string;
  categoryLabel: string;
  categories: string[];
  /** Numbered blocks: [number, title, body]. */
  next: [string, string, string][];
};

export type DivisionContent = { about: DivisionAbout; contact: DivisionContact };

export const divisionContent: Record<string, DivisionContent> = {
  'critical-minerals': {
    about: {
      headline: ['Recovering what', 'industry depends on.'],
      lede:
        'BENE Critical Minerals focuses on rare earth elements and on recovering critical materials from industrial residues such as red mud (bauxite residue).',
      fine:
        'Rare earths sit behind magnets, electronics and clean-energy technology. Our interest is in the routes that bring them to market from sources that are already above ground.',
      approach: [
        ['01', 'Start from the residue', 'Industrial residues such as red mud already hold valuable material. We work on the routes that recover it rather than opening new ground for it.'],
        ['02', 'Prove the process', 'Recovery routes are assessed on chemistry, yield and what it costs to run them at scale, not on laboratory results alone.'],
        ['03', 'Partner to deploy', 'Technology and processing partnerships, offtake and project investment are how this work reaches industrial scale.'],
      ],
      closing:
        'Work in this division is at technology and project development stage. Specifications, volumes and timelines are agreed per engagement.',
    },
    contact: {
      headline: ['Talk to BENE', 'Critical Minerals.'],
      lede: 'Technology partnerships, processing routes, offtake and project investment in rare earth elements and resource recovery.',
      fine: 'Tell us which materials you are working with and what stage the project is at, and we will come back with the right next step.',
      categoryLabel: 'Area of interest',
      categories: [
        'Rare earth elements',
        'Resource recovery from red mud',
        'Processing technology partnership',
        'Offtake or supply',
        'Project investment',
        'Other / not listed',
      ],
      next: [
        ['01', 'We review the enquiry', 'The team looks at the material, the process route and the stage the project has reached.'],
        ['02', 'We scope the work', 'Technical fit, commercial structure and what each side would bring are worked through together.'],
        ['03', 'We agree next steps', 'Whether that is a technical exchange, a site visit or a term sheet, the path is set out clearly.'],
      ],
    },
  },

  energy: {
    about: {
      headline: ['Energy for an', 'industrial future.'],
      lede:
        'BENE Energy brings together our work in hydrogen, methanol and battery energy storage: technology platforms and projects at different stages of development, open to partners and investors.',
      fine:
        'Hydrogen through Gigacore Energy, low-carbon methanol as fuel and feedstock, and storage through Calyco Energy and Gigacore Systems.',
      approach: [
        ['01', 'Build the platform', 'Hydrogen, methanol and storage are developed as technology platforms rather than one-off projects, so the work carries across sites.'],
        ['02', 'Deploy with partners', 'Projects move forward with industrial partners, EPC contractors and investors who bring execution scale alongside the technology.'],
        ['03', 'Hold to what is proven', 'Systems are described by the stage they have actually reached — pilot, demonstration or commercial — not by what they are expected to become.'],
      ],
      closing:
        'Several platforms in this division are at pilot and demonstration stage. Partnership and investment enquiries are welcome at that stage.',
    },
    contact: {
      headline: ['Talk to', 'BENE Energy.'],
      lede: 'Hydrogen, methanol and battery energy storage — technology partnerships, project development, offtake and investment.',
      fine: 'Tell us which platform you are interested in and the scale you have in mind, and we will point you to the right team.',
      categoryLabel: 'Area of interest',
      categories: [
        'Hydrogen',
        'Methanol',
        'Battery energy storage (BESS)',
        'Solar and storage integration',
        'Offtake or supply',
        'Project investment',
        'Other / not listed',
      ],
      next: [
        ['01', 'We review the enquiry', 'The team checks which platform fits and what stage of development it has reached.'],
        ['02', 'We scope the project', 'Technical requirements, site conditions and commercial structure are worked through with you.'],
        ['03', 'We agree next steps', 'A technical exchange, a pilot, or a partnership and investment discussion, depending on what fits.'],
      ],
    },
  },

  technology: {
    about: {
      headline: ['Intelligent systems,', 'built to purpose.'],
      lede:
        'BENE Technology designs and builds AI agents and custom software for businesses that need practical automation, dependable integrations and tools their teams will actually use.',
      fine:
        'Agents grounded in your own documents and data, and the web applications, integrations and internal tools around them.',
      approach: [
        ['01', 'Start from the work', 'We begin with the task your team actually does, the systems it already runs on, and where the time goes.'],
        ['02', 'Build what gets used', 'Automation across email, CRM, spreadsheets and internal systems, with human review steps wherever decisions matter.'],
        ['03', 'Deliver and support', 'Scoping, delivery and support against clear milestones, with logging and hand-off built in from the start.'],
      ],
      closing:
        'Every engagement is scoped against your existing systems. We would rather integrate with what you run than ask you to replace it.',
    },
    contact: {
      headline: ['Talk to BENE', 'Technology.'],
      lede: 'AI agents, custom software, integrations and internal tools — built around the way your team already works.',
      fine: 'Tell us what the work looks like today and which systems it touches, and we will come back with a view on scope.',
      categoryLabel: 'What do you need',
      categories: [
        'AI agents',
        'Custom software',
        'API integrations and data pipelines',
        'Dashboards or client portals',
        'Internal tools',
        'Other / not listed',
      ],
      next: [
        ['01', 'We review the brief', 'The team looks at the task, the systems involved and what a good outcome would look like.'],
        ['02', 'We scope the build', 'Requirements, integrations and milestones are set out before any code is written.'],
        ['03', 'We deliver and support', 'Work ships against agreed milestones, with support and clear hand-off afterwards.'],
      ],
    },
  },

  construction: {
    about: {
      headline: ['Spaces and finishes,', 'delivered.'],
      lede:
        'BENE Construction covers interiors, fit-outs, paints and coatings through our Calyco brands, with scope to take on larger construction and EPC projects.',
      fine:
        'Interior design and project delivery through Calyco Interiors, paints and coatings through Calyco Paints.',
      approach: [
        ['01', 'Understand the space', 'Residential or commercial, the brief starts with how the space has to work and the standard of finish expected.'],
        ['02', 'Design and specify', 'Design, materials, paints and coatings are specified together so the finish is planned rather than resolved on site.'],
        ['03', 'Deliver the project', 'Fit-out and finishing are coordinated through to handover, with scope to take on larger construction and EPC work.'],
      ],
      closing:
        'Scope ranges from a single interior fit-out through to larger construction and EPC projects. Each is quoted on its own requirements.',
    },
    contact: {
      headline: ['Talk to BENE', 'Construction.'],
      lede: 'Interiors, fit-outs, paints and coatings — and larger construction and EPC projects.',
      fine: 'Tell us about the space, the standard of finish you want and your timeline, and we will come back with the right next step.',
      categoryLabel: 'What do you need',
      categories: [
        'Interior design',
        'Fit-out and project delivery',
        'Paints and coatings',
        'Construction project',
        'EPC project',
        'Other / not listed',
      ],
      next: [
        ['01', 'We review the brief', 'The team looks at the space, the scope of work and the standard of finish you are after.'],
        ['02', 'We design and specify', 'Design, materials and finishes are specified, with costs and programme set against them.'],
        ['03', 'We deliver the project', 'Work is coordinated through to handover against the agreed programme.'],
      ],
    },
  },
};

export const findDivisionContent = (slug: string) => divisionContent[slug];
