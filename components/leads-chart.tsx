"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mar 10', value: 4000 },
  { name: 'Mar 13', value: 3000 },
  { name: 'Mar 17', value: 2000 },
  { name: 'Mar 19', value: 2780 },
  { name: 'Mar 21', value: 1890 },
  { name: 'Mar 23', value: 2390 },
  { name: 'Mar 25', value: 3490 },
]

export function LeadsChart() {
  return (
    <Card className="p-6">
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#2563eb" 
              strokeWidth={2}
              dot={{ fill: '#2563eb' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

