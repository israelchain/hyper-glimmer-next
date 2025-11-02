import { Button } from "@/components/ui/button";
import { Maximize2, Search, SlidersHorizontal } from "lucide-react";

export const ChartArea = () => {
  return (
    <div className="flex-1 bg-background border-r border-border flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {["5m", "1h", "D"].map((tf, idx) => (
              <Button
                key={tf}
                variant="ghost"
                size="sm"
                className={`h-7 text-xs ${
                  idx === 0 ? "text-foreground bg-muted" : "text-muted-foreground"
                }`}
              >
                {tf}
              </Button>
            ))}
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="h-7 text-xs text-muted-foreground">
            <SlidersHorizontal className="h-3 w-3 mr-1" />
            Indicators
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Search className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Maximize2 className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="flex-1 relative bg-background p-4">
        {/* Chart placeholder with grid */}
        <div className="w-full h-full relative">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-chart-grid"
                style={{ top: `${i * 10}%` }}
              />
            ))}
          </div>
          
          {/* Candlestick visualization placeholder */}
          <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-end justify-around px-4">
            {Array.from({ length: 50 }).map((_, i) => {
              const isGreen = Math.random() > 0.5;
              const height = Math.random() * 80 + 20;
              return (
                <div
                  key={i}
                  className={`w-1 rounded-sm ${
                    isGreen ? "bg-chart-green" : "bg-chart-red"
                  }`}
                  style={{ height: `${height}%`, opacity: 0.6 }}
                />
              );
            })}
          </div>

          <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm border border-border rounded px-3 py-2">
            <div className="text-xs font-mono space-y-1">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">O</span>
                <span className="text-foreground">3 882,3</span>
                <span className="text-muted-foreground">H</span>
                <span className="text-success">3 889,3</span>
                <span className="text-muted-foreground">L</span>
                <span className="text-destructive">3 882,3</span>
                <span className="text-muted-foreground">C</span>
                <span className="text-foreground">3 889,2</span>
              </div>
            </div>
          </div>

          <div className="absolute top-4 right-4 space-y-1">
            {[4200, 4150, 4100, 4050, 4000, 3950, 3900, 3850, 3800].map((price) => (
              <div key={price} className="text-xs font-mono text-muted-foreground text-right">
                {price.toLocaleString()}
              </div>
            ))}
          </div>

          {/* Current price indicator */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary px-2 py-1 rounded-l text-xs font-mono text-primary-foreground">
            3,889.2
          </div>
        </div>

        {/* Volume chart */}
        <div className="absolute bottom-0 left-0 right-0 h-20 border-t border-border bg-card/50">
          <div className="flex items-end justify-around h-full px-4 pb-2">
            {Array.from({ length: 50 }).map((_, i) => {
              const height = Math.random() * 70 + 10;
              return (
                <div
                  key={i}
                  className="w-1 bg-primary/30 rounded-t"
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
          <div className="absolute bottom-1 left-4 text-xs text-muted-foreground font-mono">
            Volume: 130.39
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);
