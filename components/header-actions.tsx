"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { BarChart2, Layout, Plus, RefreshCcw, Users, Trash, MoreVertical, Filter, Columns } from 'lucide-react'

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <BarChart2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Show chart</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Layout className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Focused view</TooltipContent>
      </Tooltip>

      <Button variant="outline" size="sm">
        <Plus className="h-4 w-4 mr-2" />
        New
      </Button>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Refresh</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Users className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Collaborate</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Trash className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Delete</TooltipContent>
      </Tooltip>

      <div className="h-4 w-px bg-slate-200" />

      <Button variant="outline" size="sm">
        <Filter className="h-4 w-4 mr-2" />
        Edit filters
      </Button>

      <Button variant="outline" size="sm">
        <Columns className="h-4 w-4 mr-2" />
        Edit columns
      </Button>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>More options</TooltipContent>
      </Tooltip>
    </div>
  )
}

