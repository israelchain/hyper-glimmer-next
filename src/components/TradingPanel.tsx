import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const TradingPanel = () => {
  return (
    <div className="w-96 bg-card flex flex-col">
      <div className="flex items-center gap-4 px-4 py-3 border-b border-border">
        <div className="flex gap-1 bg-muted rounded p-1">
          {["Isolated", "10x", "One-Way"].map((mode, idx) => (
            <button
              key={mode}
              className={`px-3 py-1 text-xs rounded ${
                idx === 0
                  ? "bg-background text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="flex border-b border-border">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-foreground border-b-2 border-primary">
          Market
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
          Limit
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
          Pro <ChevronDown className="inline h-3 w-3 ml-1" />
        </button>
      </div>

      <div className="flex-1 p-4 space-y-4">
        <div>
          <label className="text-xs text-muted-foreground mb-2 block">0.1</label>
          <div className="flex items-center justify-between p-3 bg-muted rounded border border-border">
            <span className="text-sm text-foreground">USDC</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <div className="text-muted-foreground mb-1">Price</div>
            <div className="font-mono text-foreground">3 890,3</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Size (USDC)</div>
            <div className="font-mono text-foreground">35 022</div>
          </div>
          <div>
            <div className="text-muted-foreground mb-1">Total (USDC)</div>
            <div className="font-mono text-foreground">2 689 474</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
          >
            Buy / Long
          </Button>
          <Button
            variant="destructive"
            className="h-12 font-semibold shadow-lg shadow-destructive/20"
          >
            Sell / Short
          </Button>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Available to Trade</span>
            <span className="font-mono text-foreground">4,20</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current Position</span>
            <span className="font-mono text-foreground">0,0000 ETH</span>
          </div>
        </div>

        <div>
          <label className="text-xs text-muted-foreground mb-2 block">Size</label>
          <div className="flex items-center gap-2 p-3 bg-muted rounded border border-border">
            <span className="flex-1 text-sm text-foreground">USDC</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            className="w-full h-1 bg-border rounded appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>0</span>
            <span>%</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" className="rounded border-border" />
            Reduce Only
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input type="checkbox" className="rounded border-border" />
            Take Profit / Stop Loss
          </label>
        </div>

        <Button
          className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
        >
          Enable Trading
        </Button>

        <div className="space-y-2 text-xs pt-4 border-t border-border">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Liquidation Price</span>
            <span className="text-foreground">N/A</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Order Value</span>
            <span className="text-foreground">N/A</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Margin Required</span>
            <span className="text-foreground">N/A</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Slippage</span>
            <span className="text-foreground">Est: 0% / Max: 8,00%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fees</span>
            <span className="text-foreground font-mono">◆ 0,0432% / 0,0144%</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border space-y-2 text-xs">
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary">Docs</a>
          <a href="#" className="text-muted-foreground hover:text-primary">Support</a>
          <a href="#" className="text-muted-foreground hover:text-primary">Terms</a>
          <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success" />
          <span className="text-muted-foreground">Online</span>
        </div>
      </div>
    </div>
  );
};
