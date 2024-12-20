"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedinIcon, Target, DollarSign, TrendingUp } from 'lucide-react'

interface LeadCardProps {
  name: string
  title: string
  company: string
  avatar: string
  dealValue: string
  intent: "High" | "Medium" | "Low"
  description: string
}

export function LeadCard({ 
  name, 
  title, 
  company, 
  avatar, 
  dealValue, 
  intent,
  description 
}: LeadCardProps) {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <Card 
        className="p-4 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setShowDialog(true)}
      >
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-slate-500">{title} • {company}</p>
          </div>
        </div>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <LinkedinIcon className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-slate-500">{title} • {company}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Decision maker</span>
              </div>
              <span className="text-lg font-semibold text-green-600">Yes</span>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Potential value</span>
              </div>
              <span className="text-lg font-semibold">{dealValue}</span>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Intent</span>
              </div>
              <Badge 
                variant={
                  intent === "High" ? "default" : 
                  intent === "Medium" ? "secondary" : 
                  "outline"
                }
              >
                {intent}
              </Badge>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">About {name.split(" ")[0]}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

