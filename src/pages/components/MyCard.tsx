import { Check } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export function MyCard() {
  return (
    <Card className="@container/card gap-0 border-0">
      <CardHeader>
        <div className="flex flex-col items-start">
          <CardDescription>Total Runs</CardDescription>
          <CardTitle className="mt-5 text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1542
          </CardTitle>
        </div>
        <CardAction>
          <Badge
            className="p-2 bg-green-400/20 text-green-500"
            variant="secondary"
          >
            <Check />
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-row items-stretch justify-between w-full">
          <span className="text-sm text-muted-foreground">Last 30 days</span>
          <span className="text-sm font-medium">2024-06-10 14:32</span>
        </div>
      </CardFooter>
    </Card>
  );
}
