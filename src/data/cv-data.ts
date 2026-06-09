export const cvData = {
  personal: {
    name: 'Tran Nguyen Quoc Quy',
    role: 'Frontend Developer',
    email: 'quocquytnqq@gmail.com',
    github: 'https://github.com/quoc-quy',
    linkedin: 'https://linkedin.com'
  },
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'ReactJS', 'Next.js'],
    styling: ['Tailwind CSS', 'Shadcn/UI', 'Framer Motion', 'Lucide Icons'],
    tools: ['Socket.io', 'Git/GitHub', 'Zustand', 'Zod', 'React Hook Form', 'AWS', 'Figma']
  },
  projects: [
    {
      id: 'tripbee',
      title: 'TripBee Travel Booking',
      descEn:
        'Multi-step booking engine with client-side state persistence, advanced search/filtering, and performance optimizations.',
      descVi:
        'Hệ thống đặt phòng đa bước với lưu trữ state phía client, tìm kiếm/lọc nâng cao và tối ưu hóa hiệu suất hiển thị.',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Axios'],
      github: 'https://github.com/quoc-quy/TripBee.git',
      demo: '#'
    },
    {
      id: 'pingme',
      title: 'PingMe Real-Time Chat',
      descEn:
        'Responsive real-time chat UI with scalable global state, robust form validation, and modularized logic.',
      descVi:
        'Nền tảng chat thời gian thực với UI responsive, quản lý state toàn cục mở rộng tốt, và validation form chặt chẽ.',
      stack: ['React', 'TypeScript', 'Zustand', 'Socket.io', 'React Hook Form'],
      github: 'https://github.com/quoc-quy/PingMe.git',
      demo: '#'
    }
  ]
}
