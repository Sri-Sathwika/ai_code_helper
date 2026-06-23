import { AnalysisResult } from "@/types/analysis";
import ResultCard from "./ResultCard";

interface Props {
  result: AnalysisResult;
  activeTab: string;
}

export default function ResultsPanel({
  result,
  activeTab,
}: Props) {
  const content =
    result[
      activeTab as keyof AnalysisResult
    ];

  return (
    <ResultCard
      title={activeTab}
      content={content}
    />
  );
}