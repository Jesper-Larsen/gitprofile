// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Jesper-Larsen', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Jesper-Larsen/cv'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CV Website',
          description:
            'Denne webside, som jeg bruger som mit CV. Det er en fork af Arifszn CV-projektet, hvor jeg har tilføjet noget mere funktionalitet. Jeg lavede websiden i min fritid. Websiden er lavet med react og hostes på github sider. Den kan også generere en pdf af mit CV. Prøv det!',
          tags: ['React', 'HTML5', 'PDF Generation', 'Advanced Git/Github'],
          thumbnail_url: '/logo.png',
          link: 'https://github.com/Jesper-Larsen/',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jesper Larsen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Jesper-Larsen24',
    twitter: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    website: '',
    phone: '+45 51 34 76 06',
    email: '4aflarsen@familie.tele.dk',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'PHPUnit',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Dansborgskolen',
      position: 'IT-Supporter',
      from: '2024',
      to: 'Nu',
      companyLink: 'https://dansborgskolen.hvidovre.dk',
    },
    {
      company: 'Atea',
      position: 'Vikariat',
      from: '2023',
      to: '2023',
      companyLink: 'https://www.atea.dk',
    },
    {
      company: 'Syncorder',
      position: 'Elev som programmør',
      from: '2018',
      to: '2020',
      companyLink: 'https://www.syncorder.com',
    },
  ],
  certifications: [
    {
      name: 'Videregående Programmering med Python',
      body: '19. December - 3. Februar',
      year: '2023',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Technical education copenhagen',
      degree: 'Computer technician with specialization in programming',
      from: '2016',
      to: '2022',
    },
  ],
  publications: [],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
