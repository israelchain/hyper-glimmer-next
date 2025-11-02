import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MarketHeader = () => {
  return (
    <div className="bg-card border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-foreground font-semibold text-lg p-0 hover:bg-transparent">
            <div className="w-6 h-6 bg-primary rounded-full mr-2" />
            ETH-USDC <ChevronDown className="ml-1 h-4 w-4" />
          </Button>

          <div className="flex items-center gap-8 text-sm">
            <div>
              <div className="text-muted-foreground text-xs">Mark</div>
              <div className="font-mono text-foreground">3 888,7</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Oracle</div>
              <div className="font-mono text-foreground">3 891,0</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">24h Change</div>
              <div className="font-mono text-success">+14,1 / +0,36%</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">24h Volume</div>
              <div className="font-mono text-foreground">$580 238 639,27</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Open Interest</div>
              <div className="font-mono text-foreground">$1 850 665 030,08</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Funding / Countdown</div>
              <div className="font-mono text-foreground">0,0004% 00:22:15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
