export type Language = 'en' | 'vi'

export const dict = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: "Hello, I'm",
      viewProjects: 'View Projects',
      contactMe: 'Contact Me'
    },
    about: {
      title: 'About Me',
      description1:
        'Final-year Software Engineering student with hands-on experience building production-grade web applications using React, Next.js, TypeScript, and Node.js.',
      description2:
        'Passionate about crafting scalable web architectures and real-time features. Eager to contribute and grow within a collaborative engineering team.'
    },
    skills: {
      title: 'My Skills',
      frontend: 'Frontend',
      styling: 'Styling & UI',
      tools: 'Backend & Tools'
    },
    projects: {
      title: 'Featured Projects',
      liveDemo: 'Live Demo',
      github: 'GitHub'
    },
    contact: {
      title: 'Get In Touch',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message'
    }
  },
  vi: {
    nav: { about: 'Giới thiệu', skills: 'Kỹ năng', projects: 'Dự án', contact: 'Liên hệ' },
    hero: {
      greeting: 'Xin chào, mình là',
      viewProjects: 'Xem Dự Án',
      contactMe: 'Liên Hệ'
    },
    about: {
      title: 'Về Mình',
      description1:
        'Sinh viên năm cuối chuyên ngành Kỹ thuật Phần mềm với kinh nghiệm thực tế xây dựng các ứng dụng web chuẩn production sử dụng React, Next.js, TypeScript và Node.js.',
      description2:
        'Đam mê xây dựng kiến trúc web có khả năng mở rộng và các tính năng thời gian thực. Mong muốn được đóng góp và phát triển trong môi trường làm việc nhóm năng động.'
    },
    skills: {
      title: 'Kỹ Năng',
      frontend: 'Frontend',
      styling: 'Styling & UI',
      tools: 'Backend & Công Cụ'
    },
    projects: {
      title: 'Dự Án Nổi Bật',
      liveDemo: 'Xem Demo',
      github: 'Mã Nguồn'
    },
    contact: {
      title: 'Liên Hệ',
      name: 'Tên của bạn',
      email: 'Email của bạn',
      message: 'Tin nhắn',
      send: 'Gửi Tin Nhắn'
    }
  }
}

export type Translations = typeof dict.en
