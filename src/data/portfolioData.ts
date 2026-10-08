export const portfolioData = {
  vi: {
    nav: [
      { id: 'about', label: 'Giới thiệu' },
      { id: 'experience', label: 'Kinh nghiệm' },
      { id: 'projects', label: 'Dự án' },
      { id: 'skills', label: 'Kỹ năng' },
      { id: 'contact', label: 'Liên hệ' }
    ],
    hero: {
      role: 'Fullstack Developer (Frontend Focus)',
      name1: 'Trần Nguyễn',
      name2: 'Quốc Quý',
      hook: 'Xây dựng ứng dụng web hiện đại với giao diện trực quan, hiệu năng tốt và trải nghiệm người dùng mượt mà.',
      summary:
        'Sinh viên năm cuối Kỹ thuật Phần mềm tại IUH, đã hoàn thành kỳ thực tập 3 tháng tại Automation Land với 3 sản phẩm production. Thành thạo React/Next.js ở frontend và NestJS/Spring Boot ở backend, có kinh nghiệm tích hợp AI và xây dựng hệ thống real-time (Socket.io, LiveKit).',
      cta1: 'Tải Xuống CV',
      cta2: 'Liên Hệ Ngay',
      viewCV: 'Xem CV',
      github: 'https://github.com/quoc-quy',
      linkedin: 'https://www.linkedin.com/in/quocquy/'
    },
    about: {
      title: 'Về Mình',
      description:
        'Mình là sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Đại học Công nghiệp TP.HCM. Trong quá trình thực tập, mình đã tham gia xây dựng 3 sản phẩm thực tế phục vụ người dùng — từ nền tảng bất động sản PropTech đến hệ thống chấm công doanh nghiệp. Mình đặc biệt quan tâm đến việc kết hợp AI vào quy trình nghiệp vụ và tối ưu trải nghiệm người dùng trên mọi thiết bị.',
      professionalSummary:
        'Đang tìm kiếm vị trí Fullstack Developer (Frontend-leaning) tại môi trường sản phẩm, nơi có thể đóng góp kinh nghiệm React/Next.js và NestJS vào các sản phẩm ảnh hưởng thực tế đến người dùng.',
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
    experience: {
      badge: 'KINH NGHIỆM THỰC CHIẾN',
      title: 'Kinh Nghiệm Làm Việc',
      subtitle:
        'Thực tập sinh Fullstack Developer tại Công ty Automation Land (07/2026 – 10/2026) — Tham gia xây dựng 3 sản phẩm thực tế từ PropTech đến hệ thống quản trị doanh nghiệp.',
      company: 'Automation Land',
      period: '07/2026 - 10/2026',
      role: 'Fullstack Developer',
      projects: [
        {
          id: 'vinhomes-hoc-mon',
          number: '01',
          name: 'Vinhomes Hóc Môn',
          category: 'PropTech & Sơ Đồ Quy Hoạch',
          role: 'Fullstack Developer',
          period: '07/2026 - 10/2026',
          tags: ['Next.js', 'NestJS', 'MongoDB', 'Kuula VR 360', 'Rate Limiting'],
          highlights: [
            {
              title: 'Lead Pipeline & Bảo Mật Dữ Liệu',
              desc: 'Thiết kế quy trình thu nạp lead từ Client đến Admin, tích hợp Rate Limiting chặn spam bot. Tự động gắn Campaign Attribution tracking, validate dữ liệu qua DTO và tối ưu chỉ mục MongoDB tăng tốc truy vấn.'
            },
            {
              title: 'SVG Vector Mapping & Sa Bàn 360°',
              desc: 'Phát triển sơ đồ quy hoạch phân lô tương tác trực tiếp bằng SVG vector mapping cho phép highlight phân khu thời gian thực và tích hợp sa bàn thực tế ảo 360° (Kuula VR) cùng Google Maps API.'
            }
          ],
          images: [
            {
              src: '/automation-land/vinhomes-hoc-mon/vinhomes-hoc-mon-hero.png',
              title: 'Giao diện chính'
            },
            {
              src: '/automation-land/vinhomes-landing-page/vinhomes-landing-sa-ban.png',
              title: 'Sa bàn ảo 360°'
            },
            {
              src: '/automation-land/vinhomes-landing-page/vinhomes-landing-hero.png',
              title: 'Banner phân khu'
            }
          ]
        },
        {
          id: 'cham-cong',
          number: '02',
          name: 'Hệ Thống Chấm Công',
          category: 'Hệ Thống Quản Trị Doanh Nghiệp',
          role: 'Fullstack Developer',
          period: '07/2026 - 10/2026',
          tags: [
            'React',
            'NestJS',
            'MongoDB',
            'TanStack Query',
            'Tailwind CSS',
            'Recharts',
            'Geofencing'
          ],
          highlights: [
            {
              title: 'Engine Geofencing & Redis Caching',
              desc: 'Phát triển Engine Chấm công Định vị (Geofencing), kiểm tra dải IP mạng nội bộ và Wifi BSSID kết hợp bộ nhớ đệm Redis, giảm 95% thời gian truy vấn dữ liệu địa điểm (từ ~200ms xuống <10ms mỗi lần chấm công).'
            },
            {
              title: 'Web Admin React 19 & Recharts Analytics',
              desc: 'Tối ưu giao diện Web Admin bằng React 19, TanStack Query v5, Tailwind CSS v4 và Recharts, đem lại trải nghiệm mượt mà với ô tìm kiếm lọc động và biểu đồ phân tích trực quan.'
            }
          ],
          images: [
            {
              src: '/automation-land/cham-cong/cham-cong-login.png',
              title: 'Màn hình đăng nhập'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-ql-cham-cong.png',
              title: 'Quản lý chấm công'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-thong-ke-1-nv.png',
              title: 'Thống kê nhân viên'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-ql-lich-lam-viec.png',
              title: 'Lịch làm việc'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-lich-lam-viec-ca-nhan.png',
              title: 'Lịch cá nhân'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-phong-ban.png',
              title: 'Phòng ban'
            }
          ]
        },
        {
          id: 'bat-dong-san-so-do',
          number: '03',
          name: 'Môi Giới Bất Động Sản Sổ Đỏ',
          category: 'Cổng Môi Giới BĐS & Ký Gửi',
          role: 'Fullstack Developer',
          period: '07/2026 - 10/2026',
          link: 'https://moigioibatdongsansodo.com/',
          tags: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Responsive UI'
          ],
          highlights: [
            {
              title: 'Trang Chủ Đa Tầng & Floating Overlap',
              desc: 'Thiết kế giao diện trang chủ với thanh tìm kiếm lọc bất động sản đa tầng và bố cục thẻ quỹ căn nổi bật (Floating Overlap Layout). Tích hợp thanh thông báo giao dịch thời gian thực (Announcement Ticker) và hệ thống FAQ tương tác mượt mà bằng Framer Motion.'
            },
            {
              title: 'Quy Trình Ký Gửi & Sticky Checklist',
              desc: 'Tái cấu trúc quy trình ký gửi bất động sản bằng Next.js 16, TypeScript và Tailwind CSS với kiểm tra dữ liệu thời gian thực và bước xem lại trước khi gửi. Khắc phục triệt để lỗi hiển thị SunEditor trên di động. Cải tiến timeline 5 bước kết hợp cột checklist hồ sơ dạng sticky giúp tối ưu tỷ lệ hoàn thành form.'
            }
          ],
          images: [
            {
              src: '/automation-land/so-do/so-do-hero.png',
              title: 'Trang chủ tìm kiếm'
            },
            {
              src: '/automation-land/so-do/so-do-ky-gui.png',
              title: 'Form ký gửi'
            },
            {
              src: '/automation-land/so-do/so-do-thi-chung-chi.png',
              title: 'Thi chứng chỉ BĐS'
            }
          ]
        }
      ]
    },
    skills: {
      title: 'Hệ Sinh Thái Kỹ Năng',
      subtitle: 'Phân loại chi tiết năng lực kỹ thuật và quy trình làm việc.',
      categories: [
        {
          name: 'Frontend',
          desc: 'Viết mã nguồn JavaScript, TypeScript sạch, thiết kế giao diện responsive và xây dựng UI component chuẩn hóa.',
          items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Shadcn UI'
          ]
        },
        {
          name: 'Backend & DB',
          desc: 'Xây dựng RESTful API bảo mật, kiến trúc backend module hóa và quản lý cơ sở dữ liệu quan hệ & NoSQL.',
          items: [
            'Node.js',
            'NestJS',
            'Java / Spring Boot',
            'PostgreSQL',
            'MongoDB',
            'Redis'
          ]
        },
        {
          name: 'State & Data',
          desc: 'Quản lý client state, xử lý asynchronous data fetching, validate dữ liệu form và quản lý luồng dữ liệu.',
          items: ['TanStack Query', 'React Hook Form', 'Zod', 'Redux', 'Zustand']
        },
        {
          name: 'Nền Tảng Cloud & Infrastructure',
          desc: 'Container hóa ứng dụng, tự động hóa pipeline CI/CD, lưu trữ đám mây và triển khai hệ thống real-time.',
          items: [
            'Docker',
            'AWS S3',
            'GitHub Actions (CI/CD)',
            'Socket.io',
            'LiveKit (WebRTC)',
            'Vercel',
            'Railway'
          ]
        },
        {
          name: 'Công Cụ',
          desc: 'Công cụ hỗ trợ quản lý mã nguồn version control, thiết kế UI/UX, thử nghiệm API và quản lý dự án.',
          items: ['Git', 'GitHub', 'Figma', 'Postman', 'Jira']
        },
        {
          name: 'AI Integration',
          desc: 'Tích hợp mô hình ngôn ngữ lớn (LLM), kỹ thuật RAG Vector Search, kết nối API AI và trợ lý lập trình.',
          items: [
            'RAG',
            'Google Gemini API',
            'OpenRouter',
            'AI-Assisted Development'
          ]
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
          id: 'talentcore',
          period: '07/2026 - Hiện tại',
          title: 'TalentCore - Hệ Thống Tuyển Dụng ATS Tích Hợp AI',
          tagline: 'Nền tảng Quản trị & Tuyển dụng Nhân tài Doanh nghiệp',
          desc: 'Hệ thống Quản lý Tuyển dụng (ATS) toàn diện kết nối nhà tuyển dụng và ứng viên. Tích hợp AI tự động bóc tách và đối soát CV qua Google Gemini, bảng Kanban kéo-thả điều phối quy trình tuyển dụng bằng @dnd-kit, Dashboard phân tích SLA & chỉ số Time-to-Hire qua MongoDB Aggregation Pipelines, cùng cổng thông tin nghề nghiệp cho ứng viên chuẩn SEO xây dựng trên Next.js 16.',
          stack: [
            'Next.js 16',
            'React 19',
            'TypeScript',
            'Tailwind CSS',
            'TanStack Query',
            '@dnd-kit',
            'NestJS',
            'MongoDB',
            'Google Gemini AI',
            'Socket.io'
          ],
          github: 'https://github.com/EricMai2112/TalentCore.git',
          demo: '',
          image: '/projects/talentcore/talentcore-dashboard.png',
          images: [
            {
              src: '/projects/talentcore/talentcore-dashboard.png',
              title: 'Dashboard Quản Trị ATS & Phân Tích SLA'
            },
            {
              src: '/projects/talentcore/talentcore-kanban.png',
              title: 'Bảng Kanban Tuyển Dụng Kéo Thả (@dnd-kit)'
            },
            {
              src: '/projects/talentcore/talentcore-career.png',
              title: 'Cổng Nghề Nghiệp Ứng Viên Chuẩn SEO'
            },
            {
              src: '/projects/talentcore/talentcore-tieu-chi.png',
              title: 'Bộ Tiêu Chí Chấm Điểm AI (Gemini Rubric)'
            },
            {
              src: '/projects/talentcore/talentcore-application.png',
              title: 'Giao Diện Nộp Đơn & Ứng Tuyển'
            },
            {
              src: '/projects/talentcore/talentcore-JD.png',
              title: 'Bản Mô Tả Công Việc (Job Description)'
            },
            {
              src: '/projects/talentcore/talentcore-calendar.png',
              title: 'Lịch Phỏng Vấn Tuyển Dụng'
            },
            {
              src: '/projects/talentcore/talentcore-calendar-candidate.png',
              title: 'Lịch Phỏng Vấn Của Ứng Viên'
            },
            {
              src: '/projects/talentcore/talentcore-offer.png',
              title: 'Quản Lý Thư Mời Nhận Việc (Offer Letter)'
            },
            {
              src: '/projects/talentcore/talentcore-email.png',
              title: 'Hệ Thống Email Tự Động Hóa'
            },
            {
              src: '/projects/talentcore/talentcore-profile.png',
              title: 'Hồ Sơ Năng Lực Ứng Viên'
            },
            {
              src: '/projects/talentcore/talentcore-login.png',
              title: 'Đăng Nhập Phân Quyền Đa Cổng'
            }
          ],
          category: 'main',
          caseStudy: {
            problem:
              'Quy trình sàng lọc hồ sơ thủ công tốn nhiều thời gian, dễ bị thiên vị cảm tính và gây tắc nghẽn thông tin giữa HR và ứng viên; đồng thời ban lãnh đạo thiếu số liệu thời gian thực để giám sát chỉ số SLA tuyển dụng và điểm nghẽn giữa các phòng ban.',
            solution:
              'Xây dựng nền tảng ATS hai cổng thông tin (Cổng Quản trị Admin & Cổng Nghề nghiệp Ứng viên). Tích hợp Google Gemini AI kết hợp bộ tiêu chí chấm điểm tất định 6 mức và cơ chế kiểm chứng bằng chứng trên CV; phát triển bảng Kanban kéo-thả với Optimistic Updates; và ứng dụng MongoDB Aggregation Pipelines đa tầng để giám sát SLA theo thời gian thực.',
            architecture: {
              nodes: [
                {
                  id: '1',
                  label: 'Cổng Admin & Ứng viên (Next.js 16 & TanStack Query)',
                  type: 'frontend'
                },
                { id: '2', label: 'NestJS Modular API Server', type: 'backend' },
                {
                  id: '3',
                  label: 'Background AI Processor & Cron',
                  type: 'service'
                },
                { id: '4', label: 'Google Gemini AI Service', type: 'service' },
                {
                  id: '5',
                  label: 'MongoDB (Mongoose + Aggregations)',
                  type: 'database'
                },
                {
                  id: '6',
                  label: 'Socket.IO (Thông báo & Sự kiện)',
                  type: 'service'
                },
                {
                  id: '7',
                  label: 'Cổng Email (Nodemailer / AWS SES)',
                  type: 'service'
                }
              ],
              edges: [
                { from: '1', to: '2', label: 'Gọi REST API / Fetch dữ liệu SSR' },
                {
                  from: '1',
                  to: '6',
                  label: 'WebSockets (Cập nhật Stage & Thông báo)'
                },
                { from: '2', to: '5', label: 'Đọc / Ghi dữ liệu tuyển dụng' },
                {
                  from: '2',
                  to: '3',
                  label: 'Chuyển tác vụ AI chạy nền (Non-blocking)'
                },
                { from: '3', to: '4', label: 'Chấm điểm Rubric & Đối soát CV' },
                {
                  from: '3',
                  to: '5',
                  label: 'Idempotent Upsert & Tự động thăng hạng Stage'
                },
                {
                  from: '2',
                  to: '7',
                  label: 'Gửi thư mời phỏng vấn & Thư nhận việc'
                }
              ]
            },
            challenges: [
              {
                title: 'Xử lý Hiện tượng Ảo giác của AI & Đánh giá Cảm tính',
                desc: 'Việc gọi LLM chấm điểm ứng viên trực tiếp thường dẫn đến tình trạng ảo giác AI (hallucination) — tạo thông tin sai lệch, thiếu nhất quán và không giải thích được cơ sở của điểm số.',
                resolution:
                  'Xây dựng thuật toán chấm điểm tất định dựa trên Rubric 6 mức (0–100) theo trọng số tiêu chí (weight), kết hợp thuật toán Kiểm chứng Bằng chứng (Evidence Verification). Hệ thống tự động đối soát chéo kỹ năng trích xuất với văn bản CV thô bóc tách từ pdf-parse/mammoth, tính toán điểm độ mạnh bằng chứng (evidenceStrengthScore) để đảm bảo kết quả minh bạch và chuẩn xác.'
              },
              {
                title: 'Tránh Nghẽn Luồng API khi Xử lý Tác vụ AI Nặng',
                desc: 'Mỗi lần phân tích toàn diện một CV qua Gemini mất từ 2–5 giây. Nếu gọi đồng bộ trực tiếp khi ứng viên nộp hồ sơ sẽ làm nghẽn luồng xử lý của Node.js và dễ gây lỗi timeout khi có nhiều lượt nộp cùng lúc.',
                resolution:
                  'Thiết kế bộ xử lý nền bất đồng bộ (AiMatchingProcessor) tích hợp cơ chế Exponential Backoff & Jitter retry. API nộp đơn phản hồi ngay lập tức (201 Created), trong khi tiến trình chấm điểm chạy ngầm, áp dụng Idempotent Upsert (findOneAndUpdate) và tự động đẩy ứng viên đạt yêu cầu sang vòng tiếp theo trong Pipeline tuyển dụng.'
              },
              {
                title: 'Tối ưu Trải nghiệm Kéo-Thả Kanban & Tải Modal Nặng',
                desc: 'Khi render hàng chục thẻ ứng viên qua các vòng phỏng vấn, giao diện dễ bị giật lag khung hình do bundle modal xem chi tiết ứng viên quá nặng và hiện tượng gọi lại mạng liên tục.',
                resolution:
                  'Ứng dụng @dnd-kit/core với custom pointer sensors và cơ chế Optimistic UI Updates để di chuyển thẻ tức thì. Đồng thời áp dụng Dynamic Code Splitting (next/dynamic với ssr: false) cho drawer chi tiết ứng viên, ngăn chặn việc tải bundle JS thừa ban đầu và duy trì tốc độ kéo thả mượt mà đạt chuẩn 60fps.'
              }
            ],
            tradeOffs: [
              {
                title:
                  'Tải trước dữ liệu trên Server (RSC) so với Client SPA thuần túy',
                desc: 'Lựa chọn kiến trúc React Server Components (RSC) gọi dữ liệu song song (Promise.allSettled) kết hợp Streaming SSR (loading.tsx) thay vì Client-side SPA thuần. Quyết định này tăng nhẹ gánh nặng xử lý ban đầu ở server nhưng triệt tiêu hoàn toàn network waterfall và mang lại thời gian hiển thị giao diện ban đầu (FCP) tức thì.'
              },
              {
                title: 'Kiến trúc Modular Monolith so với Microservices',
                desc: 'Lựa chọn mô hình Modular Monolith bằng NestJS thay vì chia nhỏ thành Microservices. Hướng tiếp cận này giúp loại bỏ độ trễ mạng giữa các service và tránh sự phức tạp của distributed transaction giữa ứng viên, tin tuyển dụng và lịch phỏng vấn, đồng thời vẫn đảm bảo tính module hóa sạch sẽ và dễ triển khai.'
              }
            ],
            results:
              'Hoàn thiện hệ sinh thái ATS doanh nghiệp gồm 2 cổng thông tin tương thích đa thiết bị. Tự động hóa quy trình sàng lọc CV với độ chính xác cao, loại bỏ hoàn toàn hiện tượng AI ảo giác, giữ độ trễ phản hồi API dưới 200ms. Tính toán thời gian thực các chỉ số SLA phòng ban và Time-to-Hire qua MongoDB Aggregations đa tầng. Cung cấp quy trình tuyển dụng Kanban kéo-thả linh hoạt qua 5 vòng động, phân quyền RBAC chặt chẽ (Admin, HR, Trưởng phòng ban, Phỏng vấn viên, Ứng viên) và tự động hóa gửi email.'
          }
        },
        {
          id: 'chatpulse',
          period: '01/2026 - 05/2026',
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
          image: '/projects/chatpulse/chatpulse.png',
          images: [
            {
              src: '/projects/chatpulse/chatpulse.png',
              title: 'Giao Diện Nhắn Tin Thời Gian Thực'
            },
            {
              src: '/projects/chatpulse/web-call.png',
              title: 'Gọi Video Nhóm (LiveKit SFU WebRTC)'
            },
            {
              src: '/projects/chatpulse/web-ai.png',
              title: 'Trợ Lý AI Tra Cứu Luật (MongoDB RAG)'
            },
            {
              src: '/projects/chatpulse/login-form.png',
              title: 'Đăng Nhập & Xác Thực Người Dùng'
            },
            {
              src: '/projects/chatpulse/mobile-chat.jpg',
              title: 'Giao Diện Chat Trên Điện Thoại'
            },
            {
              src: '/projects/chatpulse/mobile-call.jpg',
              title: 'Cuộc Gọi Video Trên Di Động'
            },
            {
              src: '/projects/chatpulse/mobile-profile.jpg',
              title: 'Trang Cá Nhân & Cài Đặt Di Động'
            }
          ],
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
          period: '10/2025 - 05/2026',
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
          image: '/projects/tripbee/tripbee.png',
          images: [
            {
              src: '/projects/tripbee/tripbee.png',
              title: 'Trang Chủ & Tìm Kiếm Tour Đa Bộ Lọc'
            },
            {
              src: '/projects/tripbee/tripbee-tour.jpg',
              title: 'Chi Tiết Đặt Chỗ & Khóa Lạc Quan (@Version)'
            },
            {
              src: '/projects/tripbee/tripbee-about.png',
              title: 'Trang Giới Thiệu & Dịch Vụ Tour'
            }
          ],
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
          desc: 'Trang thương mại trà thảo mộc responsive với Tailwind CSS, tối ưu tốc độ tải trang và hiệu ứng hover mượt mà.',
          stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/tea-station.git',
          demo: 'https://quoc-quy.github.io/tea-station/',
          image: '/tea_station.png',
          category: 'tailwind'
        },
        {
          title: 'Uppo-Modal Library',
          desc: 'Thư viện modal gọn nhẹ bằng Vanilla JavaScript, không phụ thuộc framework, tối ưu cho khả năng tái sử dụng và tích hợp linh hoạt.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Uppo-Modal.git',
          demo: 'https://quoc-quy.github.io/Uppo-Modal/',
          image: '/uppo-modal.png',
          category: 'js'
        },
        {
          title: 'Tabex Tab Library',
          desc: 'Thư viện quản lý tab nội dung bằng JavaScript thuần, viết theo hướng module với xử lý sự kiện tối ưu và chuyển đổi tab mượt mà.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Tabex.git',
          demo: 'https://quoc-quy.github.io/Tabex/',
          image: '/tabex.png',
          category: 'js'
        },
        {
          title: 'Todo-List App',
          desc: 'Ứng dụng quản lý công việc với CRUD hoàn chỉnh, quản lý vòng đời dữ liệu và đồng bộ offline qua localStorage.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Todo-List.git',
          demo: 'https://quoc-quy.github.io/Todo-List/',
          image: '/todo_list.png',
          category: 'js'
        },
        {
          title: 'Web Layout Mockup',
          desc: 'Giao diện web giới thiệu dịch vụ chuẩn pixel-perfect, áp dụng cấu trúc HTML5 ngữ nghĩa (semantic) và CSS3 có tổ chức.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-02.git',
          demo: 'https://quoc-quy.github.io/f8-project-02/',
          image: '/html-01.png',
          category: 'html-css'
        },
        {
          title: 'Studio Landing Page',
          desc: 'Landing page studio sáng tạo với hiệu ứng hover mượt mà và giao diện tương thích đa trình duyệt.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-03.git',
          demo: 'https://quoc-quy.github.io/f8-project-03/',
          image: '/html-02.png',
          category: 'html-css'
        },
        {
          title: 'SaaS Platform Landing',
          desc: 'Landing page sản phẩm SaaS với Flexbox và CSS Grid, xử lý co giãn màn hình phức tạp và responsive đa thiết bị.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-04.git',
          demo: 'https://quoc-quy.github.io/f8-project-04/',
          image: '/html-03.png',
          category: 'html-css'
        },
        {
          title: 'Custom Web Design',
          desc: 'Giao diện web độc lập với CSS tổ chức theo phương pháp BEM, dễ bảo trì và mở rộng quy mô.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-1.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-1/',
          image: '/html-04.png',
          category: 'html-css'
        },
        {
          title: 'Digital Agency Layout',
          desc: 'Giao diện doanh nghiệp kỹ thuật số hiện đại với hiệu ứng glassmorphism, gradient nổi bật và CSS tối ưu dung lượng.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-2.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-2/',
          image: '/html-05.png',
          category: 'html-css'
        },
        {
          title: 'Corporate Web Portal',
          desc: 'Layout doanh nghiệp phức tạp với sidebar responsive, lưới thông tin dạng dashboard và hiệu ứng tương tác hover.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-05.git',
          demo: 'https://quoc-quy.github.io/f8-project-05/',
          image: '/html-06.png',
          category: 'html-css'
        }
      ]
    },
    contact: {
      title: 'Cùng Xây Dựng Sản Phẩm Tiếp Theo.',
      subtitle:
        'Bạn đang tìm một developer nhiệt huyết hoặc có dự án thú vị? Hãy kết nối ngay.',
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
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      role: 'Fullstack Developer (Frontend Focus)',
      name1: 'Tran Nguyen',
      name2: 'Quoc Quy',
      hook: 'Building modern web applications with intuitive interfaces, strong performance, and seamless user experiences.',
      summary:
        'Final-year Software Engineering student at IUH who completed a 3-month internship at Automation Land, shipping 3 production products. Proficient in React/Next.js on the frontend and NestJS/Spring Boot on the backend, with hands-on experience in AI integration and real-time systems (Socket.io, LiveKit).',
      cta1: 'Download CV',
      cta2: 'Get In Touch',
      viewCV: 'View CV',
      github: 'https://github.com/quoc-quy',
      linkedin: 'https://www.linkedin.com/in/quocquy/'
    },
    about: {
      title: 'About Me',
      description:
        'I am a final-year Software Engineering student at the Industrial University of Ho Chi Minh City. During my internship, I contributed to 3 production products serving real users \u2014 from a PropTech real estate platform to an enterprise attendance management system. I am particularly passionate about integrating AI into business workflows and optimizing user experiences across all devices.',
      professionalSummary:
        'Seeking a Fullstack Developer (Frontend-leaning) position in a product-driven environment where I can contribute my React/Next.js and NestJS experience to products that make a real impact on users.',
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
    experience: {
      badge: 'WORK EXPERIENCE',
      title: 'Work Experience',
      subtitle:
        'Fullstack Developer Intern at Automation Land (07/2026 – 10/2026) — Contributing to 3 production products ranging from PropTech platforms to enterprise management systems.',
      company: 'Automation Land',
      period: '07/2026 - 10/2026',
      role: 'Fullstack Developer',
      projects: [
        {
          id: 'vinhomes-hoc-mon',
          number: '01',
          name: 'Vinhomes Hoc Mon',
          category: 'PropTech & Master Plan Mapping',
          role: 'Fullstack Developer',
          period: '07/2026 - 10/2026',
          tags: ['Next.js', 'NestJS', 'MongoDB', 'Kuula VR 360', 'Rate Limiting'],
          highlights: [
            {
              title: 'Lead Pipeline & Data Security',
              desc: 'Designed an end-to-end lead ingestion and management workflow from Client to Admin; integrated Rate Limiting against bot spam, automated Campaign Attribution tagging, sanitized input via DTOs, and optimized MongoDB index queries.'
            },
            {
              title: 'SVG Vector Mapping & 360° Virtual Tour',
              desc: 'Engineered an interactive master plan zoning map using SVG vector mapping allowing real-time subdivision highlighting, integrated with Kuula VR 360° virtual tours and Google Maps API.'
            }
          ],
          images: [
            {
              src: '/automation-land/vinhomes-hoc-mon/vinhomes-hoc-mon-hero.png',
              title: 'Main Portal View'
            },
            {
              src: '/automation-land/vinhomes-landing-page/vinhomes-landing-sa-ban.png',
              title: '360° Virtual Tour'
            },
            {
              src: '/automation-land/vinhomes-landing-page/vinhomes-landing-hero.png',
              title: 'Subdivision Showcase'
            }
          ]
        },
        {
          id: 'cham-cong',
          number: '02',
          name: 'Attendance System',
          category: 'Enterprise Internal Management',
          role: 'Fullstack Developer',
          period: '07/2026 - 10/2026',
          tags: [
            'React 19',
            'NestJS',
            'MongoDB',
            'TanStack Query v5',
            'Tailwind CSS v4',
            'Recharts',
            'Redis Cache',
            'Geofencing'
          ],
          highlights: [
            {
              title: 'Geofencing Engine & Redis Caching',
              desc: 'Developed a location-based attendance engine (Geofencing) utilizing intranet IP subnet validation and Wifi BSSID verification backed by Redis caching, decreasing location query latency by 95% (from ~200ms to <10ms per check-in).'
            },
            {
              title: 'Web Admin React 19 & Recharts Analytics',
              desc: 'Optimized Web Admin frontend using React 19, TanStack Query v5, Tailwind CSS v4, and Recharts, delivering a seamless user experience with dynamic filter search and interactive visual analytical charts.'
            }
          ],
          images: [
            {
              src: '/automation-land/cham-cong/cham-cong-login.png',
              title: 'Login Screen'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-ql-cham-cong.png',
              title: 'Attendance Log Table'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-thong-ke-1-nv.png',
              title: 'Employee Analytics'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-ql-lich-lam-viec.png',
              title: 'Schedule Management'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-lich-lam-viec-ca-nhan.png',
              title: 'Personal Roster'
            },
            {
              src: '/automation-land/cham-cong/cham-cong-phong-ban.png',
              title: 'Departments'
            }
          ]
        },
        {
          id: 'bat-dong-san-so-do',
          number: '03',
          name: 'So Do Real Estate Brokerage',
          category: 'Real Estate Brokerage Portal',
          role: 'Fullstack Developer',
          period: '07/2026 - 10/2026',
          link: 'https://moigioibatdongsansodo.com/',
          tags: [
            'Next.js 16',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Responsive UI'
          ],
          highlights: [
            {
              title: 'Modern Homepage & Floating Overlap',
              desc: 'Designed a modern homepage UI featuring multi-level property filtering and high-impact Floating Overlap property cards; integrated real-time transaction Announcement Tickers and an interactive FAQ accordion powered by Framer Motion.'
            },
            {
              title: 'Property Consignment & Sticky Checklist',
              desc: 'Restructured the property consignment workflow using Next.js 16, TypeScript, and Tailwind CSS with real-time client validation and a pre-submission review step. Resolved mobile view layout bugs in SunEditor. Enhanced a 5-step process timeline paired with a sticky document checklist column to boost form completion rates.'
            }
          ],
          images: [
            {
              src: '/automation-land/so-do/so-do-hero.png',
              title: 'Homepage Property Search'
            },
            {
              src: '/automation-land/so-do/so-do-ky-gui.png',
              title: 'Consignment Form'
            },
            {
              src: '/automation-land/so-do/so-do-thi-chung-chi.png',
              title: 'Certification Exam'
            }
          ]
        }
      ]
    },
    skills: {
      title: 'Skill Ecosystem',
      subtitle:
        'Technical capabilities organized by domains. Strictly no arbitrary percentage scales.',
      categories: [
        {
          name: 'Frontend',
          desc: 'Writing clean JavaScript and TypeScript, building responsive interfaces, and modular UI components.',
          items: [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Shadcn UI'
          ]
        },
        {
          name: 'Backend & DB',
          desc: 'Building secure RESTful APIs, modular backend architecture, and relational & NoSQL databases.',
          items: [
            'Node.js',
            'NestJS',
            'Java / Spring Boot',
            'PostgreSQL',
            'MongoDB',
            'Redis'
          ]
        },
        {
          name: 'State & Data',
          desc: 'Managing application state, asynchronous data fetching, form validation, and complex data flows.',
          items: ['TanStack Query', 'React Hook Form', 'Zod', 'Redux', 'Zustand']
        },
        {
          name: 'Cloud & Infrastructure',
          desc: 'Containerization, automated CI/CD pipelines, cloud object storage, and real-time streaming infrastructure.',
          items: [
            'Docker',
            'AWS S3',
            'GitHub Actions (CI/CD)',
            'Socket.io',
            'LiveKit (WebRTC)',
            'Vercel',
            'Railway'
          ]
        },
        {
          name: 'Developer Tools',
          desc: 'Standard tools for version control, UI design, API testing, and team project management.',
          items: ['Git', 'GitHub', 'Figma', 'Postman', 'Jira']
        },
        {
          name: 'AI Integration',
          desc: 'LLM integrations, RAG vector search, AI API routing, and AI-assisted development tools.',
          items: [
            'RAG',
            'Google Gemini API',
            'OpenRouter',
            'AI-Assisted Development'
          ]
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
          id: 'talentcore',
          period: '07/2026 - Present',
          title: 'TalentCore - AI-Powered Recruitment ATS',
          tagline: 'Enterprise Applicant Tracking & Talent Acquisition Ecosystem',
          desc: 'An enterprise Applicant Tracking System (ATS) connecting recruiters and candidates. Features automated resume parsing and matching via Google Gemini, an interactive drag-and-drop Kanban hiring pipeline powered by @dnd-kit, complex SLA & Time-to-Hire analytics with MongoDB Aggregation Pipelines, and an SEO-optimized candidate career portal built with Next.js 16.',
          stack: [
            'Next.js 16',
            'React 19',
            'TypeScript',
            'Tailwind CSS',
            'TanStack Query',
            '@dnd-kit',
            'NestJS',
            'MongoDB',
            'Google Gemini AI',
            'Socket.io'
          ],
          github: 'https://github.com/EricMai2112/TalentCore.git',
          demo: '',
          image: '/projects/talentcore/talentcore-dashboard.png',
          images: [
            {
              src: '/projects/talentcore/talentcore-dashboard.png',
              title: 'Admin ATS Workspace & SLA Dashboard'
            },
            {
              src: '/projects/talentcore/talentcore-kanban.png',
              title: 'Interactive Drag-and-Drop Kanban (@dnd-kit)'
            },
            {
              src: '/projects/talentcore/talentcore-career.png',
              title: 'SEO-Optimized Candidate Career Portal'
            },
            {
              src: '/projects/talentcore/talentcore-tieu-chi.png',
              title: 'AI Scoring Criteria (Gemini Rubric)'
            },
            {
              src: '/projects/talentcore/talentcore-application.png',
              title: 'Candidate Application Submission Form'
            },
            {
              src: '/projects/talentcore/talentcore-JD.png',
              title: 'Job Description & Requirement Specs'
            },
            {
              src: '/projects/talentcore/talentcore-calendar.png',
              title: 'Recruiter Interview Calendar Schedule'
            },
            {
              src: '/projects/talentcore/talentcore-calendar-candidate.png',
              title: 'Candidate Interview Invitation View'
            },
            {
              src: '/projects/talentcore/talentcore-offer.png',
              title: 'Job Offer Management & Approvals'
            },
            {
              src: '/projects/talentcore/talentcore-email.png',
              title: 'Automated Email Outreach Gateway'
            },
            {
              src: '/projects/talentcore/talentcore-profile.png',
              title: 'Candidate Profile & CV Verification'
            },
            {
              src: '/projects/talentcore/talentcore-login.png',
              title: 'Multi-Role RBAC Authentication'
            }
          ],
          category: 'main',
          caseStudy: {
            problem:
              'Manual resume screening is labor-intensive, vulnerable to subjective evaluation bias, and creates severe communication lag between recruiters and applicants, while HR leaders lack real-time visibility into hiring SLAs and departmental bottlenecks.',
            solution:
              'Engineered a dual-portal ATS platform (Admin Workspace & Candidate Career Portal). Integrated Google Gemini AI with a 6-tier deterministic scoring rubric and CV evidence verification; developed an interactive drag-and-drop Kanban pipeline with optimistic updates; and utilized multi-stage MongoDB Aggregation Pipelines for real-time SLA tracking.',
            architecture: {
              nodes: [
                {
                  id: '1',
                  label: 'Admin & Candidate Portals (Next.js 16 & TanStack Query)',
                  type: 'frontend'
                },
                { id: '2', label: 'NestJS Modular API Core', type: 'backend' },
                {
                  id: '3',
                  label: 'Background AI Processor & Cron',
                  type: 'service'
                },
                { id: '4', label: 'Google Gemini AI Service', type: 'service' },
                {
                  id: '5',
                  label: 'MongoDB (Mongoose + Aggregations)',
                  type: 'database'
                },
                {
                  id: '6',
                  label: 'Socket.IO (Live Notifications)',
                  type: 'service'
                },
                {
                  id: '7',
                  label: 'Email Gateway (Nodemailer / AWS SES)',
                  type: 'service'
                }
              ],
              edges: [
                { from: '1', to: '2', label: 'REST API / SSR Data Fetching' },
                {
                  from: '1',
                  to: '6',
                  label: 'WebSockets (Stage Transitions & Alerts)'
                },
                { from: '2', to: '5', label: 'Read / Write Application Data' },
                {
                  from: '2',
                  to: '3',
                  label: 'Offload Heavy AI Tasks (Non-blocking)'
                },
                { from: '3', to: '4', label: 'Rubric Matching & CV Verification' },
                {
                  from: '3',
                  to: '5',
                  label: 'Idempotent Upsert & Auto Stage Promotion'
                },
                { from: '2', to: '7', label: 'Interview Invites & Offer Letters' }
              ]
            },
            challenges: [
              {
                title: 'LLM Hallucinations & Subjective Candidate Scoring',
                desc: 'Directly querying generative LLMs for candidate scoring leads to grading inconsistencies, hallucinations, and unexplainable fit scores.',
                resolution:
                  'Constructed a 6-tier deterministic rubric (0–100) based on weighted criteria (weight) combined with an automated Evidence-Verification algorithm. The backend cross-checks extracted skills against raw CV text parsed via pdf-parse/mammoth, computing an evidenceStrengthScore to guarantee transparent, tamper-proof evaluations.'
              },
              {
                title: 'Blocking API Throughput on Heavy AI Processing',
                desc: 'Evaluating comprehensive CVs via Gemini takes 2–5 seconds per applicant, which would block Node.js HTTP throughput and trigger client request timeouts under burst submissions.',
                resolution:
                  'Architected an asynchronous background processor (AiMatchingProcessor) with exponential backoff & jitter retries. Submissions return instant 201 responses while evaluation runs asynchronously, applying idempotent upserts (findOneAndUpdate) and auto-promoting qualifying applications to subsequent pipeline stages.'
              },
              {
                title: 'Fluid Drag-and-Drop Kanban with Heavy Modal Payloads',
                desc: 'Rendering dozens of applicant cards across dynamic recruitment stages caused UI re-render stutters due to heavy candidate review drawer bundles and repeated server re-fetching.',
                resolution:
                  'Implemented @dnd-kit/core with custom pointer sensors and Optimistic UI updates to reflect card moves instantaneously. Dynamically code-split the heavy candidate review drawer (next/dynamic with ssr: false), preventing premature bundle download and maintaining responsive 60fps card drag interactions.'
              }
            ],
            tradeOffs: [
              {
                title: 'Server-Side Pre-fetching vs. Pure Client-Side SPA',
                desc: 'Adopted React Server Components (RSC) with parallel server pre-fetching (Promise.allSettled) and Streaming SSR (loading.tsx) instead of a purely client-side SPA. This trades slight initial server processing for zero network waterfalls and instant First Contentful Paint (FCP).'
              },
              {
                title: 'Modular Monolith vs. Microservices Architecture',
                desc: 'Chose a Modular Monolith in NestJS over microservices. This eliminated network hop overhead and distributed transaction complexity across candidates, jobs, and interviews while remaining cleanly decoupled and cloud-ready.'
              }
            ],
            results:
              'Delivered a full-fledged enterprise ATS with dual responsive portals. Automated candidate resume screening with zero LLM hallucination, keeping API response latency under 200ms. Computed real-time departmental SLA and Time-to-Hire metrics via multi-stage MongoDB aggregations. Provided seamless drag-and-drop hiring management with 5 default dynamic stages, RBAC authentication (Admin, HR, Dept Manager, Interviewer, Candidate), and email outreach automation.'
          }
        },
        {
          id: 'chatpulse',
          period: '01/2026 - 05/2026',
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
          image: '/projects/chatpulse/chatpulse.png',
          images: [
            {
              src: '/projects/chatpulse/chatpulse.png',
              title: 'Real-Time Messaging Interface'
            },
            {
              src: '/projects/chatpulse/web-call.png',
              title: 'Group Video Conferencing (LiveKit SFU WebRTC)'
            },
            {
              src: '/projects/chatpulse/web-ai.png',
              title: 'RAG Legal Assistant (MongoDB Atlas)'
            },
            {
              src: '/projects/chatpulse/login-form.png',
              title: 'Authentication & Session Portal'
            },
            {
              src: '/projects/chatpulse/mobile-chat.jpg',
              title: 'Responsive Mobile Chat View'
            },
            {
              src: '/projects/chatpulse/mobile-call.jpg',
              title: 'Mobile Video Calling Interface'
            },
            {
              src: '/projects/chatpulse/mobile-profile.jpg',
              title: 'Mobile User Profile & Settings'
            }
          ],
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
          period: '10/2025 - 05/2026',
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
          image: '/projects/tripbee/tripbee.png',
          images: [
            {
              src: '/projects/tripbee/tripbee.png',
              title: 'Home & Multi-filter Tour Search'
            },
            {
              src: '/projects/tripbee/tripbee-tour.jpg',
              title: 'Booking Flow & Optimistic Locking (@Version)'
            },
            {
              src: '/projects/tripbee/tripbee-about.png',
              title: 'Company Intro & Services Page'
            }
          ],
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
          desc: 'A responsive herbal tea e-commerce landing page with optimized loading performance, Tailwind CSS styling, and smooth hover micro-interactions.',
          stack: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/tea-station.git',
          demo: 'https://quoc-quy.github.io/tea-station/',
          image: '/tea_station.png',
          category: 'tailwind'
        },
        {
          title: 'Uppo-Modal Library',
          desc: 'A lightweight, framework-independent modal library built with vanilla JavaScript, optimized for reusability and seamless integration.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Uppo-Modal.git',
          demo: 'https://quoc-quy.github.io/Uppo-Modal/',
          image: '/uppo-modal.png',
          category: 'js'
        },
        {
          title: 'Tabex Tab Library',
          desc: 'A modular tab management library built with vanilla JavaScript, featuring efficient event delegation and smooth panel transitions.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Tabex.git',
          demo: 'https://quoc-quy.github.io/Tabex/',
          image: '/tabex.png',
          category: 'js'
        },
        {
          title: 'Todo-List App',
          desc: 'A clean task manager application with full CRUD operations, local state lifecycle management, and offline synchronization using localStorage.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/quoc-quy/Todo-List.git',
          demo: 'https://quoc-quy.github.io/Todo-List/',
          image: '/todo_list.png',
          category: 'js'
        },
        {
          title: 'Web Layout Mockup',
          desc: 'A pixel-perfect service-showcase web interface with semantic HTML5 structure and well-organized, maintainable CSS3 styling.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-02.git',
          demo: 'https://quoc-quy.github.io/f8-project-02/',
          image: '/html-01.png',
          category: 'html-css'
        },
        {
          title: 'Studio Landing Page',
          desc: 'A creative studio landing page with smooth hover transitions, optimized for cross-browser compatibility and responsiveness.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-03.git',
          demo: 'https://quoc-quy.github.io/f8-project-03/',
          image: '/html-02.png',
          category: 'html-css'
        },
        {
          title: 'SaaS Platform Landing',
          desc: 'A SaaS product landing page with advanced responsive layouts using Flexbox and CSS Grid for smooth multi-device viewport handling.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-04.git',
          demo: 'https://quoc-quy.github.io/f8-project-04/',
          image: '/html-03.png',
          category: 'html-css'
        },
        {
          title: 'Custom Web Design',
          desc: 'An independent landing page layout with CSS organized under the BEM methodology for modular scaling and long-term maintenance.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-1.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-1/',
          image: '/html-04.png',
          category: 'html-css'
        },
        {
          title: 'Digital Agency Layout',
          desc: 'A modern digital agency web layout with glassmorphism effects, vibrant gradients, and optimized CSS for fast load times.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-doc-lap-2.git',
          demo: 'https://quoc-quy.github.io/f8-project-doc-lap-2/',
          image: '/html-05.png',
          category: 'html-css'
        },
        {
          title: 'Corporate Web Portal',
          desc: 'A complex corporate web layout with a responsive sidebar, dashboard grid structure, and interactive hover feedback animations.',
          stack: ['HTML', 'CSS'],
          github: 'https://github.com/quoc-quy/f8-project-05.git',
          demo: 'https://quoc-quy.github.io/f8-project-05/',
          image: '/html-06.png',
          category: 'html-css'
        }
      ]
    },
    contact: {
      title: "Let's Build What's Next.",
      subtitle:
        "Looking for a motivated developer or have an interesting project? Let's connect.",
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
