'use client'
import React, { useEffect, useRef } from 'react'

interface InteractiveGridProps {
  size?: number
  className?: string
}

interface LitCell {
  opacity: number
}

export default function InteractiveGrid({ size = 52, className = '' }: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Current lit cells: key is `${col}_${row}`
    const activeCells = new Map<string, LitCell>()

    // Continuous drift position (di chuyển chậm rãi từ góc dưới phải lên góc trên trái)
    let offsetX = 0
    let offsetY = 0
    let lastTime = performance.now()
    const driftSpeed = 8 // pixel per second (rất êm và mượt)

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    const loop = (currentTime: number) => {
      const dt = (currentTime - lastTime) / 1000
      lastTime = currentTime

      // Cập nhật vị trí trôi: từ dưới phải lên trên trái (dx < 0, dy < 0)
      offsetX -= driftSpeed * dt
      offsetY -= driftSpeed * dt

      ctx.clearRect(0, 0, width, height)

      const shiftX = ((offsetX % size) + size) % size
      const shiftY = ((offsetY % size) + size) % size

      // 1. Vẽ các đường lưới tĩnh mờ nhẹ nhàng
      ctx.save()
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)'
      ctx.lineWidth = 1
      ctx.beginPath()

      for (let x = shiftX - size; x <= width + size; x += size) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = shiftY - size; y <= height + size; y += size) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
      ctx.restore()

      // 2. Vẽ các ô vuông được hover: màu nhạt dịu mắt, không lóa, không đè chữ
      if (activeCells.size > 0) {
        ctx.save()

        activeCells.forEach((cell, key) => {
          const [colStr, rowStr] = key.split('_')
          const col = parseInt(colStr, 10)
          const row = parseInt(rowStr, 10)

          const x = col * size + shiftX
          const y = row * size + shiftY

          // Nền ô màu xanh Cyan rất nhạt và trong suốt (hòa vào nền tối như ảnh mẫu)
          ctx.fillStyle = `rgba(6, 182, 212, ${cell.opacity * 0.08})`
          ctx.fillRect(x + 1, y + 1, size - 2, size - 2)

          // Viền ô mảnh và mềm mại
          ctx.strokeStyle = `rgba(34, 211, 238, ${cell.opacity * 0.25})`
          ctx.lineWidth = 1
          ctx.strokeRect(x + 0.5, y + 0.5, size - 1, size - 1)

          // Decay mượt mà trong ~1.2 giây
          cell.opacity -= 0.014
          if (cell.opacity <= 0) {
            activeCells.delete(key)
          }
        })

        ctx.restore()
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    // Bắt sự kiện rê chuột: xác định ô đang hover dựa trên tọa độ và shift
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const clientX = e.clientX - rect.left
      const clientY = e.clientY - rect.top

      if (clientX < 0 || clientX > rect.width || clientY < 0 || clientY > rect.height) {
        return
      }

      const shiftX = ((offsetX % size) + size) % size
      const shiftY = ((offsetY % size) + size) % size

      const col = Math.floor((clientX - shiftX) / size)
      const row = Math.floor((clientY - shiftY) / size)
      const key = `${col}_${row}`

      activeCells.set(key, { opacity: 1 })
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animationFrameId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [size])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{
        maskImage: 'radial-gradient(ellipse 95% 85% at 50% 35%, black 45%, transparent 95%)',
        WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 35%, black 45%, transparent 95%)',
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  )
}
