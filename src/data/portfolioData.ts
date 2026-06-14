export const portfolioData = {
  vi: {
    nav: [
      { id: 'about', label: 'Giới thiệu' },
      { id: 'projects', label: 'Dự án' },
      { id: 'skills', label: 'Kỹ năng' },
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
      linkedin: 'https://www.linkedin.com/in/quocquy/'
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
    metrics: {
      title: 'Chỉ Số Kỹ Thuật Đạt Được',
      subtitle: 'Chứng minh năng lực qua số liệu từ các dự án đã xây dựng',
      items: [
        {
          value: '92%',
          label: 'Độ chính xác RAG',
          desc: 'Tỉ lệ truy xuất chính xác luật giao thông của Trợ lý AI trên ChatPulse.',
          category: 'AI Integration'
        },
        {
          value: '2,368',
          label: 'Knowledge Chunks',
          desc: 'Số lượng phân đoạn văn bản luật được nhúng vào Vector Database.',
          category: 'Data Management'
        },
        {
          value: '7',
          label: 'Người dùng đồng thời',
          desc: 'Số lượng người dùng kết nối gọi video nhóm thời gian thực đồng thời đã thử nghiệm.',
          category: 'System Load'
        },
        {
          value: '< 60s',
          label: 'Thời gian Deployment',
          desc: 'Thời gian chạy pipeline tự động hóa kiểm thử và triển khai qua GitHub Actions.',
          category: 'DevOps'
        },
        {
          value: '12',
          label: 'Quyền hạn RBAC',
          desc: 'Các quyền bảo mật được phân tách rõ ràng trên 2 vai trò của ChatPulse.',
          category: 'Security'
        },
        {
          value: '37',
          label: 'Tài liệu số hóa',
          desc: 'Số lượng tài liệu luật giao thông đường bộ được số hóa để hỏi đáp.',
          category: 'Storage'
        }
      ]
    },
    skills: {
      title: 'Hệ Sinh Thái Kỹ Năng',
      subtitle: 'Phân loại chi tiết năng lực kỹ thuật và quy trình làm việc.',
      categories: [
        {
          name: 'Frontend Development',
          desc: 'Viết mã nguồn TypeScript sạch, thiết kế giao diện responsive và quản lý state.',
          items: [
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Shadcn',
            'JavaScript',
            'TypeScript',
            'ReactJS',
            'Next.js'
          ]
        },
        {
          name: 'Backend & APIs',
          desc: 'Xây dựng RESTful API bảo mật, xử lý logic và kết nối thời gian thực.',
          items: ['Node.js', 'Express', 'RESTful APIs', 'WebSocket (Socket.io)', 'Java']
        },
        {
          name: 'Quản Lý State & Dữ Liệu',
          desc: 'Quản lý dữ liệu ứng dụng, tối ưu hóa lưu trữ và truy vấn.',
          items: ['Zustand', 'Axios', 'MongoDB', 'PostgreSQL']
        },
        {
          name: 'Nền Tảng Cloud & Infrastructure',
          desc: 'Triển khai máy chủ, lưu trữ đối tượng và tích hợp WebRTC.',
          items: ['AWS S3', 'Vercel', 'Railway', 'GitHub Actions', 'LiveKit Server']
        },
        {
          name: 'Kỹ Năng Mềm',
          desc: 'Phương pháp làm việc chuyên nghiệp phục vụ dự án nhóm.',
          items: [
            'Agile / Scrum',
            'Làm việc nhóm (Team Lead)',
            'Giải quyết vấn đề',
            'Tư duy UI/UX',
            'Nghiên cứu & Tự học'
          ]
        },
        {
          name: 'Công Cụ & Quy Trình',
          desc: 'Công cụ hỗ trợ quản lý mã nguồn, thiết kế và gỡ lỗi.',
          items: ['Git', 'GitHub', 'Figma', 'Postman', 'Antigravity', 'Jira']
        }
      ]
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
          id: 'chatpulse',
          title: 'ChatPulse - Chat Thời Gian Thực',
          tagline: 'Real-time Messaging & AI Support Platform',
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
          category: 'main',
          caseStudy: {
            problem:
              'Xây dựng ứng dụng tích hợp đồng thời tính năng nhắn tin tức thời, gọi video trực tiếp và lưu trữ tài liệu trong một nền tảng duy nhất, tránh phân tán thông tin.',
            solution:
              'Sử dụng Socket.io để xử lý nhắn tin tức thời; tích hợp LiveKit SFU (Selective Forwarding Unit) phục vụ cuộc gọi video nhóm; sử dụng AWS S3 làm nơi lưu trữ tệp qua cơ chế Multipart Upload; và tích hợp tính năng RAG với Vector Search trên MongoDB Atlas để hỗ trợ trả lời câu hỏi luật.',
            architecture: {
              nodes: [
                { id: '1', label: 'Client (React & Zustand)', type: 'frontend' },
                { id: '2', label: 'Express API Server', type: 'backend' },
                { id: '3', label: 'Socket.IO (Messages)', type: 'service' },
                { id: '4', label: 'LiveKit SFU (Video Media)', type: 'service' },
                { id: '5', label: 'AWS S3 (Object Storage)', type: 'storage' },
                { id: '6', label: 'MongoDB Atlas + Vector Search', type: 'database' }
              ],
              edges: [
                { from: '1', to: '2', label: 'HTTP REST Calls' },
                { from: '1', to: '3', label: 'WebSockets (Real-time Chat)' },
                { from: '1', to: '4', label: 'WebRTC (Video Streams)' },
                { from: '1', to: '5', label: 'S3 Multipart Upload' },
                { from: '2', to: '6', label: 'Query / Write Data' },
                { from: '2', to: '6', label: 'Vector Similarity (RAG)' }
              ]
            },
            challenges: [
              {
                title: 'Truyền tải tệp tin dung lượng lớn',
                desc: 'Khi truyền dữ liệu file lớn trực tiếp qua HTTP server thông thường, luồng xử lý Node.js bị chiếm dụng để xử lý luồng dữ liệu, có thể làm chậm các tiến trình khác.',
                resolution:
                  'Tích hợp cơ chế AWS S3 Multipart Upload. Tệp tin được chia nhỏ thành các phần 5MB từ phía client và upload trực tiếp lên S3 thông qua Presigned URLs. Server Node.js chỉ làm nhiệm vụ cấp quyền và tự động dọn dẹp các tiến trình tải bị lỗi (Auto-abort cleanup).'
              },
              {
                title: 'Độ trễ khi thực hiện cuộc gọi video nhóm',
                desc: 'Thiết kế gọi nhóm bằng kết nối WebRTC Peer-to-Peer thông thường làm quá tải băng thông client khi số lượng người dùng tăng lên.',
                resolution:
                  'Chuyển sang cấu hình máy chủ LiveKit SFU (Selective Forwarding Unit). Client chỉ cần gửi một luồng dữ liệu lên máy chủ và nhận luồng tối ưu hóa từ máy chủ về. Hệ thống được kiểm thử hoạt động ổn định với tối đa 7 người tham gia đồng thời.'
              }
            ],
            tradeOffs: [
              {
                title: 'Lựa chọn Vector Database',
                desc: 'Sử dụng MongoDB Atlas Vector Search để lưu trữ dữ liệu vector và thực hiện tìm kiếm tương đồng vector thay vì một database vector chuyên dụng riêng biệt. Việc này giúp tinh giản cấu trúc hệ thống, tránh việc đồng bộ dữ liệu giữa nhiều database và phù hợp với quy mô dự án thực tập.'
              }
            ],
            results:
              'Hệ thống hỗ trợ nhắn tin thời gian thực riêng tư và nhóm, gọi video cá nhân và gọi video nhóm (thử nghiệm tối đa 7 người tham gia đồng thời). Trợ lý AI tra cứu luật giao thông đạt độ chính xác 92% dựa trên 37 tài liệu luật số hóa (chia thành 2368 chunks). Tích hợp hệ thống phân quyền RBAC gồm 2 vai trò và 12 quyền hạn cụ thể.'
          }
        },
        {
          id: 'tripbee',
          title: 'TripBee - Đặt Tour Du Lịch',
          tagline: 'Concurrent Travel Booking & Inventory Platform',
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
          category: 'main',
          caseStudy: {
            problem:
              'Xử lý việc đặt chỗ ảo gây thất thoát lượt đặt tour thực tế và đảm bảo số lượng chỗ trống luôn nhất quán khi có nhiều lượt check-out đồng thời trên một chỗ trống cuối cùng.',
            solution:
              'Sử dụng khóa lạc quan (Optimistic Locking) tại Database để quản lý giao dịch đồng thời và chạy Scheduler tự động giải phóng chỗ sau 3 phút nếu người dùng chưa thanh toán.',
            architecture: {
              nodes: [
                { id: '1', label: 'Client App (React & Zustand)', type: 'frontend' },
                { id: '2', label: 'Spring Boot API Server', type: 'backend' },
                { id: '3', label: 'PostgreSQL Database', type: 'database' },
                { id: '4', label: 'SePay Webhook Gateway', type: 'service' },
                { id: '5', label: 'GitHub Actions CI/CD', type: 'service' }
              ],
              edges: [
                { from: '1', to: '2', label: 'REST API Calls' },
                { from: '2', to: '3', label: 'Hibernate / JPA Locks' },
                { from: '4', to: '2', label: 'Transaction Webhook' },
                { from: '5', to: '2', label: 'Auto Deployment Build' }
              ]
            },
            challenges: [
              {
                title: 'Tranh chấp chỗ trống (Race Conditions) khi thanh toán',
                desc: 'Nhiều người dùng cùng bấm đặt chỗ cuối cùng tại cùng một thời điểm có thể dẫn đến việc đặt vượt quá số lượng cho phép (overbooking).',
                resolution:
                  'Áp dụng cơ chế khóa lạc quan (Optimistic Locking) với thuộc tính `@Version` trong Spring Boot JPA để kiểm soát phiên bản dữ liệu. Khi xảy ra tranh chấp, transaction đi sau sẽ tự động thất bại, trả về exception và hiển thị thông báo yêu cầu người dùng thực hiện lại.'
              },
              {
                title: 'Tối ưu hóa quy trình kiểm thử và Deploy',
                desc: 'Đảm bảo các cập nhật mã nguồn mới được tự động kiểm thử và triển khai lên máy chủ nhanh chóng để phục vụ chạy staging.',
                resolution:
                  'Xây dựng pipeline CI/CD tự động qua GitHub Actions, tối ưu hóa các tác vụ build và test code giúp hoàn tất toàn bộ quy trình triển khai trong thời gian dưới 60 giây.'
              }
            ],
            tradeOffs: [
              {
                title: 'Khóa lạc quan (Optimistic) vs Khóa bi quan (Pessimistic)',
                desc: 'Lựa chọn khóa lạc quan thay vì khóa bi quan. Khóa lạc quan không khóa dữ liệu ở tầng DB từ lúc hiển thị form mà chỉ kiểm tra phiên bản dữ liệu lúc commit transaction, giúp hệ thống duy trì hiệu năng cao hơn khi số người dùng truy cập lớn và chỉ giải quyết tranh chấp khi thực sự check-out.'
              }
            ],
            results:
              'Hệ thống hỗ trợ tìm kiếm tour thông minh với 6 bộ lọc, phân trang phía server, quy trình đặt chỗ 4 bước trực quan, tự động cập nhật chỗ trống thời gian thực, cập nhật giá linh hoạt và theo dõi đơn đặt chỗ qua 5 trạng thái giao dịch cụ thể. Tích hợp thanh toán tự động qua cổng SePay Webhook và VietQR, tự động giải phóng chỗ sau 3 phút nếu không thanh toán.'
          }
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
    mindset: {
      title: 'Tư Duy Kỹ Sư Phần Mềm',
      subtitle: 'Những nguyên tắc cốt lõi tôi áp dụng khi phát triển sản phẩm',
      items: [
        {
          title: 'Chất lượng mã nguồn',
          desc: 'Viết mã nguồn dễ đọc, tuân thủ nguyên lý thiết kế sạch, tổ chức cấu trúc thư mục khoa học để dễ bảo trì.'
        },
        {
          title: 'Tư duy hệ thống',
          desc: 'Luôn phác thảo sơ đồ dữ liệu và kiến trúc luồng dữ liệu trước khi code. Phân chia rõ ràng trách nhiệm giữa client-side và server-side.'
        },
        {
          title: 'Làm việc nhóm & Giao tiếp',
          desc: 'Đóng vai trò Team Lead trong các đồ án nhóm, phân công công việc hợp lý, chủ động review pull requests và hỗ trợ gỡ lỗi kỹ thuật cho đồng đội.'
        },
        {
          title: 'Phương pháp giải quyết vấn đề',
          desc: 'Gỡ lỗi một cách khoa học: sử dụng Chrome DevTools để theo dõi Render Cycle, kiểm tra payload mạng và phân tích logs thay vì đoán mò.'
        },
        {
          title: 'Workflow phát triển',
          desc: 'Tuân thủ quy trình phát triển sản phẩm: quản lý công việc qua git branching, họp bàn giao nhiệm vụ và cải tiến sau mỗi đồ án.'
        }
      ]
    },
    roadmap: {
      title: 'Lộ Trình Học Tập',
      subtitle: 'Chủ động cập nhật kiến thức mới để nâng cấp năng lực bản thân',
      currentlyLearningTitle: 'Đang Tập Trung Học Tập',
      nextGoalsTitle: 'Mục Tiêu Kế Tiếp',
      learning: [
        {
          name: 'Docker & Containerization',
          desc: 'Đóng gói các dịch vụ Fullstack để đảm bảo môi trường hoạt động đồng nhất từ máy cá nhân lên cloud.',
          progress: 80,
          status: 'Đang thực hiện'
        },
        {
          name: 'Automated Testing (Jest / Playwright)',
          desc: 'Viết Unit Test và Integration Test để đảm bảo mã nguồn hoạt động chính xác trước khi deploy.',
          progress: 60,
          status: 'Đang thực hành'
        },
        {
          name: 'AWS Cloud Integration',
          desc: 'Tìm hiểu các dịch vụ đám mây của AWS như S3, EC2 và RDS để làm quen với hạ tầng cloud thực tế.',
          progress: 50,
          status: 'Đang tìm hiểu'
        }
      ]
    },
    aiAssistant: {
      title: 'Trợ Lý AI Tuyển Dụng',
      subtitle:
        'Hỏi đáp tương tác thời gian thực với trợ lý ảo dựa trên dữ liệu thực tế từ CV của tôi.',
      description:
        'Tôi đã tích hợp một trợ lý AI nắm vững các thông tin về kỹ năng kỹ thuật, kinh nghiệm và dự án của tôi. Hãy thử hỏi các câu gợi ý hoặc tự nhập câu hỏi bên dưới!',
      tellMe: 'Giới thiệu về Quốc Quý',
      explainChatPulse: 'Dự án ChatPulse',
      explainTripBee: 'Dự án TripBee',
      techStack: 'Công nghệ sử dụng',
      whyHire: 'Tại sao nên tuyển dụng?',
      placeholder: 'Hỏi bất kỳ điều gì về Quốc Quý...',
      welcome:
        'Xin chào! Tôi là trợ lý ảo tuyển dụng của Trần Nguyễn Quốc Quý. Bạn có thể hỏi tôi về các kỹ năng kỹ thuật, kinh nghiệm, thông tin dự án hoặc lý do vì sao nên tuyển dụng Quý nhé!'
    },
    contact: {
      title: 'Sẵn Sàng Hợp Tác?',
      subtitle: 'Bạn có cơ hội thực tập hoặc dự án thú vị? Hãy kết nối ngay hôm nay.',
      avatar: '/avatar.png',
      email: 'quocquytnqq@gmail.com',
      phone: '0353 870 787',
      github: 'https://github.com/quoc-quy',
      linkedin: 'https://www.linkedin.com/in/quocquy/',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      formTitle: 'Gửi Tin Nhắn Nhanh',
      formName: 'Họ và tên của bạn',
      formEmail: 'Email liên hệ',
      formMessage: 'Lời nhắn',
      formSubmit: 'Gửi liên hệ',
      formSuccess: 'Cảm ơn bạn! Lời nhắn của bạn đã được ghi nhận.'
    }
  },
  en: {
    nav: [
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
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
      linkedin: 'https://www.linkedin.com/in/quocquy/'
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
    metrics: {
      title: 'Technical Metrics Accomplished',
      subtitle: 'Proving engineering capabilities through real numbers from built products',
      items: [
        {
          value: '92%',
          label: 'RAG Retrieval Accuracy',
          desc: 'Traffic regulation retrieval precision of the AI assistant on ChatPulse.',
          category: 'AI Integration'
        },
        {
          value: '2,368',
          label: 'Knowledge Chunks',
          desc: 'Traffic law document sections split and embedded into Vector Database.',
          category: 'Data Management'
        },
        {
          value: '7',
          label: 'Concurrent Participants',
          desc: 'Maximum concurrent participants tested in group video calls.',
          category: 'System Load'
        },
        {
          value: '< 60s',
          label: 'CI/CD Deployment Speed',
          desc: 'Execution time of automated testing and deployment pipeline via GitHub Actions.',
          category: 'DevOps'
        },
        {
          value: '12',
          label: 'RBAC Permission Rules',
          desc: 'Security permissions structured across 2 roles in ChatPulse.',
          category: 'Security'
        },
        {
          value: '37',
          label: 'Indexed Law Documents',
          desc: 'Traffic law documents digitized for vector search RAG lookup.',
          category: 'Storage'
        }
      ]
    },
    skills: {
      title: 'Skill Ecosystem',
      subtitle:
        'Technical capabilities organized by domains. Strictly no arbitrary percentage scales.',
      categories: [
        {
          name: 'Frontend Development',
          desc: 'Writing clean TypeScript, optimizing client-side state, and building fully responsive interfaces.',
          items: [
            'HTML5',
            'CSS3',
            'Tailwind CSS',
            'Shadcn',
            'JavaScript',
            'TypeScript',
            'ReactJS',
            'Next.js'
          ]
        },
        {
          name: 'Backend & APIs',
          desc: 'Designing RESTful APIs, handling server-side logic, and structuring real-time web connections.',
          items: ['Node.js', 'Express', 'REST APIs', 'WebSocket (Socket.io)', 'Java']
        },
        {
          name: 'State & Data Management',
          desc: 'Managing client state, data persistence, and database queries.',
          items: ['Zustand', 'Axios', 'MongoDB', 'PostgreSQL']
        },
        {
          name: 'Cloud & Infrastructure',
          desc: 'Deploying servers, cloud object storage, and setting up automated deployment pipelines.',
          items: ['AWS S3', 'Vercel', 'Railway', 'GitHub Actions', 'LiveKit Server']
        },
        {
          name: 'Soft Skills',
          desc: 'Collaborative methods and analytical mindsets for team success.',
          items: [
            'Agile / Scrum',
            'Team Collaboration (Team Lead)',
            'Problem Solving',
            'UI/UX Thinking',
            'Research & Self-learning'
          ]
        },
        {
          name: 'Tools & Workflows',
          desc: 'Standard developer utilities for version control, collaboration, design, and API testing.',
          items: ['Git', 'GitHub', 'Figma', 'Postman', 'Antigravity', 'Jira']
        }
      ]
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
          id: 'chatpulse',
          title: 'ChatPulse - Real-Time Chat',
          tagline: 'Real-time Messaging & AI Support Platform',
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
          category: 'main',
          caseStudy: {
            problem:
              'Consolidating direct messaging, group chat, file attachments, and video conferencing into a single application to prevent information fragmentation.',
            solution:
              'Utilized Socket.IO for messaging; integrated LiveKit SFU (Selective Forwarding Unit) media server for video calls; used AWS S3 for file uploads via Multipart Upload; and integrated a RAG assistant using MongoDB Atlas Vector Search.',
            architecture: {
              nodes: [
                { id: '1', label: 'Client (React & Zustand)', type: 'frontend' },
                { id: '2', label: 'Express API Server', type: 'backend' },
                { id: '3', label: 'Socket.IO (Messages)', type: 'service' },
                { id: '4', label: 'LiveKit SFU (Video Media)', type: 'service' },
                { id: '5', label: 'AWS S3 (Object Storage)', type: 'storage' },
                { id: '6', label: 'MongoDB Atlas + Vector Search', type: 'database' }
              ],
              edges: [
                { from: '1', to: '2', label: 'HTTP REST Calls' },
                { from: '1', to: '3', label: 'WebSockets (Real-time Chat)' },
                { from: '1', to: '4', label: 'WebRTC (Video Streams)' },
                { from: '1', to: '5', label: 'S3 Multipart Upload' },
                { from: '2', to: '6', label: 'Query / Write Data' },
                { from: '2', to: '6', label: 'Vector Similarity (RAG)' }
              ]
            },
            challenges: [
              {
                title: 'Large File Upload Handling',
                desc: 'Uploading large files directly through the server blocks CPU threads, delaying message delivery.',
                resolution:
                  'Implemented AWS S3 Multipart Upload. The client splits files into 5MB chunks and uploads directly to AWS S3 using presigned URLs. Node.js only handles authentication and aborted upload cleanup.'
              },
              {
                title: 'Video Call Client Optimization',
                desc: 'Standard WebRTC Peer-to-Peer calls scale poorly and consume excessive client bandwidth as participants grow.',
                resolution:
                  'Migrated to LiveKit SFU (Selective Forwarding Unit) media server architecture. Each client publishes their stream once, and the SFU handles distribution. Tested and stabilized group calls with up to 7 concurrent participants.'
              }
            ],
            tradeOffs: [
              {
                title: 'Vector Database Selection',
                desc: 'Used MongoDB Atlas Vector Search instead of a dedicated external vector database to avoid data synchronization pipelines, simplify the tech stack, and stay resource-efficient.'
              }
            ],
            results:
              'Created private and group chat with group calling (tested up to 7 concurrent users). Traffic law RAG assistant achieves 92% retrieval accuracy on 37 digitized documents (2,368 chunks). Secured using an RBAC system with 2 roles and 12 permissions.'
          }
        },
        {
          id: 'tripbee',
          title: 'TripBee - Travel Booking Platform',
          tagline: 'Concurrent Travel Booking & Inventory Platform',
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
          category: 'main',
          caseStudy: {
            problem:
              'Preventing virtual bookings from locking tour availability indefinitely, and handling concurrent checkout requests on final remaining slots.',
            solution:
              'Applied Optimistic Locking on PostgreSQL databases to handle checkout race conditions, and created a scheduler cron that automatically releases unpaid tour slots after 3 minutes.',
            architecture: {
              nodes: [
                { id: '1', label: 'Client App (React & Zustand)', type: 'frontend' },
                { id: '2', label: 'Spring Boot API Server', type: 'backend' },
                { id: '3', label: 'PostgreSQL Database', type: 'database' },
                { id: '4', label: 'SePay Webhook Gateway', type: 'service' },
                { id: '5', label: 'GitHub Actions CI/CD', type: 'service' }
              ],
              edges: [
                { from: '1', to: '2', label: 'REST API Calls' },
                { from: '2', to: '3', label: 'Hibernate / JPA Locks' },
                { from: '4', to: '2', label: 'Transaction Webhook' },
                { from: '5', to: '2', label: 'Auto Deployment Build' }
              ]
            },
            challenges: [
              {
                title: 'Race Conditions on Slots',
                desc: 'Simultaneous checkout requests on the last remaining slots can lead to overbooking if database checks read outdated slot counts.',
                resolution:
                  'Applied `@Version` optimistic locking in JPA. The transaction that commits second fails automatically, raising an exception caught by the controller to show a friendly retry message, ensuring data consistency.'
              },
              {
                title: 'Deployment Flow Optimization',
                desc: 'Ensuring codebase updates are validated and deployed automatically and quickly.',
                resolution:
                  'Configured a GitHub Actions automation pipeline that runs tests and triggers deployment, successfully completing the build-to-deploy workflow in under 60 seconds.'
              }
            ],
            tradeOffs: [
              {
                title: 'Optimistic vs. Pessimistic Locking',
                desc: 'Chose Optimistic over Pessimistic locking. Optimistic locking avoids locking database rows prematurely when checkout forms are opened, maintaining higher throughput and only checking version validity at transaction commit.'
              }
            ],
            results:
              'Delivered a responsive tour search with 6 filters, server-side pagination, a 4-step booking workflow with real-time slot tracking, dynamic pricing, and 5 transaction states. Integrated VietQR payments with SePay webhooks to automatically release slots if unpaid after 3 minutes.'
          }
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
    mindset: {
      title: 'Software Engineering Mindset',
      subtitle: 'Core principles that guide my daily development process',
      items: [
        {
          title: 'Code Quality',
          desc: 'Writing highly readable, clean code. Designing modular components and clean directory structures for easy maintenance.'
        },
        {
          title: 'System Thinking',
          desc: 'Always sketching database relationships and data flows before coding. Maintaining clear boundaries between client and server responsibilities.'
        },
        {
          title: 'Team Collaboration',
          desc: 'Acting as Team Lead in academic projects, organizing task backlogs, reviewing PRs, and hosting coding sessions to unblock team members.'
        },
        {
          title: 'Problem Solving Method',
          desc: 'Debugging scientifically: checking network payloads, tracking render cycles in DevTools, and analyzing logs instead of guessing.'
        },
        {
          title: 'Development Workflow',
          desc: 'Adhering to structured workflows: using Git branches, coordinating tasks, and conducting team retrospectives.'
        }
      ]
    },
    roadmap: {
      title: 'Learning Roadmap',
      subtitle: 'Proactively exploring key technologies to enhance my engineering skills',
      currentlyLearningTitle: 'Current Focus Areas',
      nextGoalsTitle: 'Next Milestones',
      learning: [
        {
          name: 'Docker & Containerization',
          desc: 'Packaging full-stack services to guarantee identical runtimes from development to cloud hosting.',
          progress: 80,
          status: 'In Progress'
        },
        {
          name: 'Automated Testing (Jest / Playwright)',
          desc: 'Writing unit tests and integration assertions to secure codebase updates and feature logic.',
          progress: 60,
          status: 'Practicing'
        },
        {
          name: 'AWS Cloud Integration',
          desc: 'Exploring core services like S3, EC2, and RDS to familiarize myself with cloud infrastructure deployments.',
          progress: 50,
          status: 'Researching'
        }
      ]
    },
    aiAssistant: {
      title: 'AI Recruiter Assistant',
      subtitle: 'Ask real-time questions to an intelligent assistant trained directly on my CV.',
      description:
        'To save your time, I integrated an AI Assistant with deep knowledge about my skills and experience. Try clicking the suggestions below or type your own question!',
      tellMe: 'Tell me about Quy',
      explainChatPulse: 'Explain ChatPulse',
      explainTripBee: 'Explain TripBee',
      techStack: 'What technologies does Quy use?',
      whyHire: 'Why should I hire Quy?',
      placeholder: 'Ask anything about Quy...',
      welcome:
        "Hello! I am Quoc Quy's AI recruiter assistant. Feel free to ask me anything about his technical skills, work experience, projects, or why you should hire him!"
    },
    contact: {
      title: 'Ready to Collaborate?',
      subtitle: "Looking for a developer intern or have an interesting project? Let's connect.",
      avatar: '/avatar.png',
      email: 'quocquytnqq@gmail.com',
      phone: '0353 870 787',
      github: 'https://github.com/quoc-quy',
      linkedin: 'https://www.linkedin.com/in/quocquy/',
      location: 'Ho Chi Minh City, Vietnam',
      formTitle: 'Send a Message',
      formName: 'Your Name',
      formEmail: 'Contact Email',
      formMessage: 'Message',
      formSubmit: 'Submit Message',
      formSuccess: 'Thank you! Your message has been received successfully.'
    }
  }
}
