"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUp, ChevronRight, Sparkles } from "lucide-react";
import { LeadEngagement } from "./lead-engagement";

interface Lead {
  name: string;
  title: string;
  company: string;
  avatar: string;
  description: string;
  dealValue: string;
  intent: "High" | "Medium" | "Low";
  action: "engage" | "prepare";
  actionText: string;
  details: string;
}

interface Activity {
  id: string;
  title: string;
  company: string;
  value: string;
  daysToClose: number;
  action: string;
}

interface ProgressCardProps {
  name: string;
  progress: number;
  target: string;
  leadCount: number;
  onCollapse?: () => void;
  topLeads: Lead[];
  activities: Activity[];
}

export function ProgressCard({
  name,
  progress,
  target,
  leadCount,
  onCollapse,
  topLeads,
  activities,
}: ProgressCardProps) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  return (
    <>
      <Card className="p-4 md:p-6 relative">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between flex-1">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <span className="text-white text-sm">👋</span>
            </div>
            <div className="space-y-1">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <h2 className="text-base md:text-lg">
                  Hi {name},
                  <span className="text-blue-600 font-semibold">
                    {progress}%
                  </span>
                  of goal achieved and rest can be achieved by focusing on
                  {leadCount} top leads.
                </h2>
                <Badge
                  variant="secondary"
                  className="text-xs self-start md:self-auto"
                >
                  1 month until Q4 ends
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Copilot has pinpointed {leadCount} key leads that show strong
                purchase intent and are actively engaging. These leads need your
                focus.
              </p>
            </div>
          </div>
          <div className="space-y-4 w-full md:max-w-[50%]">
            <div className="text-left md:text-right shrink-0 flex flex-col md:flex-row md:justify-end items-start md:items-center gap-2">
              <div className="text-sm text-muted-foreground">Target</div>
              <div className="font-semibold">{target}</div>
              <div className="text-sm text-muted-foreground">
                {progress}% of target achieved
              </div>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden flex">
              <div className="bg-green-500 w-[30%]" />
              <div className="bg-blue-500 w-[10%]" />
              <div className="bg-purple-500 w-[15%]" />
              <div className="bg-pink-500 w-[13%]" />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-xs md:text-sm">Won $15m</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-xs md:text-sm">Committed $5m</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-purple-500" />
                <span className="text-xs md:text-sm">Best case $7m</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-pink-500" />
                <span className="text-xs md:text-sm">Qualified $5m</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-slate-200" />
                <span className="text-xs md:text-sm">Leads $15m</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {topLeads.map((lead) => (
            <Card key={lead.name} className="p-4">
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={lead.avatar} />
                  <AvatarFallback>{lead.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-medium">{lead.name}</h3>
                      <p className="text-sm text-slate-500">
                        {lead.title} • {lead.company}
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 p-3 rounded-lg relative mt-2">
                    <div className="absolute top-0 right-0 w-8 aspect-square bg-white flex items-center justify-center rounded-bl-2xl">
                      <Sparkles className="h-6 w-6 fill-purple-700 stroke-purple-700" />
                    </div>
                    <Button
                      variant="ghost"
                      className="mt-2 px-0 w-full justify-between"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <span className="text-sm font-normal">
                        {lead.action === "engage"
                          ? "Engage with"
                          : "Prepare for meeting with"}
                        {lead.name}
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <p className="text-sm text-slate-500 mt-2">
                      {lead.details}
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    {lead.actionText}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-3">Other key activities</h3>
          <div className="space-y-2">
            {activities.map((activity) => (
              <Card key={activity.id} className="p-4">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                  <div>
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-slate-500">
                      {activity.company} • ${activity.value} •{" "}
                      {activity.daysToClose} days to close
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="self-end sm:self-center"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <button
          onClick={onCollapse}
          className="absolute top-2 right-2 md:top-4 md:right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      </Card>

      <LeadEngagement
        open={!!selectedLead}
        onOpenChange={(open) => !open && setSelectedLead(null)}
        lead={selectedLead ?? undefined}
      />
    </>
  );
}
