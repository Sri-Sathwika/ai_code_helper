"use client";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  "explanation",
  "bugs",
  "complexity",
  "review",
  "suggestions",
  "test_cases",
  "security_review",
  "fixed_code",
  "summary",
];

const tabLabels: Record<string, string> = {
  explanation: "Explanation",
  bugs: "Bugs",
  complexity: "Complexity",
  review: "Review",
  suggestions: "Suggestions",
  test_cases: "Test Cases",
  security_review: "Security",
  fixed_code: "Fixed Code",
  summary: "Summary",
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="mb-5 rounded-2xl border border-slate-700/70 bg-slate-950/45 p-2">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                rounded-xl px-4 py-2.5 text-sm font-semibold
                transition-all duration-200
                ${
                  isActive
                    ? "bg-emerald-400 text-slate-950 shadow-[0_10px_28px_rgba(52,211,153,0.22)]"
                    : "border border-slate-700 bg-slate-900/70 text-slate-300 hover:border-emerald-400/50 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              {tabLabels[tab]}
            </button>
          );
        })}
      </div>
    </div>
  );
}