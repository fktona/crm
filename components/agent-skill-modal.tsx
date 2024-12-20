"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, PersonStanding, X } from "lucide-react";

interface AgentSkillModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AgentSkillModal({ open, onOpenChange }: AgentSkillModalProps) {
  const [email, setEmail] = useState("purchasing@contoso.com");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-xs">🤖</span>
            </div>
            Agent skill
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">
              Check if on-hand inventory will allow all sales orders to ship
              without delay
            </h3>
            <p className="text-sm text-slate-500">
              When{" "}
              <Badge
                className="text-blue-500 bg-blue-400/15 rounded-full"
                variant="outline"
              >
                any vendor
              </Badge>{" "}
              sends an email with changes to{" "}
              <Badge
                className="text-blue-500 bg-blue-400/15 rounded-full"
                variant="outline"
              >
                confirmed purchase orders
              </Badge>
              , check if the resulting{" "}
              <Badge
                className="text-blue-500 bg-blue-400/15 rounded-full"
                variant="outline"
              >
                on-hand inventory
              </Badge>{" "}
              will allow{" "}
              <Badge
                className="text-blue-500 bg-blue-400/15 rounded-full"
                variant="outline"
              >
                all sales orders
              </Badge>{" "}
              to{" "}
              <Badge
                className="text-blue-500 bg-blue-400/15 rounded-full"
                variant="outline"
              >
                ship without delay
              </Badge>
              . If so,{" "}
              <Badge
                className="text-blue-500 bg-blue-400/15 rounded-full"
                variant="outline"
              >
                update the purchase order
              </Badge>{" "}
              to reflect the change.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium">Enable email access</h3>
            </div>
            <p className="text-sm text-slate-500">
              Allow the agent to access email inboxes to read mail from known
              vendors
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-8"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-slate-600"
                  onClick={() => setEmail("")}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <Button className=" bg-blue-600 text-white">Allow access</Button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            disabled
            variant={"outline"}
            onClick={() => onOpenChange(false)}
          >
            Activate
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
