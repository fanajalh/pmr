export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#020617] transition-all duration-300">
      <div className="flex flex-col items-center space-y-6 max-w-xs text-center px-4">
        {/* Subtle, smooth loading ring */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-slate-100 dark:border-slate-800/80" />
          <div className="absolute inset-0 rounded-full border-2 border-t-sky-500 animate-spin" />
        </div>
        
        {/* Softer typography for status */}
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-sky-400">
            PMR Wira
          </p>
          <p className="text-[9px] font-medium tracking-[0.15em] text-slate-400 dark:text-white/40 uppercase">
            Memuat halaman...
          </p>
        </div>
      </div>
    </div>
  )
}
