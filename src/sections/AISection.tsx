'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useChat, UIMessage } from '@ai-sdk/react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { Bot, User, Sparkles, RefreshCw, Send, Terminal } from 'lucide-react'

// Inline formatter for Markdown symbols like **bold**, `code`, and [link](url)
const parseInlineFormatting = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = []
  let currentIndex = 0
  const regex = /(\*\*(.*?)\*\*|`(.*?)`|\[(.*?)\]\((.*?)\))/g
  let match
  let keyIdx = 0

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index

    if (matchIndex > currentIndex) {
      parts.push(text.substring(currentIndex, matchIndex))
    }

    if (match[2] !== undefined) {
      parts.push(
        <strong key={keyIdx++} className="font-bold text-violet-600 dark:text-violet-400">
          {match[2]}
        </strong>
      )
    } else if (match[3] !== undefined) {
      parts.push(
        <span
          key={keyIdx++}
          className="inline-flex items-center px-1.5 py-0.5 text-[11px] font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded border border-violet-500/20 font-mono mx-0.5"
        >
          {match[3]}
        </span>
      )
    } else if (match[4] !== undefined && match[5] !== undefined) {
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
          className="text-violet-600 dark:text-violet-400 hover:text-violet-500 font-semibold underline underline-offset-4 decoration-violet-500/30 hover:decoration-violet-500 transition-colors"
        >
          {linkText}
        </a>
      )
    }

    currentIndex = regex.lastIndex
  }

  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex))
  }

  return parts.length > 0 ? parts : text
}

// Line-by-line formatter for headings, lists, and paragraphs
const formatMessageContent = (text: string): React.ReactNode => {
  const lines = text.split('\n')
  return lines.map((line, index) => {
    if (!line.trim()) {
      return <div key={index} className="h-2" />
    }

    if (line.startsWith('###') || line.startsWith('##')) {
      const headingText = line.replace(/^#+\s*/, '')
      return (
        <h4
          key={index}
          className="text-sm font-bold text-violet-600 dark:text-violet-400 mt-4 mb-2 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-3 bg-violet-500 rounded" />
          {parseInlineFormatting(headingText)}
        </h4>
      )
    }

    if (line.trim().startsWith('-') || line.trim().startsWith('*') || line.trim().startsWith('•')) {
      const itemText = line.trim().replace(/^[-\*•]\s*/, '')
      return (
        <div key={index} className="flex items-start gap-2 ml-2 my-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
          <span className="text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-sans">
            {parseInlineFormatting(itemText)}
          </span>
        </div>
      )
    }

    if (/^\d+\.\s+/.test(line.trim())) {
      const match = line.trim().match(/^(\d+)\.\s+(.*)/)
      if (match) {
        const num = match[1]
        const itemText = match[2]
        return (
          <div key={index} className="flex items-start gap-2 ml-2 my-1.5">
            <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 mt-0.5">
              {num}.
            </span>
            <span className="text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-sans">
              {parseInlineFormatting(itemText)}
            </span>
          </div>
        )
      }
    }

    return (
      <p key={index} className="text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300 my-1 font-sans">
        {parseInlineFormatting(line)}
      </p>
    )
  })
}

export default function AISection({ data, lang }: { data: any; lang: string }) {
  const isVi = lang === 'vi'
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [input, setInput] = useState('')

  const { messages, sendMessage, status, setMessages } = useChat({
    messages: [
      {
        id: 'sec-welcome',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: data.welcome,
            state: 'done'
          }
        ]
      }
    ] as UIMessage[]
  })

  const isLoading = status === 'submitted' || status === 'streaming'

  const mockQuestions = [
    { label: data.tellMe, query: isVi ? 'Hãy giới thiệu về Trần Nguyễn Quốc Quý' : 'Tell me about Tran Nguyen Quoc Quy' },
    { label: data.explainChatPulse, query: isVi ? 'Giải thích dự án ChatPulse và kiến trúc kỹ thuật' : 'Explain ChatPulse and its system architecture' },
    { label: data.explainTripBee, query: isVi ? 'Giải thích dự án TripBee và các cơ chế khoá phòng' : 'Explain TripBee and its concurrent lock solution' },
    { label: data.techStack, query: isVi ? 'Quốc Quý sử dụng những công nghệ cốt lõi nào?' : 'What technologies does Quoc Quy specialize in?' },
    { label: data.whyHire, query: isVi ? 'Tại sao nên tuyển dụng Quốc Quý làm Intern?' : 'Why should I hire Quoc Quy as a developer intern?' }
  ]

  useEffect(() => {
    const container = chatContainerRef.current
    if (!container) return

    const lastMessage = messages[messages.length - 1]
    const isUserMessage = lastMessage?.role === 'user'

    // Check if user is scrolled near the bottom (within 150px)
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 150

    if (isUserMessage || isNearBottom) {
      container.scrollTop = container.scrollHeight
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
        id: 'sec-welcome',
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: data.welcome,
            state: 'done'
          }
        ]
      }
    ])
    setInput('')
  }

  return (
    <section id="ai-assistant" className="py-24 px-6 relative bg-background overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Explanations & Suggestions */}
        <div className="lg:col-span-5 text-left space-y-6">
          <div className="space-y-3">
            <MotionH2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3"
            >
              <Bot className="w-8 h-8 text-primary animate-pulse" />
              {data.title}
            </MotionH2>
            <MotionP
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-sm text-muted-foreground leading-relaxed font-sans"
            >
              {data.description}
            </MotionP>
          </div>

          {/* Quick Suggestion Prompts List */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
              {isVi ? 'ĐỀ XUẤT CÂU HỎI TRỰC QUAN' : 'SELECT A MOCK INQUIRY'}
            </span>
            <div className="flex flex-col gap-2 select-none font-sans">
              {mockQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(q.query)}
                  className="w-full text-left px-4 py-2.5 rounded-lg border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-white transition-all cursor-pointer flex items-center justify-between group shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]"
                >
                  <span className="truncate pr-4">{q.label}</span>
                  <span className="font-mono text-violet-600 group-hover:text-violet-500 text-[10px] transition-colors flex-shrink-0">
                    {isVi ? 'Hỏi trợ lý →' : 'Ask →'}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Interactive embedded sandbox window */}
        <div className="lg:col-span-7">
          <div className="w-full h-[480px] bg-card border border-border rounded-2xl flex flex-col overflow-hidden shadow-2xl relative glow-purple">
            <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

            {/* Window control bar (Gradient background matching previous version) */}
            <div className="h-10 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 border-b border-border flex items-center justify-between px-4 flex-shrink-0 select-none relative z-10 text-white shadow-md">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-white/80 flex items-center gap-1.5 font-bold">
                <Terminal size={10} />
                recruiter_agent.sh
              </span>
              <button
                onClick={handleResetChat}
                className="p-1 hover:bg-white/10 rounded transition-all cursor-pointer text-white/80 hover:text-white"
                title={isVi ? 'Đặt lại cuộc trò chuyện' : 'Reset thread'}
              >
                <RefreshCw size={12} />
              </button>
            </div>

            {/* Chat Messages scroll area */}
            <div 
              ref={chatContainerRef}
              className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 text-left flex flex-col scrollbar-thin bg-background/30 dark:bg-zinc-950/80 relative z-10"
            >
              {messages.map((msg) => {
                const isUser = msg.role === 'user'
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 relative z-10 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="p-1.5 bg-secondary dark:bg-zinc-900 text-violet-600 dark:text-violet-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-border dark:border-violet-500/15 shadow-xs">
                        <Bot size={13} />
                      </div>
                    )}

                    <div
                      className={`p-3.5 rounded-xl text-[13px] leading-relaxed max-w-[85%] border font-sans select-text ${
                        isUser
                          ? 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white border-transparent rounded-tr-none font-medium shadow-md'
                          : 'bg-card dark:bg-zinc-900 text-foreground/90 dark:text-zinc-300 border-border dark:border-white/5 shadow-xs'
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
                      <div className="p-1.5 bg-secondary dark:bg-zinc-900 text-zinc-550 dark:text-zinc-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-border shadow-xs">
                        <User size={13} />
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Typing indicator */}
              {status === 'submitted' && (
                <div className="flex items-start gap-3 justify-start relative z-10">
                  <div className="p-1.5 bg-secondary dark:bg-zinc-900 text-violet-600 dark:text-violet-400 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-border dark:border-violet-500/15 shadow-xs">
                    <Bot size={13} />
                  </div>
                  <div className="p-3.5 rounded-xl bg-card border border-border rounded-tl-none flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Form Submission */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-secondary dark:bg-zinc-900 border-t border-border flex items-center gap-2 flex-shrink-0 relative z-10"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={data.placeholder}
                className="flex-grow px-3 py-2.5 bg-background border border-border focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/10 rounded-lg text-xs focus:outline-none transition-all placeholder:text-zinc-500 dark:placeholder:text-zinc-650 text-foreground"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:opacity-95 rounded-lg cursor-pointer disabled:opacity-40 transition-all flex items-center justify-center flex-shrink-0 w-9 h-9"
              >
                <Send size={12} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
