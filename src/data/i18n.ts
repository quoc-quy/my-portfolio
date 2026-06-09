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
        'Motivated Frontend Developer Intern with hands-on experience building production-grade React applications using TypeScript, Tailwind CSS, and modern state management.',
      description2:
        'Passionate about scalable UI architecture and real-time features. Eager to contribute and grow within a collaborative engineering team.'
    },
    skills: {
      title: 'My Skills',
      frontend: 'Frontend',
      styling: 'Styling & UI',
      tools: 'Real-time & Tools'
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
        'Là một Thực tập sinh Frontend đầy nhiệt huyết với kinh nghiệm thực tế xây dựng các ứng dụng React chuẩn production sử dụng TypeScript, Tailwind CSS và các giải pháp quản lý state hiện đại.',
      description2:
        'Đam mê kiến trúc UI mở rộng và các tính năng thời gian thực (real-time). Mong muốn được đóng góp và phát triển trong một đội ngũ kỹ sư môi trường làm việc cộng tác.'
    },
    skills: {
      title: 'Kỹ Năng',
      frontend: 'Frontend',
      styling: 'Styling & UI',
      tools: 'Real-time & Công Cụ Khác'
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
