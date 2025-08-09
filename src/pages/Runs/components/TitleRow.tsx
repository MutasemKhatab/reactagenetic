import { Loader2Icon, Play, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";

export function TitleRow() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex items-start justify-between my-4">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold mb-2">Runs</h1>
        <p className="text-gray-600">
          View and manage your agent execution history
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2Icon className="animate-spin" />
          ) : (
            <RefreshCcw />
          )}
          Refresh
        </Button>
        <Button>
          <Play /> New Run
        </Button>
      </div>
    </div>
  );
}
