export const portfolioData = {
  vi: {
    nav: [
      { id: 'about', label: 'Giới thiệu' },
      { id: 'skills', label: 'Kỹ năng' },
      { id: 'projects', label: 'Dự án' },
      { id: 'contact', label: 'Liên hệ' }
    ],
    hero: {
      role: 'Web Developer Intern',
      name1: 'Trần Nguyễn',
      name2: 'Quốc Quý',
      hook: 'Xây dựng ứng dụng web hiện đại với giao diện trực quan, hiệu năng tốt và trải nghiệm người dùng mượt mà.',
      summary:
        'Xây dựng các ứng dụng web với React, Next.js và Node.js, đồng thời quan tâm đến hiệu năng, trải nghiệm người dùng và chất lượng sản phẩm. Có kinh nghiệm xây dựng hệ thống thời gian thực, tích hợp AI và triển khai ứng dụng trong môi trường thực tế.',
      cta1: 'Tải xuống CV',
      cta2: 'Liên Hệ Ngay',
      viewCV: 'Xem CV',
      github: 'https://github.com/quoc-quy',
      linkedin: 'https://linkedin.com'
    },
    about: {
      title: 'Về Mình',
      description:
        'Mình là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học Công nghiệp TP.HCM. Mình thích phát triển giao diện web và quan tâm đến cách người dùng tương tác với sản phẩm, từ đó tạo ra những trải nghiệm trực quan và dễ sử dụng.',
      professionalSummary:
        'Mục tiêu: Trở thành một Web Developer toàn diện, sẵn sàng đóng góp vào các sản phẩm thực tế và tạo ra giá trị cho người dùng.',
      educationTitle: 'Học Vấn',
      greeting: 'Xin chào, mình là Trần Nguyễn Quốc Quý!',
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
        {
          name: 'Frontend',
          desc: 'HTML5, CSS3, Tailwind CSS, Shadcn, JavaScript, TypeScript, ReactJS, Next.js'
        },
        { name: 'Backend & APIs', desc: 'Node.js, Express, RESTful APIs, WebSocket (Socket.io)' },
        { name: 'Quản Lý State & Dữ Liệu', desc: 'Zustand, Axios, MongoDB, PostgreSQL' },
        {
          name: 'Nền Tảng Cloud & Infrastructure',
          desc: 'AWS S3, Vercel, Railway, GitHub Actions, LiveKit Server'
        }
      ],
      softSkillsTitle: 'Kỹ Năng Mềm',
      softSkills: [
        'Agile / Scrum',
        'Làm việc nhóm (Team Lead)',
        'Giải quyết vấn đề',
        'Tư duy UI/UX',
        'Nghiên cứu & Tự học'
      ],
      toolsTitle: 'Công Cụ & Quy Trình',
      tools: ['Git', 'GitHub', 'Figma', 'Postman', 'Antigravity', 'Jira']
    },
    projects: {
      title: 'Dự Án Nổi Bật',
      viewGithub: 'Mã Nguồn',
      viewDemo: 'Xem Demo',
      categories: {
        all: 'Tất cả',
        main: 'Dự án chính',
        tailwind: 'Tailwind CSS',
        js: 'JavaScript',
        'html-css': 'HTML & CSS'
      },
      items: [
        {
          title: 'ChatPulse - Chat Thời Gian Thực',
          desc: 'Ứng dụng chat nhóm/riêng tư và gọi video độ trễ thấp sử dụng Socket.io và LiveKit. Tích hợp lưu trữ file an toàn qua Amazon S3 và triển khai trợ lý AI tra cứu luật giao thông Việt Nam theo mô hình RAG.',
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
          demo: 'https://chatpulse-frontend.vercel.app/',
          image: '/chatpulse.png',
          category: 'main'
        },
        {
          title: 'TripBee - Đặt Tour Du Lịch',
          desc: 'Nền tảng đặt tour du lịch đa bước với cập nhật chỗ trống thời gian thực, quy trình thanh toán và hủy tour an toàn, tự động hóa CI/CD qua GitHub Actions và triển khai trên Vercel và Railway.',
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
          demo: 'https://tripbeefrontend.vercel.app/',
          image: '/tripbee.png',
          category: 'main'
        },
        {
          title: 'Tea-Station Store',
          desc: 'Rèn luyện kỹ năng xây dựng giao diện responsive bằng Tailwind CSS. Thiết kế trang thương mại điện tử trà thảo mộc hiện đại, tối ưu hóa tốc độ tải trang và áp dụng hiệu ứng hover mượt mà.',
          stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/tea-station.git',
          demo: 'https://quoc-quy.github.io/tea-station/',
          image: '/tea_station.png',
          category: 'tailwind'
        },
        {
          title: 'Uppo-Modal Library',
          desc: 'Phát triển thư viện hiển thị hộp thoại (modal) bằng Vanilla JavaScript thuần để nắm vững DOM API và xây dựng thành phần web độc lập, gọn nhẹ, không phụ thuộc framework.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Uppo-Modal.git',
          demo: 'https://quoc-quy.github.io/Uppo-Modal/',
          image: '/uppo-modal.png',
          category: 'js'
        },
        {
          title: 'Tabex Tab Library',
          desc: 'Xây dựng thư viện quản lý tab nội dung bằng JavaScript thuần. Thực hành viết mã theo hướng module, tối ưu hóa xử lý sự kiện và chuyển đổi tab mượt mà giữa các thành phần giao diện.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Tabex.git',
          demo: 'https://quoc-quy.github.io/Tabex/',
          image: '/tabex.png',
          category: 'js'
        },
        {
          title: 'Todo-List App',
          desc: 'Xây dựng ứng dụng quản lý công việc để thuần thục các thao tác CRUD cơ bản, quản lý vòng đời dữ liệu và đồng bộ hóa lưu trữ offline qua localStorage.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Todo-List.git',
          demo: 'https://quoc-quy.github.io/Todo-List/',
          image: '/todo_list.png',
          category: 'js'
        },
        {
          title: 'Web Layout Mockup',
          desc: 'Thực hành xây dựng giao diện web giới thiệu dịch vụ chuẩn pixel-perfect, áp dụng cấu trúc HTML5 ngữ nghĩa (semantic) và CSS3 có tổ chức.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-02.git',
          demo: 'https://quoc-quy.github.io/f8-project-02/',
          image: '/html-01.png',
          category: 'html-css'
        },
        {
          title: 'Studio Landing Page',
          desc: 'Thực hành thiết kế layout website giới thiệu studio sáng tạo, tích hợp hiệu ứng chuyển động hover và tối ưu giao diện tương thích đa trình duyệt.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-03.git',
          demo: 'https://quoc-quy.github.io/f8-project-03/',
          image: '/html-02.png',
          category: 'html-css'
        },
        {
          title: 'SaaS Platform Landing',
          desc: 'Thực hành dàn trang landing page cho sản phẩm SaaS. Áp dụng linh hoạt Flexbox và CSS Grid để xử lý các trường hợp co giãn màn hình phức tạp.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-04.git',
          demo: 'https://quoc-quy.github.io/f8-project-04/',
          image: '/html-03.png',
          category: 'html-css'
        },
        {
          title: 'Custom Web Design',
          desc: 'Xây dựng giao diện web độc lập, thực hành tổ chức mã nguồn CSS theo phương pháp BEM để dễ dàng bảo trì và mở rộng.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-1.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-1/',
          image: '/html-04.png',
          category: 'html-css'
        },
        {
          title: 'Digital Agency Layout',
          desc: 'Thực hành thiết kế giao diện doanh nghiệp kỹ thuật số hiện đại. Áp dụng hiệu ứng glassmorphism, gradient nổi bật và tối ưu hóa dung lượng CSS.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-2.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-2/',
          image: '/html-05.png',
          category: 'html-css'
        },
        {
          title: 'Corporate Web Portal',
          desc: 'Thực hành xây dựng layout doanh nghiệp phức tạp với thanh điều hướng sidebar responsive, lưới thông tin dạng dashboard và các hiệu ứng tương tác hover.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-05.git',
          demo: 'https://quoc-quy.github.io/f8-project-05/',
          image: '/html-06.png',
          category: 'html-css'
        }
      ]
    },
    contact: {
      title: 'Sẵn Sàng Hợp Tác?',
      avatar: '/avatar.png',
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
      role: 'Web Developer Intern',
      name1: 'Tran Nguyen',
      name2: 'Quoc Quy',
      hook: 'Building modern web applications with intuitive interfaces, strong performance, and seamless user experiences.',
      summary:
        'Building web applications with React, Next.js, and Node.js while focusing on performance, user experience, and product quality. Experienced in developing real-time systems, integrating AI features, and deploying applications in production environments.',
      cta1: 'Download CV',
      cta2: 'Get In Touch',
      viewCV: 'View CV',
      github: 'https://github.com/quoc-quy',
      linkedin: 'https://linkedin.com'
    },
    about: {
      title: 'About Me',
      description:
        'I am a final-year Software Engineering student at the Industrial University of Ho Chi Minh City. I have a strong passion for frontend development and care deeply about how users interact with products, aiming to create intuitive and user-friendly digital experiences.',
      professionalSummary:
        'Goal: To become a well-rounded Web Developer, ready to contribute to real-world products and deliver meaningful value to users.',
      educationTitle: 'Education',
      greeting: "Hello, I'm Tran Nguyen Quoc Quy!",
      education: [
        {
          time: '09/2022 - Expected 12/2026',
          title: 'Software Engineering',
          desc: 'Industrial University of Ho Chi Minh City (IUH)'
        }
      ]
    },
    skills: {
      title: 'Skill Ecosystem',
      hardSkillsTitle: 'Technical Expertise',
      hardSkills: [
        {
          name: 'Frontend',
          desc: 'HTML5, CSS3, Tailwind CSS, Shadcn, JavaScript, TypeScript, ReactJS, Next.js'
        },
        { name: 'Backend & APIs', desc: 'Node.js, Express, RESTful APIs, WebSocket (Socket.io)' },
        { name: 'State & Data Management', desc: 'Zustand, Axios, MongoDB, PostgreSQL' },
        {
          name: 'Cloud & Infrastructure',
          desc: 'AWS S3, Vercel, Railway, GitHub Actions, LiveKit Server'
        }
      ],
      softSkillsTitle: 'Soft Skills',
      softSkills: [
        'Agile / Scrum',
        'Team Collaboration (Team Lead)',
        'Problem Solving',
        'UI/UX Thinking',
        'Research & Self-learning'
      ],
      toolsTitle: 'Tools & Workflows',
      tools: ['Git', 'GitHub', 'Figma', 'Postman', 'Antigravity', 'Jira']
    },
    projects: {
      title: 'Featured Projects',
      viewGithub: 'Source Code',
      viewDemo: 'Live Demo',
      categories: {
        all: 'All',
        main: 'Featured',
        tailwind: 'Tailwind CSS',
        js: 'JavaScript',
        'html-css': 'HTML & CSS'
      },
      items: [
        {
          title: 'ChatPulse - Real-Time Chat',
          desc: 'A private and group chat application featuring low-latency video calling powered by Socket.io and LiveKit. Integrates secure file storage via Amazon S3 and implements a RAG-based AI assistant for querying Vietnamese traffic regulations.',
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
          demo: 'https://chatpulse-frontend.vercel.app/',
          image: '/chatpulse.png',
          category: 'main'
        },
        {
          title: 'TripBee - Travel Booking Platform',
          desc: 'A multi-step travel booking platform with real-time slot updates, secure payment and cancellation workflows, automated CI/CD pipelines via GitHub Actions, and production deployment on Vercel and Railway.',
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
          demo: 'https://tripbeefrontend.vercel.app/',
          image: '/tripbee.png',
          category: 'main'
        },
        {
          title: 'Tea-Station Store',
          desc: 'A responsive herbal tea e-commerce landing page designed to practice Tailwind CSS styling, optimize page loading performance, and implement smooth micro-interactions.',
          stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/tea-station.git',
          demo: 'https://quoc-quy.github.io/tea-station/',
          image: '/tea_station.png',
          category: 'tailwind'
        },
        {
          title: 'Uppo-Modal Library',
          desc: 'A lightweight, framework-independent modal library developed using vanilla JavaScript to master DOM manipulation APIs and component architecture.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Uppo-Modal.git',
          demo: 'https://quoc-quy.github.io/Uppo-Modal/',
          image: '/uppo-modal.png',
          category: 'js'
        },
        {
          title: 'Tabex Tab Library',
          desc: 'A modular tab management library built with vanilla JavaScript, focusing on event delegation, DOM performance, and smooth transitions between UI tab panels.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Tabex.git',
          demo: 'https://quoc-quy.github.io/Tabex/',
          image: '/tabex.png',
          category: 'js'
        },
        {
          title: 'Todo-List App',
          desc: 'A clean task manager application designed to master fundamental CRUD operations, local state management, and offline synchronization using localStorage.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Todo-List.git',
          demo: 'https://quoc-quy.github.io/Todo-List/',
          image: '/todo_list.png',
          category: 'js'
        },
        {
          title: 'Web Layout Mockup',
          desc: 'A pixel-perfect service-showcase web interface crafted to practice semantic HTML5 layout structures and well-organized, maintainable CSS3 styling.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-02.git',
          demo: 'https://quoc-quy.github.io/f8-project-02/',
          image: '/html-01.png',
          category: 'html-css'
        },
        {
          title: 'Studio Landing Page',
          desc: 'A creative studio landing page featuring smooth hover transitions and layouts optimized for cross-browser compatibility and responsiveness.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-03.git',
          demo: 'https://quoc-quy.github.io/f8-project-03/',
          image: '/html-02.png',
          category: 'html-css'
        },
        {
          title: 'SaaS Platform Landing',
          desc: 'A SaaS product landing page template focusing on advanced responsive layouts using Flexbox and CSS Grid to handle complex viewport resizing smoothly.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-04.git',
          demo: 'https://quoc-quy.github.io/f8-project-04/',
          image: '/html-03.png',
          category: 'html-css'
        },
        {
          title: 'Custom Web Design',
          desc: 'An independent landing page layout built with CSS organized under the BEM methodology for easier modular scaling and long-term maintenance.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-1.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-1/',
          image: '/html-04.png',
          category: 'html-css'
        },
        {
          title: 'Digital Agency Layout',
          desc: 'A modern digital agency web layout incorporating glassmorphism designs, vibrant gradients, and optimized CSS file sizes for fast load times.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-2.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-2/',
          image: '/html-05.png',
          category: 'html-css'
        },
        {
          title: 'Corporate Web Portal',
          desc: 'A complex corporate web layout containing a responsive sidebar, a dashboard grid structure, and interactive hover feedback animations.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-05.git',
          demo: 'https://quoc-quy.github.io/f8-project-05/',
          image: '/html-06.png',
          category: 'html-css'
        }
      ]
    },
    contact: {
      title: 'Ready to Collaborate?',
      avatar: '/avatar.png',
      email: 'quocquytnqq@gmail.com',
      phone: '0353 870 787',
      github: 'https://github.com/quoc-quy'
    }
  }
}
