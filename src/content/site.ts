export type Link = {
  label: string
  url: string
}

export type ProjectImage = {
  src: string
  alt: string
  caption: string
}

export type Project = {
  name: string
  status: string
  period: string
  summary: string
  contribution: string
  links: Link[]
  images: ProjectImage[]
}

export type ResearchPriority = {
  label: string
  description: string
  icon: string
  iconAlt: string
}

export type Publication = {
  year: string
  venue: string
  title: string
  contribution: string
  status?: string
  url?: string
}

export const site = {
  name: 'Oğuzhan Berke Özdil',
  location: 'Krakow, Poland',
  role: 'PhD researcher at AGH University of Krakow',
  topicId: 'ZB 0229/26',
  officialTopic:
    'Vibroacoustic Tissue Fingerprinting using Machine and Deep Learning for application in Robotic Assisted Needle and Therapy Procedures',
  supervisor: 'Prof. Michael Friebe, PhD',
  supervisorUrl: 'https://healthtech-innovation.agh.edu.pl/team/',
  topicUrl:
    'https://rekrutacja.doktoranci.agh.edu.pl/ZagadnieniaBadawcze/?pg=Podglad&zb_id=2294',
  projectLinks: {
    vibronav: 'https://healthtech-innovation.agh.edu.pl/vibranov-project/',
    vibronavCurrent:
      'https://medsun.pl/en/vibronav/',
    ultraclear: 'https://medsun.pl/ultraclear-src/index_ang.html',
    aghRegister: 'https://cwp.agh.edu.pl/projekty',
    students:
      'https://healthtech-innovation.agh.edu.pl/msc-eng-projects-opportunities/',
  },
  contact: {
    email: 'ozdiloguzhanberke@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/oguzhanberkeozdil/',
    github: 'https://github.com/OguzhanBerkeOzdil',
    instagram: 'https://www.instagram.com/berkeozdil/',
    facebook: 'https://www.facebook.com/oguzhanberke.ozdil?locale=pl_PL',
  },
} as const

export const researchPriorities: ResearchPriority[] = [
  {
    label: 'Signal information',
    description:
      'Identify patterns connected to tissue contact and layer transitions.',
    icon: 'images/icon-signal-information.png',
    iconAlt: 'Needle interaction producing vibroacoustic waves',
  },
  {
    label: 'Generalisation',
    description:
      'Test whether those patterns remain useful across tool, operator, session and sensor changes.',
    icon: 'images/icon-generalisation.png',
    iconAlt: 'Related signals collected under several experimental conditions',
  },
  {
    label: 'Uncertainty',
    description:
      'Recognise unfamiliar conditions instead of returning unsupported confidence.',
    icon: 'images/icon-uncertainty.png',
    iconAlt: 'Signal with widening confidence bounds under unfamiliar conditions',
  },
]

export const projects: Project[] = [
  {
    name: 'VIBRONAV research line',
    status: 'Ongoing research line',
    period: 'Original OPUS-LAP project 2023-2025 / INNOGLOBO continuation in progress',
    summary:
      'VIBRONAV studies signals produced when a medical tool interacts with tissue. The current INNOGLOBO project is developing a wireless clip-on sensing system for real-time support in minimally invasive procedures.',
    contribution:
      'I entered the team through website and software work, then moved into experimental setup, manual and robot-assisted acquisition, quality review, and Python/API automation for repeatable Dobot MG400 puncture sequences at AGH.',
    links: [
      { label: 'AGH project page and team', url: site.projectLinks.vibronav },
      { label: 'Current VIBRONAV project', url: site.projectLinks.vibronavCurrent },
    ],
    images: [
      {
        src: 'images/vibronav-mg400.webp',
        alt: 'Dobot MG400 robot beside the VIBRONAV needle experiment at AGH',
        caption: 'Dobot MG400 experimental setup at AGH',
      },
      {
        src: 'images/vibronav-sensor.webp',
        alt: 'Close view of a sensing prototype mounted near a medical needle',
        caption: 'Needle-mounted sensing prototype',
      },
      {
        src: 'images/vibronav-acquisition.webp',
        alt: 'Researcher reviewing measurements during a VIBRONAV acquisition session',
        caption: 'Manual acquisition and data review',
      },
    ],
  },
  {
    name: 'UltraClear',
    status: 'Completed project',
    period: 'September 2024 - August 2026',
    summary:
      'UltraClear developed a handheld hybrid SPECT and ultrasound imaging system that combines anatomical ultrasound with functional gamma information. The project focused on a portable probe, image fusion and prototype validation.',
    contribution:
      'My work covered prototype testing, signal and data software, 3D components, and hardware-software integration. The project is complete and is not presented as an active PhD commitment.',
    links: [
      { label: 'Official UltraClear project page', url: site.projectLinks.ultraclear },
      { label: 'AGH project register', url: site.projectLinks.aghRegister },
    ],
    images: [
      {
        src: 'images/ultraclear-environment.webp',
        alt: 'UltraClear ultrasound and robotic test environment in the laboratory',
        caption: 'Ultrasound and robotic test environment',
      },
      {
        src: 'images/ultraclear-reconstruction.jpeg',
        alt: 'UltraClear interface showing a three-dimensional ultrasound reconstruction and tracked imaging planes',
        caption: '3D ultrasound reconstruction and tracking interface',
      },
    ],
  },
]

export const milestones = [
  {
    period: 'March 2024',
    stage: 'Website and software entry',
    description:
      "I joined VIBRONAV while studying for my Bachelor's degree and first worked on the research website and supporting software.",
  },
  {
    period: '2024',
    stage: 'Experimental measurements',
    description:
      'Laboratory work expanded my role into setup preparation, manual measurements, signal acquisition and data-quality review.',
  },
  {
    period: '2024-2025',
    stage: 'Dobot MG400 automation',
    description:
      "I developed the Python/API workflow for calibration, puncture sequences and acquisition integration. This work became my Bachelor's thesis.",
  },
  {
    period: '2025-2026',
    stage: 'Independent Master research',
    description:
      'I designed and ran the needle study, prepared and annotated the dataset, compared machine-learning approaches, and used recording-grouped validation. The work led to my first-author BMT contribution.',
  },
  {
    period: '2026',
    stage: 'Doctoral research',
    description:
      'The PhD now asks whether tissue information remains reliable when experimental conditions change.',
  },
] as const

export const education = [
  {
    year: '2025',
    degree: 'BSc in Computer Science',
    detail:
      'Faculty of Electrical Engineering, Automatics, Computer Science and Biomedical Engineering, AGH University of Krakow',
  },
  {
    year: '2026',
    degree: 'MSc in Computer Science and Intelligent Systems',
    detail:
      'Artificial Intelligence and Data Analysis, AGH University of Krakow, final average 4.55/5',
  },
] as const

export const publications: Publication[] = [
  {
    year: '2026',
    venue: 'BMT 2026',
    title:
      'Comparative Vibroacoustic Analysis of Spinal Needle Insertion Actions: Quincke vs. Sprotte',
    contribution:
      'First and corresponding author. I led the experiments, dataset, machine learning, validation and manuscript.',
  },
  {
    year: '2025',
    venue: 'International Journal of Computer Assisted Radiology and Surgery',
    title:
      'Vibroacoustic signatures: proof of concept for simple material characterization during needle interventions',
    contribution:
      'I supported the setup and selected measurements, then reviewed the acquired data and results with the team.',
    url: 'https://doi.org/10.1007/s11548-025-03492-0',
  },
  {
    year: '2025',
    venue: 'IEEE EMBC',
    title:
      'Development of a Test Environment for the Validation of Needle-Mounted Vibroacoustic Sensors',
    contribution:
      'I contributed to prototype-test setup, repeated measurements, data acquisition and signal review.',
    url: 'https://doi.org/10.1109/EMBC58623.2025.11254405',
  },
  {
    year: '2025',
    venue: 'Scientific Reports',
    title:
      'Initial findings creating a temperature prediction model using vibroacoustic signals originating from tissue needle interactions',
    contribution:
      'I helped develop the setup, acquired audio and coordinated data preparation and annotation. Another author developed the model.',
    url: 'https://doi.org/10.1038/s41598-025-92202-6',
  },
]

export const copy = {
  header: {
    descriptor: 'Research and engineering',
    navigation: [
      { label: 'Research', href: '#research' },
      { label: 'Projects', href: '#projects' },
      { label: 'Path', href: '#path' },
      { label: 'Publications', href: '#publications' },
      { label: 'Students', href: '#students' },
      { label: 'About', href: '#about' },
    ],
  },
  hero: {
    eyebrow: 'Computer Science / Experimental AI',
    introduction:
      'I design experiments and machine-learning studies for vibroacoustic needle guidance. My work begins with the physical setup, continues through signal processing and ends with validation that reflects how the data were collected.',
    primaryAction: 'See current research',
    secondaryAction: 'Work with me',
    portraitAlt:
      'Professional portrait of Oğuzhan Berke Özdil wearing a dark suit and glasses',
    portraitCaption: 'Researcher / developer / experimentalist',
  },
  research: {
    label: 'Current research',
    title: 'Vibroacoustic tissue fingerprinting for needle procedures',
    introduction:
      'Needle contact creates vibrations that travel through the instrument. My PhD investigates whether those signals can identify tissue and layer transitions when the tool, operator, session and sensor conditions change.',
    topicLabel: 'Official doctoral topic',
    supervisionPrefix: 'Supervised by',
    supervisionSuffix: 'at the AGH Faculty of Computer Science.',
    topicLink: 'Open the official AGH topic',
    experimentAlt:
      'Needle-mounted vibroacoustic sensor positioned above a controlled material experiment',
    experimentCaption:
      "Controlled needle-interaction experiment from the Master's study, 2026",
  },
  projects: {
    label: 'Projects and laboratory work',
    title: 'Evidence from the systems I helped build and test',
    introduction:
      'These projects shaped how I work: start from the physical system, document how data are produced, and check the result against the experiment.',
    contributionLabel: 'My contribution',
  },
  path: {
    label: 'Academic and research path',
    title: 'From software work to independent experimental research',
    introduction:
      'The sequence matters because each stage added a part of the research process I now use in my PhD.',
    educationLabel: 'Education at AGH University of Krakow',
  },
  publications: {
    label: 'Selected publications',
    title: 'Four studies and my contribution to each one',
    introduction:
      'The roles below separate collaborative experimental work from the study I led as first and corresponding author.',
  },
  students: {
    label: 'Work with students',
    title: 'Research and thesis collaboration',
    introduction:
      'BSc and MSc students interested in experiments, signal processing or machine learning are welcome to share an idea. A finished proposal is not required, but curiosity and consistent work are.',
    opportunity:
      'Possible work can include acquisition, annotation, signal analysis, reproducible evaluation or research writing when a suitable project is available. I prefer direct, relaxed collaboration where questions are welcome. Funding, a thesis place and publication are not guaranteed.',
    topics: [
      'Experimental acquisition',
      'Vibroacoustic signals',
      'Signal processing',
      'Machine learning',
      'Robust validation',
    ],
    supervisionTitle: 'Formal supervision',
    supervisionPrefix:
      'I can support the day-to-day research. Formal supervision, topic approval and availability are handled through',
    supervisionSuffix: 'and AGH.',
    groupLink: 'View the research group student opportunities',
    contactAction: 'Write me',
  },
  about: {
    label: 'About and contact',
    title: 'About me',
    image: {
      src: 'images/about-cycling-maczuga-herkulesa.jpeg',
      alt: 'Oğuzhan Berke Özdil standing beside his bicycle in front of Maczuga Herkulesa in Ojców National Park',
      caption: 'Cycling past Maczuga Herkulesa in Ojców National Park',
    },
    highlights: [
      'ServiceNow Developer',
      'Python',
      'automation systems',
      'Java and Spring',
      'signal processing',
      'machine learning and deep learning',
      'Lord of the Rings',
      'PC games',
      'Strength training and fitness',
      '10 years',
      'cycling trips, hiking, climbing, canoeing and more',
      'dance',
      'salsa, bachata, tango and modern dance',
    ],
    body: [
      'I am a Turkish researcher living in Krakow. Alongside my PhD, I work as a ServiceNow Developer at EY GDS Poland and hold professional ServiceNow certifications. My software background includes Python, automation systems, REST APIs, React, TypeScript, Java and Spring. I worked more extensively with C# before moving to Java for work. My research also uses signal processing, machine learning and deep learning for experimental data.',
      'Research gives that software work a physical setting. I enjoy building the experiment, seeing how the signal was produced, and checking whether the analysis still makes sense outside one convenient split of the data.',
      'Away from research, I am a devoted Lord of the Rings fan and enjoy fantasy and history books. I have followed PC games since childhood, although there is much less time to play now. Strength training and fitness have been part of my life for 10 years, including periods of coaching and competition. I also enjoy cycling trips, hiking, climbing, canoeing and more.',
      'I used to dance and still enjoy salsa, bachata, tango and modern dance. I am easygoing, enjoy conversation and friendly debate, and am usually happy to discuss almost any subject. I bring the same open atmosphere to day-to-day research collaboration while keeping the work itself clear and serious.',
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Get in touch',
    body:
      'For research, a thesis idea or a technical conversation, email is the best place to start.',
    emailLabel: 'Email',
    linkedInLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    instagramLabel: 'Instagram',
    facebookLabel: 'Facebook',
    aghEmailNotice:
      'I will add my AGH email here soon. I am waiting for the university to activate my account.',
  },
  footer: {
    affiliation: 'PhD research at AGH University of Krakow',
    backToTop: 'Back to top',
  },
} as const
