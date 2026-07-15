interface Props {
  loading: boolean;
  onClick: () => void;
}

export default function AnalyzeButton({ loading, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="
        group relative inline-flex items-center justify-center gap-3
        overflow-hidden rounded-xl px-6 py-3
        text-sm font-semibold text-white
        bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500
        shadow-[0_12px_35px_rgba(99,102,241,0.35)]
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(99,102,241,0.5)]
        active:translate-y-0
        disabled:cursor-not-allowed disabled:opacity-80
        disabled:hover:translate-y-0
      "
    >
      <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {loading && (
        <span
          className="
            relative h-4 w-4 rounded-full
            border-2 border-white/30 border-t-white
            animate-spin
          "
        />
      )}

      <span className="relative">
        {loading ? "Analyzing Code..." : "Analyze Code"}
      </span>
    </button>
  );
}