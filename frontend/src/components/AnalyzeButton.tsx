interface Props {
  loading: boolean;
  onClick: () => void;
}

export default function AnalyzeButton({
  loading,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="px-5 py-3 rounded-lg bg-white text-black"
    >
      {loading
        ? "Analyzing..."
        : "Analyze Code"}
    </button>
  );
}