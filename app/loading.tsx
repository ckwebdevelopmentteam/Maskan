export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[var(--fg-primary)]/20 border-t-[var(--fg-primary)] rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-[0.25em] text-[var(--fg-primary)]/60 font-mono">
          Loading Maskan...
        </span>
      </div>
    </div>
  );
}
