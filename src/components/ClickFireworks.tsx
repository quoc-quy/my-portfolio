'use client'
import React, { useEffect, useRef } from 'react'

interface SparkTrail {
  x: number
  y: number
  vx: number
  vy: number
  history: { x: number; y: number }[]
  color: string
}

interface FireworkBurst {
  sparks: SparkTrail[]
  alpha: number
  decay: number
}

const FIREWORK_COLORS = ['#38bdf8', '#00d2ff', '#67e8f9', '#ffffff', '#93c5fd']

export default function ClickFireworks() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let bursts: FireworkBurst[] = []
    let animationFrameId: number
    let isRunning = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(loop)
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      if (bursts.length === 0) {
        isRunning = false
        return
      }

      ctx.save()

      for (let bIndex = bursts.length - 1; bIndex >= 0; bIndex--) {
        const burst = bursts[bIndex]
        burst.alpha -= burst.decay

        if (burst.alpha <= 0) {
          bursts.splice(bIndex, 1)
          continue
        }

        ctx.globalAlpha = Math.max(0, burst.alpha)

        for (const spark of burst.sparks) {
          // Physics: arching gravity (fountain / palm tree effect như hình vẽ tay)
          spark.x += spark.vx
          spark.y += spark.vy
          spark.vy += 0.12 // gravity pulls downward
          spark.vx *= 0.97 // air drag

          spark.history.push({ x: spark.x, y: spark.y })
          if (spark.history.length > 8) {
            spark.history.shift()
          }

          // Draw curved spark trail
          if (spark.history.length > 1) {
            ctx.beginPath()
            ctx.moveTo(spark.history[0].x, spark.history[0].y)
            for (let i = 1; i < spark.history.length; i++) {
              ctx.lineTo(spark.history[i].x, spark.history[i].y)
            }
            ctx.strokeStyle = spark.color
            ctx.lineWidth = 1.8
            ctx.lineCap = 'round'
            ctx.shadowColor = spark.color
            ctx.shadowBlur = 6
            ctx.stroke()
          }
        }
      }

      ctx.restore()
      animationFrameId = requestAnimationFrame(loop)
    }

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Create 7-9 curved arching sparks (chuẩn theo hình vẽ tay pháo hoa hình vòm cành cọ)
      const count = 8
      const sparks: SparkTrail[] = []

      for (let i = 0; i < count; i++) {
        // Angles distributed upwards in a fan (-130 deg to -50 deg)
        const angle = -Math.PI / 2 + ((i - (count - 1) / 2) / ((count - 1) / 2)) * 0.95 + (Math.random() - 0.5) * 0.2
        const speed = Math.random() * 2.2 + 2.8
        const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)]

        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          history: [{ x, y }],
          color,
        })
      }

      bursts.push({
        sparks,
        alpha: 1,
        decay: 0.032, // Tồn tại khoảng ~0.55s gọn gàng, tinh tế
      })

      startLoop()
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousedown', handleClick, { passive: true })

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousedown', handleClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] select-none"
    />
  )
}
