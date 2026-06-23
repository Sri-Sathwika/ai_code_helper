import { AnalysisResult } from "@/types/analysis";

export async function analyzeCode(
  code: string
): Promise<AnalysisResult> {
  const response = await fetch(
    "https://ai-code-helper-rl6w.onrender.com/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Analysis failed");
  }

  return response.json();
}