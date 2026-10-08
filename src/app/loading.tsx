export default function Loading() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Modern Console Loader */}
      <div className="relative z-10 max-w-md w-full p-6 rounded-2xl border border-cyan-500/30 bg-zinc-950/80 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.15)] space-y-4">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[11px] text-cyan-400 font-bold">quocquy.dev // booting</span>
        </div>

        {/* Loading Progress Bars */}
        <div className="space-y-3 pt-2">
          <div className="h-4 w-3/4 bg-cyan-500/15 rounded-md animate-pulse" />
          <div className="h-3 w-full bg-white/5 rounded-md animate-pulse delay-75" />
          <div className="h-3 w-5/6 bg-white/5 rounded-md animate-pulse delay-150" />
        </div>

        {/* Status Line */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span className="flex items-center gap-2 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Streaming SSR components...</span>
          </span>
          <span className="text-zinc-500">HTTP/2 200</span>
        </div>
      </div>
    </div>
  )
}
