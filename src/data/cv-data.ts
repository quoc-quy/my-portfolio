export const cvData = {
  personal: {
    name: 'Tran Nguyen Quoc Quy',
    role: 'Web Developer Intern',
    email: 'quocquytnqq@gmail.com',
    github: 'https://github.com/quoc-quy',
    linkedin: 'https://linkedin.com'
  },
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'ReactJS', 'Next.js'],
    styling: ['Tailwind CSS', 'Shadcn/UI', 'Socket.io', 'Lucide Icons'],
    tools: [
      'Node.js',
      'Express',
      'Git/GitHub',
      'Zustand',
      'Axios',
      'MongoDB',
      'PostgreSQL',
      'Figma',
      'Postman'
    ]
  },
  projects: [
    {
      id: 'chatpulse',
      title: 'ChatPulse Real-Time Chat',
      descEn:
        'Real-time chat and video calling application with Socket.io, LiveKit integration, Amazon S3 file storage, and a RAG-based AI assistant for Vietnamese traffic regulations.',
      descVi:
        'Ứng dụng chat và gọi video thời gian thực với Socket.io, tích hợp LiveKit, lưu trữ file Amazon S3 và trợ lý AI tra cứu luật giao thông Việt Nam theo mô hình RAG.',
      stack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Socket.io',
        'LiveKit',
        'Express',
        'MongoDB'
      ],
      github: 'https://github.com/quoc-quy/ChatPulse.git',
      demo: 'https://chatpulse-frontend.vercel.app/'
    },
    {
      id: 'tripbee',
      title: 'TripBee Travel Booking',
      descEn:
        'Multi-step travel booking platform with real-time availability updates, secure payment workflows, tour cancellation handling, and automated CI/CD pipelines via GitHub Actions.',
      descVi:
        'Nền tảng đặt tour du lịch đa bước với cập nhật chỗ trống thời gian thực, quy trình thanh toán an toàn, xử lý hủy tour và tự động hóa CI/CD qua GitHub Actions.',
      stack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Zustand',
        'Lucide React',
        'Java',
        'PostgreSQL'
      ],
      github: 'https://github.com/quoc-quy/TripBee.git',
      demo: 'https://tripbeefrontend.vercel.app/'
    }
  ]
}
