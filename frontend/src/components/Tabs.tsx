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
  "fixed_code"
];

export default function Tabs({
  activeTab,
  setActiveTab,
}: TabsProps) {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg border ${
            activeTab === tab
              ? "bg-white text-black"
              : "bg-zinc-900 text-white"
          }`}
        >
          {tab.replace("_", " ")}
        </button>
      ))}
    </div>
  );
}