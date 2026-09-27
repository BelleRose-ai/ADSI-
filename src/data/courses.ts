export interface Course {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  category: string;
  imagePlaceholder: string;
  heroPlaceholder: string;
  overview: string;
  learningOutcomes: string[];
  salaryData: {
    localAvg: string;
    globalRemoteAvg: string;
    entryLevel: string;
    experienced: string;
  };
  syllabus: {
    week: number;
    title: string;
    summary: string;
    topics: string[];
  }[];
  testimonials: {
    name: string;
    role: string;
    location: string;
    quote: string;
    avatarPlaceholder: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const COURSES: Course[] = [
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Professional',
    tagline: 'Master executive support, client management, and digital admin tools.',
    description: 'Learn in-demand administrative and organizational skills to support global businesses and entrepreneurs remotely.',
    duration: '6 Weeks',
    category: 'Admin & Operations',
    imagePlaceholder: 'https://i.postimg.cc/wTsRxPZB/Gemini-Generated-Image-7r8gl77r8gl77r8g.jpg',
    heroPlaceholder: 'https://i.postimg.cc/wTsRxPZB/Gemini-Generated-Image-7r8gl77r8gl77r8g.jpg',
    overview: 'The Virtual Assistant track prepares you for high-paying remote support roles. You will master calendar management, email correspondence, bookkeeping basics, customer support tools, and professional client communication.',
    learningOutcomes: [
      'Master Google Workspace, Microsoft 365, and advanced project management tools (Trello, Asana, Notion).',
      'Handle executive email inbox management, calendar scheduling, and travel planning.',
      'Provide top-tier customer support via live chat, ticketing systems, and email.',
      'Set up your freelance profile, price your services, and land international remote clients.'
    ],
    salaryData: {
      localAvg: '₦200,000 / month',
      globalRemoteAvg: '$1,200 / month',
      entryLevel: '$800 - $1,000 / month',
      experienced: '$2,500+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'Foundations of Virtual Assistance',
        summary: 'Understanding the remote work ecosystem and essential professional mindset.',
        topics: ['Remote Work Ethics', 'Client Communication', 'Time Management & Productivity Systems']
      },
      {
        week: 2,
        title: 'Google Workspace & Advanced Admin',
        summary: 'Mastering email management, calendar organization, and file structures.',
        topics: ['Inbox Zero Mastery', 'Google Calendar Scheduling', 'Cloud File Management & Security']
      },
      {
        week: 3,
        title: 'Project Management & Collaboration Tools',
        summary: 'Keeping teams organized using modern collaboration software.',
        topics: ['Trello & Asana Workflows', 'Notion Workspace Building', 'Slack & Microsoft Teams Etiquette']
      },
      {
        week: 4,
        title: 'Customer Support & CRM Management',
        summary: 'Delivering exceptional customer service and managing client databases.',
        topics: ['Zendesk & Intercom Basics', 'CRM Data Entry & Hygiene', 'Handling Difficult Client Scenarios']
      },
      {
        week: 5,
        title: 'Basic Bookkeeping & Invoicing',
        summary: 'Handling financial records, expense tracking, and professional invoicing.',
        topics: ['QuickBooks & FreshBooks Intro', 'Creating Professional Invoices', 'Expense Categorization']
      },
      {
        week: 6,
        title: 'Launching Your VA Business & Landing Clients',
        summary: 'Creating irresistible portfolios, Upwork/Fiverr optimization, and direct outreach.',
        topics: ['Upwork Profile Setup', 'Cold Pitching Strategies', 'Setting Your Hourly & Retainer Rates']
      }
    ],
    testimonials: [
      {
        name: 'Amina Bello',
        role: 'Executive Virtual Assistant',
        location: 'Abuja, Nigeria',
        quote: 'ADSI changed my life! Within two weeks of finishing the VA track, I landed a UK-based remote client paying in British Pounds.',
        avatarPlaceholder: 'student_amina.jpg'
      },
      {
        name: 'Chidi Okafor',
        role: 'Operations VA',
        location: 'Lagos, Nigeria',
        quote: 'The step-by-step guidance on setting up my Upwork profile was a game changer. I never knew I could work globally from home.',
        avatarPlaceholder: 'student_chidi.jpg'
      },
      {
        name: 'Fatima Aliyu',
        role: 'Client Success Assistant',
        location: 'Kano, Nigeria',
        quote: 'The beginner-friendly approach made everything so simple. The mentors were always there whenever I had questions.',
        avatarPlaceholder: 'student_fatima.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need prior office experience to join?',
        answer: 'Not at all! This course is designed specifically for complete beginners with zero prior office or tech experience.'
      },
      {
        question: 'What equipment do I need?',
        answer: 'You only need a working laptop, reliable internet access, and a willingness to learn.'
      },
      {
        question: 'Will ADSI help me get remote clients?',
        answer: 'Yes! We provide dedicated portfolio reviews, interview preparation, and direct job placement support.'
      }
    ]
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Master audience growth, content strategy, and community building.',
    description: 'Turn your passion for social media into a profitable career by managing brands on Instagram, TikTok, and LinkedIn.',
    duration: '6 Weeks',
    category: 'Marketing & Growth',
    imagePlaceholder: 'https://i.postimg.cc/fT0SWFF2/Gemini-Generated-Image-uayv9quayv9quayv.jpg',
    heroPlaceholder: 'https://i.postimg.cc/fT0SWFF2/Gemini-Generated-Image-uayv9quayv9quayv.jpg',
    overview: 'Social Media Management is one of the most sought-after skills by modern businesses. Learn how to create viral content calendars, write engaging captions, analyze metrics, and build loyal online communities.',
    learningOutcomes: [
      'Create high-converting content calendars for Instagram, TikTok, Twitter/X, and LinkedIn.',
      'Master Canva and basic editing tools to design scroll-stopping graphics and short videos.',
      'Understand social media algorithms and organic growth hacks.',
      'Manage brand reputation and engage with online communities effectively.'
    ],
    salaryData: {
      localAvg: '₦250,000 / month',
      globalRemoteAvg: '$1,400 / month',
      entryLevel: '$900 - $1,200 / month',
      experienced: '$3,000+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'Social Media Strategy & Platform Fundamentals',
        summary: 'Understanding algorithm behaviors across major social platforms.',
        topics: ['Platform Demographics', 'Audience Research & Persona Building', 'Brand Voice & Tone Guidelines']
      },
      {
        week: 2,
        title: 'Content Creation & Design Basics',
        summary: 'Designing stunning visuals and carousels using Canva.',
        topics: ['Canva Mastery for Beginners', 'Color Psychology & Typography', 'Designing Scroll-Stopping Carousels']
      },
      {
        week: 3,
        title: 'Copywriting & Caption Mastery',
        summary: 'Writing hooks and captions that drive comments and shares.',
        topics: ['The Anatomy of a Great Hook', 'Storytelling Frameworks', 'Call-to-Action Strategies']
      },
      {
        week: 4,
        title: 'Content Calendar & Scheduling Tools',
        summary: 'Using Buffer, Hootsuite, and Meta Business Suite to automate posting.',
        topics: ['Batch Content Creation', 'Scheduling Workflows', 'Best Times to Post Across Timezones']
      },
      {
        week: 5,
        title: 'Analytics & Performance Tracking',
        summary: 'Reading metrics to understand what content performs best.',
        topics: ['Analyzing Reach & Engagement', 'Conversion Tracking', 'Preparing Client Reports']
      },
      {
        week: 6,
        title: 'Monetization & Agency Building',
        summary: 'Landing retainer clients and scaling your social media agency.',
        topics: ['Pricing Your Retainer Packages', 'Pitching Local & International Brands', 'Building Your Case Studies']
      }
    ],
    testimonials: [
      {
        name: 'Oluwaseun Adebayo',
        role: 'Social Media Manager',
        location: 'Ibadan, Nigeria',
        quote: 'I used to post on Instagram with zero views. Now I manage accounts for 3 growing e-commerce brands!',
        avatarPlaceholder: 'student_oluwaseun.jpg'
      },
      {
        name: 'Zainab Mohammed',
        role: 'Community Lead',
        location: 'Kaduna, Nigeria',
        quote: 'The caption writing module taught me how to hook readers instantly. My confidence has skyrocketed.',
        avatarPlaceholder: 'student_zainab.jpg'
      },
      {
        name: 'David Okon',
        role: 'Freelance SMM',
        location: 'Uyo, Nigeria',
        quote: 'The ₦10,000 scholarship fee was the best investment I ever made. The return on investment is unbelievable.',
        avatarPlaceholder: 'student_david.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need a large following on my personal page?',
        answer: 'Not at all! Managing business accounts requires strategy, not personal popularity.'
      },
      {
        question: 'How do I get paid by clients?',
        answer: 'We teach you how to set up secure international payment gateways like Payoneer, Wise, and crypto/bank transfers.'
      }
    ]
  },
  {
    id: 'youtube-automation',
    title: 'YouTube Automation',
    tagline: 'Build cash-cow channels without showing your face on camera.',
    description: 'Learn the exact blueprint for creating profitable faceless YouTube channels using outsourcing and AI tools.',
    duration: '6 Weeks',
    category: 'Content & Media',
    imagePlaceholder: 'youtube_automation_thumbnail.jpg',
    heroPlaceholder: 'yt_hero_placeholder.jpg',
    overview: 'YouTube Automation allows you to build media businesses that generate passive ad revenue and affiliate commissions without ever recording yourself on camera.',
    learningOutcomes: [
      'Find profitable, low-competition niches with high CPMs (Cost Per Mille).',
      'Script engaging video hooks and outlines using proven retention formulas.',
      'Outsource voiceovers, video editing, and thumbnail creation efficiently.',
      'Optimize video SEO for maximum search visibility and suggested video traffic.'
    ],
    salaryData: {
      localAvg: '₦300,000 / month + Ad Revenue',
      globalRemoteAvg: '$2,000+ / month',
      entryLevel: '$1,000 / month',
      experienced: '$5,000+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'Niche Research & Channel Setup',
        summary: 'Finding lucrative niches and setting up your YouTube studio.',
        topics: ['High-CPM Niche Discovery', 'Competitor Analysis', 'Brand & Channel Optimization']
      },
      {
        week: 2,
        title: 'Scriptwriting & Audience Retention',
        summary: 'Writing gripping scripts that keep viewers hooked till the end.',
        topics: ['The 30-Second Hook Formula', 'Pacing and Story Arcs', 'Call-to-Action Placements']
      },
      {
        week: 3,
        title: 'Voiceover & Audio Production',
        summary: 'Creating professional voiceovers using AI and human talent.',
        topics: ['AI Voice Generation Tools', 'Hiring Voiceover Artists on Fiverr', 'Audio Editing Basics']
      },
      {
        week: 4,
        title: 'Thumbnail Design & CTR Optimization',
        summary: 'Designing high-click-through-rate thumbnails that stand out.',
        topics: ['Thumbnail Psychology', 'Canva & Photoshop Basics', 'Testing & Iterating Thumbnails']
      },
      {
        week: 5,
        title: 'Video Editing & Stock Footage Integration',
        summary: 'Putting together professional faceless videos smoothly.',
        topics: ['Free Stock Footage Sources', 'CapCut & Premiere Pro Editing', 'Sound Effects & Transitions']
      },
      {
        week: 6,
        title: 'Monetization & Channel Scaling',
        summary: 'Reaching the YouTube Partner Program and outsourcing your workflow.',
        topics: ['AdSense & Monetization Rules', 'Building a Team of Freelancers', 'Scaling to Multiple Channels']
      }
    ],
    testimonials: [
      {
        name: 'Emmanuel Johnson',
        role: 'Faceless Channel Owner',
        location: 'Lagos, Nigeria',
        quote: 'My first faceless channel got monetized in month two! ADSI gave me the exact blueprint.',
        avatarPlaceholder: 'student_emmanuel.jpg'
      },
      {
        name: 'Grace Nwachukwu',
        role: 'YouTube Scriptwriter',
        location: 'Enugu, Nigeria',
        quote: 'I now write scripts for 4 top-tier YouTube automation channels earning steady income in USD.',
        avatarPlaceholder: 'student_grace.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need to show my face or use my voice?',
        answer: 'No! Faceless YouTube channels use stock footage, animations, and voiceovers (AI or hired).'
      },
      {
        question: 'How long before a channel makes money?',
        answer: 'With consistent uploads following our strategy, students typically reach monetization within 3 to 6 months.'
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Specialist',
    tagline: 'Build intelligent workflows and chatbots for modern businesses.',
    description: 'Learn how to connect business apps using Make.com, Zapier, and custom AI agents to automate tedious tasks.',
    duration: '6 Weeks',
    category: 'Tech & AI',
    imagePlaceholder: 'ai_automation_thumbnail.jpg',
    heroPlaceholder: 'ai_hero_placeholder.jpg',
    overview: 'Businesses are desperate for professionals who can automate their operations using modern AI tools. Learn no-code automation platforms and build smart agents that save companies hundreds of hours.',
    learningOutcomes: [
      'Master Make.com and Zapier to build complex multi-step automated workflows.',
      'Build custom AI chatbots and customer support agents using OpenAI and Claude APIs.',
      'Automate lead generation, CRM updates, and social media posting.',
      'Consult for businesses and charge high ticket fees for automation setups.'
    ],
    salaryData: {
      localAvg: '₦400,000 / month',
      globalRemoteAvg: '$2,500 / month',
      entryLevel: '$1,500 / month',
      experienced: '$6,000+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'Introduction to No-Code Automation',
        summary: 'Understanding triggers, actions, and data routing.',
        topics: ['Zapier & Make.com Interface', 'JSON Data Structures', 'Mapping Variables']
      },
      {
        week: 2,
        title: 'Connecting CRMs & Spreadsheets',
        summary: 'Automating customer data flow between Google Sheets and CRMs.',
        topics: ['Airtable & Google Sheets Integration', 'HubSpot & Salesforce Automation', 'Error Handling in Workflows']
      },
      {
        week: 3,
        title: 'AI Prompts & Large Language Models',
        summary: 'Leveraging OpenAI and Claude for automated text processing.',
        topics: ['Advanced Prompt Engineering', 'OpenAI API Integration', 'Summarizing & Classifying Data Automatically']
      },
      {
        week: 4,
        title: 'Building Custom Chatbots & Support Agents',
        summary: 'Deploying smart chatbots for websites and WhatsApp.',
        topics: ['WhatsApp Business Automation', 'Website Chatbot Widgets', 'Knowledge Base Training']
      },
      {
        week: 5,
        title: 'Lead Generation & Outreach Pipelines',
        summary: 'Automating cold outreach and lead qualification.',
        topics: ['Scraping Leads Safely', 'Automated Email Sequences', 'Lead Scoring Workflows']
      },
      {
        week: 6,
        title: 'Packaging & Selling AI Services',
        summary: 'Finding clients and charging premium project fees.',
        topics: ['Auditing Business Bottlenecks', 'Pricing Automation Projects', 'Closing High-Ticket Clients']
      }
    ],
    testimonials: [
      {
        name: 'Tunde Bakare',
        role: 'AI Workflow Engineer',
        location: 'Lagos, Nigeria',
        quote: 'AI automation is the highest paying skill today. ADSI made technical workflows feel so easy to understand.',
        avatarPlaceholder: 'student_tunde.jpg'
      },
      {
        name: 'Blessing Okoro',
        role: 'No-Code Consultant',
        location: 'Port Harcourt, Nigeria',
        quote: 'I built my first client automation workflow during week 4 and made $800 instantly!',
        avatarPlaceholder: 'student_blessing.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need to know how to code?',
        answer: 'No coding required! We use visual no-code tools like Make.com and Zapier.'
      },
      {
        question: 'Is AI automation in high demand?',
        answer: 'Extremely high demand. Every business wants to save time and reduce costs using AI.'
      }
    ]
  },
  {
    id: 'ai-video-creation',
    title: 'AI Video Creation & Editing',
    tagline: 'Create cinematic videos using generative AI tools like Midjourney & Runway.',
    description: 'Master cutting-edge AI video tools to produce breathtaking commercials, cinematic shorts, and marketing videos.',
    duration: '6 Weeks',
    category: 'Content & Media',
    imagePlaceholder: 'ai_video_thumbnail.jpg',
    heroPlaceholder: 'aivid_hero_placeholder.jpg',
    overview: 'Generative AI is revolutionizing video production. Learn how to use Runway Gen-2, Pika, Midjourney, ElevenLabs, and CapCut to create Hollywood-grade visual content from simple text prompts.',
    learningOutcomes: [
      'Generate stunning cinematic visuals using Midjourney, DALL-E 3, and Stable Diffusion.',
      'Animate images into breathtaking video clips using Runway and Pika.',
      'Clone voices and generate hyper-realistic sound effects and voiceovers.',
      'Edit and stitch AI video clips into professional commercials and social media shorts.'
    ],
    salaryData: {
      localAvg: '₦350,000 / month',
      globalRemoteAvg: '$2,200 / month',
      entryLevel: '$1,200 / month',
      experienced: '$5,000+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'AI Image Generation Foundations',
        summary: 'Mastering prompt engineering for Midjourney and image creators.',
        topics: ['Aspect Ratios & Lighting Prompts', 'Style Consistency', 'Character Creation']
      },
      {
        week: 2,
        title: 'Text-to-Video & Image-to-Video Animation',
        summary: 'Bringing static images to life with Runway Gen-2 and Pika.',
        topics: ['Camera Motion Controls', 'Motion Brush Techniques', 'Looping Backgrounds']
      },
      {
        week: 3,
        title: 'AI Voice & Audio Generation',
        summary: 'Creating realistic voiceovers and immersive sound design.',
        topics: ['ElevenLabs Voice Cloning & TTS', 'Sound Effect Generation', 'Audio Syncing']
      },
      {
        week: 4,
        title: 'Advanced Editing & Storyboarding',
        summary: 'Structuring narrative flow for AI-generated video projects.',
        topics: ['Storyboarding Frameworks', 'CapCut Pro Timeline Editing', 'Color Grading AI Clips']
      },
      {
        week: 5,
        title: 'Commercials & Brand Promos',
        summary: 'Producing high-end advertisements for e-commerce and brands.',
        topics: ['Product Showcase Videos', 'Social Media Ad Formats', 'Client Revision Workflows']
      },
      {
        week: 6,
        title: 'Monetization & Creative Agency',
        summary: 'Selling AI video production services to global brands.',
        topics: ['Portfolio Building', 'Pricing Video Projects', 'Outreach & Closing Deals']
      }
    ],
    testimonials: [
      {
        name: 'Kalu Uche',
        role: 'AI Video Creator',
        location: 'Enugu, Nigeria',
        quote: 'The AI video results look like Hollywood movies. My clients are blown away by what I create.',
        avatarPlaceholder: 'student_kalu.jpg'
      },
      {
        name: 'Maryam Sani',
        role: 'Brand Content Creator',
        location: 'Kaduna, Nigeria',
        quote: 'I created a promotional video for a local clothing brand using AI tools and charged ₦150k!',
        avatarPlaceholder: 'student_maryam.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need a high-end computer?',
        answer: 'Most AI video tools run in the cloud via your web browser, so a standard laptop is all you need.'
      },
      {
        question: 'Are clients willing to pay for AI videos?',
        answer: 'Yes! Brands save thousands of dollars compared to traditional film crews, making AI video creators very valuable.'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Specialist',
    tagline: 'Master Facebook ads, email funnels, and high-converting marketing campaigns.',
    description: 'Learn how to run profitable paid ads and build automated sales funnels that generate consistent revenue for businesses.',
    duration: '6 Weeks',
    category: 'Marketing & Growth',
    imagePlaceholder: 'digital_marketing_thumbnail.jpg',
    heroPlaceholder: 'dm_hero_placeholder.jpg',
    overview: 'Digital Marketing is the engine of modern commerce. Learn Meta Ads, Google Ads, email marketing funnels (Mailchimp / Klaviyo), and conversion rate optimization to scale businesses rapidly.',
    learningOutcomes: [
      'Set up, manage, and optimize high-converting Facebook and Instagram ad campaigns.',
      'Build automated email marketing funnels that nurture leads and drive repeat sales.',
      'Conduct keyword research and basic SEO for websites and landing pages.',
      'Read marketing analytics dashboards and calculate Return on Ad Spend (ROAS).'
    ],
    salaryData: {
      localAvg: '₦350,000 / month',
      globalRemoteAvg: '$2,000 / month',
      entryLevel: '$1,100 / month',
      experienced: '$5,500+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'Foundations of Digital Marketing & Funnels',
        summary: 'Understanding customer journey maps and sales funnel architecture.',
        topics: ['The Customer Value Journey', 'Landing Page Basics', 'Offer Creation & Positioning']
      },
      {
        week: 2,
        title: 'Meta Ads (Facebook & Instagram Advertising)',
        summary: 'Setting up Meta Business Manager and launching targeted ad campaigns.',
        topics: ['Ad Account Setup & Security', 'Audience Targeting & Lookalikes', 'Ad Creatives that Convert']
      },
      {
        week: 3,
        title: 'Google Ads & Search Marketing',
        summary: 'Capturing high-intent buyers through Google Search ads.',
        topics: ['Keyword Research Fundamentals', 'Search Ad Copywriting', 'Bidding Strategies & Quality Score']
      },
      {
        week: 4,
        title: 'Email Marketing & Automation Funnels',
        summary: 'Building automated welcome series and abandoned cart sequences.',
        topics: ['Mailchimp & Klaviyo Mastery', 'Writing High-Converting Subject Lines', 'Segmentation & Personalization']
      },
      {
        week: 5,
        title: 'Analytics, Tracking & ROAS Optimization',
        summary: 'Analyzing campaign performance and optimizing for profitability.',
        topics: ['Meta Pixel & Conversion API', 'Calculating ROAS & CPA', 'A/B Split Testing']
      },
      {
        week: 6,
        title: 'Freelancing & Media Buying Agency',
        summary: 'Landing retainer clients and managing ad budgets for businesses.',
        topics: ['Structuring Retainer Contracts', 'Client Acquisition Strategies', 'Case Study Development']
      }
    ],
    testimonials: [
      {
        name: 'Ibrahim Sani',
        role: 'Media Buyer',
        location: 'Kano, Nigeria',
        quote: 'Learning Meta ads gave me financial freedom. I now manage ad budgets for 5 different e-commerce brands.',
        avatarPlaceholder: 'student_ibrahim.jpg'
      },
      {
        name: 'Nkechi Obi',
        role: 'Email Marketing Specialist',
        location: 'Awka, Nigeria',
        quote: 'The email marketing funnels module was so clear. I generated $1,200 in extra sales for my first client in week 5.',
        avatarPlaceholder: 'student_nkechi.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need a background in mathematics?',
        answer: 'Basic arithmetic is enough! We teach you all the marketing formulas step by step.'
      },
      {
        question: 'Will I practice with real ad budgets?',
        answer: 'Yes, we provide simulated ad sandboxes and guided live campaign frameworks.'
      }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Storytelling',
    tagline: 'Master smartphone videography, scriptwriting, and viral storytelling.',
    description: 'Learn how to produce engaging video content with your smartphone and build a loyal audience across platforms.',
    duration: '6 Weeks',
    category: 'Content & Media',
    imagePlaceholder: 'content_creation_thumbnail.jpg',
    heroPlaceholder: 'cc_hero_placeholder.jpg',
    overview: 'Content creators are the new media moguls. Learn smartphone camera angles, lighting, professional audio recording, engaging mobile editing in CapCut, and storytelling frameworks that captivate viewers.',
    learningOutcomes: [
      'Master smartphone video shooting techniques, lighting, and wireless microphone setup.',
      'Write compelling video scripts and hooks that capture attention in the first 3 seconds.',
      'Edit fast-paced videos with captions, B-roll, and sound effects in CapCut.',
      'Build a personal brand or create content for businesses to generate sponsorships.'
    ],
    salaryData: {
      localAvg: '₦250,000 / month + Brand Deals',
      globalRemoteAvg: '$1,800 / month',
      entryLevel: '$1,000 / month',
      experienced: '$4,000+ / month'
    },
    syllabus: [
      {
        week: 1,
        title: 'Smartphone Videography Fundamentals',
        summary: 'Setting up your phone camera, lighting, and audio for pro results.',
        topics: ['Camera Settings & Frame Rates', 'Lighting for Indoor & Outdoor', 'Budget Microphone Setup']
      },
      {
        week: 2,
        title: 'Scriptwriting & The 3-Second Hook',
        summary: 'Crafting scripts that stop the scroll immediately.',
        topics: ['Hook Formulas', 'Retainer & Retention Loops', 'Story Arc Structures']
      },
      {
        week: 3,
        title: 'Mobile Editing Mastery in CapCut',
        summary: 'Editing fast-paced reels, TikToks, and YouTube Shorts.',
        topics: ['Cutting & Trimming Basics', 'Adding Dynamic Captions', 'Sound Effects & Transitions']
      },
      {
        week: 4,
        title: 'Personal Branding & Audience Growth',
        summary: 'Positioning yourself as an authority in your chosen niche.',
        topics: ['Niche Selection', 'Consistency & Content Batching', 'Handling Negative Comments']
      },
      {
        week: 5,
        title: 'Brand Sponsorships & Monetization',
        summary: 'Pitching brands and negotiating paid content sponsorships.',
        topics: ['Media Kit Creation', 'Brand Outreach Emails', 'Pricing Sponsored Posts']
      },
      {
        week: 6,
        title: 'Scaling Your Creator Business',
        summary: 'Turning your content page into a profitable media business.',
        topics: ['Digital Products & Merch', 'Affiliate Marketing Integration', 'Working with Talent Agencies']
      }
    ],
    testimonials: [
      {
        name: 'Funke Akande',
        role: 'Lifestyle Creator',
        location: 'Lagos, Nigeria',
        quote: 'My reels used to get 50 views. After learning the hook framework in ADSI, my video hit 100k views!',
        avatarPlaceholder: 'student_funke.jpg'
      },
      {
        name: 'Samuel Adeyemi',
        role: 'Tech Content Creator',
        location: 'Ibadan, Nigeria',
        quote: 'The smartphone editing lessons showed me I did not need expensive cameras to create cinematic videos.',
        avatarPlaceholder: 'student_samuel.jpg'
      }
    ],
    faqs: [
      {
        question: 'Do I need an expensive camera?',
        answer: 'No! All you need is a modern smartphone with a good camera.'
      },
      {
        question: 'How do content creators make money?',
        answer: 'Through brand sponsorships, affiliate marketing, platform monetization, and creating content for businesses.'
      }
    ]
  }
];
