import { AnalysisResult } from "@/types/analysis";

export async function analyzeCode(
  code: string
): Promise<AnalysisResult> {
  const response = await fetch(
    "http://127.0.0.1:8000/analyze",
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