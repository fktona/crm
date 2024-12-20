"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

interface Activity {
  id: string
  title: string
  company: string
  value: string
  daysToClose: number
  action: string
}

interface KeyActivitiesProps {
  activities: Activity[]
}

export function KeyActivities({ activities }: KeyActivitiesProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Other key activities</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{activity.title}</h3>
                <p className="text-sm text-slate-500">
                  {activity.company} • {activity.value} • {activity.daysToClose} days to close
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

