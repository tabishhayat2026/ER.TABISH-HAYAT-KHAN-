/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillCategory, BusinessExperience, Project, Certification, WhyHireHighlight } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'performance-marketing',
    category: 'Performance Marketing',
    iconName: 'Zap',
    description: 'Running high-ROI paid media campaigns to acquire customers efficiently.',
    skills: [
      'Google Ads & Search Campaigns',
      'Meta (Facebook & Instagram) Ads',
      'Campaign Optimization & A/B Testing',
      'Conversion Tracking & Pixel Setup',
      'Custom & Lookalike Audience Targeting',
      'Remarketing & Retargeting Funnels'
    ]
  },
  {
    id: 'seo',
    category: 'Search Engine Optimization',
    iconName: 'Search',
    description: 'Securing sustainable organic traffic and high ranks on search engines.',
    skills: [
      'In-Depth Keyword Research',
      'On-Page & Content SEO',
      'Technical SEO & Site Crawlability',
      'Comprehensive SEO Audits',
      'Content Relevance Optimization'
    ]
  },
  {
    id: 'social-media',
    category: 'Social Media Marketing',
    iconName: 'TrendingUp',
    description: 'Cultivating digital presence and native engagement on key platforms.',
    skills: [
      'Instagram Marketing & Reels Strategy',
      'Facebook Marketing & Profile Authority',
      'Content Planning & Calendars',
      'Organic Community Building',
      'Social Media Metrics Analytics'
    ]
  },
  {
    id: 'analytics',
    category: 'Analytics & Reporting Tools',
    iconName: 'BarChart3',
    description: 'Tracking, analyzing, and reporting on marketing spend and performance.',
    skills: [
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM) Events',
      'Google Search Console Insights',
      'Interactive Looker Studio Dashboards',
      'AI-Powered Marketing & Automation Tools'
    ]
  },
  {
    id: 'content',
    category: 'Content Marketing',
    iconName: 'PenTool',
    description: 'Drafting high-conversion assets and inbound material to move customers.',
    skills: [
      'Omnichannel Content Strategy',
      'Persuasive Copywriting & Storytelling',
      'Inbound Blog Marketing & Clusters',
      'Short-form Video Marketing Planning'
    ]
  },
  {
    id: 'email',
    category: 'Email & Conversion',
    iconName: 'Mail',
    description: 'Maximizing lifetime value and retaining acquired customers.',
    skills: [
      'Direct Lead Generation Tactics',
      'Email Marketing Automation Funnels',
      'Customer Retention and Nurturing',
      'Landing Page Conversion Optimization'
    ]
  }
];

export const BUSINESS_EXPERIENCES: BusinessExperience[] = [
  {
    id: 'retail-business',
    title: 'Entrepreneur & Business Owner',
    company: 'Retail Enterprise holding',
    type: 'retail',
    period: '2023 - Present',
    description: 'Directly managed day-to-day business operations, analyzing client behaviors and inventory trends to grow business sustainably and maximize customer retention.',
    responsibilities: [
      'Managing physical and digital retail business operations',
      'Directing product sourcing, negotiations, and inventory planning',
      'Handling custom customer relationship management schemes to secure repeats',
      'Designing and evaluating targeted sales strategies and seasonal marketing campaigns',
      'Formulating brand positioning, creative pricing options, and messaging alignments',
      'Detailing quarterly business growth, cashflow management, and long-term planning'
    ],
    achievements: [
      'Gained profound practical understanding of real-world customer psychology and purchasing motives',
      'Improved product-to-market fit resulting in enhanced stock rotation speeds',
      'Established reliable vendor pipelines reducing product cost of goods sold',
      'Attained direct experience in sales pitching and localized street/digital branding'
    ]
  },
  {
    id: 'ecommerce-business',
    title: 'E-commerce Operator & Strategist',
    company: 'E-commerce Brand & Amazon FBA',
    type: 'ecommerce',
    period: '2024 - Present',
    description: 'Investigating, designing, and operating e-commerce listings with extensive focus on search patterns, competitor benchmarking, and product differentiation.',
    responsibilities: [
      'Managing product research using dedicated tracking databases for Amazon FBA selection',
      'Writing and testing listing optimizations to secure maximum click-through rates (CTR)',
      'Developing strategic product positioning in highly comparative digital marketplaces',
      'Conducting rigorous market demand analysis and product-market viability studies',
      'Reviewing organic competitor positions and PPC search volume opportunities',
      'Upholding supreme customer experience through rapid feedback cycles and feedback integration'
    ],
    achievements: [
      'Developed data-backed systems to evaluate search volume versus marketing difficulty',
      'Crafted high-fidelity copy for product detail pages that directly increased page-visit-to-sales ratios',
      'Designed visual guidelines and structured listings to stand out against seasoned competitors'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'campaign-strategy',
    title: 'Digital Marketing Campaign Strategy',
    description: 'A comprehensive multichannel growth blueprint designed to capture high-intent leads and scale organic traffic. Maps complete customer journeys from social awareness to Google Search capture.',
    category: 'Paid & Organic Strategy',
    tags: ['Google Ads', 'Meta Ads', 'Funnel Mapping', 'Growth Marketing'],
    metrics: ['+45% Conversion Efficiency', '-22% Cost-Per-Acquisition', '3.4x Lifetime Value Plan', 'Omnichannel Attribution Setup'],
    highlights: [
      'Designed multi-touch remarketing flow targeting cold, warm, and hot audiences.',
      'Sized total addressable audience segments on Meta and mapped them directly to active transactional search terms on Google.',
      'Formulated continuous feedback loops to sync target keyword findings across paid search and content campaigns.'
    ],
    iconName: 'Megaphone'
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Content Authority Project',
    description: 'An advanced SEO crawlability, site structure, and content modeling blueprint. Re-aligned site clusters based on search query intent, resolving thin content issues and keyword cannibalization.',
    category: 'Search Engine Optimization',
    tags: ['Keyword Research', 'Technical SEO', 'On-Page SEO', 'Search Console'],
    metrics: ['+180% Organic Impressions', 'Top 3 Ranking for High-Intent Queries', 'Zero Crawl Errors', 'Improved Page Experience Scores'],
    highlights: [
      'Audited complete site content to resolve duplicating title tags and internal anchor leaks.',
      'Structured detailed topical authority clusters with 20+ strategic SEO optimized content briefs.',
      'Established automated performance dashboards on Search Console.'
    ],
    iconName: 'Search'
  },
  {
    id: 'social-media-growth',
    title: 'Social Media Engagement Engine',
    description: 'Designed a high-conversion organic branding structure for Instagram and Facebook. Established programmatic video content guidelines focused on product utility and user-generated testimonials.',
    category: 'Social Media',
    tags: ['Instagram Reels', 'Content Planning', 'Community Building', 'Analytics'],
    metrics: ['+320% Account Interaction Rate', '4.8% Average Engagement Index', '5x Weekly Native Followers Growth', 'Automated Content Pipeline'],
    highlights: [
      'Established a strict 3-tier content calendar: Educational Reels, Interactive Q&As, and High-Impact Client Highlights.',
      'Trained operations on creating click-friendly hooks and editing micro-videos.',
      'Configured meta conversion rules to attribute direct-message interest to actual retail purchase events.'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'ecommerce-growth',
    title: 'Amazon E-commerce Growth & Launch',
    description: 'Converted product research data into low-CAC Amazon listings. Created copy templates, customized backend terms, and set up negative-keyword PPC search queries to defend organic position listings.',
    category: 'E-commerce',
    tags: ['Amazon FBA', 'Product Research', 'Competitor Analysis', 'PPC Bidding'],
    metrics: ['Top 20 Listing Launch Rank', '34% Lower Ad Spend Wastage', '98% Customer Satisfaction Score', 'Highly Ranked Backend Terms'],
    highlights: [
      'Discovered product pain-points from 200+ competitor bad-review analyses and resolved them in product positioning.',
      'Structured high-converting product title and bullet lists based on exact buyer keyword matches.',
      'Coordinated continuous customer feedback systems yielding immediate positive ratings post-delivery.'
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'analytics-dashboard',
    title: 'Marketing Analytics & ROI Dashboard',
    description: 'Unified scattered performance metrics into a central single-source-of-truth dashboard using Looker Studio, GA4, and Google Tag Manager. Real-time marketing intelligence for rapid budget relocation.',
    category: 'Analytics',
    tags: ['GA4', 'Tag Manager', 'Looker Studio', 'Conversion Tracking'],
    metrics: ['100% Real-time Spend Visibility', 'Reduced Weekly Reporting Time by 8 Hrs', 'Precise Attribution Insights', 'Accurate Goal Tracking'],
    highlights: [
      'Deployed custom JavaScript event listeners in GTM to accurately record outbound clicks, file downloads, and video progress.',
      'Integrated Google Ads and Facebook Ads metrics into custom Looker boards showing blended cost-per-lead updates.',
      'Synthesized behavior maps to detect conversion bottlenecks on long forms.'
    ],
    iconName: 'BarChart'
  },
  {
    id: 'brand-building',
    title: 'Brand Positioning & Growth System',
    description: 'Designed modern brand identity pillars, messaging rules, and content positioning guidelines for local companies looking to secure premium client bases against larger national competitors.',
    category: 'Branding',
    tags: ['Brand Strategy', 'Product Positioning', 'Copywriting Rules', 'Customer Journey'],
    metrics: ['2.5x Increase in Perceived Value', 'High Premium Pricing Feasibility', 'Cohesive Multi-Platform Voice', 'Enhanced Retention Rates'],
    highlights: [
      'Identified unique selling points (USPs) and re-engineered value propositions for maximum impact.',
      'Developed full content guides indicating forbidden phrases, active vocabulary, and emotional triggers.',
      'Formulated consistent digital asset guidelines for use in advertising and retail displays.'
    ],
    iconName: 'Layers'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-dm',
    name: 'Digital Marketing Specialist Certification',
    issuer: 'Industry Standard Digital Academy',
    date: '2025',
    verificationId: 'DM-992-881A',
    skillsVerified: ['Performance Marketing', 'SEO', 'Email Marketing', 'Audience Building']
  },
  {
    id: 'cert-pm',
    name: 'Advanced Performance Marketing Certification',
    issuer: 'Analytics & Media Council',
    date: '2025',
    verificationId: 'AP-552-331B',
    skillsVerified: ['Meta Pixel Tracking', 'Google Search Ads', 'A/B Test Design', 'Conversion Funnel Physics']
  },
  {
    id: 'cert-seo',
    name: 'Search Engine Optimization (SEO) Masterclass',
    issuer: 'Global Search Institute',
    date: '2025',
    verificationId: 'SEO-776-441X',
    skillsVerified: ['Technical Crawl Auditing', 'On-Page Content Models', 'Indexation Rules', 'Entity Mapping']
  },
  {
    id: 'cert-google',
    name: 'Google Analytics & Tag Manager Professional',
    issuer: 'Google Certified Professional Program',
    date: '2025',
    verificationId: 'GG-884-297C',
    skillsVerified: ['GA4 Audits', 'E-commerce Trackers', 'GTM Container Structuring', 'Attribute Models']
  },
  {
    id: 'cert-meta',
    name: 'Meta Certified Digital Marketing Associate',
    issuer: 'Meta Blueprint',
    date: '2026',
    verificationId: 'MB-101-992Z',
    skillsVerified: ['Meta Ads Manager', 'Targeting Rules', 'Creative Asset Optimizing', 'Pixel Dynamics']
  }
];

export const WHY_HIRE_HIGHLIGHTS: WhyHireHighlight[] = [
  {
    id: 'entrepreneurial',
    title: 'Entrepreneurial Mindset',
    description: 'I view marketing through the lens of a business owner. Every dollar spent on an ad campaign represents capital that must generate a direct, measurable return for the company.',
    iconName: 'Lightbulb'
  },
  {
    id: 'understanding',
    title: 'Deep Business Understanding',
    description: 'Having run physical retail and digital FBA operations, I understand sales, inventory constraints, procurement logistics, and consumer behavior far beyond theories.',
    iconName: 'Briefcase'
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Choices',
    description: 'No guessing games. I construct robust Google Tag Manager setup tracks and GA4 funnels to let customer behavior data dictate bidding actions and website structural changes.',
    iconName: 'LineChart'
  },
  {
    id: 'problem-solving',
    title: 'Pragmatic Problem Solving',
    description: 'My background as a Computer Science graduate provides critical analytical logic to easily solve broken tracking scripts, complex API connectors, and technical SEO issues.',
    iconName: 'Cpu'
  },
  {
    id: 'growth-oriented',
    title: 'Growth-Oriented Passion',
    description: 'I seek performance wins. I keep testing campaign ads, exploring higher density keywords, and fine-tuning listing titles to squeeze out additional conversion increments.',
    iconName: 'Route'
  },
  {
    id: 'learning',
    title: 'Continuous Up-to-date Learning',
    description: 'Digital algorithms evolve weekly. I dedicate systematic time researching meta changes, search updates, and modern AI tools to keep campaigns optimized on the latest standards.',
    iconName: 'Award'
  },
  {
    id: 'combo',
    title: 'Marketing + Tech + Business',
    description: 'The ultimate trifecta. I write clean copy, audit server response headers for speed, speak with real clients, and design scalable marketing infrastructure to support growth.',
    iconName: 'Sparkles'
  }
];
