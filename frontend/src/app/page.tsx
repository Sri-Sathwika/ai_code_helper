"use client";

import { useState } from "react";

import CodeEditor from "@/components/CodeEditor";
import AnalyzeButton from "@/components/AnalyzeButton";
import ResultsPanel from "@/components/ResultsPanel";
import Tabs from "@/components/Tabs";

import { AnalysisResult } from "@/types/analysis";
import { analyzeCode } from "@/lib/api";

export default function Home() {
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [activeTab, setActiveTab] =
    useState("explanation");

  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!code.trim()) {
      setError("Please enter some code first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await analyzeCode(code);

      setResult(data);

      setActiveTab("explanation");
    } catch (err) {
      console.error(err);

      setError(
        "Failed to analyze code. Check backend connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0F111A] text-[#E2E8F0] relative overflow-hidden">

      {/* Glow Effects */}

      <div
        className="
        fixed
        top-[-200px]
        right-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#6366F1]
        opacity-20
        blur-[200px]
        pointer-events-none
      "
      />

      <div
        className="
        fixed
        bottom-[-200px]
        left-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#00F0FF]
        opacity-10
        blur-[200px]
        pointer-events-none
      "
      />

      <div className="relative z-10 p-8">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-5xl font-bold">
              AI Code Mentor
            </h1>

            <p className="text-zinc-400 mt-2">
              Explain, Debug, Review & Optimize Code
            </p>

          </div>

          

        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-[55%_45%] gap-6 h-[82vh]">

          {/* LEFT PANEL */}

          <div className="flex flex-col gap-4">

            <div
              className="
              flex-1
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-[#1A1D27]
              shadow-2xl
            "
            >
              <CodeEditor
                code={code}
                setCode={setCode}
              />
            </div>

            <div className="flex items-center gap-4">

              <AnalyzeButton
                loading={loading}
                onClick={handleAnalyze}
              />

              {error && (
                <span className="text-[#FF4C4C]">
                  {error}
                </span>
              )}

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div
            className="
            h-full
            rounded-3xl
            border
            border-white/10
            bg-[#1A1D27]
            p-6
            overflow-hidden
          "
          >

            {!result ? (
              <div className="h-full flex flex-col justify-center items-center text-center">

                <div
                  className="
                  w-24
                  h-24
                  rounded-full
                  bg-[#6366F1]/20
                  flex
                  items-center
                  justify-center
                  text-5xl
                  mb-6
                "
                >
                  🤖
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  Ready to Analyze
                </h2>

                <p className="text-zinc-400 max-w-md">

                  Paste your code into the editor and get:

                </p>

                <ul className="mt-6 text-left space-y-3">

                  <li>✓ Syntax Checking</li>

                  <li>✓ Bug Detection</li>

                  <li>✓ Complexity Analysis</li>

                  <li>✓ Code Review</li>

                  <li>✓ Test Case Generation</li>

                  <li>✓ Optimization Suggestions</li>

                </ul>

              </div>
            ) : (
              <div className="h-full flex flex-col">

                <Tabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />

                <div className="mt-4 flex-1 overflow-y-auto">

                  <ResultsPanel
                    result={result}
                    activeTab={activeTab}
                  />

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}