"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BarChart2,
  Layout,
  Plus,
  RefreshCcw,
  Users,
  Trash,
  Table2,
  SlidersHorizontal,
  Columns,
  MoreHorizontal,
} from "lucide-react";

interface TopBarProps {
  view: "table" | "chart";
  onViewChange: (view: "table" | "chart") => void;
  onRefresh: () => void;
}

export function TopBar({ view, onViewChange, onRefresh }: TopBarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b bg-white gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">My open leads</h1>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              onClick={() => onViewChange(view === "table" ? "chart" : "table")}
            >
              {view === "table" ? (
                <>
                  <BarChart2 className="h-4 w-4" />{" "}
                  <span className="hidden 2xl:block">Chart</span>
                </>
              ) : (
                <>
                  <Table2 className="h-4 w-4" />{" "}
                  <span className="hidden 2xl:block">Table</span>
                </>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {view === "table" ? "Show chart" : "Show table"}
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Layout className="h-4 w-4" />
              <span className="hidden 2xl:block">Focused view</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Focused view</TooltipContent>
        </Tooltip>

        <Button variant="outline" size="sm" className="hidden md:flex">
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              // size="icon"
              onClick={onRefresh}
              className="hidden md:flex"
            >
              <RefreshCcw className="h-4 w-4" />{" "}
              <span className="hidden 2xl:block">Refresh</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Refresh</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Users className="h-4 w-4" />
              <span className="hidden 2xl:block">Collaborate</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Collaborate</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Trash className="h-4 w-4" />
              <span className="hidden 2xl:block">Delete</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete</TooltipContent>
        </Tooltip>

        <div className="hidden md:block h-4 w-px bg-slate-200" />

        <Button variant="outline" size="sm" className="hidden md:flex">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          <span className="hidden 2xl:block">Edit filters</span>
        </Button>

        <Button variant="outline" size="sm" className="hidden md:flex">
          <Columns className="h-4 w-4 mr-2" />
          Edit columns
        </Button>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>More options</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
