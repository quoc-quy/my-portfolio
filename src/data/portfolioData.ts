export const portfolioData = {
  vi: {
    nav: [
      { id: 'about', label: 'Giới thiệu' },
      { id: 'skills', label: 'Kỹ năng' },
      { id: 'projects', label: 'Dự án' },
      { id: 'contact', label: 'Liên hệ' }
    ],
    hero: {
      role: 'Frontend Developer Intern',
      name1: 'Trần Nguyễn',
      name2: 'Quốc Quý',
      hook: 'Xây dựng trải nghiệm UI mượt mà, kiến trúc Frontend mở rộng.',
      summary:
        'Thực tập sinh Frontend đầy nhiệt huyết với kinh nghiệm thực tế xây dựng các ứng dụng React/Next.js. Đam mê tối ưu hóa hiệu suất và tính năng thời gian thực (real-time).',
      cta1: 'Xem Dự Án',
      cta2: 'Liên Hệ Ngay',
      viewCV: 'Xem CV'
    },
    about: {
      title: 'Về Mình',
      description:
        'Mình là sinh viên năm cuối chuyên ngành Kỹ thuật Phần mềm. Mình luôn bị thu hút bởi việc làm thế nào để biến những logic phức tạp thành những giao diện người dùng đơn giản, tinh tế và không ma sát.',
      professionalSummary:
        'Mục tiêu: Trở thành một Full-stack Developer với nền tảng Frontend vững chắc, sẵn sàng cống hiến trong môi trường Agile.',
      education: [
        {
          time: '09/2022 - Dự kiến 12/2026',
          title: 'Kỹ thuật Phần mềm',
          desc: 'Đại học Công nghiệp TP.HCM (IUH)'
        }
      ]
    },
    skills: {
      title: 'Hệ Sinh Thái Kỹ Năng',
      hardSkillsTitle: 'Chuyên Môn Kỹ Thuật',
      hardSkills: [
        { name: 'Core Frontend', desc: 'HTML5, CSS3, JavaScript (ES6+), TypeScript' },
        { name: 'Frameworks', desc: 'ReactJS (Vite), Next.js 14 (App Router)' },
        { name: 'Styling', desc: 'Tailwind CSS, Shadcn/UI, Framer Motion' },
        { name: 'State & Real-time', desc: 'Zustand, Context API, WebSockets, Socket.io' }
      ],
      softSkillsTitle: 'Kỹ Năng Mềm',
      softSkills: [
        'Agile / Scrum',
        'Giải quyết vấn đề',
        'Tư duy UI/UX',
        'Làm việc nhóm',
        'Nghiên cứu tài liệu'
      ],
      toolsTitle: 'Công Cụ & Nền Tảng',
      tools: ['Git', 'GitHub', 'Zod', 'React Hook Form', 'Figma', 'AWS', 'Vercel']
    },
    projects: {
      title: 'Dự Án Nổi Bật',
      viewGithub: 'Mã Nguồn',
      viewDemo: 'Xem Demo',
      items: [
        {
          title: 'TripBee Travel Booking',
          desc: 'Hệ thống đặt phòng đa bước với lưu trữ state phía client, tìm kiếm/lọc nâng cao và tối ưu hóa hiệu suất hiển thị.',
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Axios'],
          github: 'https://github.com/quoc-quy/TripBee.git',
          demo: '#',
          image: '/tripbee.png'
        },
        {
          title: 'PingMe Real-Time Chat',
          desc: 'Nền tảng chat thời gian thực với UI responsive, quản lý state toàn cục mở rộng tốt, và validation form chặt chẽ.',
          stack: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'React Hook Form'],
          github: 'https://github.com/quoc-quy/PingMe.git',
          demo: '#',
          image: '/chatpulse.png'
        }
      ]
    },
    contact: {
      title: 'Sẵn Sàng Kiến Tạo?',
      avatar: '/about-avatar.jpg',
      email: 'quocquytnqq@gmail.com',
      phone: '0353 870 787',
      github: 'https://github.com/quoc-quy'
    }
  },
  en: {
    nav: [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      role: 'Frontend Developer Intern',
      name1: 'Tran Nguyen',
      name2: 'Quoc Quy',
      hook: 'Crafting scalable UI architectures and frictionless user experiences.',
      summary:
        'Motivated Frontend Developer Intern with hands-on experience building production-grade React applications. Passionate about scalable UI architecture and real-time features.',
      cta1: 'View Projects',
      cta2: 'Get In Touch',
      viewCV: 'View CV'
    },
    about: {
      title: 'About Me',
      description:
        'I am a final-year Software Engineering student. I am always fascinated by how to turn complex logic into simple, elegant, and frictionless user interfaces.',
      professionalSummary:
        'Goal: To become a Full-stack Developer with a strong Frontend foundation, ready to contribute in an Agile environment.',
      education: [
        {
          time: '09/2022 - Expected 12/2026',
          title: 'Software Engineering',
          desc: 'Industrial University of HCM City (IUH) - GPA: 3.2/4.0'
        }
      ]
    },
    skills: {
      title: 'Skill Ecosystem',
      hardSkillsTitle: 'Technical Expertise',
      hardSkills: [
        { name: 'Core Frontend', desc: 'HTML5, CSS3, JavaScript (ES6+), TypeScript' },
        { name: 'Frameworks', desc: 'ReactJS (Vite), Next.js 14 (App Router)' },
        { name: 'Styling', desc: 'Tailwind CSS, Shadcn/UI, Framer Motion' },
        { name: 'State & Real-time', desc: 'Zustand, Context API, WebSockets, Socket.io' }
      ],
      softSkillsTitle: 'Soft Skills',
      softSkills: ['Agile / Scrum', 'Problem Solving', 'UI/UX Thinking', 'Teamwork', 'Research'],
      toolsTitle: 'Tools & Platforms',
      tools: ['Git', 'GitHub', 'Zod', 'React Hook Form', 'Figma', 'AWS', 'Vercel']
    },
    projects: {
      title: 'Featured Projects',
      viewGithub: 'GitHub',
      viewDemo: 'Live Demo',
      items: [
        {
          title: 'TripBee Travel Booking',
          desc: 'Multi-step booking engine with client-side state persistence, advanced search/filtering, and performance optimizations.',
          stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Axios'],
          github: 'https://github.com/quoc-quy/TripBee.git',
          demo: '#',
          image: '/tripbee.png'
        },
        {
          title: 'PingMe Real-Time Chat',
          desc: 'Responsive real-time chat UI with scalable global state, robust form validation, and modularized logic.',
          stack: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'React Hook Form'],
          github: 'https://github.com/quoc-quy/PingMe.git',
          demo: '#',
          image: '/chatpulse.png'
        }
      ]
    },
    contact: {
      title: 'Ready to Build?',
      avatar: '/about-avatar.jpg',
      email: 'quocquytnqq@gmail.com',
      phone: '0353 870 787',
      github: 'https://github.com/quoc-quy'
    }
  }
}
