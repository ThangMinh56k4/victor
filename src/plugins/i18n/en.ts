export default {
  header: {
    hello: "Hello, I'm",
    name: 'Vo Minh Thang (Victor)',
    role: 'Developer',
    numberPhone: '+84342242611',
    address: 'Da Nang, Vietnam',
    seeMore: 'Scroll to see more',
  },
  aboutMe: {
    title: 'About Me',
    description:
      'Software Engineer with over 5 years of experience in software development and commercial applications. Eager to contribute my skills and continuously acquire new knowledge.',
    downloadCv: 'Download CV',
    downloadCvMessage: 'Please contact me via email to receive my CV.',
  },
  whatIDo: {
    title: 'What I Do',
    points: [
      {
        heading: 'Web Development',
        description:
          'I develop and maintain full-stack web applications, ensuring high performance, responsiveness, and seamless user experiences.',
        icon: 'CodeIcon',
      },
      {
        heading: 'Front-end Development',
        description:
          'Crafting engaging and intuitive user interfaces using modern frameworks like Vue.js.',
        icon: 'CodeIcon',
      },
      {
        heading: 'Back-end Development',
        description:
          'Designing and implementing robust APIs, managing databases, and ensuring data integrity and system security.',
        icon: 'CodeIcon',
      },
      {
        heading: 'Problem Solving & Optimization',
        description:
          'Continuously analyzing and improving application performance, debugging complex issues, and implementing best practices.',
        icon: 'DotIcon',
      },
    ],
  },
  featuredProjects: {
    title: 'Featured Projects',
    description: 'Here are some of the notable projects I have worked on',
    private: 'Private Project',
    projects: [
      {
        title: 'GoStream',
        description:
          'GoStream is a live streaming platform that allows users to create and share live video content with their audience',
        image: 'gostream',
        url: 'https://gostream.co/',
        tags: ['Nuxt.js', 'Node.js', 'MongoDB', 'firebase'],
        role: 'Developer',
        teamSize: 12,
        time: 'May 2020 - Jun 2021',
      },
      {
        title: 'Gopage',
        description:
          'Gopage.me is a centralized fanpage and messaging management tool that helps businesses enhance customer communication and boost productivity',
        image: 'gopage',
        url: 'https://gopage.me',
        tags: ['Nuxt.js', 'Node.js', 'MongoDB'],
        role: 'Full-stack Developer & Team Leader',
        teamSize: 8,
        time: 'May 2020 - Jun 2021',
      },
      {
        title: 'Gopage Admin',
        description:
          'Gopage Admin is the admin panel for Gopage.me, providing comprehensive management tools for fanpage and messaging services',
        image: 'gopage',
        url: '',
        tags: ['Nuxt.js', 'Node.js', 'MongoDB'],
        role: 'Full-stack Developer & Team Leader',
        teamSize: 8,
        time: 'May 2020 - Jun 2021',
      },
      {
        title: 'ASUA MAEBARAI WEB',
        description: 'An internal web tool developed to support the company’s accounting team',
        image: 'nal',
        url: '',
        tags: ['vue.js', 'php', 'mysql'],
        role: 'Front-end Developer',
        teamSize: 15,
        time: 'Jun 2021- Dec 2021',
      },
      {
        title: 'ASUA CMS WEB ',
        description: 'ASUA’s internal CMS for managing paint-related transactions.',
        image: 'nal',
        url: '',
        tags: ['nuxt.js', 'python', 'mysql'],
        role: 'Front-end Developer',
        teamSize: 8,
        time: 'Dec 2021- May 2022',
      },
      {
        title: 'OCR',
        description: 'An internal system for ordering construction materials',
        image: 'nal',
        url: '',
        tags: ['nuxt.js', 'python', 'mysql'],
        role: 'Front-end Developer',
        teamSize: 8,
        time: 'May 2022- Dec 2022',
      },
      {
        title: 'SEARCH JOB POSTING',
        description:
          'A frontend interface that displays AI-driven job postings. Backend services are provided by a third-party team, with focus on UI rendering and data integration.',
        image: 'nal',
        url: '',
        tags: ['nuxt.js'],
        role: 'Front-end Developer & Team Leader',
        teamSize: 8,
        time: 'Dec 2022- Jun 2023',
      },
      {
        title: ' LAW SEARCH',
        description:
          'A frontend interface that displays AI-driven legal documents. Backend services are provided by a third-party team, with focus on UI rendering and data integration.',
        image: 'nal',
        url: '',
        tags: ['nuxt.js'],
        role: 'Front-end Developer',
        teamSize: 10,
        time: 'Jun 2023- Aug 2023',
      },
      {
        title: 'Seal Use Application',
        description:
          'An internal application for managing and tracking the usage of company seals in administrative processes.',
        image: 'azoom',
        url: '',
        tags: ['Nuxt.js', 'Node.js', 'MySQL'],
        role: 'Full-stack Developer',
        teamSize: 10,
        time: 'Aug 2023 - Sep 2024',
      },
      {
        title: 'Coconi',
        description: 'A web app for finding nearby parking lots using Google Maps API.',
        image: 'azoom',
        url: 'https://coconi.work/home',
        tags: ['Nuxt.js', 'Node.js', 'MySQL', 'Firebase'],
        role: 'Full-stack Developer',
        teamSize: 5,
        time: 'Sep 2024 - Present',
      },
    ],
  },
  technicalSkills: {
    title: 'Technical Skills',
  },
  professionalSkills: {
    title: 'Professional Skills',
    skills: [
      {
        value: 'communication',
        label: 'Communication',
        icon: ['fas', 'comments'],
        isUseComponent: false,
      },
      {
        value: 'teamwork',
        label: 'Teamwork',
        icon: ['fas', 'users'],
        isUseComponent: false,
      },
      {
        value: 'problemSolving',
        label: 'Problem Solving',
        icon: ['fas', 'lightbulb'],
        isUseComponent: false,
      },
      {
        value: 'timeManagement',
        label: 'Time Management',
        icon: ['fas', 'clock'],
        isUseComponent: false,
      },
      {
        value: 'adaptability',
        label: 'Adaptability',
        icon: ['fas', 'sync'],
        isUseComponent: false,
      },
      {
        value: 'adaptability',
        label: 'Adaptability',
        icon: ['fas', 'sync'],
        isUseComponent: false,
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        name: 'Vinh University',
        major: 'Information Technology',
        degree: 'Bachelor',
        image: 'vinhUniversity',
        url: 'https://vinhuni.edu.vn/',
        time: '2015 - 2020',
        location: 'Vinh, Vietnam',
        academicPerformance: 'Good',
      },
    ],
  },
  workExperience: {
    title: 'Work Experience',
    items: [
      {
        name: 'Gostream',
        role: 'Full-stack Developer',
        time: 'Mar 2018 - Sep 2021',
        description:
          'Developed and maintained full-stack web applications, focusing on performance, responsiveness, and user experience. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        image: 'gostream',
        url: 'https://www.gostreamtech.com',
        location: 'Vinh, Vietnam',
      },
      {
        name: 'Mynavi TechTus Vietnam ',
        role: 'Front-end Developer',
        time: 'Oct 2021- Aug 2023',
        description:
          'Worked on various projects, including internal tools and client-facing applications. Focused on front-end development using modern frameworks and technologies, ensuring high-quality code and user interfaces.',
        image: 'nal',
        url: 'https://www.facebook.com/mynavitechtusvietnam',
        location: 'Da Nang, Vietnam',
      },
      {
        name: 'Tekup',
        role: 'Front-end Developer',
        time: 'Jul 2023 - Sep 2023',
        description:
          'Contributed to the development of web applications, focusing on front-end technologies and user interface design. Collaborated with the team to enhance application performance and user experience.',
        image: 'tekup',
        url: 'https://www.facebook.com/tekup.jsc',
        location: 'Da Nang, Vietnam',
      },
      {
        name: 'Picon Technology',
        role: 'Full-stack Developer',
        time: 'Sep 2023 - Nov 2023',
        description:
          'Currently working on developing and maintaining web applications, focusing on both front-end and back-end development. Collaborating with a team to deliver innovative solutions and improve user experiences.',
        image: 'picon',
        url: 'https://www.facebook.com/picontechnology',
        location: 'Da Nang, Vietnam',
      },
      {
        name: 'Azoom',
        role: 'Full-stack Developer',
        time: 'Nov 2023 - Present',
        description:
          'Currently working on developing and maintaining web applications, focusing on both front-end and back-end development. Collaborating with a team to deliver innovative solutions and improve user experiences.',
        image: 'azoom',
        url: 'https://www.facebook.com/AZoom.VietNam.inc',
        location: 'Da Nang, Vietnam',
      },
    ],
  },
  footer: {
    name: 'Vo Minh Thang (Victor)',
    position: 'Developer',
    copyright: '© {year} Võ Minh Thắng (Victor). All rights reserved.',
  },
}
