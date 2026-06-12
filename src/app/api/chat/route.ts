import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { portfolioData } from '@/data/portfolioData'

// Initialize the OpenRouter client (compatible with OpenAI format)
const openrouter = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  headers: {
    'HTTP-Referer': 'https://quocquy-portfolio.vercel.app',
    'X-Title': 'Quoc Quy Portfolio Assistant'
  }
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!process.env.OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is missing from environment variables.')
      return new Response(
        JSON.stringify({
          error:
            'OPENROUTER_API_KEY is missing. Please restart your development server (npm run dev) to load the .env.local file.'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Dynamically retrieve context from live portfolioData
    const contextText = `
      Here is the structured data of Trần Nguyễn Quốc Quý's portfolio:
      
      VIETNAMESE PROFILE:
      - Name: ${portfolioData.vi.hero.name1} ${portfolioData.vi.hero.name2}
      - Role: ${portfolioData.vi.hero.role}
      - About: ${portfolioData.vi.about.description}
      - Goal: ${portfolioData.vi.about.professionalSummary}
      - Education: ${portfolioData.vi.about.education.map((e) => `${e.time}: ${e.title} at ${e.desc}`).join(', ')}
      - Skills (Frontend): ${portfolioData.vi.skills.hardSkills[0].desc}
      - Skills (Backend & APIs): ${portfolioData.vi.skills.hardSkills[1].desc}
      - Skills (State & Data): ${portfolioData.vi.skills.hardSkills[2].desc}
      - Skills (Cloud & Infrastructure): ${portfolioData.vi.skills.hardSkills[3].desc}
      - Soft Skills: ${portfolioData.vi.skills.softSkills.join(', ')}
      - Tools: ${portfolioData.vi.skills.tools.join(', ')}
      - Projects:
        ${portfolioData.vi.projects.items.map((p) => `- Title: ${p.title}\n  Description: ${p.desc}\n  Stack: ${p.stack.join(', ')}\n  GitHub: ${p.github}\n  Demo: ${p.demo}`).join('\n')}
      - Contact info: Email: ${portfolioData.vi.contact.email}, Phone: ${portfolioData.vi.contact.phone}, GitHub: ${portfolioData.vi.contact.github}

      ENGLISH PROFILE:
      - Name: ${portfolioData.en.hero.name1} ${portfolioData.en.hero.name2}
      - Role: ${portfolioData.en.hero.role}
      - About: ${portfolioData.en.about.description}
      - Goal: ${portfolioData.en.about.professionalSummary}
      - Education: ${portfolioData.en.about.education.map((e) => `${e.time}: ${e.title} at ${e.desc}`).join(', ')}
      - Skills (Frontend): ${portfolioData.en.skills.hardSkills[0].desc}
      - Skills (Backend & APIs): ${portfolioData.en.skills.hardSkills[1].desc}
      - Skills (State & Data): ${portfolioData.en.skills.hardSkills[2].desc}
      - Skills (Cloud & Infrastructure): ${portfolioData.en.skills.hardSkills[3].desc}
      - Soft Skills: ${portfolioData.en.skills.softSkills.join(', ')}
      - Tools: ${portfolioData.en.skills.tools.join(', ')}
      - Projects:
        ${portfolioData.en.projects.items.map((p) => `- Title: ${p.title}\n  Description: ${p.desc}\n  Stack: ${p.stack.join(', ')}\n  GitHub: ${p.github}\n  Demo: ${p.demo}`).join('\n')}
      - Contact info: Email: ${portfolioData.en.contact.email}, Phone: ${portfolioData.en.contact.phone}, GitHub: ${portfolioData.en.contact.github}
    `

    const systemPrompt = `
      You are Quoc Quy's Personal AI Assistant.
      Your purpose is to answer HR recruiters' questions about Quoc Quy politely, professionally, and helpfully.
      
      RULES:
      1. Answer in the same language as the user's query (either Vietnamese or English).
      2. Use the provided structured portfolio data of Quoc Quy to answer.
      3. If a question is not answerable by the portfolio data, politely say that you don't have that information and invite them to contact Quoc Quy directly via his email or phone.
      4. Avoid mentioning "as an AI assistant" or "based on the provided context" in your answers. Speak naturally as Quoc Quy's assistant.
      5. Keep answers concise, clear, and formatted nicely in Markdown.
      
      PORTFOLIO DATA:
      ${contextText}
    `

    // Convert UI messages (with 'parts') to CoreMessage format (with 'content') accepted by the AI SDK Core
    const coreMessages = messages.map((m: any) => {
      let content = ''
      if (m.parts && Array.isArray(m.parts)) {
        content = m.parts
          .filter((p: any) => p.type === 'text')
          .map((p: any) => p.text)
          .join('\n')
      } else if (typeof m.content === 'string') {
        content = m.content
      }
      return {
        role: m.role,
        content: content || ''
      }
    })

    // Connect to OpenRouter using the free Llama 3.3 70B model (explicitly call .chat)
    const response = await streamText({
      model: openrouter.chat('google/gemini-2.5-flash-lite'),
      system: systemPrompt,
      messages: coreMessages
    })

    return response.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
