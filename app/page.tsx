"use client";

import { AgentSkillModal } from "@/components/agent-skill-modal";
import { LeadsChart } from "@/components/leads-chart";
import { LeadsTable } from "@/components/leads-table";
import { ProgressCard } from "@/components/progress-card";
import { SearchBar } from "@/components/search-bar";
import { Sidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";
import { useState } from "react";
const mockTopLeads = [
  {
    name: "Jane Reyes",
    title: "COO",
    company: "Northwind Traders",
    avatar: "/placeholder.svg",
    dealValue: "$1M",
    intent: "High" as const,
    action: "engage" as const,
    actionText: "Expand business • High buying intent",
    details:
      "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    description:
      "Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee.",
  },
  {
    name: "Allan Munger",
    title: "Head of Real Estate Development",
    company: "Contoso Coffee",
    avatar: "/placeholder.svg",
    dealValue: "$750K",
    intent: "Medium" as const,
    action: "prepare" as const,
    actionText: "Upcoming meeting • Due today",
    details:
      "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
    description:
      "Allan leads real estate development initiatives at Contoso Coffee, focusing on strategic expansion and optimization of retail locations.",
  },
];

const mockActivities = [
  {
    id: "1",
    title: "Cafe A100 for Woodland Bank",
    company: "Woodland Bank",
    value: "180,000",
    daysToClose: 8,
    action: "Review draft and reply to Chris Nadio",
  },
  {
    id: "2",
    title: "Partnership opportunity for Fabrikam",
    company: "Fabrikam",
    value: "2,000,000",
    daysToClose: 15,
    action: "Prepare me for Fabrikam's key stakeholder meeting",
  },
];

export default function Home() {
  const [view, setView] = useState<"table" | "chart">("table");
  const [showAgentSkillModal, setShowAgentSkillModal] = useState(false);
  const [isProgressCardCollapsed, setIsProgressCardCollapsed] = useState(false);

  const handleRefresh = () => {
    // Implement refresh logic here
    console.log("Refreshing data...");
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search logic here
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar onAgentSkillClick={() => setShowAgentSkillModal(true)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar view={view} onViewChange={setView} onRefresh={handleRefresh} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {!isProgressCardCollapsed && (
            <ProgressCard
              name="Mona"
              progress={68}
              target="$45 million"
              leadCount={20}
              onCollapse={() => setIsProgressCardCollapsed(true)}
              topLeads={mockTopLeads}
              activities={mockActivities}
            />
          )}
          <div className="mt-8 space-y-4">
            <div className="w-full md:w-96">
              <SearchBar onSearch={handleSearch} />
            </div>
            {view === "table" ? <LeadsTable /> : <LeadsChart />}
          </div>
        </main>
      </div>
      <AgentSkillModal
        open={showAgentSkillModal}
        onOpenChange={setShowAgentSkillModal}
      />
    </div>
  );
}
