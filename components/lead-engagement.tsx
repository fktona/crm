"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Linkedin,
  Edit,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  X,
  Plus,
} from "lucide-react";

interface LeadEngagementProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lead?: {
    name: string;
    title: string;
    company: string;
    avatar: string;
    description: string;
    dealValue: string;
    intent: "High" | "Medium" | "Low";
  };
}

export function LeadEngagement({
  open,
  onOpenChange,
  lead,
}: LeadEngagementProps) {
  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-blue-100 flex items-center justify-center">
              <Plus className="h-4 w-4 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold">Engage with {lead.name}</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={lead.avatar} />
              <AvatarFallback>{lead.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">{lead.name}</h2>
                <Linkedin className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-sm text-slate-500">
                {lead.title} • {lead.company}
              </p>
            </div>
          </div>

          <Tabs defaultValue="engage" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="engage" className="flex-1">
                Engage
              </TabsTrigger>
              <TabsTrigger value="search" className="flex-1">
                Search
              </TabsTrigger>
            </TabsList>
            <TabsContent value="engage" className="mt-4">
              <Card className="p-4 bg-blue-50/50 border-blue-100">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-blue-600">
                    {lead.name} may be interested in upgrading espresso machines
                    for their in-store coffee shops.
                  </p>
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="ghost" className="h-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="h-8 bg-blue-600 hover:bg-blue-700"
                    >
                      Approve and send
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Why I picked this lead</h3>
                  <ChevronRight className="h-4 w-4" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      1
                    </Badge>
                    <span>
                      {lead.name} is a key decision maker and was browsing
                      'espresso machines' on First Coffee's website.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      2
                    </Badge>
                    <span>
                      Multiple people at their company have reported 'slowness'
                      during service requests
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5 shrink-0">
                      3
                    </Badge>
                    <span>
                      {lead.company} currently see $200M in revenue from their
                      in-store coffee shops.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <Card className="p-4">
                  <div className="text-sm font-medium mb-2">Decision maker</div>
                  <div className="text-lg font-semibold text-green-600">
                    Yes
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-medium mb-2">
                    Potential deal value
                  </div>
                  <div className="text-lg font-semibold">{lead.dealValue}</div>
                </Card>
                <Card className="p-4">
                  <div className="text-sm font-medium mb-2">Intent</div>
                  <div className="text-lg font-semibold text-blue-600">
                    {lead.intent}
                  </div>
                </Card>
              </div>

              <div className="mt-6">
                <details className="group">
                  <summary className="flex items-center gap-2 font-medium cursor-pointer">
                    <span>About {lead.name.split(" ")[0]}</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">
                    {lead.description}
                  </p>
                </details>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex items-center justify-between p-4 border-t mt-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <span>D365 Sales</span>
            <span>+2</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <ThumbsDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-1 p-4 border-t">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-blue-600" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
