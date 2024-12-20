import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <FileQuestion className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
            <p className="text-slate-500">
              We couldn't find the page you're looking for. Please check the URL or go back.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/">Return home</Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go back
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

