"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from 'lucide-react'

interface Lead {
  id: string
  name: string
  topic: string
  status: string
  createdOn: string
}

const mockLeads: Lead[] = [
  { id: "1", name: "Winford Asher", topic: "Cafe A100 for commercial use", status: "New", createdOn: "4/02/2024 12:00 PM" },
  { id: "2", name: "Josia Love", topic: "Upgrading service plan", status: "New", createdOn: "3/30/2024 7:45 AM" },
  { id: "3", name: "Harrison Curtis", topic: "Issue with throughput on EspressoMaster", status: "New", createdOn: "3/28/2024 3:30 PM" },
  { id: "4", name: "Jermaine Berrett", topic: "New roaster in distribution facility", status: "New", createdOn: "3/25/2024 11:05 AM" },
  { id: "5", name: "Gerald Stephens", topic: "Concerns on current machines", status: "New", createdOn: "3/23/2024 4:50 PM" },
]

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads)
  const [sortColumn, setSortColumn] = useState<keyof Lead | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (column: keyof Lead) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }

    const sortedLeads = [...leads].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    setLeads(sortedLeads)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px]">
            <Checkbox />
          </TableHead>
          <TableHead className="cursor-pointer" onClick={() => handleSort('name')}>
            Name {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
          </TableHead>
          <TableHead className="cursor-pointer" onClick={() => handleSort('topic')}>
            Topic {sortColumn === 'topic' && (sortDirection === 'asc' ? '▲' : '▼')}
          </TableHead>
          <TableHead className="cursor-pointer" onClick={() => handleSort('status')}>
            Status reason {sortColumn === 'status' && (sortDirection === 'asc' ? '▲' : '▼')}
          </TableHead>
          <TableHead className="cursor-pointer" onClick={() => handleSort('createdOn')}>
            Created on {sortColumn === 'createdOn' && (sortDirection === 'asc' ? '▲' : '▼')}
          </TableHead>
          <TableHead className="w-[40px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow key={lead.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{lead.name}</TableCell>
            <TableCell>{lead.topic}</TableCell>
            <TableCell>{lead.status}</TableCell>
            <TableCell>{lead.createdOn}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>Edit lead</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete lead</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

