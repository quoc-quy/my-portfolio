'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useChat, UIMessage } from '@ai-sdk/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Sparkles, RefreshCw, X, Send, Cpu } from 'lucide-react'

// Inline formatter for Markdown symbols like **bold**, `code`, and [link](url)
const parseInlineFormatting = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = []
  let currentIndex = 0
  const regex = /(\*\*(.*?)\*\*|`(.*?)`|\[(.*?)\]\((.*?)\))/g
  let match
  let keyIdx = 0

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index

    // Add plain text before match
    if (matchIndex > currentIndex) {
      parts.push(text.substring(currentIndex, matchIndex))
    }

    if (match[2] !== undefined) {
      // Bold text
      parts.push(
        <strong key={keyIdx++} className="font-bold text-violet-600 dark:text-violet-400">
          {match[2]}
        </strong>
      )
    } else if (match[3] !== undefined) {
      // Code / Stack tag
      parts.push(
        <span
          key={keyIdx++}
          className="inline-flex items-center px-2 py-0.5 text-[11px] font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-md border border-violet-500/20 font-mono mx-0.5"
        >
          {match[3]}
        </span>
      )
    } else if (match[4] !== undefined && match[5] !== undefined) {
      // Markdown link
      const linkText = match[4]
      const url = match[5]

      const isEmail = url.startsWith('mailto:') || (url.includes('@') && !url.startsWith('http'))
      const hrefValue = isEmail && !url.startsWith('mailto:') ? `mailto:${url}` : url

      parts.push(
        <a
          key={keyIdx++}
          href={hrefValue}
          target={isEmail ? '_self' : '_blank'}
          rel="noopener noreferrer"
          className="text-violet-600 dark:text-violet-400 hover:text-violet-500 font-semibold underline underline-offset-4 decoration-violet-500/40 hover:decoration-violet-500 transition-colors"
        >
          {linkText}
        </a>
      )
    }

    currentIndex = regex.lastIndex
  }

  // Add remaining plain text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex))
  }

  return parts.length > 0 ? parts : text
}

// Line-by-line formatter for headings, lists, and paragraphs
const formatMessageContent = (text: string): React.ReactNode => {
  const lines = text.split('\n')
  return lines.map((line, index) => {
    // Empty lines
    if (!line.trim()) {
      return <div key={index} className="h-2" />
    }

    // Headings
    if (line.startsWith('###') || line.startsWith('##')) {
      const headingText = line.replace(/^#+\s*/, '')
      return (
        <h4
          key={index}
          className="text-sm font-bold text-violet-600 dark:text-violet-400 mt-3 mb-1.5 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-3.5 bg-violet-600 dark:bg-violet-400 rounded-full" />
          {parseInlineFormatting(headingText)}
        </h4>
      )
    }

    // Bullet list items
    if (line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim().startsWith('•')) {
      const itemText = line.trim().replace(/^[-\*•]\s*/, '')
      return (
        <div key={index} className="flex items-start gap-2.5 ml-2.5 my-1">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
          <span className="text-[13.5px] leading-relaxed text-foreground/90">
            {parseInlineFormatting(itemText)}
          </span>
        </div>
      )
    }

    // Numbered list items
    if (/^\d+\.\s+/.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\.\s+(.*)/)
      if (match) {
        const num = match[1]
        const itemText = match[2]
        return (
          <div key={index} className="flex items-start gap-2.5 ml-2.5 my-1">
            <span className="text-xs font-bold text-violet-600 dark:text-violet-400 mt-0.5">
              {num}.
            </span>
            <span className="text-[13.5px] leading-relaxed text-foreground/90">
              {parseInlineFormatting(itemText)}
            </span>
          </div>
        )
      }
    }

    // Regular paragraphs
    return (
      <p key={index} className="text-[13.5px] leading-relaxed text-foreground/90 my-1">
        {parseInlineFormatting(line)}
      </p>
    )
  })
}

export default function Chatbot({ lang }: { lang: string }) {
  const isVi = lang === 'vi'
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [input, setInput] = useState('')

  const welcomeMessage = isVi
    ? 'Xin chào! Tôi là trợ lý ảo tuyển dụng của Trần Nguyễn Quốc Quý. Bạn có thể hỏi tôi về các kỹ năng kỹ thuật, kinh nghiệm, thông tin dự án hoặc cách thức liên hệ trực tiếp với Quý nhé!'
    : "Hello! I am Quoc Quy's AI recruiter assistant. Feel free to ask me anything about his technical skills, work experience, projects, or how to contact him directly!"

  const { messages, sendMessage, status, setMessages } = useChat({
    messages: [
      {
        id: 'welcome',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: welcomeMessage,
            state: 'done'
          }
        ]
      }
    ] as UIMessage[]
  })

  const isLoading = status === 'submitted' || status === 'streaming'

  const suggestions = isVi
    ? [
        { label: 'Kỹ năng chuyên môn', query: 'Kỹ năng chuyên môn của Quý gồm những gì?' },
        {
          label: 'Dự án ChatPulse',
          query: 'Hãy giới thiệu dự án ChatPulse và các công nghệ sử dụng'
        },
        { label: 'Cách liên hệ', query: 'Làm thế nào để liên hệ trực tiếp với Quý?' }
      ]
    : [
        { label: 'Technical Skills', query: "What are Quoc Quy's technical skills?" },
        { label: 'ChatPulse Project', query: 'Tell me about the ChatPulse project and its stack' },
        { label: 'Contact Details', query: 'How can I contact Quoc Quy directly?' }
      ]

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const handleSuggestionClick = (query: string) => {
    if (isLoading) return
    sendMessage({ text: query })
  }

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: welcomeMessage,
            state: 'done'
          }
        ]
      }
    ])
    setInput('')
  }

  return (
    <div className="font-sans">
      {/* Floating Chat Bubble Button Wrapper - Positioned Vertically Above the CV Button */}
      <div className="fixed bottom-22 right-6 md:bottom-[108px] md:right-8 z-40 font-sans flex items-center justify-end">
        {/* Floating Chat Bubble Button (Capsule on desktop, circular on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-auto sm:h-12 px-0 sm:px-5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full flex items-center justify-center sm:justify-start gap-0 sm:gap-2.5 shadow-2xl hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all cursor-pointer border border-white/20 group relative"
          title={isVi ? 'Trò chuyện với Trợ lý của Quý' : "Talk to Quy's Assistant"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center sm:justify-start gap-0 sm:gap-2"
              >
                <X size={18} />
                <span className="hidden sm:inline text-[11px] font-extrabold tracking-wider uppercase select-none">
                  {isVi ? 'Đóng' : 'Close'}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center sm:justify-start gap-0 sm:gap-2"
              >
                <Bot
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="hidden sm:inline text-[14px] font-extrabold tracking-wider select-none">
                  Quy&apos;s Bot
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification ping badge - aligned to outer button corner */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-50">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
            </span>
          )}
        </button>
      </div>

      {/* Conversation Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 45, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-4 left-4 right-4 sm:bottom-[176px] sm:right-8 sm:left-auto w-auto sm:w-[440px] md:w-[460px] lg:w-[480px] h-[80vh] max-h-[580px] sm:h-[75vh] sm:max-h-[640px] min-h-[400px] bg-background/95 dark:bg-slate-950/90 backdrop-blur-2xl border border-violet-500/25 dark:border-violet-500/20 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)] flex flex-col overflow-hidden z-50 transition-all duration-300"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-violet-600 via-indigo-600 to-primary text-white flex items-center justify-between shadow-lg flex-shrink-0 relative overflow-hidden select-none">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              <div className="flex items-center gap-3.5 relative z-10">
                <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center relative shadow-inner border border-white/10">
                  <Bot size={22} className="text-white animate-pulse" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-indigo-600 animate-pulse" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-base tracking-tight leading-tight">
                    {"Talk to Quy's Assistant"}
                  </span>
                  <span className="text-[10px] text-white/80 font-medium tracking-wider uppercase mt-1 flex items-center gap-1.5">
                    <Sparkles size={10} className="text-yellow-300 animate-bounce" />
                    {isVi ? 'Hoạt động 24/7' : 'Active 24/7'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 relative z-10">
                {/* Reset chat button */}
                <button
                  onClick={handleResetChat}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer text-white/80 hover:text-white hover:scale-105 active:scale-95"
                  title={isVi ? 'Đặt lại cuộc trò chuyện' : 'Reset conversation'}
                >
                  <RefreshCw size={16} />
                </button>
                {/* Close panel button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300 cursor-pointer text-white/80 hover:text-white hover:scale-105 active:scale-95"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Conversation Messages Box */}
            <div className="flex-grow p-4 sm:p-5 overflow-y-auto space-y-4 text-left flex flex-col scrollbar-thin relative bg-slate-50/40 dark:bg-slate-950/20">
              {/* Dot pattern background for tech theme */}
              <div className="absolute inset-0 bg-dots-pattern opacity-30 dark:opacity-20 pointer-events-none" />

              {messages.map((msg) => {
                const isUser = msg.role === 'user'
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 relative z-10 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="p-2 bg-secondary/80 text-primary dark:text-violet-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-border shadow-sm">
                        <Bot size={16} />
                      </div>
                    )}

                    <div
                      className={`p-4 rounded-2xl text-[14px] leading-relaxed max-w-[82%] select-text border transition-all ${
                        isUser
                          ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white border-violet-500/10 rounded-tr-none shadow-md'
                          : 'bg-card text-foreground border-border/80 rounded-tl-none shadow-sm'
                      }`}
                    >
                      {msg.parts.map((part, partIdx) => {
                        if (part.type === 'text') {
                          return isUser ? (
                            <span key={partIdx}>{part.text}</span>
                          ) : (
                            <div key={partIdx}>{formatMessageContent(part.text)}</div>
                          )
                        }
                        return null
                      })}
                    </div>

                    {isUser && (
                      <div className="p-2 bg-primary/10 text-primary dark:text-violet-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/15">
                        <User size={16} />
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Typing loading indicator */}
              {isLoading && (
                <div className="flex items-start gap-3 justify-start relative z-10">
                  <div className="p-2 bg-secondary/80 text-primary dark:text-violet-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-border shadow-sm">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/80 rounded-tl-none flex items-center gap-1.5 shadow-sm">
                    <span
                      className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 bg-violet-600 rounded-full animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="px-4 py-2.5 sm:px-5 sm:py-3 border-t border-border bg-card/40 flex-shrink-0 flex items-center gap-2.5 overflow-x-auto scrollbar-none whitespace-nowrap select-none relative z-10">
              <Sparkles size={14} className="text-violet-500 flex-shrink-0" />
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(s.query)}
                  className="text-xs px-3.5 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 dark:hover:bg-violet-500/15 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300 cursor-pointer flex-shrink-0 hover:scale-[1.02] shadow-sm font-medium"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Input Submission Bar */}
            <form
              onSubmit={handleSubmit}
              className="p-3 sm:p-4 border-t border-border bg-card flex items-center gap-2.5 flex-shrink-0 relative z-10"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={
                  isVi
                    ? 'Hỏi về kỹ năng, kinh nghiệm, dự án của Quý...'
                    : 'Ask about skills, experience, projects...'
                }
                className="flex-grow px-4 py-3 bg-secondary/50 hover:bg-secondary/70 focus:bg-background border border-border focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 rounded-2xl text-[13px] focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/75"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] rounded-2xl cursor-pointer disabled:opacity-40 disabled:hover:shadow-none transition-all duration-300 flex items-center justify-center flex-shrink-0 w-[44px] h-[44px]"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
