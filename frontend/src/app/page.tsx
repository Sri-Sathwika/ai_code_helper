"use client";

import { useState } from "react";

import CodeEditor from "@/components/CodeEditor";
import AnalyzeButton from "@/components/AnalyzeButton";
import ResultsPanel from "@/components/ResultsPanel";
import Tabs from "@/components/Tabs";

import { AnalysisResult } from "@/types/analysis";
import { analyzeCode } from "@/lib/api";

const features = [
  "Syntax checking",
  "Bug detection",
  "Complexity analysis",
  "Code review",
  "Test case generation",
  "Optimization suggestions",
];

export default function Home() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("explanation");
  const [result, setResult] = useState<AnalysisResult | null>(null);

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
      setError("Failed to analyze code. Check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070A12] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_34%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.28),transparent_36%),linear-gradient(135deg,#070A12_0%,#0B1020_48%,#101827_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-6 py-6 lg:px-10">
        <header className="mb-7 flex flex-col justify-between gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-end">
          <div>


            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              AI Code Mentor
            </h1>

            <p className="mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
              Explain, debug, review, and optimize your code with a polished
              AI-powered workspace.
            </p>
          </div>

          {/* <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl">
            <div className="rounded-xl bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Mode
              </p>
              <p className="mt-1 font-semibold text-slate-100">Review</p>
            </div>

            <div className="rounded-xl bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Speed
              </p>
              <p className="mt-1 font-semibold text-slate-100">Fast</p>
            </div>

            <div className="rounded-xl bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Focus
              </p>
              <p className="mt-1 font-semibold text-slate-100">Quality</p>
            </div>
          </div> */}
        </header>

        <section className="grid flex-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex min-h-[680px] flex-col gap-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 shadow-2xl backdrop-blur-xl">
              <div>
                <p className="text-sm font-medium text-white">Code Editor</p>
                <p className="text-xs text-slate-500">
                  Paste your code below to begin analysis
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">
                  Secure
                </span>
                <span className="rounded-full bg-indigo-400/15 px-3 py-1 text-indigo-300">
                  AI Ready
                </span>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-[#111827] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-0 top-0 z-10 flex h-11 items-center gap-2 border-b border-white/10 bg-[#0F172A]/90 px-5 backdrop-blur">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs text-slate-500">
                  mentor-session.tsx
                </span>
              </div>

              <div className="h-full pt-11">
                <CodeEditor code={code} setCode={setCode} />
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <AnalyzeButton loading={loading} onClick={handleAnalyze} />

                {error && (
                  <p className="text-sm font-medium text-rose-300">{error}</p>
                )}
              </div>

              <p className="text-sm text-slate-500">
                Results appear instantly after analysis.
              </p>
            </div>
          </div>

          <aside className="min-h-[680px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111827]/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            {loading ? (
              <div className="relative flex h-full flex-col items-center justify-center overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_36%)]" />

                <div className="relative mb-8 flex h-36 w-36 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
                  <div className="absolute inset-3 rounded-full border border-indigo-300/20" />

                  <div className="absolute h-full w-full animate-spin rounded-full border-2 border-transparent border-t-cyan-300 border-r-fuchsia-400" />
                  <div className="absolute h-24 w-24 animate-pulse rounded-full bg-cyan-400/10 blur-xl" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#0F172A] shadow-[0_0_60px_rgba(34,211,238,0.28)]">
                    <span className="bg-gradient-to-r from-cyan-200 to-fuchsia-200 bg-clip-text text-3xl font-bold text-transparent">
                      AI
                    </span>
                  </div>
                </div>

                <h2 className="relative text-3xl font-semibold tracking-tight text-white">
                  Analyzing Your Code
                </h2>

                <p className="relative mt-3 max-w-md text-slate-400">
                  Reviewing structure, detecting issues, and preparing clean suggestions.
                </p>

                <div className="relative mt-10 w-full max-w-lg space-y-4">
                  {[
                    "Scanning syntax",
                    "Finding bugs",
                    "Checking complexity",
                    "Preparing improvements",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">
                          {item}
                        </span>
                        <span className="text-xs text-cyan-200">Running</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400 animate-[loadingBar_1.4s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : !result ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-3xl" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-300 via-indigo-400 to-fuchsia-400 p-[1px] shadow-[0_20px_70px_rgba(99,102,241,0.35)]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111827] text-3xl font-bold text-white">
                      AI
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  Ready to Analyze
                </h2>

                <p className="mt-3 max-w-md text-slate-400">
                  Paste your code into the editor and receive clear, structured guidance
                  in seconds.
                </p>

                <div className="mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      </span>
                      <span className="text-sm font-medium text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">Analysis Results</p>
                    <p className="text-xs text-slate-500">Review insights by category</p>
                  </div>
                </div>

                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="mt-5 flex-1 overflow-y-auto rounded-3xl border border-slate-700/70 bg-slate-950/35 p-4 shadow-inner">
                  <ResultsPanel result={result} activeTab={activeTab} />
                </div>
              </div>
            )}
          </aside>
        </section>
      </div>
    </main>
  );
}