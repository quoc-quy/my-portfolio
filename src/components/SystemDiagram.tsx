'use client'
import React from 'react'

type DiagramProps = {
  projectId: string
  lang: string
}

export default function SystemDiagram({ projectId, lang }: DiagramProps) {
  const isVi = lang === 'vi'

  if (projectId === 'talentcore') {
    return (
      <div className="w-full bg-card border border-border rounded-2xl p-6 font-mono text-xs text-foreground/80 dark:text-zinc-300 relative overflow-hidden select-none shadow-sm">
        {/* Ambient dots overlay */}
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        
        <div className="relative z-10 flex items-center justify-between border-b border-border pb-3 mb-6">
          <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">
            {isVi ? 'Sơ Đồ Hệ Thống ATS & AI Matching Engine' : 'ATS Ecosystem & AI Matching Pipeline'}
          </span>
          <span className="text-[10px] text-cyan-600 dark:text-marketing-accent font-bold">TALENTCORE / ENTERPRISE ATS</span>
        </div>

        {/* Visual Diagram Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 py-4">
          
          {/* Client Block */}
          <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-secondary/45 dark:bg-zinc-900 border border-cyan-500/30 rounded-xl space-y-2 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
            <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-bold">DUAL PORTALS</span>
            <div className="font-extrabold text-foreground dark:text-white text-sm">Next.js 16 Web</div>
            <div className="text-[10px] text-muted-foreground">Admin ATS & Candidate</div>
            <div className="text-[9px] text-cyan-500 font-bold">TanStack Query + @dnd-kit</div>
          </div>

          {/* Connections Column 1 */}
          <div className="hidden md:col-span-2 md:flex flex-col justify-around h-36 items-center text-[10px] text-zinc-500 font-semibold">
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-cyan-600 dark:text-marketing-accent">REST / SSR</span>
              <span className="w-8 h-[1px] bg-cyan-500/50 block relative">
                <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-cyan-500/50" />
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-blue-600 dark:text-blue-400">WebSocket</span>
              <span className="w-8 h-[1px] bg-blue-500/50 block relative">
                <span className="absolute left-0 -top-[3px] border-y-[3px] border-y-transparent border-r-[4px] border-r-blue-500/50" />
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-emerald-500">Live Stage</span>
              <span className="w-8 h-[1px] bg-emerald-500/50 block relative">
                <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-emerald-500/50" />
              </span>
            </div>
          </div>

          {/* Server Gateway / Async Workers */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <div className="p-3.5 bg-secondary/45 dark:bg-zinc-900 border border-blue-500/30 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <span className="text-blue-600 dark:text-blue-400 text-[10px] font-bold">MODULAR CORE</span>
              <div className="font-extrabold text-foreground dark:text-white text-sm">NestJS API</div>
              <div className="text-[9px] text-muted-foreground">RBAC Guard & DTOs</div>
            </div>
            <div className="p-3.5 bg-secondary/45 dark:bg-zinc-900 border border-cyan-500/30 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-bold">ASYNC PROCESSOR</span>
              <div className="font-extrabold text-foreground dark:text-white text-sm">AI Worker & Cron</div>
              <div className="text-[9px] text-muted-foreground">Jitter Retries & Idempotency</div>
            </div>
          </div>

          {/* Connections Column 2 */}
          <div className="hidden md:col-span-1 md:flex flex-col items-center justify-center text-[10px] text-zinc-500">
            <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-700 block relative">
              <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-zinc-300 dark:border-l-zinc-700" />
            </span>
          </div>

          {/* Intelligence & Storage */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <div className="p-3 bg-secondary/20 dark:bg-zinc-950 border border-cyan-500/25 rounded-xl space-y-0.5 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-cyan-400 text-[9px] font-bold">AI INTELLIGENCE</span>
              <div className="font-bold text-foreground/90 dark:text-zinc-200 text-xs">Google Gemini AI</div>
              <div className="text-[9px] text-cyan-400">Rubric 6 Mức (0-100)</div>
            </div>
            <div className="p-3 bg-secondary/20 dark:bg-zinc-950 border border-blue-500/25 rounded-xl space-y-0.5 text-center shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <span className="text-blue-600 dark:text-blue-400 text-[9px] font-bold">STORAGE & SLA</span>
              <div className="font-bold text-foreground/90 dark:text-zinc-200 text-xs">MongoDB Aggregation</div>
              <div className="text-[9px] text-muted-foreground">Multi-stage Time-to-Hire</div>
            </div>
            <div className="p-2.5 bg-secondary/20 dark:bg-zinc-950 border border-border rounded-xl space-y-0.5 text-center">
              <span className="text-muted-foreground text-[9px] font-bold">NOTIFICATION</span>
              <div className="text-[10px] font-bold text-foreground/80">Socket.IO & Email SES</div>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="text-[10px] text-muted-foreground border-t border-border pt-3 mt-4 leading-relaxed font-sans">
          <strong className="text-cyan-600 dark:text-marketing-accent font-semibold">{isVi ? 'Luồng Sàng Lọc AI:' : 'AI Pipeline:'}</strong> {isVi ? 'Ứng viên nộp CV → NestJS lưu DB (201 Created) → Background Processor kích hoạt → Gemini đối soát Rubric 6 mức & Kiểm chứng bằng chứng CV → Tự động thăng hạng Stage & Socket.io báo HR.' : 'Candidate submits CV → NestJS persists (201 Created) → Background AI Worker triggers → Gemini evaluates 6-tier rubric with evidence validation → Auto stage promotion & live Socket.io alert to HR.'}
        </div>
      </div>
    )
  }

  if (projectId === 'chatpulse') {
    return (
      <div className="w-full bg-card border border-border rounded-2xl p-6 font-mono text-xs text-foreground/80 dark:text-zinc-300 relative overflow-hidden select-none shadow-sm">
        {/* Ambient dots overlay */}
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        
        <div className="relative z-10 flex items-center justify-between border-b border-border pb-3 mb-6">
          <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">
            {isVi ? 'Sơ Đồ Kiến Trúc Hệ Thống (SFU + RAG)' : 'System Architecture Diagram (SFU + RAG)'}
          </span>
          <span className="text-[10px] text-cyan-600 dark:text-marketing-accent font-bold">CHATPLAY / REAL-TIME</span>
        </div>

        {/* Visual Diagram Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 py-4">
          
          {/* Client Block */}
          <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-secondary/45 dark:bg-zinc-900 border border-blue-500/30 rounded-xl space-y-2 text-center shadow-[0_0_15px_rgba(59,130,246,0.05)]">
            <span className="text-blue-600 dark:text-blue-400 text-[10px] font-bold">CLIENT</span>
            <div className="font-extrabold text-foreground dark:text-white text-sm">Next.js Web</div>
            <div className="text-[10px] text-muted-foreground">Zustand State</div>
          </div>

          {/* Connections Column 1 */}
          <div className="hidden md:col-span-2 md:flex flex-col justify-around h-32 items-center text-[10px] text-zinc-500 font-semibold">
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-cyan-600 dark:text-marketing-accent">REST</span>
              <span className="w-8 h-[1px] bg-cyan-500/50 block relative">
                <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-cyan-500/50" />
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-blue-600 dark:text-blue-400">WS</span>
              <span className="w-8 h-[1px] bg-blue-500/50 block relative">
                <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-blue-500/50" />
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-cyan-600 dark:text-cyan-400">WebRTC</span>
              <span className="w-8 h-[1px] bg-cyan-500/50 block relative">
                <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-cyan-500/50" />
              </span>
            </div>
          </div>

          {/* Server Gateway / Broker */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <div className="p-4 bg-secondary/45 dark:bg-zinc-900 border border-cyan-500/30 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-marketing-accent text-[10px] font-bold">API GATEWAY</span>
              <div className="font-extrabold text-foreground dark:text-white text-sm">Node.js Express</div>
            </div>
            <div className="p-4 bg-secondary/45 dark:bg-zinc-900 border border-cyan-500/30 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-bold">MEDIA ENGINE</span>
              <div className="font-extrabold text-foreground dark:text-white text-sm">LiveKit SFU</div>
            </div>
          </div>

          {/* Connections Column 2 */}
          <div className="hidden md:col-span-1 md:flex flex-col items-center justify-center text-[10px] text-zinc-555">
            <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-700 block relative">
              <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-zinc-300 dark:border-l-zinc-700" />
            </span>
          </div>

          {/* Infrastructure & Database */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <div className="p-3 bg-secondary/20 dark:bg-zinc-950 border border-blue-500/25 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <span className="text-blue-600 dark:text-blue-400 text-[9px] font-bold">CLOUD STORAGE</span>
              <div className="font-bold text-foreground/90 dark:text-zinc-200">AWS S3</div>
              <div className="text-[9px] text-muted-foreground">{isVi ? 'Trực tiếp từ Client' : 'Direct from Client'}</div>
            </div>
            <div className="p-3 bg-secondary/20 dark:bg-zinc-950 border border-cyan-500/25 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-cyan-400 text-[9px] font-bold">DATABASE</span>
              <div className="font-bold text-foreground/90 dark:text-zinc-200">MongoDB Atlas</div>
              <div className="text-[9px] text-cyan-650 dark:text-cyan-500 font-bold">Vector Search</div>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="text-[10px] text-muted-foreground border-t border-border pt-3 mt-4 leading-relaxed font-sans">
          <strong className="text-cyan-600 dark:text-marketing-accent font-semibold">{isVi ? 'Luồng RAG:' : 'RAG Pipeline:'}</strong> Client Query → Node.js Gateway → MongoDB Atlas Vector Search → Match Context → OpenAI Embeddings → Stream Answer back to Client.
        </div>
      </div>
    )
  }

  if (projectId === 'tripbee') {
    return (
      <div className="w-full bg-card border border-border rounded-2xl p-6 font-mono text-xs text-foreground/80 dark:text-zinc-300 relative overflow-hidden select-none shadow-sm">
        {/* Ambient dots overlay */}
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />

        <div className="relative z-10 flex items-center justify-between border-b border-border pb-3 mb-6">
          <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">
            {isVi ? 'Sơ Đồ Giao Dịch & CI/CD Pipeline' : 'Booking Transaction & CI/CD Diagram'}
          </span>
          <span className="text-[10px] text-cyan-600 dark:text-marketing-accent font-bold">TRIPBEE / WEB APP</span>
        </div>

        {/* Visual Diagram Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10 py-4">
          
          {/* Client Web */}
          <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-secondary/45 dark:bg-zinc-900 border border-blue-500/30 rounded-xl space-y-2 text-center shadow-[0_0_15px_rgba(59,130,246,0.05)]">
            <span className="text-blue-600 dark:text-blue-400 text-[10px] font-bold">FRONTEND</span>
            <div className="font-extrabold text-foreground dark:text-white text-sm">React Web App</div>
            <div className="text-[10px] text-muted-foreground">Zustand Hooks</div>
          </div>

          {/* Arrow Column 1 */}
          <div className="hidden md:col-span-2 md:flex flex-col justify-around h-24 items-center text-[10px] text-zinc-555 font-semibold">
            <div className="w-full flex items-center justify-center gap-1">
              <span>REST</span>
              <span className="w-8 h-[1px] bg-zinc-300 dark:bg-zinc-700 block relative">
                <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-zinc-300 dark:border-l-zinc-700" />
              </span>
            </div>
            <div className="w-full flex items-center justify-center gap-1">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Webhook</span>
              <span className="w-8 h-[1px] bg-blue-500/50 block relative">
                <span className="absolute left-0 -top-[3px] border-y-[3px] border-y-transparent border-r-[4px] border-r-blue-500/50" />
              </span>
            </div>
          </div>

          {/* Backend API */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <div className="p-4 bg-secondary/45 dark:bg-zinc-900 border border-cyan-500/30 rounded-xl space-y-1 text-center relative shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-bold">API SERVICE</span>
              <div className="font-extrabold text-foreground dark:text-white text-sm">Spring Boot</div>
              <div className="text-[9px] text-blue-600 dark:text-blue-500 font-bold">{isVi ? 'Khóa Lạc Quan' : 'Optimistic Locks'}</div>
            </div>
          </div>

          {/* Arrow Column 2 */}
          <div className="hidden md:col-span-1 md:flex flex-col items-center justify-center text-[10px] text-zinc-555">
            <span className="w-6 h-[1px] bg-zinc-300 dark:bg-zinc-700 block relative">
              <span className="absolute right-0 -top-[3px] border-y-[3px] border-y-transparent border-l-[4px] border-l-zinc-300 dark:border-l-zinc-700" />
            </span>
          </div>

          {/* Infrastructure Databases / DevOps */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <div className="p-3 bg-secondary/20 dark:bg-zinc-950 border border-blue-500/25 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <span className="text-blue-600 dark:text-blue-400 text-[9px] font-bold">RELATIONAL DB</span>
              <div className="font-bold text-foreground/90 dark:text-zinc-200">PostgreSQL</div>
              <div className="text-[9px] text-muted-foreground">JPA Versioning</div>
            </div>
            <div className="p-3 bg-secondary/20 dark:bg-zinc-950 border border-cyan-500/25 rounded-xl space-y-1 text-center shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              <span className="text-cyan-600 dark:text-cyan-400 text-[9px] font-bold">PAYMENTS</span>
              <div className="font-bold text-foreground/90 dark:text-zinc-200">SePay / VietQR</div>
              <div className="text-[9px] text-muted-foreground">{isVi ? 'Thanh toán qua QR & Webhook' : 'VietQR & Webhook'}</div>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="text-[10px] text-muted-foreground border-t border-border pt-3 mt-4 leading-relaxed flex items-center justify-between font-sans font-medium">
          <span><strong>{isVi ? 'Khóa Chỗ Trống:' : 'Inventory Lock:'}</strong> Lock @Version checks → Unpaid released automatically after 3m.</span>
          <span className="text-cyan-600 dark:text-cyan-500 text-[9px] font-bold font-mono">CI/CD: GitHub Actions &lt; 60s</span>
        </div>
      </div>
    )
  }

  return null
}
