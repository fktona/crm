"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Sort, filter and search with Copilot"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      {/* <Button onClick={handleSearch} className="bg-gradient-to-r from-blue-500 to-purple-500">
        <Sparkles className="h-4 w-4 mr-2" />
        Ask Copilot
      </Button> */}
    </div>
  );
}
