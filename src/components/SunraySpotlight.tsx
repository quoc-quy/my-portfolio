'use client'
import React, { useEffect, useRef } from 'react'

interface SunraySpotlightProps {
  color?: [number, number, number] // RGB normalized 0-1
  speed?: number
  spread?: number
  length?: number
  pulsating?: boolean
  className?: string
}

const VERT_SHADER = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAG_SHADER = `
precision highp float;
uniform float iTime;
uniform vec2  iResolution;
uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 0.6 + length(sourceToCoord) * 0.01) * 0.2;

  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float unit = max(iResolution.x, iResolution.y);
  float maxDistance  = unit * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);

  float fadeMax   = unit * fadeDistance;
  float fadeFalloff = clamp((fadeMax - distance) / fadeMax, 0.4, 1.0);

  float pulse = pulsating > 0.5 ? (0.82 + 0.18 * sin(iTime * speed * 1.5)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.0 * raysSpeed);
  vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 0.7 * raysSpeed);

  fragColor = rays1 * 0.55 + rays2 * 0.45;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  vec2 rayN = normalize(finalRayDir);
  float coordAlong = dot(coord - rayPos, rayN);
  float extent = iResolution.x * rayLength;
  float brightness = clamp(1.0 - coordAlong / extent, 0.0, 1.0);

  fragColor.x *= 0.2 + brightness * 0.8;
  fragColor.y *= 0.4 + brightness * 0.6;
  fragColor.z *= 0.6 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`

export default function SunraySpotlight({
  color = [0.15, 0.78, 1.0], // Cyan / Sky Blue chuẩn của dự án
  speed = 0.5,
  spread = 0.85,
  length = 2.0,
  pulsating = true,
  className = ''
}: SunraySpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true })
    if (!gl) return

    // Compile shader helper
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vert = createShader(gl.VERTEX_SHADER, VERT_SHADER)
    const frag = createShader(gl.FRAGMENT_SHADER, FRAG_SHADER)
    if (!vert || !frag) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    // Fullscreen quad triangle buffer
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = new Float32Array([-1, -1, 3, -1, -1, 3])
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const posAttr = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(posAttr)
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

    // Uniform locations
    const uTime = gl.getUniformLocation(program, 'iTime')
    const uResolution = gl.getUniformLocation(program, 'iResolution')
    const uRayPos = gl.getUniformLocation(program, 'rayPos')
    const uRayDir = gl.getUniformLocation(program, 'rayDir')
    const uRaysColor = gl.getUniformLocation(program, 'raysColor')
    const uRaysSpeed = gl.getUniformLocation(program, 'raysSpeed')
    const uLightSpread = gl.getUniformLocation(program, 'lightSpread')
    const uRayLength = gl.getUniformLocation(program, 'rayLength')
    const uPulsating = gl.getUniformLocation(program, 'pulsating')
    const uFadeDistance = gl.getUniformLocation(program, 'fadeDistance')
    const uSaturation = gl.getUniformLocation(program, 'saturation')
    const uMousePos = gl.getUniformLocation(program, 'mousePos')
    const uMouseInfluence = gl.getUniformLocation(program, 'mouseInfluence')
    const uNoiseAmount = gl.getUniformLocation(program, 'noiseAmount')
    const uDistortion = gl.getUniformLocation(program, 'distortion')

    let animationId: number
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const updateSize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    const startTime = performance.now()

    const render = (time: number) => {
      const elapsed = (time - startTime) * 0.001

      const w = width * dpr
      const h = height * dpr
      const outside = 0.15

      gl.uniform1f(uTime, elapsed)
      gl.uniform2f(uResolution, w, h)
      // Anchor at top-center, pointing downward
      gl.uniform2f(uRayPos, 0.5 * w, -outside * h)
      gl.uniform2f(uRayDir, 0.0, 1.0)
      gl.uniform3f(uRaysColor, color[0], color[1], color[2])
      gl.uniform1f(uRaysSpeed, speed)
      gl.uniform1f(uLightSpread, spread)
      gl.uniform1f(uRayLength, length)
      gl.uniform1f(uPulsating, pulsating ? 1.0 : 0.0)
      gl.uniform1f(uFadeDistance, 1.2)
      gl.uniform1f(uSaturation, 1.0)
      gl.uniform2f(uMousePos, 0.5, 0.5)
      gl.uniform1f(uMouseInfluence, 0.0)
      gl.uniform1f(uNoiseAmount, 0.0)
      gl.uniform1f(uDistortion, 0.06)

      gl.drawArrays(gl.TRIANGLES, 0, 3)

      animationId = requestAnimationFrame(render)
    }

    animationId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationId)
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(positionBuffer)
    }
  }, [color, speed, spread, length, pulsating])

  return (
    <div
      ref={containerRef}
      className={`absolute top-0 left-0 right-0 w-full h-[760px] pointer-events-none overflow-hidden z-0 select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full pointer-events-none"
      />
      {/* Soft gradient bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 pointer-events-none" />
    </div>
  )
}
